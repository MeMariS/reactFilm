import CardFilm from "./MoviePage.jsx";
import MovieCard from "./MovieCard.jsx";

function Favorites({ favorites, toggleFavorite }) {
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Favorites movies</h1>

        {favorites.length === 0 ? (
          <p className="text-gray-500">
            You don't have any favorite movies yet 🙃
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favorites.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={true}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default Favorites;
