import MovieItems from "./components/MovieItem";
import { PrismaClient } from "@prisma/client";
import { Movie } from "./components/MovieModal";
const prisma = new PrismaClient();

const fetchMoviesByFilter = async (filter: string): Promise<Movie[]> => {
  const movie = await prisma.movie.findMany({
    where: {
      genre: filter,
    },
  });

  if (!movie) {
    throw new Error();
  }

  return movie;
};
const fetchMovies = async (): Promise<Movie[]> => {
  const movie = await prisma.movie.findMany();

  if (!movie) {
    throw new Error();
  }

  return movie;
};
export default async function Home({
  searchParams,
}: {
  searchParams: { filter: string };
}) {
  const movies = searchParams.filter
    ? await fetchMoviesByFilter(searchParams.filter)
    : await fetchMovies();
  return (
    <div className="grid grid-cols-3 gap-4">
      {movies.map((movie) => {
        return <MovieItems key={movie.id} movie={movie} />;
      })}
    </div>
  );
}
