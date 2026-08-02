import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true)
      setError('')

      try {
        const apikey = import.meta.env.VITE_OMDB_API_KEY
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${apikey}&i=${id}`
        )
        const data = await response.json()

        if (data.Response === 'True') {
          setMovie(data)
        } else {
          setError(data.Error)
        }
      } catch (err) {
        console.err(err)
        setError('Something went wrong. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovie()
  }, [id])

  if (isLoading) {
    return <p className="text-center py-10 text-slate-500">Loading...</p>
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">{error}</p>
  }

  if (!movie) {
    return null
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
        <Link to="/search" className="text-blue-600 hover:underline mb-6 inline-block">
  ← Back to Search
</Link>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/300x445?text=No+Poster'}
          alt={movie.Title}
          className="w-full md:w-72 rounded-lg shadow-md"
        />

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {movie.Title} <span className="text-slate-400 font-normal">({movie.Year})</span>
          </h1>
          <p className="mt-2 text-slate-600">
            ⭐ {movie.imdbRating} &nbsp;·&nbsp; {movie.Genre} &nbsp;·&nbsp; {movie.Runtime}
          </p>
          <p className="mt-6 text-slate-700 max-w-2xl">{movie.Plot}</p>

          <div className="mt-6 space-y-1 text-sm text-slate-600">
            <p><span className="font-semibold text-slate-900">Actors:</span> {movie.Actors}</p>
            <p><span className="font-semibold text-slate-900">Director:</span> {movie.Director}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieDetails