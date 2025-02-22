import { useMovie } from "./store/movieStore";

export const MoviesHistory = () => {
  const historyMovie = useMovie((state) => state.moviesSearched);

  return (
    <div className="flex justify-center items-center text-center">
      {historyMovie.map((movie) => (
        <div>
          <p>{movie.Title}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </div>
  );
};
