import { useState } from "react";

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
        -
      </form>

      <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center text-slate-500">
          Movie 1
        </div>
        <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center text-slate-500">
          Movie 2
        </div>
        <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center text-slate-500">
          Movie 3
        </div>
        <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center text-slate-500">
          Movie 4
        </div>
        <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center text-slate-500">
          Movie 5
        </div>
        <div className="bg-slate-100 rounded-lg h-64  flex items-center justify-center text-slate-500">
          Movie 6
        </div>
        <div className="bg-slate-100 rounded-lg h-64  flex items-center justify-center text-slate-500">
          Movie 7
        </div>
        <div className="bg-slate-100 rounded-lg h-64  flex items-center justify-center text-slate-500">
          Movie 8
        </div>
      </div>
    </section>
  );
}

export default Search;
