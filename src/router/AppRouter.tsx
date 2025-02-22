import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App";
import { FavMovieSection } from "../components/FavMovieSection";
import { WatchLaterSection } from "../components/WatchLaterSection";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favoritos" element={<FavMovieSection />} />
        <Route path="/later" element={<WatchLaterSection />} />
      </Routes>
    </BrowserRouter>
  );
};
