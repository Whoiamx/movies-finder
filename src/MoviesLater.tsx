import { useMovie } from "./store/movieStore";

export const MoviesLater = () => {
  const latermovies = useMovie((state) => state.moviesToWatch);
  const handleDeleteMovie = useMovie((state) => state.filterToWatchMovies);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {latermovies.length ? (
        latermovies.map((movie) => (
          <div>
            <button onClick={() => handleDeleteMovie(movie.Title)}>❌</button>
            <p>{movie.Title}</p>
            <img src={movie.Poster} alt={movie.Title} />
            <p>Año de estreno: {movie.Year}</p>
            <p>Duracion: {movie.Runtime}</p>
            <p>Genero: {movie.Genre}</p>
            <p>Rating: {movie.imdbRating} ⭐</p>
            <p>Actores: {movie.Actors}</p>
            <p>Director: {movie.Director}</p>
          </div>
        ))
      ) : (
        <div>
          <p>No se encontro ninguna pelicula o serie en tu lista :(</p>
        </div>
      )}
    </div>
  );
};
