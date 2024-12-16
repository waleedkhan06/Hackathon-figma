'use client'

import Image from "next/image"
import Link from "next/link"
import { FiHeart, } from "react-icons/fi"
import { BsFuelPump, BsGearWide } from "react-icons/bs"
import { AiOutlineSwap } from "react-icons/ai"
import { HiOutlineUsers } from "react-icons/hi"

interface Car {
  name: string;
  type: string;
  image: string;
  capacity: string;
  transmission: string;
  fuel: string;
  price: string;
  oldPrice: string;
  slug: string;
}

function CarCard({ car }: { car: Car }) {
  return (
    <div className="bg-white p-4 rounded-2xl">
      <div className="flex justify-between items-start mb-8">
        <div>
          <Link 
            href={`/car-detail`} 
            className="group"
          >
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {car.name}
            </h3>
            <p className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors">
              {car.type}
            </p>
          </Link>
        </div>
        <button className="text-gray-400 hover:text-red-500 transition-colors">
          <FiHeart className="w-6 h-6" />
        </button>
      </div>
      
      <div className="relative h-[140px] mx-[-8px]">
        <Image 
          src={car.image}
          alt={car.name}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex justify-between mt-8 mb-6">
        <div className="flex items-center gap-1 text-gray-500">
          <BsFuelPump className="w-4 h-4" />
          <span className="text-sm">{car.fuel}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <BsGearWide className="w-4 h-4" />
          <span className="text-sm">{car.transmission}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <HiOutlineUsers className="w-4 h-4" />
          <span className="text-sm">{car.capacity}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <div>
          <p className="text-lg font-bold">
            ${car.price}<span className="text-sm font-normal text-gray-500">/day</span>
          </p>
          <p className="text-sm text-blue-300 line-through">${car.oldPrice}</p>
        </div>
        <Link 
          href={`/car-payment`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Rent Now
        </Link>
      </div>
    </div>
  )
}

export default function CarHero() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-white">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">The Best Platform<br />for Car Rental</h2>
              <p className="text-blue-100">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
              <button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Rental Car
              </button>
            </div>
            <div className="relative h-48 mt-6">
              <Image 
                src="/placeholder.svg?height=200&width=400"
                alt="White sports car"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-white">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Easy way to rent a<br />car at a low price</h2>
              <p className="text-blue-100">Providing cheap car rental services and safe and comfortable facilities.</p>
              <button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Rental Car
              </button>
            </div>
            <div className="relative h-48 mt-6">
              <Image 
                src="/placeholder.svg?height=200&width=400"
                alt="Silver sports car"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="grid md:grid-cols-[1fr,auto,1fr] items-center gap-6 bg-white rounded-xl p-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">Pick-Up</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <select className="w-full px-4 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm">
                <option>Select your city</option>
              </select>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm">
                <option>Select your date</option>
              </select>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm">
                <option>Select your time</option>
              </select>
            </div>
          </div>
          
          <Link 
            href="/catagory"
            className="bg-blue-500 p-3 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
          >
            <AiOutlineSwap className="text-white text-xl" />
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">Drop-Off</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <select className="w-full px-4 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm">
                <option>Select your city</option>
              </select>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm">
                <option>Select your date</option>
              </select>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm">
                <option>Select your time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Popular Cars */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Popular Cars</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {popularCars.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
        </section>

        {/* Recommended Cars */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Recommended Cars</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {recommendedCars.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

const popularCars: Car[] = [
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/car1.png",
    capacity: "2 People",
    transmission: "Manual",
    fuel: "90L",
    price: "99.00",
    oldPrice: "120.00",
    slug: "koenigsegg"
  },
  {
    name: "Nissan GT-R",
    type: "Sport",
    image: "/placeholder.svg?height=160&width=240",
    capacity: "2 People",
    transmission: "Manual",
    fuel: "80L",
    price: "80.00",
    oldPrice: "100.00",
    slug: "nissan-gt-r"
  },
  {
    name: "Rolls-Royce",
    type: "Sedan",
    image: "/placeholder.svg?height=160&width=240",
    capacity: "4 People",
    transmission: "Manual",
    fuel: "70L",
    price: "96.00",
    oldPrice: "120.00",
    slug: "rolls-royce"
  },
  {
    name: "Nissan GT-R",
    type: "Sport",
    image: "/placeholder.svg?height=160&width=240",
    capacity: "2 People",
    transmission: "Manual",
    fuel: "80L",
    price: "80.00",
    oldPrice: "100.00",
    slug: "nissan-gt-r-2"
  }
];

const recommendedCars: Car[] = [
  {
    name: "All New Rush",
    type: "SUV",
    image: "/placeholder.svg?height=160&width=240",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "70L",
    price: "72.00",
    oldPrice: "90.00",
    slug: "all-new-rush"
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/placeholder.svg?height=160&width=240",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "80L",
    price: "80.00",
    oldPrice: "100.00",
    slug: "cr-v"
  },
  {
    name: "All New Terios",
    type: "SUV",
    image: "/placeholder.svg?height=160&width=240",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "90L",
    price: "74.00",
    oldPrice: "90.00",
    slug: "all-new-terios"
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/placeholder.svg?height=160&width=240",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "80L",
    price: "80.00",
    oldPrice: "100.00",
    slug: "cr-v-2"
  },
  {
    name: "MG ZX Exclusiv",
    type: "Hatchback",
    image: "/placeholder.svg?height=160&width=240",
    capacity: "4 People",
    transmission: "Manual",
    fuel: "70L",
    price: "76.00",
    oldPrice: "95.00",
    slug: "mg-zx-exclusiv"
  },
  {
    name: "New MG ZS",
    type: "SUV",
    image: "/placeholder.svg?height=160&width=240",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "80L",
    price: "80.00",
    oldPrice: "100.00",
    slug: "new-mg-zs"
  },
  {
    name: "MG ZX Excite",
    type: "Hatchback",
    image: "/placeholder.svg?height=160&width=240",
    capacity: "4 People",
    transmission: "Manual",
    fuel: "90L",
    price: "74.00",
    oldPrice: "90.00",
    slug: "mg-zx-excite"
  },
  {
    name: "New MG ZS",
    type: "SUV",
    image: "/placeholder.svg?height=160&width=240",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "80L",
    price: "80.00",
    oldPrice: "100.00",
    slug: "new-mg-zs-2"
  }
];


