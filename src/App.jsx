import './Header';
import './App.css';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Favorites from './Favorites';
import HomePage from './HomePage';
import HomePageTest from './HomePageTest';
import NotFound from './NotFound';
import MoviePage from './MoviePage';
import Footer from './Footer';

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
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
