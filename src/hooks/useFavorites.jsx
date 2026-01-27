import { useEffect, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorites = (item) => {
    setFavorites((prev) => [...prev, item]);
  };

  const removeFavorites = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const isFavorite = (id) => favorites.some((item) => item.id === id);

  const toggleFavorites = (item) => {
    isFavorite(item.id) ? removeFavorites(item.id) : addFavorites(item);
  };

  return {
    addFavorites,
    removeFavorites,
    isFavorite,
    toggleFavorites,
  };
  // const context = useContext(FavoritesContext);
  // if (!context) {
  //   throw new Error("useFavorites must be used inside FavoritesProvider");
  // }
  // return context;
};
