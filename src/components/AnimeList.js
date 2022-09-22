import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

const AnimeList = () => {
  const { animes, loading, setAnimeInfo, watchlist, setWatchlist } =
    useGlobalContext()

  const addToWatchlist = (item) => {
    const newArray = [...watchlist, item]
    setWatchlist([...new Set(newArray)])
  }

  if (loading) {
    return <Loading />
  }
  if (animes.length < 1) {
    return (
      <h2 className='section-title'>No animes matched your search criteria</h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Animes</h2>
      <div className='animes-center'>
        {animes.map((item, index) => {
          return (
            <article className='anime' key={item.id}>
              <div className='img-container'>
                <img src={item.images.jpg.large_image_url} alt={item.title} />
              </div>
              <div className='anime-footer'>
                <h4>{item.title}</h4>
                <p>{item.rating}</p>
                <Link
                  to={`/anime/${item.id}`}
                  className='btn btn-primary btn-details'
                  onClick={() => setAnimeInfo(item)}
                >
                  details
                </Link>

                <button
                  className='btn btn-primary btn-details'
                  onClick={() => addToWatchlist(item)}
                >
                  Add to watchlist
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default AnimeList
