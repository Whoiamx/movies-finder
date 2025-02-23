import { useMovie } from "./store/movieStore";

export const MoviesHistory = () => {
  const historyMovie = useMovie((state) => state.moviesSearched);

  return (
    <div className="flex justify-center items-center text-center">
      {historyMovie.map((movie, index) => (
        <div
          className="relative flex flex-col gap-2 text-center justify-center items-center group"
          key={index}
        >
          <p className="text-center">{movie.Title}</p>
          <div className="relative w-2/4">
            <img
              className="w-full rounded-md shadow-lg"
              src={movie.Poster}
              alt={movie.Title}
            />

            <div className="absolute inset-0 bg-black bg-opacity-80 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-md">
              <p className="text-sm">{movie.Genre}</p>

              <p className="text-yellow-400 font-semibold">
                ⭐ {movie.imdbRating}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
