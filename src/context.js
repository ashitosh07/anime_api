import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const AppContext = React.createContext()

const getLocalStorage = () => {
  let watchlist = localStorage.getItem('watchlist')
  if (watchlist) {
    return JSON.parse(localStorage.getItem('watchlist'))
  } else {
    return []
  }
}

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [animeInfo, setAnimeInfo] = useState()
  const [searchTerm, setSearchTerm] = useState('naruto')
  const [animes, setAnimes] = useState([])
  const [watchlist, setWatchlist] = useState(getLocalStorage())

  React.useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
  }, [watchlist])

  const fecthAnimes = useCallback(async () => {
    setLoading(true)

    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${searchTerm.toLowerCase()}&limit=10`
    )
    const respdata = await response.json()

    if (respdata.data) {
      const newAnimes = respdata.data.map((item) => {
        const {
          images,
          title,
          rating,
          url,
          mal_id,
          synopsis,
          character,
          episodes,
          aired,
        } = item

        return {
          synopsis,
          character,
          episodes,
          aired: aired,
          url,
          id: mal_id,
          title: title,
          images: images,
          rating: rating,
        }
      })
      setAnimes(newAnimes)
    } else {
      setAnimes([])
    }
    setLoading(false)
  }, [searchTerm])

  useEffect(() => {
    fecthAnimes()
  }, [searchTerm, fecthAnimes])

  return (
    <AppContext.Provider
      value={{
        loading,
        animeInfo,
        setAnimeInfo,
        animes,
        watchlist,
        setWatchlist,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
