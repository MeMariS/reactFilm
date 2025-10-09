import { Select, Label, Field } from '@headlessui/react';

// Add all genres from movies.js
const allGenres = ['All', 'sci-fi', 'drama', 'thriller', 'action'];

function GenreSelect({ value, onChange }) {
  return (
    <Field className={'flex flex-col'}>
      <Label>Genres</Label>
      <Select
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        {allGenres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Select>
    </Field>
  );
}
export default GenreSelect;
