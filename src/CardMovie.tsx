import { useState } from "react";
import { useMovie } from "./store/movieStore";

import "./App.css";

interface CardMovieProps {
  Title: string;
  Year: string;
  Genre: string;
  Runtime: string;
  Director: string;
  Actors: string;
  imdbRating: string;
  Poster: string;
}

export const CardMovie = ({
  Title,
  Year,
  Genre,
  Runtime,
  Director,
  Actors,
  imdbRating,
  Poster,
}: CardMovieProps) => {
  const movieSelected = useMovie((state) => state.movies);

  const saveMovie = useMovie((state) => state.savedMovies);

  const saveToWatchMovie = useMovie((state) => state.toWatchMovies);

  const [modal, setModal] = useState(false);
  const [modalFav, setModalFav] = useState(false);

  const handleMovieFav = () => {
    saveMovie(movieSelected);
    setModalFav(true);
    setTimeout(() => {
      setModalFav(false);
    }, 2000);
  };

  const handleMovieToWatch = () => {
    saveToWatchMovie(movieSelected);
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 2000);
  };

  return (
    <div className="container-card font-inter flex flex-col items-center justify-center">
      <div className="flex flex-col  p-5 gap-2">
        <h2 className="text-center font-extrabold text-2xl">{Title}</h2>
        <img className="w-2/4 mx-auto" src={Poster} alt={Title} />
        <p>Año de estreno: {Year}</p>
        <p>Duracion: {Runtime}</p>
        <p>Genero: {Genre}</p>
        <p>Rating: {imdbRating} ⭐</p>
        <p>Actores: {Actors}</p>
        <p>Director: {Director}</p>
      </div>
      <div className="flex justify-center items-center gap-10 p-5">
        <button
          className="text-black bg-slate-400 p-2 "
          onClick={() => handleMovieToWatch()}
        >
          Agregar a ver mas tarde
        </button>
        <button
          className="text-black bg-yellow-400 p-2"
          onClick={() => handleMovieFav()}
        >
          Agregar a favoritos
        </button>
      </div>
      {modal ? (
        <div className="modal">Se agrego {Title} a la lista por ver </div>
      ) : null}

      {modalFav ? (
        <div className="modalFav">
          Se agrego {Title} a la lista de Favoritos
        </div>
      ) : null}
    </div>
  );
};
