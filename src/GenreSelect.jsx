import { Select, Label, Field } from "@headlessui/react";

// Add all genres from movies.js
const allGenres = [
  "All",
  "sci-fi",
  "drama",
  "thriller",
  "action",
  "comedy",
  "mystery",
  "adventure",
  "romance",
  "crime",
  "music",
  "fantasy",
  "animation",
];

function GenreSelect({ value, onChange }) {
  return (
    <Field className={"flex "}>
      <Label>Genres</Label>
      <Select
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="hover:cursor-pointer"
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
