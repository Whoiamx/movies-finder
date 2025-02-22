import { useMovie } from "./store/movieStore";

interface CardMovieProps {
  Title: string;
  Year: string;
  Genre: string;
  Runtime: string;
  Director: string;
  Actors: string;
  imdbRating: string;
  Poster: string;
}

export const CardMovie = ({
  Title,
  Year,
  Genre,
  Runtime,
  Director,
  Actors,
  imdbRating,
  Poster,
}: CardMovieProps) => {
  const movieSelected = useMovie((state) => state.movies);

  const saveMovie = useMovie((state) => state.savedMovies);

  const saveToWatchMovie = useMovie((state) => state.toWatchMovies);

  const handleMovieFav = () => {
    saveMovie(movieSelected);
  };

  const handleMovieToWatch = () => {
    saveToWatchMovie(movieSelected);
  };

  return (
    <div className="container-card">
      <div>
        <h2>{Title}</h2>
        <img src={Poster} alt={Title} />
        <p>Año de estreno: {Year}</p>
        <p>Duracion: {Runtime}</p>
        <p>Genero: {Genre}</p>
        <p>Rating: {imdbRating} ⭐</p>
        <p>Actores: {Actors}</p>
        <p>Director: {Director}</p>
      </div>
      <div>
        <button onClick={() => handleMovieToWatch()}>
          Agregar a ver mas tarde
        </button>
        <button onClick={() => handleMovieFav()}>Agregar a favoritos</button>
      </div>
    </div>
  );
};
