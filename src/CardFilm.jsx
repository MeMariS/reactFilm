import { useParams } from "react-router";
import movies from "./movies.js";

function CardFilm({ favorites, toggleFavorite }) {
  let params = useParams();
  const movie = movies.find((m) => m.id === Number(params.movieId));

  if (!movie) {
    return <p className="p-6 text-red-600">Фильм не найден</p>;
  }

  const isFavorite = favorites.some((m) => m.id === movie.id);

  return (
    <div className="flex max-w-3xl border rounded-2xl shadow-md overflow-hidden bg-white">
      <div className="w-1/3">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover rounded-l-2xl"
        />
      </div>

      <div className="w-2/3 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">{movie.title}</h2>
          <button
            onClick={() => toggleFavorite(movie)}
            className={`px-4 py-2 rounded-lg text-white font-medium transition ${
              isFavorite ? "bg-red-500" : "bg-blue-400 hover:bg-blue-500"
            }`}
          >
            {isFavorite ? "Remove" : "Add to favorites"}
          </button>
        </div>

        <p className="mt-2 text-sm text-gray-700">Year: {movie.year}</p>
        <p className="text-sm text-gray-700">Rating: {movie.rating}</p>
        <p className="text-sm text-gray-700">Director: {movie.director}</p>
        <p className="text-sm text-gray-700">Genres: {movie.genres}</p>
        <p className="text-sm text-gray-700">Actors: {movie.actors}</p>

        <div className="mt-3">
          <h3 className="font-semibold">Description:</h3>
          <p className="text-sm text-gray-600 leading-snug">
            {movie.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardFilm;
