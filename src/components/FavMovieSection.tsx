import { MoviesFav } from "../MoviesFav";
import { ButtonBack } from "./ButtonBack";

export const FavMovieSection = () => {
  return (
    <div className="p-2">
      <h6 className="text-center text-3xl font-bold">
        Tu lista de peliculas favoritas ⭐
      </h6>
      <ButtonBack />
      <MoviesFav />
    </div>
  );
};
