import { Select } from "@headlessui/react";
import { useState } from "react";

function GenreSelect({ movies, onChange }) {
  const [selectedGenre, setSelectedGenre] = useState("All");
  //   const allGenres = movies.flatMap((m) =>
  //     m.genres.map((g) => g.replace(",", "").trim())
  //   );
  //   const unique = Array.from(new Set(allGenres));
  //   const uniqueGenres = ["All", ...unique];

  const allGenres = movies.flatMap((m) =>
    m.genres.map((g) => g.replace(",", "").trim())
  );

  const uniqueGenres = ["Genre", ...new Set(allGenres)];

  return (
    <>
      <Select
        value={selectedGenre}
        onChange={(e) => {
          setSelectedGenre(e.target.value);
          onChange(e.target.value);
        }}
      >
        {uniqueGenres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Select>
    </>
  );
}
export default GenreSelect;
