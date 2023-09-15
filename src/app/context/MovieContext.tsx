"use client";
import { createContext, useState, useEffect } from "react";
import { Movie } from "../components/MovieModal";
import axios from "axios";

const initialState: {
  movies: Movie[];
  filteredMovies: Movie[];
  searchMoviesHandler: any;
  filterMoviesHandler: any;
  isLoading: boolean;
} = {
  movies: [],
  filteredMovies: [],
  searchMoviesHandler: () => {},
  filterMoviesHandler: () => {},
  isLoading: false,
};

const MovieContext = createContext(initialState);
type MovieContextProps = React.PropsWithChildren;
export const MovieProvider = ({ children }: MovieContextProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiUrl = "/api/movie";

    // Fetch data from the API route
    async function fetchData() {
      setIsLoading(true);
      try {
        const data = (await axios.get(apiUrl)).data;
        console.log("data", data);
        setMovies(data);
        setIsLoading(false);
      } catch (error) {
        throw new Error();
      }
    }
    fetchData();
  }, []);

  const searchMoviesHandler = (event: React.ChangeEvent<{ value: string }>) => {
    const search = event.target.value.toLocaleLowerCase();
    setSearchInput(search);
  };

  const filterMoviesHandler = (event: React.ChangeEvent<{ value: string }>) => {
    const filterMovie = event.target.value.toLocaleLowerCase();
    setFilter(filterMovie);
  };
  let filteredMovies =
    filter.length > 0
      ? movies?.filter((movie: Movie) => {
          return movie.genre.toLocaleLowerCase().includes(filter);
        })
      : movies?.filter((movie: Movie) => {
          return movie.Title.toLocaleLowerCase().includes(searchInput);
        });
  return (
    <MovieContext.Provider
      value={{
        filteredMovies,
        searchMoviesHandler,
        movies,
        filterMoviesHandler,
        isLoading,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
