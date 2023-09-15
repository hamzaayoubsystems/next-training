"use client";

import { useContext } from "react";
import MovieItems from "./components/MovieItem";
import MovieContext from "./context/MovieContext";
import Loading from "./loading";

export default function Home() {
  const { filteredMovies, isLoading } = useContext(MovieContext);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="grid grid-cols-3 gap-4">
      {filteredMovies.map((movie) => {
        return <MovieItems key={movie.id} movie={movie} />;
      })}
    </div>
  );
}
