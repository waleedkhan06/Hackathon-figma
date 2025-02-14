"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FiHeart } from "react-icons/fi"
import { BsFuelPump, BsGearWide } from "react-icons/bs"
import { HiOutlineUsers } from "react-icons/hi"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"
import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

import "swiper/css"

// Sanity client setup
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: false,
})

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Sanity query
const allCarsQuery = `*[_type == "car"] {
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
}`

// Types
interface Car {
  _id: string
  name: string
  slug: string
  brand: string
  type: string
  fuelCapacity: string
  transmission: string
  seatingCapacity: string
  pricePerDay: string
  originalPrice?: string
  tags: string[]
  image: SanityImageSource
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// CarCard component
function CarCard({
  car,
  isFavorite,
  onToggleFavorite,
}: { car: Car; isFavorite: boolean; onToggleFavorite: (id: string) => void }) {
  return (
    <motion.div className="bg-white dark:bg-gray-800 p-4 rounded-2xl" variants={fadeInUp}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <Link href={`/car/${car.slug}`} className="group">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {car.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
              {car.brand}
            </p>
          </Link>
        </div>
        <button
          onClick={() => onToggleFavorite(car._id)}
          className={`${isFavorite ? "text-red-500" : "text-[#90A3BF] dark:text-gray-400"} hover:text-red-500 transition-colors`}
          aria-label={`Add ${car.name} to favorites`}
        >
          <FiHeart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="relative h-[120px] mx-[-8px]">
        <Image src={urlFor(car.image).url() || "/placeholder.svg"} alt={car.name} fill className="object-contain" />
      </div>

      <div className="flex justify-between mt-4 mb-4">
        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
          <BsFuelPump className="w-4 h-4 dark:text-blue-500" />
          <span className="text-sm">{car.fuelCapacity}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
          <BsGearWide className="w-4 h-4 dark:text-blue-500" />
          <span className="text-sm">{car.transmission}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
          <HiOutlineUsers className="w-4 h-4 dark:text-blue-500" />
          <span className="text-sm">{car.seatingCapacity}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
        <div>
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            {car.pricePerDay}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">/day</span>
          </p>
          {car.originalPrice && (
            <p className="text-sm text-[#90A3BF] dark:text-gray-500 line-through">{car.originalPrice}</p>
          )}
        </div>
        <Link
          href={`/book-a-ride/${car.slug}`}
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Book a ride
        </Link>
      </div>
    </motion.div>
  )
}

// Toast component
function Toast({ message }: { message: string }) {
  return <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">{message}</div>
}

// Main Hero component
export default function Hero() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [cars, setCars] = useState<Car[]>([])
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: "", visible: false })

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const fetchedCars = await client.fetch<Car[]>(allCarsQuery)
        setCars(fetchedCars)
      } catch (error) {
        console.error("Error fetching cars:", error)
      }
    }

    fetchCars()

    const storedFavorites = localStorage.getItem("favorites")
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  const toggleFavorite = (carId: string) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]
      localStorage.setItem("favorites", JSON.stringify(newFavorites))

      const car = cars.find((c) => c._id === carId)
      if (car) {
        const message = newFavorites.includes(carId)
          ? `${car.name} added to wishlist`
          : `${car.name} removed from wishlist`
        setToast({ message, visible: true })
        setTimeout(() => setToast({ message: "", visible: false }), 3000)
      }

      return newFavorites
    })
  }

  const popularCars = cars.filter((car) => car.tags?.includes("popular"))
  const recommendedCars = cars.filter((car) => car.tags?.includes("recommended"))

  return (
    <motion.div
      className="bg-gray-50 dark:bg-gray-900 min-h-screen"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <div className="container mx-auto px-4 py-8 space-y-12">
        <motion.div className="grid md:grid-cols-2 gap-6" variants={fadeInUp}>
          <motion.div variants={fadeInUp}>
            <Image
              src="/Ad 1.png"
              alt="White sports car"
              className="w-full rounded object-cover"
              width={500}
              height={300}
            />
          </motion.div>
          <motion.div className="hidden sm:block" variants={fadeInUp}>
            <Image
              src="/Ads 2.png"
              alt="Silver sports car"
              className="w-full rounded object-cover"
              width={500}
              height={300}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] items-center gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm relative"
          variants={fadeInUp}
        >
          <motion.div
            className="space-y-4 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md relative z-10"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#3563E9] rounded-full"></div>
              <span className="text-sm font-medium text-[#1A202C] dark:text-white">Pick-Up</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Enter city"
                className="w-full px-4 py-3 rounded-lg border border-[#C3D4E9] dark:border-gray-600 text-[#1A202C] dark:text-white bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-[#3563E9] dark:focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Select date"
                className="w-full px-4 py-3 rounded-lg border border-[#C3D4E9] dark:border-gray-600 text-[#1A202C] dark:text-white bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-[#3563E9] dark:focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Select time"
                className="w-full px-4 py-3 rounded-lg border border-[#C3D4E9] dark:border-gray-600 text-[#1A202C] dark:text-white bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-[#3563E9] dark:focus:ring-blue-500"
              />
            </div>
          </motion.div>

          <div className="absolute md:static inset-0 flex justify-center items-center z-20">
            <Link href="/car-rental" className="flex justify-center items-center">
              <Image
                src="/Switch.png"
                alt="Swap Icon"
                className="h-60px w-60px sm:h-64px sm:w-64px md:top-0 md:transform-none -top-10"
                width={150}
                height={150}
              />
            </Link>
          </div>

          <motion.div
            className="space-y-4 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md relative z-10"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#3563E9] rounded-full"></div>
              <span className="text-sm font-medium text-[#1A202C] dark:text-white">Drop-Off</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Enter location"
                className="w-full px-4 py-3 rounded-lg border border-[#C3D4E9] dark:border-gray-600 text-[#1A202C] dark:text-white bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-[#3563E9] dark:focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Select date"
                className="w-full px-4 py-3 rounded-lg border border-[#C3D4E9] dark:border-gray-600 text-[#1A202C] dark:text-white bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-[#3563E9] dark:focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Select time"
                className="w-full px-4 py-3 rounded-lg border border-[#C3D4E9] dark:border-gray-600 text-[#1A202C] dark:text-white bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-[#3563E9] dark:focus:ring-blue-500"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Popular Cars */}
        <motion.section className="space-y-6" variants={fadeInUp}>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-[#90A3BF] dark:text-gray-300">Popular Cars</h2>
            <Link href="/" className="text-[#3563E9] hover:text-[#2651D4] dark:text-blue-400 dark:hover:text-blue-300">
              View All
            </Link>
          </div>

          <div className="md:hidden">
            <Swiper
              spaceBetween={16}
              slidesPerView={1.2}
              breakpoints={{
                390: {
                  slidesPerView: 1.5,
                },
                480: {
                  slidesPerView: 2,
                },
              }}
            >
              {popularCars.slice(0, 5).map((car) => (
                <SwiperSlide key={car._id}>
                  <CarCard car={car} isFavorite={favorites.includes(car._id)} onToggleFavorite={toggleFavorite} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <motion.div
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6"
            variants={staggerChildren}
          >
            {popularCars.map((car) => (
              <CarCard
                key={car._id}
                car={car}
                isFavorite={favorites.includes(car._id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </motion.div>
        </motion.section>

        {/* Recommended Cars */}
        <motion.section className="space-y-6" variants={fadeInUp}>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-[#90A3BF] dark:text-gray-300">Recommended Cars</h2>
            <Link href="/" className="text-[#3563E9] hover:text-[#2651D4] dark:text-blue-400 dark:hover:text-blue-300">
              View All
            </Link>
          </div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6" variants={staggerChildren}>
            {recommendedCars.map((car) => (
              <CarCard
                key={car._id}
                car={car}
                isFavorite={favorites.includes(car._id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </motion.div>
        </motion.section>
      </div>

       {toast.visible && <Toast message={toast.message} />}
    </motion.div>
  )
}

      