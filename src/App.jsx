import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import HomePageTest from "./pages/HomePageTest";
import NotFound from "./components/NotFound";
import MoviePage from "./pages/MoviePage";
import Footer from "./components/Footer";
import MoviePageTest from "./pages/MoviePageTest.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home-test" element={<HomePageTest />} />
            <Route path="/movie/:movieId" element={<MoviePage />} />
            <Route path="/movie-api/:movieId" element={<MoviePageTest />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
