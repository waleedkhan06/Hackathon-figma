"use client"

// import { useState } from "react"
import Image from "next/image"
import { FiHeart } from "react-icons/fi"

// Sample Data
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
    slug: "koenigsegg",
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
    slug: "nissan-gt-r",
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
    slug: "rolls-royce",
    isFavorite: false
  },
]

const recommendedCars = [
  {
    name: "All New Rush",
    type: "SUV",
    image: "/car4.png",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "70L",
    price: "72.00",
    oldPrice: "80.00",
    slug: "all-new-rush",
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
    slug: "cr-v",
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
    slug: "all-new-terios",
    isFavorite: false
  },
]

const reviews = [
  {
    name: "Alex Stanton",
    role: "CEO at Bukalapak",
    review: "We are very happy with the service from the MORENT App. MORENT has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    date: "21 July 2022",
    avatar: "/profil2.png",
    rating: 4
  },
  {
    name: "Skylar Dias",
    role: "CEO at Amazon",
    review: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    date: "20 July 2022",
    avatar: "/profil.png",
    rating: 4
  },
]

const CarRentalPage = () => {
  // const [showAllReviews, setShowAllReviews] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#F6F7F9]">
      {/* Sidebar */}
      <aside className="w-[360px] p-8 flex-shrink-0">
        <div className="space-y-8">
          <div>
            <h3 className="text-xs font-semibold text-gray-500 mb-4">TYPE</h3>
            <div className="space-y-4">
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 text-blue-600" />
                <span className="ml-3 text-sm">Sport (10)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 text-blue-600" />
                <span className="ml-3 text-sm">SUV (12)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-gray-300" />
                <span className="ml-3 text-sm">MPV (16)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-gray-300" />
                <span className="ml-3 text-sm">Sedan (20)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-gray-300" />
                <span className="ml-3 text-sm">Coupe (14)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-gray-300" />
                <span className="ml-3 text-sm">Hatchback (14)</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 mb-4">CAPACITY</h3>
            <div className="space-y-4">
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 text-blue-600" />
                <span className="ml-3 text-sm">2 Person (10)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-gray-300" />
                <span className="ml-3 text-sm">4 Person (14)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-gray-300" />
                <span className="ml-3 text-sm">6 Person (12)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 text-blue-600" />
                <span className="ml-3 text-sm">8 or More (16)</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 mb-4">PRICE</h3>
            <input 
              type="range" 
              min="0" 
              max="100" 
              defaultValue="100"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="mt-2 text-sm text-gray-500">Max. $100.00</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-8">
        {/* Featured Car */}
        <div className="bg-white rounded-[10px] p-6">
          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-3">
              <div className="bg-blue-600 rounded-[10px] p-6 text-white">
                <h1 className="text-2xl font-semibold mb-2">Sports car with the best design and acceleration</h1>
                <p className="text-sm opacity-80">Safety and comfort while driving a futuristic and elegant sports car</p>
                <div className="mt-8 aspect-[16/9] relative">
                  <Image
                    src="/car2.png"
                    alt="Nissan GT-R"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="aspect-[16/9] relative rounded-[10px] overflow-hidden">
                  <Image
                    src="/car2-thumb1.png"
                    alt="Interior view"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[16/9] relative rounded-[10px] overflow-hidden">
                  <Image
                    src="/car2-thumb2.png"
                    alt="Side view"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[16/9] relative rounded-[10px] overflow-hidden">
                  <Image
                    src="/car2-thumb3.png"
                    alt="Front view"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Nissan GT - R</h2>
                  <div className="flex items-center mt-2">
                    {"★★★★☆"}
                    <span className="text-sm text-gray-500 ml-2">440+ Reviews</span>
                  </div>
                </div>
                <button className="text-red-500">
                  <FiHeart className="w-6 h-6" />
                </button>
              </div>
              <p className="mt-6 text-gray-600">
                NISMO has become the embodiment of Nissans outstanding performance, inspired by the most unforgiving proving ground, the race track.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Type Car</p>
                  <p className="font-semibold">Sport</p>
                </div>
                <div>
                  <p className="text-gray-500">Capacity</p>
                  <p className="font-semibold">2 Person</p>
                </div>
                <div>
                  <p className="text-gray-500">Steering</p>
                  <p className="font-semibold">Manual</p>
                </div>
                <div>
                  <p className="text-gray-500">Gasoline</p>
                  <p className="font-semibold">70L</p>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <span className="text-xl font-semibold">$80.00/</span>
                  <span className="text-gray-500">days</span>
                  <span className="text-gray-500 line-through ml-2">$100.00</span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2.5 rounded-[4px] font-semibold">
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-[10px] p-6">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-xl font-semibold">Reviews</h2>
            <span className="bg-blue-600 text-white text-sm px-2 py-0.5 rounded-full">13</span>
          </div>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="pb-6 border-b last:border-0">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={44}
                      height={44}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <p className="mt-4 text-gray-600">{review.review}</p>
                <div className="mt-4 text-yellow-400">{"★".repeat(review.rating)}{"☆".repeat(5-review.rating)}</div>
              </div>
            ))}
            <button 
              className="text-blue-600 text-sm"
              // onClick={() => setShowAllReviews(true)}
            >
              Show All
            </button>
          </div>
        </div>

        {/* Recent Cars */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm text-gray-500">Recent Car</h2>
            <a href="#" className="text-sm text-blue-600">View All</a>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.slug} className="bg-white rounded-[10px] p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{car.name}</h3>
                    <p className="text-sm text-gray-500">{car.type}</p>
                  </div>
                  <button className={car.isFavorite ? "text-red-500" : "text-gray-300"}>
                    <FiHeart className="w-5 h-5 fill-current" />
                  </button>
                </div>
                <div className="my-4 aspect-[4/3] relative">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Image src="/icons/gas.svg" alt="Fuel" width={14} height={14} />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/transmission.svg" alt="Transmission" width={14} height={14} />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/capacity.svg" alt="Capacity" width={14} height={14} />
                    <span>{car.capacity}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-semibold">${car.price}/</span>
                    <span className="text-gray-500">day</span>
                    <span className="text-gray-500 line-through ml-2">${car.oldPrice}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-[4px] text-sm font-semibold">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Cars */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm text-gray-500">Recommendation Car</h2>
            <a href="#" className="text-sm text-blue-600">View All</a>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {recommendedCars.map((car) => (
              <div key={car.slug} className="bg-white rounded-[10px] p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{car.name}</h3>
                    <p className="text-sm text-gray-500">{car.type}</p>
                  </div>
                  <button className={car.isFavorite ? "text-red-500" : "text-gray-300"}>
                    <FiHeart className="w-5 h-5 fill-current" />
                  </button>
                </div>
                <div className="my-4 aspect-[4/3] relative">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Image src="/icons/gas.svg" alt="Fuel" width={14} height={14} />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/transmission.svg" alt="Transmission" width={14} height={14} />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/capacity.svg" alt="Capacity" width={14} height={14} />
                    <span>{car.capacity}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-semibold">${car.price}/</span>
                    <span className="text-gray-500">day</span>
                    <span className="text-gray-500 line-through ml-2">${car.oldPrice}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-[4px] text-sm font-semibold">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default CarRentalPage
