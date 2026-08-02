import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("")

  const handleSearch = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError("")
    setMovies([]);
    
    try {
      const apikey = import.meta.env.VITE_OMDB_API_KEY;
     const response = await fetch(
  `https://www.omdbapi.com/?apikey=${apikey}&s=${encodeURIComponent(query)}`
);
      const data = await response.json();

      if (data.Response === "True"){
        setMovies(data.Search)
      } else {
        setError(data.Error)
      }
    } catch (err) {
      console.error(err)
      setError("something went wrong. please try again.")
      
    } finally{
      setIsLoading(false)
    }
  };
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <form onSubmit={handleSearch} className="flex gap-3 mb-10">
          <label htmlFor="movie-search" className="sr-only">
          Search for a movie
        </label>

        <input
          id="movie-search"
          type="text"
          value={query}
          autoComplete = "off"
          placeholder="Search for a movies..."
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={query.trim() === ''}
          className="bg-blue-700 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          search
        </button>
      </form>

      {isLoading && (
        <p className="text-center text-slate-500">Loading...</p>

      )}

      {error && (
        <p className="text-center text-red-500">{error}</p>
      )}



    <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4 sm:gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/300x445?text=No+Poster'}

            rating="N/A"
          />
        ))}
      </div>
    </section>
  );
}

export default Search;
