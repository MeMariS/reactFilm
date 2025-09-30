import { Link } from "react-router";

function MovieCard({ movie }) {
  return (
    <>
      <Link to={`/movie/${movie.id}`}>
        <div className="w-60 border rounded-2xl shadow-md overflow-hidden bg-white">
          <img src={movie.poster} alt="" />
          <div className="p-3">
            <h2 className="text-lg font-semibold">{movie.title}</h2>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <p>{movie.year}</p>
              <p>{movie.raiting} IMDB</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
export default MovieCard;
