"use client";

import { useContext } from "react";
import MovieContext from "../context/MovieContext";

const Filter = () => {
  const { filterMoviesHandler } =
    useContext(MovieContext);
  return (
    <div className="flex-2 inline-block text-left  justify-center px-2 ">
      <select
        onChange={filterMoviesHandler}
        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      >
        <option value="" selected>
          Filter By Genre
        </option>
        <option value="action">Action</option>
        <option value="horror">Horror</option>
        <option value="comedy">Comedy</option>
      </select>
    </div>
  );
};
export default Filter;
