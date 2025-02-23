import { useMovie } from "./store/movieStore";

export const MoviesHistory = () => {
  const historyMovie = useMovie((state) => state.moviesSearched);
  console.log(historyMovie);

  return (
    <div className="flex  gap-2 overflow-x-auto scrollbar-hide">
      {historyMovie.map((movie, index) => (
        <div
          className="relative flex flex-col w-36 gap-1 text-center group justify-center items-center"
          key={index}
        >
          <div className="relative">
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
          <p className="text-white text-sm">{movie.Title}</p>
        </div>
      ))}
    </div>
  );
};
