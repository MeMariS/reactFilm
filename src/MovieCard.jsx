import { Link } from "react-router";

function MovieCard({ movie }) {
  return (
    <>
      <Link to={`/movie/${movie.id}`}>
        <div className="w-full max-w-xs mx-auto sm:w-48 md:w-56 lg:w-60 border rounded-2xl shadow-md overflow-hidden bg-white">
          <img src={movie.poster} alt="" />
          <div className="p-3">
            <h2 className="ext-base sm:text-lg font-semibold">{movie.title}</h2>
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-1">
              <p>{movie.year}</p>
              <p>{movie.rating} IMDB</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
export default MovieCard;
