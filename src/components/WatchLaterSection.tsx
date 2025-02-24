import { MoviesLater } from "../MoviesLater";
import { ButtonBack } from "./ButtonBack";

export const WatchLaterSection = () => {
  return (
    <div className="p-2">
      <h6 className="text-center text-3xl font-bold">
        Tu lista de peliculas por ver
      </h6>
      <ButtonBack />
      <MoviesLater />
    </div>
  );
};
