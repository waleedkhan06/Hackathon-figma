"use client"

import { useState, useEffect } from "react"
import { client } from "@/sanity/lib/client"
import { CarCard } from "../components/CarCard"
import type { Car } from "../../../types/car"
import Toast from "../components/Toast"
import Image from "next/image"

export default function Wishlist() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [wishlistCars, setWishlistCars] = useState<Car[]>([])
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: "", visible: false })

  // Load favorites from localStorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites")
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  useEffect(() => {
    const fetchWishlistCars = async () => {
      if (favorites.length > 0) {
        const query = `*[_type == "car" && _id in $favorites] {
          _id,
          name,
          brand,
          "slug": slug.current,
          "image": image.asset->url,
          fuelCapacity,
          transmission,
          seatingCapacity,
          pricePerDay,
          originalPrice
        }`
        const cars = await client.fetch(query, { favorites })
        setWishlistCars(cars)
      } else {
        setWishlistCars([])
      }
    }

    fetchWishlistCars()
  }, [favorites])

  const toggleFavorite = (carId: string) => {
    setFavorites((prev) => {
      const newFavorites = prev.filter((id) => id !== carId)
      localStorage.setItem("favorites", JSON.stringify(newFavorites))

      const car = wishlistCars.find((c) => c._id === carId)
      if (car) {
        setToast({ message: `${car.name} removed from wishlist`, visible: true })
        setTimeout(() => setToast({ message: "", visible: false }), 3000)
      }

      return newFavorites
    })
  }

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8 text-center">My Wishlist</h1>

        {wishlistCars.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistCars.map((car) => (
              <CarCard key={car._id} car={car} isFavorite={true} onToggleFavorite={toggleFavorite} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-6">
            <Image
              src="/wishlist.webp"
              alt="Empty Wishlist"
              width={300}
              height={300}
              className="opacity-90 dark:opacity-100"
            />
            <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Your wishlist is empty.</p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Start adding your favorite cars to your wishlist!
            </p>
          </div>
        )}

        {toast.visible && <Toast message={toast.message} />}
      </div>
    </div>
  )
}

