import { create } from "zustand";
import { Movie } from "../ApiResults";
import { persist } from "zustand/middleware";

interface State {
  movies: Movie[];
  moviesSaved: Movie[];
  moviesToWatch: Movie[];
  moviesSearched: Movie[];
  fetchedMovies: (movie: string) => void;
  savedMovies: (savedMovie: Movie[]) => void;
  toWatchMovies: (toWatch: Movie[]) => void;
  filterSavedMovies: (movieToDelete: string) => void;
  filterToWatchMovies: (movieToDelete: string) => void;
  resetSearch: () => void;
  moviesSearchedHistory: (movieToAdd: Movie[]) => void;
}

export const useMovie = create<State>()(
  persist(
    (set) => {
      return {
        movies: [],
        moviesSaved: [],
        moviesToWatch: [],
        moviesSearched: [],

        fetchedMovies: async (movie: string) => {
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=632ad8cc&t=${movie}`
          );
          const json = await res.json();
          if (json.Response === "False") {
            console.warn(`Película no encontrada: ${movie}`);
            return;
          }

          set({
            movies: [json],
          });
        },

        savedMovies: (savedMovie: Movie[]) => {
          set((state) => ({
            ...state,
            moviesSaved: [...state.moviesSaved, ...savedMovie],
          }));
        },
        toWatchMovies: (toWatch: Movie[]) => {
          set((state) => ({
            ...state,
            moviesToWatch: [...state.moviesToWatch, ...toWatch],
          }));
        },

        filterSavedMovies: (movieToDelete: string) => {
          set((state) => ({
            ...state,
            moviesSaved: state.moviesSaved.filter((film) => {
              return film.Title !== movieToDelete;
            }),
          }));
        },
        filterToWatchMovies: (movieToDelete: string) => {
          set((state) => ({
            ...state,
            moviesToWatch: state.moviesToWatch.filter((film) => {
              return film.Title !== movieToDelete;
            }),
          }));
        },

        resetSearch: () => {
          set((state) => ({
            ...state,
            movies: [],
          }));
        },

        moviesSearchedHistory: (movieToAdd: Movie[]) => {
          set((state) => ({
            ...state,
            moviesSearched: [
              ...state.moviesSearched,
              ...movieToAdd.filter(
                (movie) =>
                  !state.moviesSearched.some((m) => m.Title === movie.Title)
              ),
            ],
          }));
        },
      };
    },
    { name: "Storage" }
  )
);
