"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FiHeart,  FiMenu } from 'react-icons/fi'
import { FaGasPump, FaUsers } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Sample car data
const cars = [
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/koenigsegg.png",
    capacity: "2 People",
    transmission: "Manual",
    fuel: "90L",
    price: "99.00",
    oldPrice: "100.00",
    showOldPrice: false
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image: "/nissan.png",
    capacity: "2 People",
    transmission: "Manual",
    fuel: "80L",
    price: "80.00",
    oldPrice: "100.00",
    showOldPrice: true
  },
  {
    name: "Rolls-Royce",
    type: "Sport",
    image: "/ROLLS.png",
    capacity: "4 People",
    transmission: "Manual",
    fuel: "70L",
    price: "96.00",
    oldPrice: "100.00",
    showOldPrice: false
  },
  {
    name: "All New Rush",
    type: "SUV",
    image: "/rush.png",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "70L",
    price: "72.00",
    oldPrice: "80.00",
    showOldPrice: true
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/crv.png",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "80L",
    price: "80.00",
    showOldPrice: false
  },
  {
    name: "All New Terios",
    type: "SUV",
    image: "/terios.png",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "90L",
    price: "74.00",
    showOldPrice: false
  },
  {
    name: "MG ZX Exclusive",
    type: "Hatchback",
    image: "/mg zx.png",
    capacity: "4 People",
    transmission: "Electric",
    fuel: "70L",
    price: "76.00",
    oldPrice: "80.00",
    showOldPrice: true
  },
  {
    name: "New MG ZS",
    type: "SUV",
    image: "/ng zs.png",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "80L",
    price: "76.00",
    showOldPrice: false
  },
  {
    name: "MG ZX Excite",
    type: "Hatchback",
    image: "/mg zx.png",
    capacity: "4 People",
    transmission: "Electric",
    fuel: "90L",
    price: "74.00",
    showOldPrice: false
  }
]

const filterOptions = {
  type: [
    { label: "Sport", count: 10, checked: false },
    { label: "SUV", count: 12, checked: false },
    { label: "MPV", count: 16, checked: false },
    { label: "Sedan", count: 20, checked: false },
    { label: "Coupe", count: 14, checked: false },
    { label: "Hatchback", count: 14, checked: false }
  ],
  capacity: [
    { label: "2 Person", count: 10, checked: false },
    { label: "4 Person", count: 14, checked: false },
    { label: "6 Person", count: 12, checked: false },
    { label: "8 or More", count: 16, checked: false }
  ]
}



