import { Select } from "@headlessui/react";

function RatingSelect({ movies, value, onChange }) {
  const allRatings = movies.map((m) => m.rating);
  const uniqueRatings = Array.from(new Set(allRatings));
  const sortRatings = uniqueRatings.sort((a, b) => b - a);
  const ratings = ["All", ...sortRatings];
  return (
    <>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        {ratings.map((rating) => (
          <option key={rating} value={rating}>
            {rating === "All" ? "Rating" : `${rating} IMDB`}
          </option>
        ))}
      </Select>
    </>
  );
}
export default RatingSelect;

// function RatingSelect({ movies, onChange }) {
//   const [selectedRating, setSelectedRating] = useState("All");
//   const allGenres = movies.flatMap((m) =>
//     m.genres.map((g) => g.replace(",", "").trim())
//   );
//   const unique = Array.from(new Set(allGenres));
//   const uniqueGenres = ["All", ...unique];

//   const allRatings = movies.flatMap((m) =>
//     m.ratings.map((g) => g.replace(",", "").trim())
//   );

//   const uniqueRatings = ["All", ...new Set(allRatings)];

//   return (
//     <>
//       <Select
//         value={selectedRating}
//         onChange={(e) => {
//           setSelectedRating(e.target.value);
//           onChange(e.target.value);
//         }}
//       >
//         {uniqueRatings.map((rating) => (
//           <option key={rating} value={rating}>
//             {rating}
//           </option>
//         ))}
//       </Select>
//     </>
//   );
// }
// export default RatingSelect;
