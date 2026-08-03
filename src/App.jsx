import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layouts'

//lazy loaded components
const Home = lazy(() => import('./pages/Home'))
const Search =  lazy(() => import('./pages/Search'))
const MovieDetails = lazy(() => import('./pages/MovieDetails'))
const Watchlist = lazy(() => import('./pages/Watchlist'))
const About = lazy(() => import('./pages/About'))
const NotFound =  lazy(() => import('./pages/NotFound'))



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
       <Suspense fallback={<p className="text-center py-20 text-slate-500">Loading page...</p>}>
     <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="search"
          element={
            <Search
              watchlist={watchlist}
              addToWatchlist={addToWatchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          }
           />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route
          path="watchlist"
          element={
            <Watchlist
              watchlist={watchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          }
        />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
     </Suspense>
  )
}

export default App