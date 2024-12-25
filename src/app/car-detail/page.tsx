'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiHeart, FiChevronDown, FiMenu } from 'react-icons/fi'
import { FaGasPump, FaUsers, FaStar } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface Review {
  id: string
  name: string
  role: string
  company: string
  date: string
  rating: number
  comment: string
  avatar: string
}

interface CarSpec {
  type: string
  value: string
}

interface Car {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  specs: { fuel: string; transmission: string; capacity: string };
}

export default function CarDetail() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showAllReviews, setShowAllReviews] = useState(false)
  const [favoriteCards, setFavoriteCards] = useState<string[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const toggleCardFavorite = (cardId: string) => {
    setFavoriteCards(prev =>
      prev.includes(cardId)
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    )
  }

  const carImages = [
    '/View 1.png',
    '/View 2.png',
    '/View 3.png',
  ]

  const specs: CarSpec[] = [
    { type: 'Type Car', value: 'Sport' },
    { type: 'Steering', value: 'Manual' },
    { type: 'Capacity', value: '2 Person' },
    { type: 'Gasoline', value: '70L' },
  ]

  const reviews: Review[] = [
    {
      id: '1',
      name: 'Alex Stanton',
      role: 'CEO',
      company: 'Bukalapak',
      date: '21 July 2022',
      rating: 4,
      comment: 'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
      avatar: '/Profil.png'
    },
    {
      id: '2',
      name: 'Skylar Dias',
      role: 'CEO',
      company: 'Amazon',
      date: '20 July 2022',
      rating: 4,
      comment: 'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
      avatar: '/profil2.png'
    },
  ]

  const recentCars: Car[] = [
    {
      id: '1',
      name: 'Koenigsegg',
      type: 'Sport',
      price: 99.00,
      image: '/koenigsegg.png ',
      specs: { fuel: '90L', transmission: 'Manual', capacity: '2 People' }
    },
    {
      id: '2',
      name: 'Nissan GT - R',
      type: 'Sport',
      price: 80.00,
      image: '/nissan-gtr.png  ',
      specs: { fuel: '80L', transmission: 'Manual', capacity: '2 People' }
    },
    {
      id: '3',
      name: 'Rolls - Royce',
      type: 'Sport',
      price: 96.00,
      image: '/ROLLS.png',
      specs: { fuel: '70L', transmission: 'Manual', capacity: '4 People' }
    },
  ]

  const recommendationCars: Car[] = [
    {
      id: '4',
      name: 'All New Rush',
      type: 'SUV',
      price: 110.00,
      image: '/rush.png',
      specs: { fuel: '70L', transmission: 'Manual', capacity: '6 People' }
    },
    {
      id: '5',
      name: 'CR - V',
      type: 'SUV',
      price: 100.00,
      image: '/crv.png',
      specs: { fuel: '80L', transmission: 'Manual', capacity: '6 People' }
    },
    {
      id: '6',
      name: 'All New Terios',
      type: 'SUV',
      price: 90.00,
      image: '/terios.png',
      specs: { fuel: '90L', transmission: 'Manual', capacity: '6 People' }
    },
  ]

  const CarCard = ({ car }: { car: Car }) => (
    <div className="bg-white rounded-[10px] p-4 shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-semibold">{car.name}</h4>
          <p className="text-sm text-gray-500">{car.type}</p>
        </div>
        <button
          onClick={() => toggleCardFavorite(car.id)}
          className="p-1"
        >
          <FiHeart
            className={`w-5 h-5 ${
              favoriteCards.includes(car.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'
            }`}
          />
        </button>
      </div>
      <div className="mb-4 relative h-32">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <FaGasPump />
          <span>{car.specs.fuel}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaGear />
          <span>{car.specs.transmission}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUsers />
          <span>{car.specs.capacity}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="font-semibold">${car.price}.00/</span>
          <span className="text-gray-500">day</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-[4px]">
          Rent Now
        </button>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-[#F6F7F9]">
      
      <button
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md"
        aria-label="Toggle sidebar"
      >
        <FiMenu className="w-6 h-6 text-[#3563E9]" />
      </button>

      
      <aside 
        className={`
          fixed lg:sticky top-0 left-0 h-screen
          w-[280px] sm:w-[320px] lg:w-[360px] 
          bg-white shadow-lg
          transform lg:transform-none transition-transform duration-300 ease-in-out
          ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
          z-40
        `}
      >
        <div className="p-8 pt-16 lg:pt-8 space-y-6">
          {/* Type Section */}
          <div className="space-y-4">
            <h3 className="text-gray-500 text-sm mt-2 text-left mb-4">TYPE</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-blue-600"  />
                <span>Sport (10)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-blue-600"  />
                <span>SUV (12)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                <span>MPV (16)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                <span>Sedan (20)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                <span>Coupe (14)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                <span>Hatchback (14)</span>
              </label>
            </div>
          </div>

          {/* Capacity Section */}
          <div className="space-y-4">
            <h3 className="text-gray-500 text-sm mt-2 text-left mb-4">CAPACITY</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-blue-600"  />
                <span>2 Person (10)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                <span>4 Person (14)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                <span>6 Person (12)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-blue-600"  />
                <span>8 or More (16)</span>
              </label>
            </div>
          </div>

          {/* Price Section */}
          <div className="space-y-4">
            <h3 className="text-gray-500 text-sm mt-2 text-left">PRICE</h3>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="100"
              className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer accent-blue-300"
              style={{
                background: `linear-gradient(to right, #2563EB 50%, #D1D5DB 50%)`,
              }}
            />
            <div className="mt-2">
              <span className="text-gray-500 text-sm mt-2 text-left">Max. $100.00</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Car Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4" data-aos="fade-up">
              <div className="bg-blue-600 rounded-[10px] p-6 text-white">
                <h1 className="text-2xl font-bold mb-2">Sports car with the best design and acceleration</h1>
                <p className="text-sm">Safety and comfort while driving a futuristic and elegant sports car.</p>
                <div className="mt-4 relative h-[200px]">
                  <Image
                    src="/image 8.png"
                    alt="Nissan GT-R"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {carImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 rounded-[10px] overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-blue-600' : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Car view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[10px] space-y-8 p-4 md:p-6 lg:p-8 bg-white" data-aos="fade-up" data-aos-delay="200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold">Nissan GT - R</h2>
                  <div className="flex items-center gap-1 mt-1">
                    {Array(5).fill(null).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">440+ Reviewer</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FiHeart
                    className={`w-6 h-6 ${
                      isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>

              <p className="text-gray-600">
                NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most unforgiving proving ground, the &ldquo;race track&rdquo;.
              </p>

              <div className="grid grid-cols-4 gap-4 mb-6">
                {specs.map((spec, index) => (
                  <div key={index} className="text-center">
                    <span className="text-gray-400 text-sm">{spec.type}</span>
                    <span className="block font-medium mt-1">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold">$80.00/</span>
                  <span className="text-gray-500">day</span>
                  <span className="text-gray-400 line-through ml-2">$100.00</span>
                </div>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-[4px] hover:bg-blue-700 transition-colors">
                  Rent Now
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div data-aos="fade-up" className="bg-white shadow rounded-[10px] p-6">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-xl font-semibold">Reviews</h3>
              <span className="bg-blue-600 text-white text-sm px-2 py-0.5 rounded-full">
                13
              </span>
            </div>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="flex gap-4">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <p className="text-sm text-gray-500">
                          {review.role} at {review.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          {Array(5)
                            .fill(null)
                            .map((_, i) => (
                              <FaStar
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                              />
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="flex items-center gap-2 text-gray-500 mt-4 mx-auto"
            >
              Show All
              <FiChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Recent Car Section */}
          <div data-aos="fade-up">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Recent Car</h3>
              <button className="text-blue-600 font-semibold">View All</button>
            </div>
            {isMobile ? (
              <Swiper
                spaceBetween={16}
                slidesPerView={1.2}
                centeredSlides={true}
                loop={true}
              >
                {recentCars.map((car) => (
                  <SwiperSlide key={car.id}>
                    <CarCard car={car} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            )}
          </div>

          {/* Recommendation Car Section */}
          <div data-aos="fade-up">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Recommendation Car</h3>
              <button className="text-blue-600 font-semibold">View All</button>
            </div>
            {isMobile ? (
              <Swiper
                spaceBetween={16}
                slidesPerView={1.2}
                centeredSlides={true}
                loop={true}
              >
                {recommendationCars.map((car) => (
                  <SwiperSlide key={car.id}>
                    <CarCard car={car} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recommendationCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

    
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
