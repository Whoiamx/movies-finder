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
      <header className="flex  p-5 justify-around items-center">
        <h1 className="  text-white text-4xl  font-extrabold ">Filmzone 🎬</h1>
        <nav className="flex justify-center items-center gap-2 text-center">
          <ul className="flex gap-3">
            <Link to="/later" className="text-white text-nowrap">
              Peliculas para ver
            </Link>
            <Link className="text-white text-nowrap" to="/favoritos">
              Tu lista de favoritos
            </Link>
          </ul>
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
              className="w-[40%] h-[2.5em] bg-orange-400 text-black text-[1.1rem] font-medium"
            >
              Buscar
            </button>
          </form>
        </nav>
      </header>
      <main>
        <section className="relative w-full h-[60vh] flex items-center justify-center text-white">
          {/* Imagen de fondo con animación de opacidad */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://a.ltrbxd.com/resized/sm/upload/cq/zm/xo/3z/wolf-of-wall-street-1200-1200-675-675-crop-000000.jpg')",
              backgroundPosition: "center top",
            }}
          ></div>

          {/* Overlay degradado oscuro */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40"></div>

          {/* Contenido del Hero */}
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
              Haz un seguimiento de las películas que has visto.
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto drop-shadow-md">
              Guarda las que quieres ver.
            </p>
            <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto drop-shadow-md">
              Y lo más importante, guarda tus{" "}
              <span className="text-yellow-200">favoritas</span>⭐
            </p>
          </div>
        </section>

        <h3>En base a tus ultimas busquedas</h3>

        {movieSelected && movieSelected.length > 0
          ? movieSelected
              .filter((movie) => movie.Title && movie.Title.trim() !== "")
              .map((film, index) => (
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
              ))
          : null}
      </main>
    </>
  );
}

export default App;
