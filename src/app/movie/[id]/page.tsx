import { Movie } from "@/app/components/MovieModal";
import { PrismaClient } from "@prisma/client";
import MovieDetailView from "./MovieDetail";
const prisma = new PrismaClient();

const fetchMovieById = async (id: any): Promise<Movie> => {
  const movie = await prisma.movie.findUnique({
    where: {
      id,
    },
  });

  if (!movie) {
    throw new Error();
  }

  return movie;
};

export default async function MovieDetail({ params }: { params: { id: any } }) {
  const movie = await fetchMovieById(Number(params.id));
  return <MovieDetailView movie={movie} />;
}
