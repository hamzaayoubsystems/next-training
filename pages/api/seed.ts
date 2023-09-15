import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await prisma.movie.deleteMany();
  await prisma.movie.createMany({
    data: [
      {
        Title: "Batman",
        Year: "1989",
        Runtime: "118 min",
        Poster:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_.jpg",
        genre: "action",
      },
      {
        Title: "Doctor Strange",
        Year: "2016",
        Runtime: "115 min",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
        genre: "horror",
      },
      {
        Title: "The Lion King",
        Year: "2019",
        Runtime: "118 min",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
        genre: "comedy",
      },
      {
        Title: "Mowgli: Legend of the Jungle",
        Year: "2018",
        Runtime: "104 min",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
        genre: "action",
      },
      {
        Title: "The Notebook",
        Year: "2004",
        Runtime: "123 min",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
        genre: "horror",
      },

      {
        Title: "John Wick",
        Year: "2014",
        Runtime: "101 min",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
        genre: "comedy",
      },
      {
        Title: "Batman v Superman: Dawn of Justice",
        Year: "2016",
        Runtime: "118 min",
        Poster:
          "https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        genre: "action",
      },

      {
        Title: "The Dark Knight",
        Year: "2008",
        Runtime: "118 min",
        Poster:
          "https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        genre: "horror",
      },
    ],
  });
  res.status(200).json({ name: "hello" });
}
