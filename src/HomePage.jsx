import { useState } from "react";
import { Input, Select } from "@headlessui/react";
import MoviesList from "./MoviesList";
import movies from "./movies.js";
import { useEffect } from "react";
import GenreSelect from "./GenreSelect.jsx";
import YearSelect from "./YearSelect.jsx";
import RatingSelect from "./RatingSelect.jsx";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";
import { Copy } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [genre, setGenre] = useState(searchParams.get("genre") || "All");
  const [year, setYear] = useState(searchParams.get("year") || "All");
  const [rating, setRating] = useState(searchParams.get("rating") || "All");
  const [displayedMovies, setDisplayedMovies] = useState(movies);

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
        // setMovies(data.results);
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
      <div className="m-5 px-10 py-8 flex flex-col gap-4 w-full bg-gray-50 rounded-md">
        <div className="flex w-full">
          <Input
            onChange={(e) => setSearch(e.target.value.trim())}
            value={search}
            placeholder="Search for a movie"
            name="search"
            type="text"
            className="border border-gray-400 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <YearSelect value={year} onChange={setYear} />
            <GenreSelect value={genre} onChange={setGenre} />
            <RatingSelect value={rating} onChange={setRating} />
          </div>

          <div className="flex items-center gap-3">
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
          </div>
        </div>
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
export default HomePage;
