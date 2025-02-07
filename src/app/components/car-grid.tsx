import Image from "next/image"
import Link from "next/link"
import { FiHeart } from "react-icons/fi"
import { FaGasPump, FaUsers } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"
import type { Car } from "../../../types/car"

interface CarGridProps {
  cars: Car[]
  favorites: string[]
  onToggleFavorite: (id: string) => void
}

export function CarGrid({ cars, favorites, onToggleFavorite }: CarGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cars.map((car) => (
        <div key={car._id} className="bg-white rounded-[10px] p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg text-[#1A202C]">{car.name}</h3>
              <p className="text-sm text-[#90A3BF]">{car.type}</p>
            </div>
            <button
              onClick={() => onToggleFavorite(car._id)}
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
                <span className="text-lg font-semibold text-[#1A202C]">{car.pricePerDay}</span>
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
  )
}

