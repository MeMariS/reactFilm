import ListCardFilm from "./ListCardFilm";

function Home({ favorites, setFavorites }) {
  return <ListCardFilm favorites={favorites} setFavorites={setFavorites} />;
}
export default Home;
