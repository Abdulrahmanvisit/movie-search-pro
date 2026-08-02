function MovieCard({ title, poster, year, rating, isSaved, onToggleWatchlist }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
      <div className="relative">
        <img
          src={poster}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-2 right-2 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded-full">
          ⭐ {rating}
        </span>
        {onToggleWatchlist && (
          <button
            onClick={(e) => {
              e.preventDefault()
              onToggleWatchlist()
            }}
            className="absolute top-2 left-2 bg-black/70 text-white text-lg px-2 py-1 rounded-full hover:bg-black/90 transition-colors"
          >
            {isSaved ? '♥' : '♡'}
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 truncate">{title}</h3>
        <p className="text-sm text-slate-500 mt-1">{year}</p>
      </div>
    </div>
  )
}

export default MovieCard