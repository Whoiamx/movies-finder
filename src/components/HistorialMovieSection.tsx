import { MoviesHistory } from "../MoviesHistory";
import { useMovie } from "../store/movieStore";

export const HistorialMovieSection = () => {
  const historyMovie = useMovie((state) => state.moviesSearched);
  return (
    <>
      {historyMovie.length ? (
        <div className="font-inter flex flex-col p-4 gap-4 ">
          <h3 className="text-white font-extrabold text-2xl">
            Tu historial de búsqueda 🔍
          </h3>
          <MoviesHistory />
        </div>
      ) : null}
    </>
  );
};
