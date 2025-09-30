import { useState } from "react";
import "./Header";
import "./App.css";
import Header from "./Header";
import { Route, Routes } from "react-router";
import Favorites from "./Favorites";
import Home from "./Home";
import NotFound from "./NotFound";
import FilmPage from "./FilmPage";
import CardFilm from "./CardFilm";

function App() {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      if (prev.find((m) => m.id === movie.id)) {
        return prev.filter((m) => m.id !== movie.id);
      }
      return [...prev, movie];
    });
  };
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              favorites={favorites}
              setFavorites={setFavorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/movie/:movieId"
          element={
            <CardFilm favorites={favorites} toggleFavorite={toggleFavorite} />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              setFavorites={setFavorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
