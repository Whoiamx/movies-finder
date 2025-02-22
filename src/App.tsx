import { CardMovie } from "./CardMovie";
import { MouseEvent, useRef } from "react";
import { useMovie } from "./store/movieStore";
import { Link } from "react-router";

import "./App.css";
function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const movieSelected = useMovie((state) => state.movies);

  const fetchedMovie = useMovie((state) => state.fetchedMovies);

  const searchMovie = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (inputRef.current && inputRef.current.value.trim() !== "") {
      const searchValue = inputRef.current.value.toLowerCase(); // Usamos el valor de inputRef
      fetchedMovie(searchValue);
    } else {
      console.log("Por favor ingresa un valor válido"); // Mensaje de error si el campo está vacío
    }
  };

  return (
    <>
      <div className="flex justify-center items-center font-inter">
        <header className="flex flex-col p-5 justify-center items-center gap-8">
          <h1 className="  text-white text-3xl  font-extrabold ">
            Busca tu película o serie favorita 🎬
          </h1>
          <form className="flex justify-center gap-2 w-full">
            <input
              className="text-white w-full max-w-[25em] p-2"
              ref={inputRef}
              type="text"
              placeholder="Ingresa el nombre de una película o serie"
            />
            <button
              id="search-button"
              onClick={(e) => searchMovie(e)}
              type="submit"
              className="w-[20%] h-[2.5em] bg-orange-400 text-black text-[1.1rem] font-medium"
            >
              Buscar
            </button>
          </form>
          <div className="flex gap-x-72 justify-around">
            <button className="p-3 bg-slate-300 text-black">
              <Link to="/later"> Mi Lista por Ver 🕶</Link>
            </button>
            <button className="text-black bg-yellow-500 p-2">
              <Link to="/favoritos">Mi Lista de Favoritos ⭐</Link>
            </button>
          </div>
        </header>
      </div>

      {movieSelected && movieSelected.length > 0
        ? movieSelected
            .filter((movie) => movie.Title && movie.Title.trim() !== "")
            .map((film, index) => (
              <main>
                <div className="card-movie-container">
                  <CardMovie
                    key={index}
                    Title={film.Title}
                    Year={film.Year}
                    Genre={film.Genre}
                    Runtime={film.Runtime}
                    Director={film.Director}
                    Actors={film.Actors}
                    imdbRating={film.imdbRating}
                    Poster={film.Poster}
                  />
                </div>
              </main>
            ))
        : null}
    </>
  );
}

export default App;
