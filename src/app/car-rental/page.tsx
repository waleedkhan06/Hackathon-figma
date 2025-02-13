"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FiHeart, FiMenu } from "react-icons/fi"
import { FaGasPump, FaUsers } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"
import AOS from "aos"
import { client, allCarsQuery, urlFor } from "@/sanity/lib/sanity"
import "aos/dist/aos.css"
import Toast from "../components/Toast"
import imageUrlBuilder from "@sanity/image-url"


interface Car {
  _id: string
  name: string
  brand: string
  type: string
  slug: string
  image: any // This should match the type returned by Sanity for image fields
  fuelCapacity: string
  transmission: string
  seatingCapacity: string
  pricePerDay: string
  originalPrice?: string
  tags: string[]
}

const initialFilterOptions = {
  type: [
    { label: "Sport", count: 0, checked: false },
    { label: "SUV", count: 0, checked: false },
    { label: "MPV", count: 0, checked: false },
    { label: "Sedan", count: 0, checked: false },
    { label: "Coupe", count: 0, checked: false },
    { label: "Hatchback", count: 0, checked: false },
  ],
  capacity: [
    { label: "2 Person", count: 0, checked: false },
    { label: "4 Person", count: 0, checked: false },
    { label: "6 Person", count: 0, checked: false },
    { label: "8 or More", count: 0, checked: false },
  ],
}

