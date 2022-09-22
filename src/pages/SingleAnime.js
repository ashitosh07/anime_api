import React from 'react'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const SingleAnime = () => {
  const { animeInfo, loading } = useGlobalContext()
  if (loading) {
    return <Loading />
  }
  if (!animeInfo) {
    return <h3 className='section-title'>no animes to display</h3>
  } else {
    const { title, synopsis, images, episodes, aired, url } = animeInfo
    return (
      <section className='section anime-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h3 className='section-title'>{title}</h3>
        <div className='details'>
          <img src={images.jpg.large_image_url} alt={title}></img>

          <div className='details-info'>
            <p>
              <span className='details-data'>title :</span> {title}
            </p>
            <p>
              <span className='details-data'>episodes :</span> {episodes}
            </p>
            <p>
              <span className='details-data'>url :</span> {url}
            </p>
            <p>
              <span className='details-data'>aired_date :</span> {aired.string}
            </p>
            <p>
              <span className='details-data'>synopsis :</span>
              {synopsis}
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default SingleAnime
