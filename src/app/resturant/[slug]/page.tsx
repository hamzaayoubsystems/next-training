import { Cuisine, Location, PRICING, PrismaClient } from "@prisma/client";
import React, { useEffect } from "react";
const prisma = new PrismaClient();
export interface RestaurantCardType {
  id: number;
  name: string;
  image: string;
  slug: string;
  description: string;
  cuisine: Cuisine;
  location: Location;
  pricing: PRICING;
}
async function fetchData() {
  try {
    const restaurants: RestaurantCardType[] = await prisma.restaurant.findMany({
      select: {
        id: true,
        name: true,
        image: true,
        slug: true,
        pricing: true,
        location: true,
        cuisine: true,
        description: true,
      },
    });
    return restaurants;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array or handle the error as needed
  }
}

export default async function () {
  const restaurants: RestaurantCardType[] = await fetchData();

  return (
    <div className="bg-gray-100 py-8">
      {restaurants.map((restaurant: RestaurantCardType) => (
        <div key={restaurant.id} className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold mb-4">{restaurant.name}</h1>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={restaurant.image}
                  alt="Restaurant"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="md:w-2/3 md:ml-4">
                <p className="text-gray-700 mb-2">
                  {restaurant.location.name}
                  <span className="text-gray-900">123 Main Street</span>
                </p>

                <p className="text-gray-700 mb-2">
                  Cuisine:{" "}
                  <span className="text-gray-900">
                    {restaurant.cuisine.name}
                  </span>
                </p>

                <p className="text-gray-700">{restaurant.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
