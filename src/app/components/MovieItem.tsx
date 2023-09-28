import Link from "next/link";
import React from "react";
import { Movie } from "./MovieModal";
interface MovieItemsProps {
  movie: Movie;
}
const MovieItems = (props: MovieItemsProps) => {
  const { id, Poster, Title, Year, Runtime } = props.movie;

  return (
    <div className="max-w-sm bg-white rounded-lg border border-red-200 shadow-md dark:bg-red-800 dark:border-red-700">
      <div className="flex justify-center pt-3">
        <Link href={`/movie/${id}`}>
          <img className="rounded-t-lg h-80" src={Poster} alt={Title} />
        </Link>
      </div>
      <div className="p-5">
        <Link href={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Title}
          </h5>
        </Link>

        <span className="mr-4 ">{Year}</span>
        <span>{Runtime}</span>
      </div>
    </div>
  );
};

export default MovieItems;
