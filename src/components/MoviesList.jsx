import EmptyState from "./EmptyState.jsx";
import MovieCard from "./MovieCard.jsx";

function MoviesList({ movies }) {
  if (!movies || movies.length === 0) {
    return <EmptyState message="Not found, sorry☹️" />;
  }
  return (
    <>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
export default MoviesList;
