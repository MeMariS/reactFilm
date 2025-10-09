import inceptionPoster from "./images/inception.jpg";
import parasitePoster from "./images/parasite.jpg";
import bladeRunner2049Poster from "./images/blade_runner2049.jpg";
import interstellarPoster from "./images/interstellar.jpg";
import ameliePoster from "./images/amelie.jpg";
import brotherPoster from "./images/brother.jpg";
import whiplashPoster from "./images/whiplash.jpg";
import granTorinoPoster from "./images/gran_torino.jpg";
import theGreenMilePoster from "./images/the_green_mile.jpg";
import theLionKingPoster from "./images/the_lion_king.jpg";

const movies = [
  {
    title: "Inception",
    rating: 8.8,
    poster: inceptionPoster,
    year: 2010,
    director: "Christopher Nolan",
    description:
      "A thief who infiltrates dreams gets a shot at redemption if he can plant an idea in a target's mind.",
    genres: ["sci-fi, ", "thriller, ", "action"],
    id: 1,
  },
  {
    title: "Parasite",
    rating: 8.6,
    poster: parasitePoster,
    year: 2019,
    director: "Bong Joon Ho",
    description:
      "A lower-class family schemes its way into a wealthy household, with consequences spiraling out of control.",
    genres: ["drama, ", "thriller, ", "comedy"],
    id: 2,
  },
  {
    title: "Blade Runner 2049",
    rating: 8.0,
    poster: bladeRunner2049Poster,
    year: 2017,
    director: "Denis Villeneuve",
    description:
      "A new blade runner uncovers a secret that could upend the balance between humans and replicants.",
    genres: ["sci-fi, ", "drama, ", "mystery"],
    id: 3,
  },
  {
    title: "Interstellar",
    rating: 8.6,
    poster: interstellarPoster,
    year: 2014,
    director: "Christopher Nolan",
    description:
      "Explorers travel through a wormhole in search of a new home for humanity.",
    genres: ["sci-fi, ", "drama, ", "adventure"],
    id: 4,
  },
  {
    title: "Amélie",
    rating: 8.3,
    poster: ameliePoster,
    year: 2001,
    director: "Jean-Pierre Jeunet",
    description:
      "A shy Parisian decides to quietly improve the lives of those around her and finds love along the way.",
    genres: ["romance, ", "comedy, ", "drama"],
    id: 5,
  },
  {
    title: "Brother",
    rating: 7.8,
    poster: brotherPoster,
    year: 1997,
    director: "Aleksei Balabanov",
    description:
      "A young army veteran navigates the criminal underworld of 1990s Saint Petersburg in search of his own code of honor.",
    genres: ["crime, ", "drama, ", "action"],
    id: 6,
  },
  {
    title: "Whiplash",
    rating: 8.5,
    poster: whiplashPoster,
    year: 2014,
    director: "Damien Chazelle",
    description:
      "An ambitious drummer clashes with a ruthless mentor in a pursuit of perfection.",
    genres: ["drama, ", "music"],
    id: 7,
  },
  {
    title: "Gran Torino",
    rating: 8.1,
    poster: granTorinoPoster,
    year: 2008,
    director: "Clint Eastwood",
    description:
      "A grizzled war veteran forms an unlikely bond with his neighbors and confronts his own prejudices.",
    genres: ["drama"],
    id: 8,
  },
  {
    title: "The Green Mile",
    rating: 8.6,
    poster: theGreenMilePoster,
    year: 1999,
    director: "Frank Darabont",
    description:
      "A death row guard witnesses inexplicable events that test his beliefs and compassion.",
    genres: ["drama, ", "fantasy, ", "crime"],
    id: 9,
  },
  {
    title: "The Lion King",
    rating: 8.5,
    poster: theLionKingPoster,
    year: 1994,
    director: "Roger Allers, Rob Minkoff",
    description:
      "Young Simba must face exile and return to claim his place as king of the Pride Lands.",
    genres: ["animation, ", "adventure, ", "drama"],
    id: 10,
  },
];
export default movies;
