import { Movie } from "../ApiResults";

export const MoviesFavBannerItem = ({
  moviesToRender,
}: {
  moviesToRender: Movie[];
}) => {
  return (
    <div className="flex  gap-2 overflow-x-auto scrollbar-hide">
      {moviesToRender.length
        ? moviesToRender.map((movie, index) => (
            <div
              className="relative flex flex-col w-36 gap-1 text-center group justify-center items-center "
              key={index}
            >
              <div className="relative">
                <img
                  className="w-[144px] h-[216px] rounded-md shadow-lg object-cover"
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <div className="absolute  inset-0 bg-black bg-opacity-80 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-md">
                  <h3 className="text-lg font-semibold">{movie.Title}</h3>
                  <p className="text-sm">{movie.Genre}</p>
                  <p className="text-yellow-400 font-semibold">
                    ⭐ {movie.imdbRating}
                  </p>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
