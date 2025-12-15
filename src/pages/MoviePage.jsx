import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { useState, useEffect } from "react";

function MoviePage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const fetchIdMovies = async () => {
      console.log("movieId из URL:", movieId);
      try {
        console.log("movieId:", movieId);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            },
          }
        );

        console.log("response status:", response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("data:", data);
        setMovie({
          id: data.id,
          title: data.title,
          poster: data.poster_path
            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
            : "",
          rating: data.vote_average,
          year: data.release_date?.slice(0, 4),
          genres: Array.isArray(data.genres)
            ? data.genres.map((g) => g.name)
            : [],
          description: data.overview,
        });
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIdMovies();
  }, [movieId]);

  useEffect(() => {
    if (!movie) return;

    const saved = localStorage.getItem("favorites");
    if (!saved) {
      setIsFavorite(false);
      return;
    }

    const favorites = JSON.parse(saved);
    if (!Array.isArray(favorites)) {
      setIsFavorite(false);
      return;
    }
    const exists = favorites.some((m) => m && m.id === movie.id);
    setIsFavorite(exists);
  }, [movie]);

  const toggleFavorite = () => {
    const saved = localStorage.getItem("favorites");
    let favorites = JSON.parse(saved || "[]");

    if (isFavorite) {
      favorites = favorites.filter((m) => m.id !== movie.id);
    } else {
      favorites.push(movie);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  if (loading) {
    return <p className="p-6 text-red-600">Loading...</p>;
  }
  if (error) {
    return <p className="p-6 text-red-600">{error}</p>;
  }
  if (!movie) {
    return <p className="p-6 text-red-600">Фильм не найден</p>;
  }

  return (
    <div className="max-w-3xl mx-auto pt-6 px-4 md:px-0">
      <div className="flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/3">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover rounded-l-2xl"
          />
        </div>

        <div className="w-full md:w-2/3 p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-xl sm:text-2xl font-semibold">{movie.title}</h2>
            <Button
              text={isFavorite ? "Remove" : "Add to favorites"}
              onClick={toggleFavorite}
              className={
                isFavorite ? "bg-red-500" : "bg-blue-400 hover:bg-blue-500"
              }
            />
          </div>

          <p className="mt-2 text-sm text-gray-700">Year: {movie.year}</p>
          <p className="text-sm text-gray-700">Rating: {movie.rating}</p>
          {/* <p className="text-sm text-gray-700">Director: {movie.director}</p> */}
          <p className="text-sm text-gray-700">
            Genres: {movie.genres.join(", ")}
          </p>
          {/* <p className="text-sm text-gray-700">Actors: {movie.actors}</p> */}

          <div className="mt-3">
            <h3 className="font-semibold">Description:</h3>
            <p className="text-sm text-gray-600 leading-snug">
              {movie.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
