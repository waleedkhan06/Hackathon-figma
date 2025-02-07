"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { FiHeart, FiMenu } from "react-icons/fi"
import { FaGasPump, FaUsers } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"
import { client } from "@/sanity/lib/sanity"

interface Car {
  _id: string
  name: string
  brand: string
  type: string
  slug: string
  image: string
  fuelCapacity: string
  transmission: string
  seatingCapacity: string
  pricePerDay: string
  originalPrice?: string
}

export default function CarRentalWithSidebar() {
  // Base data state
  const [allCars, setAllCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)

  // UI state
  const [showSidebar, setShowSidebar] = useState(true)
  const [favorites, setFavorites] = useState<string[]>([])

  // Filter state
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([])
  const [maxPrice, setMaxPrice] = useState(1000)

  // Fetch cars only once on mount
  useEffect(() => {
    const fetchCars = async () => {
      try {
        console.log("Fetching cars...")
        const result = await client.fetch(`
          *[_type == "car"] {
            _id,
            name,
            brand,
            type,
            "slug": slug.current,
            "image": image.asset->url,
            fuelCapacity,
            transmission,
            seatingCapacity,
            pricePerDay,
            originalPrice
          }
        `)
        console.log("Fetched cars:", result)
        setAllCars(result)
      } catch (error) {
        console.error("Error fetching cars:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  // Memoize unique values for filters
  const { uniqueTypes, uniqueCapacities } = useMemo(() => {
    return {
      uniqueTypes: Array.from(new Set(allCars.map((car) => car.type))),
      uniqueCapacities: Array.from(new Set(allCars.map((car) => car.seatingCapacity))),
    }
  }, [allCars])

  // Memoize filtered cars
  const filteredCars = useMemo(() => {
    console.log("Filtering cars with:", {
      selectedTypes,
      selectedCapacities,
      maxPrice,
    })

    return allCars.filter((car) => {
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(car.type)
      const capacityMatch = selectedCapacities.length === 0 || selectedCapacities.includes(car.seatingCapacity)
      const priceMatch = Number.parseInt(car.pricePerDay) <= maxPrice
      return typeMatch && capacityMatch && priceMatch
    })
  }, [allCars, selectedTypes, selectedCapacities, maxPrice])

  // Callbacks for filter changes
  const toggleType = useCallback((type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }, [])

  const toggleCapacity = useCallback((capacity: string) => {
    setSelectedCapacities((prev) =>
      prev.includes(capacity) ? prev.filter((c) => c !== capacity) : [...prev, capacity],
    )
  }, [])

  const toggleFavorite = useCallback((carId: string) => {
    setFavorites((prev) => (prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]))
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold">Loading cars...</div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-[#F6F7F9]">
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md"
      >
        <FiMenu className="w-6 h-6 text-[#3563E9]" />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen
          w-[280px] bg-white shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${showSidebar ? "translate-x-0" : "-translate-x-full"}
          overflow-y-auto
          z-40
        `}
      >
        <div className="p-8 pt-16 space-y-8">
          {/* Type Filter */}
          <div>
            <h3 className="text-xs font-semibold text-[#90A3BF] mb-4">TYPE</h3>
            <div className="space-y-4">
              {uniqueTypes.map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => toggleType(type)}
                    className="w-5 h-5 rounded border-gray-300 text-[#3563E9] focus:ring-[#3563E9]"
                  />
                  <span className="ml-3 text-sm text-[#596780]">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Capacity Filter */}
          <div>
            <h3 className="text-xs font-semibold text-[#90A3BF] mb-4">CAPACITY</h3>
            <div className="space-y-4">
              {uniqueCapacities.map((capacity) => (
                <label key={capacity} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCapacities.includes(capacity)}
                    onChange={() => toggleCapacity(capacity)}
                    className="w-5 h-5 rounded border-gray-300 text-[#3563E9] focus:ring-[#3563E9]"
                  />
                  <span className="ml-3 text-sm text-[#596780]">{capacity} Person</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-xs font-semibold text-[#90A3BF] mb-4">PRICE</h3>
            <input
              type="range"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-2 bg-[#4f7fdf] rounded-lg appearance-none cursor-pointer accent-[#3563E9]"
            />
            <div className="mt-2 text-sm text-[#596780]">Max. ${maxPrice}</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`
        flex-1 p-4 lg:p-8
        transition-all duration-300
        ${showSidebar ? "lg:ml-[280px]" : "lg:ml-0"}
      `}
      >
        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div key={car._id} className="bg-white rounded-[10px] p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-[#1A202C]">{car.name}</h3>
                  <p className="text-sm text-[#90A3BF]">{car.type}</p>
                </div>
                <button
                  onClick={() => toggleFavorite(car._id)}
                  className={`${favorites.includes(car._id) ? "text-red-500" : "text-[#90A3BF]"}`}
                  aria-label={`Add ${car.name} to favorites`}
                >
                  <FiHeart className={`w-6 h-6 ${favorites.includes(car._id) ? "fill-current" : ""}`} />
                </button>
              </div>

              <div className="relative h-40 mb-4">
                <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-contain" />
              </div>

              <div className="flex justify-between text-sm text-[#90A3BF] mb-4">
                <div className="flex items-center gap-2">
                  <FaGasPump className="w-4 h-4" />
                  <span>{car.fuelCapacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGear className="w-4 h-4" />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="w-4 h-4" />
                  <span>{car.seatingCapacity}</span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-semibold text-[#1A202C]">${car.pricePerDay}</span>
                    <span className="text-sm text-[#90A3BF]">/day</span>
                  </div>
                  {car.originalPrice && <div className="text-sm text-[#90A3BF] line-through">${car.originalPrice}</div>}
                </div>
                <Link
                  href={`/car-payment/${car.slug}`}
                  className="bg-[#3563E9] text-white px-5 py-2 rounded-[4px] text-sm font-semibold hover:bg-[#2651D4] transition-colors"
                >
                  Rent Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div className="mt-8 text-right">
          <p className="text-sm text-[#90A3BF]">
            {filteredCars.length} Car{filteredCars.length !== 1 ? "s" : ""} found
          </p>
        </div>
      </main>

      {/* Mobile Overlay */}
      {showSidebar && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setShowSidebar(false)}
          aria-hidden="true"
        />
      )}
    </div>
  )
}

