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
      <div>
        <header className="header">
          <h1>Busca tu pelicula o serie favorita 🎬</h1>
          <form className="form">
            <input
              ref={inputRef}
              type="text"
              placeholder="Busca tu pelicula..."
            />
            <button
              id="search-button"
              onClick={(e) => searchMovie(e)}
              type="submit"
            >
              Buscar
            </button>
          </form>
          <div className="nav-list">
            <button>
              <Link to="/later"> Mi Lista por Ver 🕶</Link>
            </button>
            <button>
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
