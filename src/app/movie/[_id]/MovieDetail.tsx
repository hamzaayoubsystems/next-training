import { Movie } from "@/app/components/MovieModal";
import Link from "next/link";
interface MovieDetailViewProps {
  movie: Movie;
}
export default function MovieDetailView(props: MovieDetailViewProps) {
  const { movie } = props;
  return (
    <>
      <section className="bg-white dark:bg-red-900 m-6 p-4">
        <Link className="text-white" href="/">
          Back Home{" "}
        </Link>

        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
          <div className="flex justify-center xl:w-1/2">
            <img
              className="h-80 w-80 sm:w-[28rem] sm:h-[35rem] flex-shrink-0 object-cover rounded-md"
              src={movie.Poster}
              alt={movie.Poster}
            />
          </div>

          <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
              {movie.Title}
            </h2>

            <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              recusandae tenetur iste quaerat voluptatibus quibusdam nam
              repudiandae{" "}
            </p>
            <span className="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
              {movie.Title}
            </span>
            <span className="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
              {movie.Runtime}
            </span>

            <div className="mt-6 sm:-mx-2">
              <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto"
                >
                  <span className="mx-2">watch online</span>
                </a>
              </div>

              <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600"
                >
                  <span className="mx-2">download</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
