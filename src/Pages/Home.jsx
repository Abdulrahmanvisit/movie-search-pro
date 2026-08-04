import { Link } from "react-router-dom";

// Serves as the landing page of the application.
// It introduces Movie Explorer Pro and encourages
// users to begin searching for movies.
function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
        Movie Explorer Pro
      </h1>
      <p className="mt-4 text-lg text-slate-600 max-w-xl">
        Discover movies, Explore details, and build your own watchlist.
      </p>

      {/* Navigate users directly to the movie search page. */}
      <Link
        to="/search"
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-6 rounded-lg transition-colors"
      >
        Start Exploring
      </Link>
    </section>
  );
}

export default Home;
