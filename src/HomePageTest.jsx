import { useState } from "react";
import { Input, Select } from "@headlessui/react";
import MoviesList from "./MoviesList.jsx";
import { useEffect } from "react";
// import GenreSelect from "./GenreSelect.jsx";
import YearSelect from "./YearSelect.jsx";
import RatingSelect from "./RatingSelect.jsx";
import Button from "./Button.jsx";
import { Copy } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import GenreSelectTest from "./GenreSelectTest.jsx";

function HomePageTest() {
  const [allMovies, setAllMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [genre, setGenre] = useState(searchParams.get("genre") || "All");
  const [year, setYear] = useState(searchParams.get("year") || "All");
  const [rating, setRating] = useState(searchParams.get("rating") || "All");
  const [displayedMovies, setDisplayedMovies] = useState(allMovies);

  const [testGenre, setTestGenre] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        const mapped = data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          poster: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "",
          rating: movie.vote_average,
          year: movie.release_date?.slice(0, 4),
          genre_ids: movie.genre_ids || [],
        }));
        setAllMovies(mapped);
        setDisplayedMovies(mapped);
      } catch (err) {
        console.log(err);
        // setError(err.message);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("search", search);
    params.set("genre", genre);
    params.set("year", year);
    params.set("rating", rating);
    setSearchParams(params);
  }, [search, genre, year, rating, searchParams, setSearchParams]);

  useEffect(() => {
    const filterMovies = () => {
      const activeGenreId = testGenre === null ? null : Number(testGenre);
      const filtered = allMovies.filter((movie) => {
        const titleMatches = movie.title
          .toLowerCase()
          .includes(search.toLowerCase());

        const genreMatches =
          !activeGenreId || movie.genre_ids.includes(activeGenreId);
        const yearMatches = year === "All" || movie.year === String(year);
        const ratingMatches =
          rating === "All" || movie.rating === Number(rating);
        console.log(
          "movie.year:",
          movie.year,
          typeof movie.year,
          "state year:",
          year,
          typeof year
        );

        return titleMatches && genreMatches && yearMatches && ratingMatches;
      });
      setDisplayedMovies(filtered);
    };

    const id = setTimeout(filterMovies, 300);

    return () => {
      clearTimeout(id);
    };
  }, [search, testGenre, year, rating, allMovies]);

  const hasActiveFilters =
    genre !== "All" || year !== "All" || rating !== "All" || search;
  const resetAllFilters = () => {
    setGenre("All");
    setYear("All");
    setRating("All");
    setSearch("");
    console.log("reset filters");
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(location.href);
  };

  const notify = () => toast("Link copied to clipboard!");

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="px-10 flex justify-center items-center gap-4">
        <Input
          onChange={(e) => setSearch(e.target.value.trim())}
          value={search}
          placeholder="Search for a movie"
          name="search"
          type="text"
          className="border border-pink-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <YearSelect value={year} onChange={setYear} />
        <GenreSelectTest value={testGenre} onChange={setTestGenre} />
        <RatingSelect value={rating} onChange={setRating} />
        {hasActiveFilters && (
          <Button
            text="Clear All"
            onClick={resetAllFilters}
            variant="secondary"
          />
        )}
        <Button
          icon={<Copy size={20} />}
          text="Copy Link"
          variant="secondary"
          onClick={() => {
            copyLink();
            notify();
          }}
          className="flex"
        />
        <ToastContainer autoClose={2000} />
      </div>
      {hasActiveFilters && (
        <p className="px-8 text-gray-400 text-sm mt-2">
          Found {displayedMovies.length} movies
        </p>
      )}
      <MoviesList movies={displayedMovies} />
    </div>
  );
}
export default HomePageTest;
