"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";
import type { Car } from "../../../types/car";


const carFields = `
  _id,
  name,
  "slug": slug.current,
  brand,
  type,
  fuelCapacity,
  transmission,
  seatingCapacity,
  pricePerDay,
  originalPrice,
  tags,
  image
`;

export default function Featured() {
  const [featuredCars, setFeaturedCars] = useState<Car[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchFeaturedCars = async () => {
      const query = `*[_type == "car" && "featured" in tags] { ${carFields} }`;
      const cars = await client.fetch(query);
      setFeaturedCars(cars);
    };

    fetchFeaturedCars();
  }, []);

  const displayedCars = showAll ? featuredCars : featuredCars.slice(0, 8);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Featured Cars
        </h1>

        {featuredCars.length === 0 ? (
          <div className="text-center text-gray-600 dark:text-gray-400">
            Loading featured cars...
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
              {displayedCars.map((car) => (
                <div
                  key={car._id}
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="aspect-video relative">
                    {car.image ? (
                      <Image
                        src={urlFor(car.image).url()}
                        alt={car.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <Image
                        src="/placeholder.svg"
                        alt="Placeholder"
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {car.name}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {car.brand} - {car.type}, {car.transmission},{" "}
                        {car.seatingCapacity} Seats
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="space-y-1">
                        <span className="text-blue-600 font-semibold text-lg">
                          {car.pricePerDay}
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            /day
                          </span>
                        </span>
                        {car.originalPrice && (
                          <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                            {car.originalPrice}
                          </div>
                        )}
                      </div>
                      <Link
                        href={`/book-a-ride/${car.slug}`}
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {featuredCars.length > 8 && (
              <div className="mt-12 text-center">
                {showAll ? (
                  <Link
                    href="/car-rental"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View All Cars
                  </Link>
                ) : (
                  <button
                    onClick={() => setShowAll(true)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Show More
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
