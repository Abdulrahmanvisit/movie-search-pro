import { useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";

function Search({ watchlist, addToWatchlist, removeFromWatchlist }) {
  const [query, setQuery] = useState("");
  const [searchUrl, setSearchUrl] = useState("");

  const { data, isLoading, error } = useFetch(searchUrl);

  const movies = data?.Search ?? [];

  const handleSearch = (e) => {
    e.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    const apikey = import.meta.env.VITE_OMDB_API_KEY;

    setSearchUrl(
      `https://www.omdbapi.com/?apikey=${apikey}&s=${encodeURIComponent(
        trimmedQuery
      )}`
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="sr-only">Search Movies</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex gap-3 mb-10">
        <label htmlFor="movie-search" className="sr-only">
          Search for a movie
        </label>

        <input
          id="movie-search"
          type="text"
          autoComplete="off"
          value={query}
          placeholder="Search for a movie..."
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 min-w-0 rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={query.trim() === ""}
          className={`rounded-lg px-6 py-3 font-semibold text-white transition duration-200 ease-in-out ${
            query.trim() === ""
              ? "bg-slate-300 text-slate-500 cursor-not-allowed hover:bg-slate-300"
              : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-800"
          }`}
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {isLoading && (
        <p className="py-10 text-center text-slate-500">
          Loading...
        </p>
      )}

      {/* Error State */}
      {error && (
        <p className="py-10 text-center text-red-500">
          {error}
        </p>
      )}

      {/* No Results */}
      {!isLoading && !error && data && movies.length === 0 && (
        <p className="py-10 text-center text-slate-500">
          No movies found.
        </p>
      )}

      {/* Movie Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4 sm:gap-6">
        {movies.map((movie) => {
          const isSaved = watchlist.some(
            (item) => item.imdbID === movie.imdbID
          );

          return (
            <Link
              key={movie.imdbID}
              to={`/movie/${movie.imdbID}`}
            >
              <MovieCard
                title={movie.Title}
                year={movie.Year}
                poster={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://placehold.co/300x445?text=No+Poster"
                }
                rating="N/A"
                isSaved={isSaved}
                onToggleWatchlist={() => {
                  if (isSaved) {
                    removeFromWatchlist(movie.imdbID);
                  } else {
                    addToWatchlist(movie);
                  }
                }}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Search;