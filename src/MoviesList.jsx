import movies from "./movies.js";
import MovieCard from "./MovieCard.jsx";

function MoviesList() {
  return (
    <>
      <div className="p-6 grid grid-cols-3 gap-6 justify-items-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
export default MoviesList;
