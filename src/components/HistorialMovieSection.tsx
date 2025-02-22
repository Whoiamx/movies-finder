import { MoviesHistory } from "../MoviesHistory";
import { useMovie } from "../store/movieStore";

export const HistorialMovieSection = () => {
  return (
    <div className="font-inter flex flex-col text-center justify-center items-center">
      <MoviesHistory />
    </div>
  );
};
