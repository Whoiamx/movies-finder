import { useMovie } from "../store/movieStore";
import { MoviesFavBannerItem } from "./MoviesFavBannerItem";

export const MoviesLaterBanner = () => {
  const latermovies = useMovie((state) => state.moviesToWatch);

  return (
    <>
      {latermovies.length ? (
        <div className="font-inter flex flex-col p-4 gap-4">
          <h4 className="text-white font-extrabold text-2xl">
            Tu lista para ver mas tarde ⌚
          </h4>
          <MoviesFavBannerItem moviesToRender={latermovies} />
        </div>
      ) : null}
    </>
  );
};
