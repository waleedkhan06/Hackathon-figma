"use client"

import { useState } from "react"
import Image from "next/image"
import { FiHeart, FiChevronDown } from 'react-icons/fi';


// Sample car data
const cars = [
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/car1.png",
    capacity: "2 People",
    transmission: "Manual",
    fuel: "90L",
    price: "99.00",
    oldPrice: "100.00",
    isFavorite: true
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image: "/car2.png",
    capacity: "2 People",
    transmission: "Manual",
    fuel: "80L",
    price: "80.00",
    oldPrice: "100.00",
    isFavorite: false
  },
  {
    name: "Rolls-Royce",
    type: "Sport",
    image: "/car3.png",
    capacity: "4 People",
    transmission: "Manual",
    fuel: "70L",
    price: "96.00",
    oldPrice: "100.00",
    isFavorite: false
  },
  {
    name: "All New Rush",
    type: "SUV",
    image: "/car4.png",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "70L",
    price: "72.00",
    oldPrice: "80.00",
    isFavorite: false
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/car5.png",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "80L",
    price: "80.00",
    oldPrice: "100.00",
    isFavorite: true
  },
  {
    name: "All New Terios",
    type: "SUV",
    image: "/car6.png",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "90L",
    price: "74.00",
    oldPrice: "90.00",
    isFavorite: false
  },
  {
    name: "MG ZS Exclusive",
    type: "SUV",
    image: "/car7.png",
    capacity: "5 People",
    transmission: "Manual",
    fuel: "80L",
    price: "76.00",
    oldPrice: "85.00",
    isFavorite: false
  },
  {
    name: "New MG ZS",
    type: "SUV",
    image: "/car8.png",
    capacity: "5 People",
    transmission: "Manual",
    fuel: "80L",
    price: "80.00",
    oldPrice: "90.00",
    isFavorite: false
  },
  {
    name: "MG ZS Excite",
    type: "SUV",
    image: "/car9.png",
    capacity: "5 People",
    transmission: "Manual",
    fuel: "80L",
    price: "74.00",
    oldPrice: "85.00",
    isFavorite: true
  }
]

const filterOptions = {
  type: [
    { label: "Sport", count: 10, checked: true },
    { label: "SUV", count: 12, checked: true },
    { label: "MPV", count: 16, checked: false },
    { label: "Sedan", count: 20, checked: false },
    { label: "Coupe", count: 14, checked: false },
    { label: "Hatchback", count: 14, checked: false }
  ],
  capacity: [
    { label: "2 Person", count: 10, checked: true },
    { label: "4 Person", count: 14, checked: false },
    { label: "6 Person", count: 12, checked: false },
    { label: "8 or More", count: 16, checked: true }
  ]
}

const locations = ["Kota Semarang", "Jakarta", "Surabaya", "Bandung"]

export default function CarRental() {
  const [maxPrice, setMaxPrice] = useState(100)
  const [showMore, setShowMore] = useState(false)
  const displayedCars = showMore ? cars : cars.slice(0, 6)

  return (
    <div className="flex min-h-screen bg-[#F6F7F9]">
      {/* Sidebar */}
      <aside className="w-[320px] p-8 bg-white flex-shrink-0">
        <div className="space-y-8">
          {/* Type Filter */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 mb-4">TYPE</h3>
            <div className="space-y-4">
              {filterOptions.type.map((option) => (
                <label key={option.label} className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked={option.checked}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-sm text-gray-600">
                    {option.label} ({option.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Capacity Filter */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 mb-4">CAPACITY</h3>
            <div className="space-y-4">
              {filterOptions.capacity.map((option) => (
                <label key={option.label} className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked={option.checked}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-sm text-gray-600">
                    {option.label} ({option.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 mb-4">PRICE</h3>
            <input
              type="range"
              min="0"
              max="100"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="mt-2 text-sm text-gray-600">
              Max. ${maxPrice}.00
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Pick-up & Drop-off Section */}
        <div className="bg-white rounded-[10px] p-6 mb-8">
          <div className="grid grid-cols-2 gap-4">
            {/* Pick-up Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-sm font-medium">Pick - Up</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative">
                  <select className="w-full appearance-none bg-gray-50 rounded-lg px-4 py-2.5 text-sm text-gray-600 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600">
                    {locations.map(location => (
                      <option key={location}>{location}</option>
                    ))}
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <div className="relative">
                  <select className="w-full appearance-none bg-gray-50 rounded-lg px-4 py-2.5 text-sm text-gray-600 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>20 July 2022</option>
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <div className="relative">
                  <select className="w-full appearance-none bg-gray-50 rounded-lg px-4 py-2.5 text-sm text-gray-600 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>07:00</option>
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Drop-off Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-sm font-medium">Drop - Off</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative">
                  <select className="w-full appearance-none bg-gray-50 rounded-lg px-4 py-2.5 text-sm text-gray-600 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600">
                    {locations.map(location => (
                      <option key={location}>{location}</option>
                    ))}
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <div className="relative">
                  <select className="w-full appearance-none bg-gray-50 rounded-lg px-4 py-2.5 text-sm text-gray-600 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>21 July 2022</option>
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <div className="relative">
                  <select className="w-full appearance-none bg-gray-50 rounded-lg px-4 py-2.5 text-sm text-gray-600 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>01:00</option>
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-3 gap-8">
          {displayedCars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-[10px] p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{car.name}</h3>
                  <p className="text-sm text-gray-500">{car.type}</p>
                </div>
                <button className={`${car.isFavorite ? 'text-red-500' : 'text-gray-300'}`}>
                  <FiHeart className="w-6 h-6 fill-current" />
                </button>
              </div>

              <div className="relative h-40 mb-4">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-2">
                  <Image src="/icons/gas.svg" alt="Fuel" width={14} height={14} />
                  <span>{car.fuel}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/icons/gear.svg" alt="Transmission" width={14} height={14} />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/icons/people.svg" alt="Capacity" width={14} height={14} />
                  <span>{car.capacity}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-semibold">${car.price}</span>
                  <span className="text-gray-500">/day</span>
                  <span className="text-sm text-gray-400 line-through ml-2">
                    ${car.oldPrice}
                  </span>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition-colors">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {!showMore && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowMore(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Show more cars
            </button>
          </div>
        )}
      </main>
    </div>
  )
}




