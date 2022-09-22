import React from 'react'
import AnimeList from '../components/AnimeList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm />
      <AnimeList />
    </main>
  )
}

export default Home
