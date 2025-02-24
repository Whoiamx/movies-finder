import { useMovie } from "../store/movieStore";
import { MoviesFavBannerItem } from "./MoviesFavBannerItem";

export const MoviesFavBanner = () => {
  const favmovies = useMovie((state) => state.moviesSaved);
  return (
    <>
      {favmovies.length ? (
        <div className="font-inter flex flex-col p-4 gap-4">
          <h4 className="text-white font-extrabold text-2xl">
            Tus favoritos ⭐
          </h4>
          <MoviesFavBannerItem />
        </div>
      ) : null}
    </>
  );
};
