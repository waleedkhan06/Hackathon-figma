
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiHeart, FiChevronDown, FiMenu } from 'react-icons/fi'
import { FaGasPump, FaUsers, FaStar } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
}

interface CarSpec {
  type: string;
  value: string;
}

interface Car {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  specs: {
    fuel: string;
    transmission: string;
    capacity: string;
  };
}


const carImages = ['/View 1.png', '/View 2.png', '/View 3.png'];

const specs: CarSpec[] = [
  { type: 'Type Car', value: 'Sport' },
  { type: 'Steering', value: 'Manual' },
  { type: 'Capacity', value: '2 Person' },
  { type: 'Gasoline', value: '70L' },
];

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
];

const recentCars: Car[] = [
  {
    id: '1',
    name: 'Koenigsegg',
    type: 'Sport',
    price: 99.00,
    image: '/koenigsegg.png',
    specs: { fuel: '90L', transmission: 'Manual', capacity: '2 People' }
  },
  {
    id: '2',
    name: 'Nissan GT - R',
    type: 'Sport',
    price: 80.00,
    image: '/nissan-gtr.png',
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
];

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
];


export function CarCard({ car, isFavorite, onToggleFavorite }: { 
  car: Car; 
  isFavorite: boolean; 
  onToggleFavorite: (id: string) => void 
}) {
  return (
    <div className="bg-white rounded-[10px] p-4 shadow" data-aos="fade-up">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-semibold text-[#1A202C]">{car.name}</h4>
          <p className="text-sm text-[#90A3BF]">{car.type}</p>
        </div>
        <button onClick={() => onToggleFavorite(car.id)} className="p-1">
          <FiHeart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-[#90A3BF]'}`} />
        </button>
      </div>
      <div className="mb-4 relative h-32">
        <Image src={car.image} alt={car.name} fill className="object-contain" />
      </div>
      <div className="flex justify-between items-center mb-4 text-sm text-[#90A3BF]">
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
          <span className="font-semibold text-[#1A202C]">${car.price.toFixed(2)}/</span>
          <span className="text-[#90A3BF]">day</span>
        </div>
        <button className="bg-[#3563E9] text-white px-4 py-2 rounded-[4px] hover:opacity-90 transition-opacity">
          Rent Now
        </button>
      </div>
    </div>
  );
}

export function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      className={`
        fixed lg:sticky top-0 left-0 h-screen
        w-[280px] sm:w-[320px] lg:w-[360px] 
        bg-white shadow-lg
        transform lg:transform-none transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
        z-40
      `}
    >
      <div className="p-8 pt-16 lg:pt-8 space-y-6">
        <div className="space-y-4" data-aos="fade-right">
          <h3 className="text-[#90A3BF] text-sm mt-2 text-left mb-4">TYPE</h3>
          <div className="space-y-4">
            {['Sport (10)', 'SUV (12)', 'MPV (16)', 'Sedan (20)', 'Coupe (14)', 'Hatchback (14)'].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-[#3563E9]" />
                <span className="text-[#1A202C]">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4" data-aos="fade-right" data-aos-delay="100">
          <h3 className="text-[#90A3BF] text-sm mt-2 text-left mb-4">CAPACITY</h3>
          <div className="space-y-4">
            {['2 Person (10)', '4 Person (14)', '6 Person (12)', '8 or More (16)'].map((capacity) => (
              <label key={capacity} className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-[#3563E9]" />
                <span className="text-[#1A202C]">{capacity}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4" data-aos="fade-right" data-aos-delay="200">
          <h3 className="text-[#90A3BF] text-sm mt-2 text-left">PRICE</h3>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="100"
            className="w-full h-2 bg-[#3563E9] rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #3563E9 50%, #90A3BF 50%)`,
            }}
          />
          <div className="mt-2">
            <span className="text-[#90A3BF] text-sm">Max. $100.00</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

// PART 4: SECTION COMPONENTS
export function ReviewsSection({ reviews, showAllReviews, setShowAllReviews }: {
  reviews: Review[];
  showAllReviews: boolean;
  setShowAllReviews: (show: boolean) => void;
}) {
  return (
    <div data-aos="fade-up" className="bg-white shadow rounded-[10px] p-6">
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-xl font-semibold text-[#1A202C]">Reviews</h3>
        <span className="bg-[#3563E9] text-white text-sm px-2 py-0.5 rounded-full">13</span>
      </div>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="flex gap-4">
            <Image
              src={review.avatar}
              alt={review.name}
              width={56}
              height={56}
              className="object-contain rounded-full"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-[#1A202C]">{review.name}</h4>
                  <p className="text-sm text-[#90A3BF]">
                    {review.role} at {review.company}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    {Array(5).fill(null).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-[#90A3BF] mt-1">{review.date}</p>
                </div>
              </div>
              <p className="text-[#90A3BF] mt-2">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowAllReviews(!showAllReviews)}
        className="flex items-center gap-2 text-[#90A3BF] mt-4 mx-auto"
      >
        Show All
        <FiChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
}

export function CarSection({ title, cars, favoriteCards, onToggleFavorite }: {
  title: string;
  cars: Car[];
  favoriteCards: string[];
  onToggleFavorite: (id: string) => void;
}) {
  return (
    <div data-aos="fade-up">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-[#1A202C]">{title}</h3>
        <button className="text-[#3563E9] font-semibold">View All</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            isFavorite={favoriteCards.includes(car.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

// PART 5: MAIN COMPONENT
export default function CarDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [favoriteCards, setFavoriteCards] = useState<string[]>([]);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const toggleCardFavorite = (cardId: string) => {
    setFavoriteCards(prev =>
      prev.includes(cardId)
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  return (
    <div className="flex min-h-screen bg-[#F6F7F9]">
      <button
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md"
      >
        <FiMenu className="w-6 h-6 text-[#3563E9]" />
      </button>

      <Sidebar isOpen={isMobileSidebarOpen} />



      <main className="flex-1 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4" data-aos="fade-up">
              <div className="bg-[#3563E9] rounded-[10px] p-6 text-white">
                <h1 className="text-2xl font-bold mb-2">Sports car with the best design and acceleration</h1>
                <p className="text-sm opacity-90">Safety and comfort while driving a futuristic and elegant sports car.</p>
                <div className="mt-4 relative h-[200px]">
                  <Image
                    src="/image 8.png"
                    alt="Nissan GT-R"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="hidden sm:block">
                <div className="grid grid-cols-3 gap-4">
                  {carImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-20 rounded-[10px] overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-[#3563E9]' : 'border-transparent'
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
              
              <div className="sm:hidden">
                <Swiper
                  modules={[Pagination, Navigation]}
                  spaceBetween={16}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  navigation
                  loop
                  className="w-full h-48"
                >
                  {carImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full h-full">
                        <Image
                          src={image}
                          alt={`Car view ${index + 1}`}
                          fill
                          className="object-cover rounded-[10px]"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="rounded-[10px] space-y-8 p-4 md:p-6 lg:p-8 bg-white" data-aos="fade-up" data-aos-delay="200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-[#1A202C]">Nissan GT - R</h2>
                  <div className="flex items-center gap-1 mt-1">
                    {Array(5).fill(null).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm text-[#90A3BF] ml-1">440+ Reviewer</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FiHeart
                    className={`w-6 h-6 ${
                      isFavorite ? 'fill-red-500 text-red-500' : 'text-[#90A3BF]'
                    }`}
                  />
                </button>
              </div>

              <p className="text-[#90A3BF]">
              NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most unforgiving proving ground, the &quot;race track&quot;.
                  </p>

              <div className="grid grid-cols-4 gap-4">
                {specs.map((spec, index) => (
                  <div key={index} className="text-center">
                    <span className="text-[#90A3BF] text-sm">{spec.type}</span>
                    <span className="block font-medium text-[#1A202C] mt-1">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-[#1A202C]">$80.00/</span>
                  <span className="text-[#90A3BF]">day</span>
                  <span className="text-[#90A3BF] line-through ml-2">$100.00</span>
                </div>
                <button className="bg-[#3563E9] text-white px-8 py-3 rounded-[4px] hover:opacity-90 transition-opacity">
                  Rent Now
                </button>
              </div>
            </div>
          </div>

          <ReviewsSection
            reviews={reviews}
            showAllReviews={showAllReviews}
            setShowAllReviews={setShowAllReviews}
          />

          <CarSection
            title="Recent Car"
            cars={recentCars}
            favoriteCards={favoriteCards}
            onToggleFavorite={toggleCardFavorite}
          />

          <CarSection
            title="Recommendation Car"
            cars={recommendationCars}
            favoriteCards={favoriteCards}
            onToggleFavorite={toggleCardFavorite}
          />
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
  );
}