export default function CarRental() {
  const [maxPrice, setMaxPrice] = useState(100)
  const [favorites, setFavorites] = useState<string[]>([])
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [selectedSection, setSelectedSection] = useState<'pickup' | 'dropoff'>('pickup')

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const toggleFavorite = (carName: string) => {
    setFavorites(prev => 
      prev.includes(carName) 
        ? prev.filter(name => name !== carName)
        : [...prev, carName]
    )
  }

  return (
    <div className="flex min-h-screen bg-[#F6F7F9]">
      {/* Mobile  */}
      <button
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md"
        aria-label="Toggle sidebar"
      >
        <FiMenu className="w-6 h-6 text-[#3563E9]" />
      </button>

      {/* Sidebar -  */}
      <aside 
        className={`
          fixed lg:sticky top-0 left-0 h-screen
          w-[280px] sm:w-[320px] lg:w-[360px] 
          bg-white shadow-lg
          transform lg:transform-none transition-transform duration-300 ease-in-out
          ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          overflow-y-auto
          z-40
        `}
      >
        <div className="p-8 pt-16 lg:pt-8 space-y-8">
          {/* Type Filter */}
          <div>
            <h3 className="text-xs font-semibold text-[#90A3BF] mb-4">TYPE</h3>
            <div className="space-y-4">
              {filterOptions.type.map((option) => (
                <label key={option.label} className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked={option.checked}
                    className="w-5 h-5 rounded border-gray-300 text-[#3563E9] focus:ring-[#3563E9]"
                  />
                  <span className="ml-3 text-sm text-[#596780]">
                    {option.label} ({option.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Capacity Filter */}
          <div>
            <h3 className="text-xs font-semibold text-[#90A3BF] mb-4">CAPACITY</h3>
            <div className="space-y-4">
              {filterOptions.capacity.map((option) => (
                <label key={option.label} className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked={option.checked}
                    className="w-5 h-5 rounded border-gray-300 text-[#3563E9] focus:ring-[#3563E9]"
                  />
                  <span className="ml-3 text-sm text-[#596780]">
                    {option.label} ({option.count})
                  </span>
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
           max="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          className="w-full h-2 bg-[#4f7fdf] rounded-lg appearance-gray-300 cursor-pointer accent-[#3563E9]"
  />
  <div className="mt-2 text-sm text-[#596780]">
    Max. ${maxPrice}.00
  </div>
</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8">
      {/* Pick-up & Drop-off Section */}
<div className="bg-white rounded-[10px] p-4 lg:p-6 mb-8" data-aos="fade-up">
  <div className="flex flex-col lg:flex-row items-stretch gap-6">
    {/* Pick-up Section */}
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-4">
        <input 
          type="radio" 
          id="pickup"
          name="tripType"
          checked={selectedSection === 'pickup'}
          onChange={() => setSelectedSection('pickup')}
          className="w-4 h-4 text-[#3563E9] border-[#3563E9] focus:ring-[#3563E9]"
        />
        <label htmlFor="pickup" className="text-sm font-medium text-[#1A202C]">
          Pick - Up
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm text-[#90A3BF] mb-2">
            Locations
          </label>
          <select 
  className="w-full h-10 sm:h-12 bg-[#F6F7F9] rounded-lg px-4 text-sm text-[#1A202C] border border-[#C3D4E9] focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
>
  <option value="">Select city</option>
  <option value="new-york">New York</option>
  <option value="london">London</option>
  <option value="paris">Paris</option>
  <option value="tokyo">Tokyo</option>
</select>
        </div>
        <div>
          <label className="block text-sm text-[#90A3BF] mb-2">
            Date
          </label>
          <select
  className="w-full h-10 sm:h-12 bg-[#F6F7F9] rounded-lg px-4 text-sm text-[#1A202C] border border-[#C3D4E9] focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
>
  <option value="">Select date</option>
  <option value="today">Today</option>
  <option value="tomorrow">Tomorrow</option>
  <option value="next-week">Next Week</option>
</select>
        </div>
        <div>
          <label className="block text-sm text-[#90A3BF] mb-2">
            Time
          </label>
          <select
  className="w-full h-10 sm:h-12 bg-[#F6F7F9] rounded-lg px-4 text-sm text-[#1A202C] border border-[#C3D4E9] focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
>
  <option value="">Select time</option>
  <option value="morning">Morning (8AM - 12PM)</option>
  <option value="afternoon">Afternoon (12PM - 4PM)</option>
  <option value="evening">Evening (4PM - 8PM)</option>
</select>
        </div>
      </div>
    </div>

  
  <div className="absolute md:static inset-0 flex justify-center items-center z-20">
    <a 
      href="/catagory" 
      className="flex justify-center items-center"
    >
      <Image
  src="/Switch.png"
  alt="Swap Icon"
  className="h-60px w-60px sm:h-64px sm:w-64px md:top-0 md:transform-none -top-10"
/>
    </a>
  </div>


    
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-4">
        <input 
          type="radio" 
          id="dropoff"
          name="tripType"
          checked={selectedSection === 'dropoff'}
          onChange={() => setSelectedSection('dropoff')}
          className="w-4 h-4 text-[#3563E9] border-[#3563E9] focus:ring-[#3563E9]"
        />
        <label htmlFor="dropoff" className="text-sm font-medium text-[#1A202C]">
          Drop - Off
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm text-[#90A3BF] mb-2">
            Locations
          </label>
          <select 
  className="w-full h-10 sm:h-12 bg-[#F6F7F9] rounded-lg px-4 text-sm text-[#1A202C] border border-[#C3D4E9] focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
>
  <option value="">Select city</option>
  <option value="new-york">New York</option>
  <option value="london">London</option>
  <option value="paris">Paris</option>
  <option value="tokyo">Tokyo</option>
</select>
        </div>
        <div>
          <label className="block text-sm text-[#90A3BF] mb-2">
            Date
          </label>
          <select
  className="w-full h-10 sm:h-12 bg-[#F6F7F9] rounded-lg px-4 text-sm text-[#1A202C] border border-[#C3D4E9] focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
>
  <option value="">Select date</option>
  <option value="today">Today</option>
  <option value="tomorrow">Tomorrow</option>
  <option value="next-week">Next Week</option>
</select>
        </div>
        <div>
          <label className="block text-sm text-[#90A3BF] mb-2">
            Time
          </label>
          <select
  className="w-full h-10 sm:h-12 bg-[#F6F7F9] rounded-lg px-4 text-sm text-[#1A202C] border border-[#C3D4E9] focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
>
  <option value="">Select time</option>
  <option value="morning">Morning (8AM - 12PM)</option>
  <option value="afternoon">Afternoon (12PM - 4PM)</option>
  <option value="evening">Evening (4PM - 8PM)</option>
</select>
        </div>
      </div>
    </div>
  </div>
</div>




            

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={car.name}
              className="bg-white rounded-[10px] p-4 hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-[#1A202C]">{car.name}</h3>
                  <p className="text-sm text-[#90A3BF]">{car.type}</p>
                </div>
                <button 
                  onClick={() => toggleFavorite(car.name)}
                  className={`${favorites.includes(car.name) ? 'text-red-500' : 'text-[#90A3BF]'}`}
                  aria-label={`Add ${car.name} to favorites`}
                >
                  <FiHeart className={`w-6 h-6 ${favorites.includes(car.name) ? 'fill-current' : ''}`} />
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

              <div className="flex justify-between text-sm text-[#90A3BF] mb-4">
                <div className="flex items-center gap-2">
                  <FaGasPump className="w-4 h-4" />
                  <span>{car.fuel}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGear className="w-4 h-4" />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="w-4 h-4" />
                  <span>{car.capacity}</span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-semibold text-[#1A202C]">${car.price}</span>
                    <span className="text-sm text-[#90A3BF]">/day</span>
                  </div>
                  {car.showOldPrice && (
                    <div className="text-sm text-[#90A3BF] line-through">
                      ${car.oldPrice}
                    </div>
                  )}
                </div>
                <button className="bg-[#3563E9] text-white px-5 py-2 rounded-[4px] text-sm font-semibold hover:bg-[#2651D4] transition-colors">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between" data-aos="fade-up">
          <div className="flex-1" />
          <button className="bg-[#3563E9] text-white px-6 py-2 rounded-[4px] text-sm font-semibold hover:bg-[#2651D4] transition-colors">
            Show more car
          </button>
          <div className="flex-1 text-right">
            <p className="text-sm text-[#90A3BF]">
              120 Car
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
    </div>
  )
}






