import { useNavigate } from "react-router";
import { MoviesLater } from "../MoviesLater";

export const WatchLaterSection = () => {
  const navigate = useNavigate();

  const handleNavigateVolver = () => {
    navigate(-1);
  };

  return (
    <div>
      <button className="font-inter" onClick={() => handleNavigateVolver()}>
        Volver al menu principal
      </button>
      <MoviesLater />
    </div>
  );
};
