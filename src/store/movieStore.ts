import { create } from "zustand";
import { Movie } from "../ApiResults";

interface State {
  movies: Movie[];
  moviesSaved: Movie[];
  moviesToWatch: Movie[];
  fetchedMovies: (movie: string) => void;
  savedMovies: (savedMovie: Movie[]) => void;
  toWatchMovies: (toWatch: Movie[]) => void;
}

export const useMovie = create<State>((set) => {
  return {
    movies: [],
    moviesSaved: [],
    moviesToWatch: [],

    fetchedMovies: async (movie: string) => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=632ad8cc&t=${movie}`
      );
      const json = await res.json();
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
  };
});
