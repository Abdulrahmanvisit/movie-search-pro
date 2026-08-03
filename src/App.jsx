import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import MovieDetails from './pages/MovieDetails'
import Watchlist from './pages/Watchlist'
import About from './pages/About'
import NotFound from './pages/NotFound'



function App() {
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('watchlist')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
  }, [watchlist])

  const addToWatchlist = (movie) => {
    setWatchlist((prev) => [...prev, movie])
  }

  const removeFromWatchlist = (imdbID) => {
    setWatchlist((prev) => prev.filter((movie) => movie.imdbID !== imdbID))
  }

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search"
          element={
            <Search
              watchlist={watchlist}
              addToWatchlist={addToWatchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          }
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route
          path="/watchlist"
          element={
            <Watchlist
              watchlist={watchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App