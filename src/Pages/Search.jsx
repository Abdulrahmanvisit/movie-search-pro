import { useState } from "react";
import MovieCard from "../components/MovieCard";

const fakeMovies = [
  { id: 1, rating: "8.7", title: 'The Matrix', year: '1999', poster: 'https://placehold.co/300x445?text=The+Matrix' },
  { id: 2, rating: "8.5", title: 'Inception', year: '2010', poster: 'https://placehold.co/300x445?text=Inception' },
  { id: 3, rating: "8.4", title: 'Interstellar', year: '2014', poster: 'https://placehold.co/300x445?text=Interstellar' },
  { id: 4, rating: "4.5", title: 'The Dark Knight', year: '2008', poster: 'https://placehold.co/300x445?text=Dark+Knight' },
  { id: 5, rating: "7.5", title: 'Pulp Fiction', year: '1994', poster: 'https://placehold.co/300x445?text=Pulp+Fiction' },
  { id: 6,  rating: "8.0", title: 'Fight Club', year: '1999', poster: 'https://placehold.co/300x445?text=Fight+Club' },
]
function Search() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
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
          placeholder="Search for a movies..."
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={query.trim() === ""}
          className="bg-blue-700 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          search
        </button>
      </form>



      <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {fakeMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            poster={movie.poster}
            rating={movie.rating}
          />
        ))}
      </div>
    </section>
  );
}

export default Search;
