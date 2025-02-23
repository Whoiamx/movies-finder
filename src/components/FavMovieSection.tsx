import { useNavigate } from "react-router";
import { MoviesFav } from "../MoviesFav";
import { ButtonBack } from "./ButtonBack";

export const FavMovieSection = () => {
  return (
    <>
      <ButtonBack />
      <MoviesFav />
    </>
  );
};
