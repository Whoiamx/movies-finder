import { useMovie } from "./store/movieStore";

export const MoviesHistory = () => {
  const historyMovie = useMovie((state) => state.moviesSearched);

  return (
    <div className="flex justify-center items-center text-center">
      {historyMovie.map((movie, index) => (
        <div
          className="flex flex-col gap-2 text-center justify-center items-center"
          key={index}
        >
          <p className="text-center">{movie.Title}</p>
          <img className="w-2/4" src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </div>
  );
};
