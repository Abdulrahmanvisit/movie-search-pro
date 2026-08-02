function MovieCard({ title, poster, year, rating }) {
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
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 truncate">{title}</h3>
        <p className="text-sm text-slate-500 mt-1">{year}</p>
      </div>
    </div>
  )
}

export default MovieCard