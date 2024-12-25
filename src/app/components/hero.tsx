'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FiHeart } from "react-icons/fi"
import { BsFuelPump, BsGearWide } from "react-icons/bs"
import { HiOutlineUsers } from "react-icons/hi"
import { Swiper, SwiperSlide } from 'swiper/react'
import AOS from 'aos'


import 'swiper/css'
import 'aos/dist/aos.css'

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
  showOldPrice: boolean;
}

function CarCard({ car, isFavorite, onToggleFavorite }: { car: Car; isFavorite: boolean; onToggleFavorite: (name: string) => void }) {
  return (
    <div className="bg-white p-4 rounded-2xl" data-aos="fade-up">
      <div className="flex justify-between items-start mb-4">
        <div>
          <Link href={`/car-detail`} className="group">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {car.name}
            </h3>
            <p className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors">
              {car.type}
            </p>
          </Link>
        </div>
        <button 
          onClick={() => onToggleFavorite(car.name)}
          className={`${isFavorite ? 'text-red-500' : 'text-[#90A3BF]'} hover:text-red-500 transition-colors`}
          aria-label={`Add ${car.name} to favorites`}
        >
          <FiHeart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="relative h-[120px] mx-[-8px]">
        <Image src={car.image} alt={car.name} fill className="object-contain" />
      </div>

      <div className="flex justify-between mt-4 mb-4">
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
          {car.showOldPrice && (
            <p className="text-sm text-[#90A3BF] line-through">${car.oldPrice}</p>
          )}
        </div>
        <Link
          href={`/car-payment`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Rent Now
        </Link>
      </div>
    </div>
  );
}

export default function CarHero() {
  const [favorites, setFavorites] = useState<string[]>([]);

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
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 space-y-12">
       
        <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up">
          

        <div>
  <Image
    src="/Ad 1.png"
    alt="White sports car"
    className="w-full rounded object-cover"
    width={500}  // Specify the width in pixels
    height={300}  // Specify the height in pixels
  />
</div>

          

<div className="hidden sm:block">
  <Image 
    src="/Ads 2.png" 
    alt="Silver sports car" 
    className="w-full rounded object-cover"
    width={500}  // Specify the width in pixels
    height={300}  // Specify the height in pixels 
  />
</div>
</div>

      
        <div 
          className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] items-center gap-4 bg-gray-50 rounded-xl p-6 shadow-sm relative" 
          data-aos="fade-up"
        >
          
          <div className="space-y-4 bg-white rounded-lg p-4 shadow-md relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#3563E9] rounded-full"></div>
              <span className="text-sm font-medium text-[#1A202C]">Pick-Up</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input 
                type="text" 
                placeholder="Enter city" 
                className="w-full px-4 py-3 rounded-lg border border-[#C3D4E9] text-[#1A202C] text-sm focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
              />
              <input 
                type="text" 
                placeholder="Select date" 
                className="w-full px-4 py-3 rounded-lg border border-[#C3D4E9] text-[#1A202C] text-sm focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
              />
              <input 
                type="text" 
                placeholder="Select time" 
                className="w-full px-4 py-3 rounded-lg border border-[#C3D4E9] text-[#1A202C] text-sm focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
              />
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
                  width={150}  // Specify the width in pixels
                  height={150}  // Specify the height in pixels
              />
            </a>
          </div>

          
          <div className="space-y-4 bg-white rounded-lg p-4 shadow-md relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#3563E9] rounded-full"></div>
              <span className="text-sm font-medium text-[#1A202C]">Drop-Off</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input 
                type="text" 
                placeholder="Enter location" 
                className="w-full px-4 py-3 rounded-lg border border-[#C3D4E9] text-[#1A202C] text-sm focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
              />
              <input 
                type="text" 
                placeholder="Select date" 
                className="w-full px-4 py-3 rounded-lg border border-[#C3D4E9] text-[#1A202C] text-sm focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
              />
              <input 
                type="text" 
                placeholder="Select time" 
                className="w-full px-4 py-3 rounded-lg border border-[#C3D4E9] text-[#1A202C] text-sm focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
              />
            </div>
          </div>
        </div>

        {/* Popular Cars */}
        <section className="space-y-6" data-aos="fade-up">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-[#90A3BF]">Popular Cars</h2>
            <Link href="/" className="text-[#3563E9] hover:text-[#2651D4]">View All</Link>
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
                }
              }}
            >
              {popularCars.slice(0, 5).map((car, index) => (
                <SwiperSlide key={index}>
                  <CarCard 
                    car={car} 
                    isFavorite={favorites.includes(car.name)}
                    onToggleFavorite={toggleFavorite}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

     
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {popularCars.map((car, index) => (
              <CarCard 
                key={index} 
                car={car} 
                isFavorite={favorites.includes(car.name)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </section>

        {/* Recommended Cars */}
        <section className="space-y-6" data-aos="fade-up">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-[#90A3BF]">Recommended Cars</h2>
            <Link href="/" className="text-[#3563E9] hover:text-[#2651D4]">View All</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {recommendedCars.map((car, index) => (
              <CarCard 
                key={index} 
                car={car} 
                isFavorite={favorites.includes(car.name)}
                onToggleFavorite={toggleFavorite}
              />
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
    image: "/koenigsegg.png",
    capacity: "2 People",
    transmission: "Manual",
    fuel: "90L",
    price: "99.00",
    oldPrice: "120.00",
    slug: "koenigsegg",
    showOldPrice: false
  },
  {
    name: "Nissan GT-R",
    type: "Sport",
    image: "/nissan.png",
    capacity: "2 People",
    transmission: "Manual",
    fuel: "80L",
    price: "80.00",
    oldPrice: "100.00",
    slug: "nissan-gt-r",
    showOldPrice: true
  },
  {
    name: "Rolls-Royce",
    type: "Sedan",
    image: "/ROLLS.png",
    capacity: "4 People",
    transmission: "Manual",
    fuel: "70L",
    price: "96.00",
    oldPrice: "120.00",
    slug: "rolls-royce",
    showOldPrice: false
  },
  {
    name: "Nissan GT-R",
    type: "Sport",
    image: "/nissan.png",
    capacity: "2 People",
    transmission: "Manual",
    fuel: "80L",
    price: "80.00",
    oldPrice: "100.00",
    slug: "nissan-gt-r-2",
    showOldPrice: true
  }
];

const recommendedCars: Car[] = [
  {
    name: "All New Rush",
    type: "SUV",
    image: "/rush.png",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "70L",
    price: "72.00",
    oldPrice: "80.00",
    slug: "all-new-rush",
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
    oldPrice: "100.00",
    slug: "cr-v",
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
    oldPrice: "90.00",
    slug: "all-new-terios",
    showOldPrice: false
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/crv.png",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "80L",
    price: "80.00",
    oldPrice: "100.00",
    slug: "cr-v-2",
    showOldPrice: false
  },
  {
    name: "MG ZX Exclusive",
    type: "Hatchback",
    image: "/mg zx.png",
    capacity: "4 People",
    transmission: "Manual",
    fuel: "70L",
    price: "76.00",
    oldPrice: "80.00",
    slug: "mg-zx-exclusiv",
    showOldPrice: true
  },
  {
    name: "New MG ZS",
    type: "SUV",
    image: "/ng zs.png",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "80L",
    price: "80.00",
    oldPrice: "100.00",
    slug: "new-mg-zs",
    showOldPrice: false
  },
  {
    name: "MG ZX Excite",
    type: "Hatchback",
    image: "/mg zx.png",
    capacity: "4 People",
    transmission: "Manual",
    fuel: "90L",
    price: "74.00",
    oldPrice: "90.00",
    slug: "mg-zx-excite",
    showOldPrice: false
  },
  {
    name: "New MG ZS",
    type: "SUV",
    image: "/ng zs.png",
    capacity: "6 People",
    transmission: "Manual",
    fuel: "80L",
    price: "80.00",
    oldPrice: "100.00",
    slug: "new-mg-zs-2",
    showOldPrice: false
  }
];







