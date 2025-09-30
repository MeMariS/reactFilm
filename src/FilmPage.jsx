import { useParams } from "react-router";
import movies from "./movies.js";

function FilmPage() {
  let params = useParams();
  console.log(params);

  const movie = movies.find((movie) => movie.id === Number(params.movieId));
  return (
    <>
      <h1>{movie.title}</h1>
    </>
  );
}
export default FilmPage;
