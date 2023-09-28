import MovieItems from "@/app/components/MovieItem";
import { Movie } from "@/app/components/MovieModal";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const fetchMoviesByName = async (name: string): Promise<Movie[]> => {
  const movies = await prisma.movie.findMany({
    where: {
      Title: {
        contains: name,
        mode: "insensitive", // Perform a case-insensitive search
      },
    },
  });

  prisma.$disconnect();

  return movies;
};

export default async function SearchMovie({
  params,
}: {
  params: { _name: any };
}) {
  const movies = await fetchMoviesByName(params._name);
  return (
    <div className="grid grid-cols-3 gap-4">
      {movies.map((movie) => {
        return <MovieItems key={movie.id} movie={movie} />;
      })}
    </div>
  );
}
