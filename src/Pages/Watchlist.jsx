import {Link} from 'react-router-dom'
import MovieCard from '../components/MovieCard'

function Watchlist({watchlist, removeFromWatchlist}) {
    if (watchlist.length === 0) {
        return (
            <section className='max-w-6xl mx-auto px-4 py-20 text-center'>
                <p className='text-slate-500 text-lg'>Your watchlist is Empty.</p>
                <Link to="/search" className='text-blue-600 hover:underline mt-2 inline-block'>
                    Start exploring movies →
                </Link>
            </section>
        )
    }

    return (
        <section className='max-w-6xl mx-auto px-4 py-10'>
            <h1 className='text-2xl font-bold text-slate-900 mb-6'>My Watchlist</h1>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4 sm:gap-6'>
                {watchlist.map((movie) => {
                    return (
                        <div key={movie.imdbID} className='relative'>
                            <Link to={`/movie/${movie.imdbID}`}>
                                <MovieCard
                                    title={movie.Title}
                                    year={movie.Year}
                                    poster={movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/300x445?text=No+Poster'}
                                    rating="N/A"
                                />
                            </Link>
                            <button
                                onClick={() => removeFromWatchlist(movie.imdbID)}
                                className='mt-2 w-full text-sm text-red-600 hover:text-red-700 border border-red-200 hover:bg-red-50 rounded-lg py-1 transition-colors'
                            >
                                Remove
                            </button>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Watchlist