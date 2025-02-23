import { useNavigate } from "react-router";

export const ButtonBack = () => {
  const navigate = useNavigate();

  const handleNavigateVolver = () => {
    navigate(-1);
  };

  return (
    <>
      <button className="font-inter" onClick={() => handleNavigateVolver()}>
        Volver al menu principal
      </button>
    </>
  );
};
