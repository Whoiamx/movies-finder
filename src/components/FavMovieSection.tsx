import { useNavigate } from "react-router";
import { MoviesFav } from "../MoviesFav";

export const FavMovieSection = () => {
  const navigate = useNavigate();

  const handleNavigateVolver = () => {
    navigate(-1);
  };

  return (
    <>
      <button className="font-inter" onClick={() => handleNavigateVolver()}>
        Volver al menu principal
      </button>
      <MoviesFav />
    </>
  );
};
