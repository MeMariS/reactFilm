import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage.jsx";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import MoviePage from "./pages/MoviePage.jsx";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";

function App() {
  return (
    <>
      <FavoritesProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movie-api/:movieId" element={<MoviePage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </FavoritesProvider>
    </>
  );
}

export default App;
