import { Movie } from "@/app/components/MovieModal";
import MovieDetailView from "./MovieDetail";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const fetchMovieById = async (id: any): Promise<Movie> => {
  const movie = await prisma.movie.findUnique({
    where: {
      id,
    },
  });

  if (!movie) {
    prisma.$disconnect();

    throw new Error();
  }
  prisma.$disconnect();

  return movie;
};

export default async function MovieDetail({
  params,
}: {
  params: { _id: any };
}) {
  const movie = await fetchMovieById(Number(params._id));
  return <MovieDetailView movie={movie} />;
}
