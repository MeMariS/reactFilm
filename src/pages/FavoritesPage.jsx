import EmptyState from "../components/EmptyState.jsx";
import MovieCard from "../components/MovieCard.jsx";
import { useFavorites } from "../hooks/useFavorites";

function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Favorites movies</h1>

        {favorites.length === 0 ? (
          <EmptyState
            message="
            You don't have any favorite movies yet 🙃"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default FavoritesPage;