export default function CarRental() {
  const [cars, setCars] = useState<Car[]>([])
  const [filteredCars, setFilteredCars] = useState<Car[]>([])
  const [displayedCars, setDisplayedCars] = useState<Car[]>([])
  const [maxPrice, setMaxPrice] = useState(1000)
  const [favorites, setFavorites] = useState<string[]>([])
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [selectedSection, setSelectedSection] = useState<"pickup" | "dropoff">("pickup")
  const [filters, setFilters] = useState(initialFilterOptions)
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: "", visible: false })

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })

    const fetchCars = async () => {
      try {
        const fetchedCars = await client.fetch(allCarsQuery)
        setCars(fetchedCars)
        setFilteredCars(fetchedCars)
        setDisplayedCars(fetchedCars.slice(0, 12))
        updateFilterCounts(fetchedCars)
      } catch (error) {
        console.error("Error fetching cars:", error)
      }
    }

    fetchCars()
  }, [])

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites")
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  const updateFilterCounts = (cars: Car[]) => {
    const typeCounts = new Map<string, number>()
    const capacityCounts = new Map<string, number>()

    cars.forEach((car) => {
      typeCounts.set(car.type, (typeCounts.get(car.type) || 0) + 1)

      const seatCount = Number.parseInt(car.seatingCapacity.replace(/\D/g, ""))
      let capacityLabel = ""
      if (seatCount >= 8) {
        capacityLabel = "8 or More"
      } else {
        capacityLabel = `${seatCount} Person`
      }
      capacityCounts.set(capacityLabel, (capacityCounts.get(capacityLabel) || 0) + 1)
    })

    setFilters((prev) => ({
      type: prev.type.map((filter) => ({
        ...filter,
        count: typeCounts.get(filter.label) || 0,
      })),
      capacity: prev.capacity.map((filter) => ({
        ...filter,
        count: capacityCounts.get(filter.label) || 0,
      })),
    }))
  }

  useEffect(() => {
    const applyFilters = () => {
      const activeTypes = filters.type.filter((f) => f.checked).map((f) => f.label)
      const activeCapacities = filters.capacity
        .filter((f) => f.checked)
        .map((f) => (f.label === "8 or More" ? 8 : Number.parseInt(f.label)))

      const filtered = cars.filter((car) => {
        const typeMatch = activeTypes.length === 0 || activeTypes.includes(car.type)

        const seatCount = Number.parseInt(car.seatingCapacity.replace(/\D/g, ""))
        let capacityMatch = activeCapacities.length === 0
        if (!capacityMatch) {
          capacityMatch = activeCapacities.some((cap) => {
            if (cap === 8) return seatCount >= 8
            return seatCount === cap
          })
        }

        const price = Number(car.pricePerDay.replace(/[^0-9.-]+/g, ""))
        const priceMatch = price <= maxPrice

        return typeMatch && capacityMatch && priceMatch
      })

      setFilteredCars(filtered)
      setDisplayedCars(filtered.slice(0, 12))
    }

    applyFilters()
  }, [cars, filters, maxPrice])

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

  const showMoreCars = () => {
    const currentLength = displayedCars.length
    const newCars = filteredCars.slice(currentLength, currentLength + 4)
    setDisplayedCars([...displayedCars, ...newCars])
  }

  const toggleFilter = (type: "type" | "capacity", label: string) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].map((filter) => ({
        ...filter,
        checked: filter.label === label ? !filter.checked : filter.checked,
      })),
    }))
  }

  return (
    <div className="flex min-h-screen bg-[#F6F7F9] dark:bg-gray-900">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-md dark:text-white"
        aria-label="Toggle sidebar"
      >
        <FiMenu className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen
          w-[280px] sm:w-[320px] lg:w-[360px] 
          bg-white dark:bg-gray-800 shadow-lg
          transform lg:transform-none transition-transform duration-300 ease-in-out
          ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          overflow-y-auto
          z-40
          border-r border-gray-100 dark:border-gray-700
        `}
      >
        <div className="p-8 pt-16 lg:pt-8 space-y-8">
          {/* Type Filter */}
          <div>
            <h3 className="text-xs font-semibold text-[#90A3BF] dark:text-gray-300 mb-4">TYPE</h3>
            <div className="space-y-4">
              {filters.type.map((option) => (
                <label key={option.label} className="flex items-center dark:text-gray-300">
                  <input
                    type="checkbox"
                    checked={option.checked}
                    onChange={() => toggleFilter("type", option.label)}
                    className="w-5 h-5 rounded border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-500 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700"
                  />
                  <span className="ml-3 text-sm text-[#596780] dark:text-gray-300">
                    {option.label} ({option.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Capacity Filter */}
          <div>
            <h3 className="text-xs font-semibold text-[#90A3BF] dark:text-gray-300 mb-4">CAPACITY</h3>
            <div className="space-y-4">
              {filters.capacity.map((option) => (
                <label key={option.label} className="flex items-center dark:text-gray-300">
                  <input
                    type="checkbox"
                    checked={option.checked}
                    onChange={() => toggleFilter("capacity", option.label)}
                    className="w-5 h-5 rounded border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-500 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700"
                  />
                  <span className="ml-3 text-sm text-[#596780] dark:text-gray-300">
                    {option.label} ({option.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-xs font-semibold text-[#90A3BF] dark:text-gray-300 mb-4">PRICE</h3>
            <input
              type="range"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number.parseInt(e.target.value))}
              className="w-full h-2 bg-blue-600 dark:bg-gray-700 rounded-lg appearance-gray-300 dark:appearance-gray-600 cursor-pointer accent-blue-600 dark:accent-blue-400"
            />
            <div className="mt-2 text-sm text-[#596780] dark:text-gray-300">Max. ${maxPrice}.00</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8">
        {/* Pick-up & Drop-off Section */}
        <div className="bg-white dark:bg-gray-800 rounded-[10px] p-4 lg:p-6 mb-8" data-aos="fade-up">
          {/* ... (Pick-up & Drop-off section content remains the same) ... */}
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCars.map((car, index) => (
            <div
              key={car._id}
              className="bg-white dark:bg-gray-800 rounded-[10px] p-4 hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-[#1A202C] dark:text-white">{car.name}</h3>
                  <p className="text-sm text-[#90A3BF] dark:text-gray-400">{car.type}</p>
                </div>
                <button
                  onClick={() => toggleFavorite(car._id)}
                  className="relative group"
                  aria-label={`Add ${car.name} to favorites`}
                >
                  <FiHeart
                    className={`w-6 h-6 transition-colors ${
                      favorites.includes(car._id)
                        ? "text-red-500 fill-current"
                        : "text-[#90A3BF] dark:text-gray-300 group-hover:text-red-500"
                    }`}
                  />
                  {favorites.includes(car._id) && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      ✓
                    </span>
                  )}
                </button>
              </div>

              <div className="relative h-40 mb-4">
              {/* <Image
      src={urlFor(car.image)?.url() || "/placeholder.svg"}
      alt={car.name}
      fill
      className="object-contain"
    /> */}
              </div>

              <div className="flex justify-between text-sm text-[#90A3BF] dark:text-gray-300 mb-4">
                <div className="flex items-center gap-2">
                  <FaGasPump className="w-4 h-4 dark: text-blue-500" />
                  <span>{car.fuelCapacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGear className="w-4 h-4 dark: text-blue-500" />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="w-4 h-4 dark: text-blue-500" />
                  <span>{car.seatingCapacity}</span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-semibold text-[#1A202C] dark:text-blue-300">{car.pricePerDay}</span>
                    <span className="text-sm text-[#90A3BF] dark:text-gray-300">/day</span>
                  </div>
                  {car.originalPrice && (
                    <div className="text-sm text-[#90A3BF] dark:text-gray-300 line-through">{car.originalPrice}</div>
                  )}
                </div>
                <Link
                  href={`/car-payment/${car.slug}`}
                  className="bg-blue-600 dark:bg-blue-500 text-white px-5 py-2 rounded-[4px] text-sm font-semibold hover:bg-blue-700 dark:hover:bg-blue-400"
                >
                  Rent Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length > displayedCars.length && (
          <div className="mt-8 flex justify-center" data-aos="fade-up">
            <button
              onClick={showMoreCars}
              className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-[4px] text-sm font-semibold hover:bg-blue-700 dark:hover:bg-blue-400"
            >
              Show more cars
            </button>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between" data-aos="fade-up">
          <div className="flex-1" />
          <div className="flex-1 text-right">
            <p className="text-sm text-[#90A3BF] dark:text-gray-300">
              {filteredCars.length} Car{filteredCars.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </main>

      {/* Mobile Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
      {toast.visible && <Toast message={toast.message} />}
    </div>
  )
}

