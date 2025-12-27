import { useFavorites } from "../context/FavoritesContext";

function FavoritesCard({ item }) {
  const { toggleFavorites, isFavorite } = useFavorites();

  return (
    <div>
      <button onClick={() => toggleFavorites(item)}>
        {isFavorite(item.id) ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
}
export default FavoritesCard;
