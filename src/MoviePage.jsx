import { useParams } from 'react-router';
import movies from './movies.js';
import Button from './Button';

function MoviePage() {
  let params = useParams();
  const movie = movies.find((m) => m.id === Number(params.movieId));

  if (!movie) {
    return <p className="p-6 text-red-600">Фильм не найден</p>;
  }

  // Когда страница загружается первый раз:
  // Получить доступ к LS – getItem
  // Проверить, есть ли в favorites в LS текущий фильм
  // Если есть, выставляем isFavorite = true

  const isFavorite = false;

  // Сохранить ИЛИ удалить фильм в LS (в зависимости от того, есть он уже в favorites или нет)
  // – setItem
  const toggleFavorite = (movie) => {};

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
              text={isFavorite ? 'Remove' : 'Add to favorites'}
              onClick={() => toggleFavorite(movie)}
              className={
                isFavorite ? 'bg-red-500' : 'bg-blue-400 hover:bg-blue-500'
              }
            />
          </div>

          <p className="mt-2 text-sm text-gray-700">Year: {movie.year}</p>
          <p className="text-sm text-gray-700">Rating: {movie.rating}</p>
          <p className="text-sm text-gray-700">Director: {movie.director}</p>
          <p className="text-sm text-gray-700">
            Genres: {movie.genres.join(', ')}
          </p>
          <p className="text-sm text-gray-700">Actors: {movie.actors}</p>

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
