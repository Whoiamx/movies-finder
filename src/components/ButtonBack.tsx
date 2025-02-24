import { useNavigate } from "react-router";

export const ButtonBack = () => {
  const navigate = useNavigate();

  const handleNavigateVolver = () => {
    navigate(-1);
  };

  return (
    <>
      <button
        className="font-inter bg-blue-500 p-2"
        onClick={() => handleNavigateVolver()}
      >
        ⬅ Volver al menu principal
      </button>
    </>
  );
};
