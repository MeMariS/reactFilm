import { Select, Label, Field } from '@headlessui/react';
import { useState, useEffect } from 'react';

function GenreSelect({ value, onChange }) {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/genre/movie/list?language=en',
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
        setGenres(data.genres || []);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 border rounded px-2">
        <label className="font-medium">Genres</label>
        <select disabled>
          <option>Loading...</option>
        </select>
      </div>
    );
  }

  if (error) {
    // Поменять на такой же вид, как в loading
    return <div className="text-red-600">Ошибка загрузки жанров: {error}</div>;
  }

  return (
    <Field className="flex items-center gap-2 hover:cursor-pointer border border-gray-200 rounded-md px-2">
      <Label>Genres</Label>
      <Select
        value={value}
        onChange={(e) => {
          const val = e.target.value;
          onChange(val);
        }}
        className="hover:cursor-pointer"
      >
        <option value="">All genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </Select>
    </Field>
  );
}
export default GenreSelect;
