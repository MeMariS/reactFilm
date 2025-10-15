import { useState } from "react";
import { Input, Select } from "@headlessui/react";
import MoviesList from "./MoviesList";
import movies from "./movies.js";
import { useEffect } from "react";
import GenreSelect from "./GenreSelect.jsx";
import YearSelect from "./YearSelect.jsx";
import RatingSelect from "./RatingSelect.jsx";
import ButtonClear from "./ButtonClear.jsx";
import ComponentCLear from "./ComponentCLear.jsx";

function HomePage() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [year, setYear] = useState("All");
  const [rating, setRating] = useState("All");
  const [displayedMovies, setDisplayedMovies] = useState(movies);

  useEffect(() => {
    const filtered = movies.filter((movie) => {
      const titleMatches = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const genreMatches =
        genre === "All" || movie.genres.some((g) => g === genre.toLowerCase());
      const yearMatches = year === "All" || movie.year === parseInt(year);
      const ratingMatches = rating === "All" || movie.rating === Number(rating);

      return titleMatches && genreMatches && yearMatches && ratingMatches;
    });

    setDisplayedMovies(filtered);
  }, [search, genre, year, rating]);

  const hasActiveFilters = genre || year || rating;
  const resetAllFilters = () => {
    setGenre("");
    setYear("");
    setRating("");
    console.log("reset filters");
  };

  //   useEffect(() => {
  //     if (!search) {
  //       setDisplayedMovies(movies);
  //       return;
  //     }

  //     const filteredMovies = movies.filter((movie) => {
  //       const movieTitle = movie.title.toLowerCase();
  //       const lowercaseSearch = search.toLowerCase();
  //       // const filteredGenre = genre === "All" || movie.genre === genre;
  //       return movieTitle.includes(lowercaseSearch) && filteredGenre;
  //     });

  //     setDisplayedMovies(filteredMovies);
  // setDisplayedMovies(filteredGenre)
  //   }, [search, genre]);

  return (
    <>
      <div className="px-8 flex items-center gap-4">
        <Input
          onChange={(e) => setSearch(e.target.value.trim())}
          placeholder="Search for a movie"
          name="search"
          type="text"
          className="border border-gray-400 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <YearSelect value={year} onChange={setYear} />
        <GenreSelect value={genre} onChange={setGenre} />
        <RatingSelect value={rating} onChange={setRating} />
        {hasActiveFilters && <ButtonClear onReset={resetAllFilters} />}
      </div>
      <MoviesList movies={displayedMovies} />
    </>
  );
}
export default HomePage;
