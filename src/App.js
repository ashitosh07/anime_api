import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// // import pages
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'

import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import SingleAnime from './pages/SingleAnime'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='watchlist' element={<Watchlist />} />
        <Route path='anime/:id' element={<SingleAnime />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
