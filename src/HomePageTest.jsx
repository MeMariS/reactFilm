import { useState } from 'react';
import { Input, Select } from '@headlessui/react';
import MoviesList from './MoviesList.jsx';
import { useEffect } from 'react';
import GenreSelect from './GenreSelect.jsx';
import YearSelect from './YearSelect.jsx';
import RatingSelect from './RatingSelect.jsx';
import Button from './Button.jsx';
import { Copy } from 'lucide-react';

function HomePageTest() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setMovies(data.results);
      } catch (err) {
        console.log(err);
        // setError(err.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      {movies.map((movie) => 
        <div className='border border-amber-600 p-3' key={movie.id}>
          Title: {movie.title}
          Popularity: {movie.popularity}
          Release Date: {movie.release_date}
        </div>
      )}
    </div>
  );
}
export default HomePageTest;
