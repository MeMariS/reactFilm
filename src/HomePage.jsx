import { useState } from 'react';
import { Input } from '@headlessui/react';
import MoviesList from './MoviesList';
import movies from './movies.js';
import { useEffect } from 'react';

function HomePage() {
  const [search, setSearch] = useState('');
  const [displayedMovies, setDisplayedMovies] = useState(movies);

  useEffect(() => {
    if (!search) {
      setDisplayedMovies(movies);
      return;
    }

    const filteredMovies = movies.filter((movie) => {
      const movieTitle = movie.title.toLowerCase();
      const lowercaseSearch = search.toLowerCase();
      return movieTitle.includes(lowercaseSearch);
    });

    setDisplayedMovies(filteredMovies);
  }, [search]);

  return (
    <>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a movie"
        name="search"
        type="text"
        className="border border-amber-500 data-focus:bg-blue-100 data-hover:shadow"
      />
      <MoviesList movies={displayedMovies} />
    </>
  );
}
export default HomePage;
