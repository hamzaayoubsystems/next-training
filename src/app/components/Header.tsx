"use client";

import { useContext, Fragment } from "react";
import Link from "next/link";
import MovieContext from "../context/MovieContext";

const Header = () => {
  const { searchMoviesHandler, filterMoviesHandler } = useContext(MovieContext);
  return (
    <div className="relative flex items-center justify-between mb-8 h-16 bg-red-500">
      <div className="flex items-center px-2 lg:px-0">
        <Link href={"/"} className="flex ml-2 text-2xl font-semibold">
          Movies
        </Link>
      </div>

      <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
        <div className="max-w-lg w-full lg:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search{" "}
          </label>
          <form method="get" action="#" className="relative z-50">
            <button
              type="submit"
              id="searchsubmit"
              className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <input
              type="search"
              className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 b text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Search"
              onChange={searchMoviesHandler}
            />
          </form>
        </div>
      </div>

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
    </div>
  );
};

export default Header;
