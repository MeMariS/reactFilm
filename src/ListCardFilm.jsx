import movies from "./movies.js";
import CardFilm from "./CardFilm.jsx";
import MovieCard from "./MovieCard.jsx";

function ListCardFilm({ favorites, setFavorites }) {
  const toggleFavorite = (movie) => {
    if (favorites.some((m) => m.id === movie.id)) {
      setFavorites(favorites.filter((m) => m.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };
  return (
    <>
      <div className="p-6 grid grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favorites.some((m) => m.id === movie.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </>
  );
}
export default ListCardFilm;
