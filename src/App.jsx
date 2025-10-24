import { useState } from "react";
import "./Header";
import "./App.css";
import Header from "./Header";
import { Route, Routes } from "react-router";
import Favorites from "./Favorites";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import MoviePage from "./MoviePage";
import Footer from "./Footer";

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
        <Route path="/" element={<HomePage />} />
        <Route
          path="/movie/:movieId"
          element={
            <MoviePage favorites={favorites} toggleFavorite={toggleFavorite} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
