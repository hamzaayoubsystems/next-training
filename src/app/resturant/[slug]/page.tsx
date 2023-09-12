"use client";

import React, { useEffect } from "react";

function RestaurantDetailPage() {
  useEffect(() => {}, []);
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-4">
          Restaurant Name
        </h1>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img
                src="restaurant-image.jpg"
                alt="Restaurant"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:w-2/3 md:ml-4">
              <p className="text-gray-700 mb-2">
                Location:{" "}
                <span className="text-gray-900">
                  123 Main Street
                </span>
              </p>
              <p className="text-gray-700 mb-2">
                Phone:{" "}
                <span className="text-gray-900">
                  (555) 555-5555
                </span>
              </p>
              <p className="text-gray-700 mb-2">
                Cuisine:{" "}
                <span className="text-gray-900">
                  Italian
                </span>
              </p>
              <p className="text-gray-700 mb-2">
                Hours:{" "}
                <span className="text-gray-900">
                  Mon-Fri: 10 AM - 9 PM
                </span>
              </p>
              <p className="text-gray-700">
                Description: Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
                Nullam sit amet magna ac odio
                sagittis mollis ac nec libero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailPage;
