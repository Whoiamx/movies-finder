import { useMovie } from "./store/movieStore";
import "./App.css";

export const MoviesFav = () => {
  const favmovies = useMovie((state) => state.moviesSaved);
  const handleDeleteMovie = useMovie((state) => state.filterSavedMovies);

  const handleDeleteThisMovie = (movie: string) => {
    handleDeleteMovie(movie);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {favmovies.map((movie) => (
        <div>
          <button onClick={() => handleDeleteThisMovie(movie.Title)}>❌</button>
          <p>{movie.Title}</p>
          <img src={movie.Poster} alt={movie.Title} />
          <p>Año de estreno: {movie.Year}</p>
          <p>Duracion: {movie.Runtime}</p>
          <p>Genero: {movie.Genre}</p>
          <p>Rating: {movie.imdbRating} ⭐</p>
          <p>Actores: {movie.Actors}</p>
          <p>Director: {movie.Director}</p>
        </div>
      ))}
    </div>
  );
};
