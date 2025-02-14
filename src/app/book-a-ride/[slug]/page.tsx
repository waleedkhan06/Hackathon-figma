"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { client } from "@/sanity/lib/client"
import { getCarBySlugQuery } from "@/sanity/lib/queries"
import type { Car } from "../../../../types/car"
import { FiHeart, FiMapPin, FiCalendar, FiUser, FiMail, FiPhone, FiUpload } from "react-icons/fi"
import { BsFuelPump, BsGearWide } from "react-icons/bs"
import { HiOutlineUsers } from "react-icons/hi"
import { FaStar } from "react-icons/fa"
import Toast from "../../components/Toast"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

// Initialize the Sanity image URL builder
const builder = imageUrlBuilder(client)

// Function to generate image URLs
function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export default function BookARide() {
  const { slug } = useParams()
  const router = useRouter()
  const [car, setCar] = useState<Car | null>(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: "", visible: false })
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    startDate: "",
    endDate: "",
    name: "",
    email: "",
    phone: "",
    licenseNumber: "",
  })
  const [licenseImage, setLicenseImage] = useState<File | null>(null)
  const [isFormValid, setIsFormValid] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCar = async () => {
      const fetchedCar = await client.fetch(getCarBySlugQuery, { slug })
      setCar(fetchedCar)
      setIsLoading(false)
    }

    fetchCar()

    const storedFavorites = localStorage.getItem("favorites")
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites)
      setIsFavorite(favorites.includes(car?._id))
    }
  }, [slug, car?._id])

  useEffect(() => {
    const isValid =
      Object.values(formData).every((value) => value.trim() !== "") && licenseImage !== null
    setIsFormValid(isValid)
  }, [formData, licenseImage])

  const toggleFavorite = () => {
    if (car) {
      const storedFavorites = localStorage.getItem("favorites")
      let favorites = storedFavorites ? JSON.parse(storedFavorites) : []

      if (isFavorite) {
        favorites = favorites.filter((id: string) => id !== car._id)
      } else {
        favorites.push(car._id)
      }

      localStorage.setItem("favorites", JSON.stringify(favorites))
      setIsFavorite(!isFavorite)

      const message = isFavorite ? `${car.name} removed from wishlist` : `${car.name} added to wishlist`
      setToast({ message, visible: true })
      setTimeout(() => setToast({ message: "", visible: false }), 3000)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLicenseImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.size <= 10 * 1024 * 1024) {
      setLicenseImage(file)
    } else {
      alert("Please upload an image file smaller than 10MB")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isFormValid) {
      router.push(`/car-payment/${car?.slug}`)
    }
  }

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-[#3563E9] border-t-transparent rounded-full"
        />
      </motion.div>
    )
  }

  if (!car) return <div className="text-gray-900 dark:text-gray-100 p-4">Car not found.</div>

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 mx-auto px-4 py-8 min-h-screen dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#3563E9] dark:text-blue-400 mb-2">
              Book Your {car.name}
            </h1>
            <div className="flex justify-center items-center gap-2 text-[#90A3BF] dark:text-gray-400">
              <span>4.8</span>
              <FaStar className="text-yellow-400" />
              <span>(440+ reviews)</span>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          >
            <div className="relative h-96 w-full mb-6">
              <Image
                src={urlFor(car.image).url() || "/placeholder.svg"}
                alt={car.name}
                fill
                className="object-contain rounded-lg"
              />
              <button
                onClick={toggleFavorite}
                className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:scale-105 transition-transform"
              >
                <FiHeart
                  className={`w-6 h-6 ${
                    isFavorite ? "text-red-500 fill-current" : "text-[#90A3BF] dark:text-gray-400"
                  }`}
                />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="feature-card dark:bg-gray-700 dark:border-gray-600">
                <BsFuelPump className="w-6 h-6 text-[#3563E9] dark:text-blue-400" />
                <span className="text-sm dark:text-gray-200">{car.fuelCapacity}</span>
                <span className="text-[#90A3BF] dark:text-gray-400 text-sm">Fuel Capacity</span>
              </div>
              <div className="feature-card dark:bg-gray-700 dark:border-gray-600">
                <BsGearWide className="w-6 h-6 text-[#3563E9] dark:text-blue-400" />
                <span className="text-sm dark:text-gray-200">{car.transmission}</span>
                <span className="text-[#90A3BF] dark:text-gray-400 text-sm">Transmission</span>
              </div>
              <div className="feature-card dark:bg-gray-700 dark:border-gray-600">
                <HiOutlineUsers className="w-6 h-6 text-[#3563E9] dark:text-blue-400" />
                <span className="text-sm dark:text-gray-200">{car.seatingCapacity}</span>
                <span className="text-[#90A3BF] dark:text-gray-400 text-sm">Seating Capacity</span>
              </div>
            </div>

            <div className="border-t pt-6 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-[#1A202C] dark:text-gray-200 mb-3">About this car</h3>
              <p className="text-[#90A3BF] dark:text-gray-400 leading-relaxed">{car.description}</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#3563E9] dark:text-blue-400">Booking Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput
                  label="Pick-Up Location"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                  icon={<FiMapPin className="text-[#3563E9] dark:text-blue-400" />}
                />
                <FormInput
                  label="Drop-Off Location"
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleInputChange}
                  icon={<FiMapPin className="text-[#3563E9] dark:text-blue-400" />}
                />
                <DateInput
                  label="Pick-Up Date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  icon={<FiCalendar className="text-[#3563E9] dark:text-blue-400" />}
                />
                <DateInput
                  label="Drop-Off Date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  icon={<FiCalendar className="text-[#3563E9] dark:text-blue-400" />}
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#3563E9] dark:text-blue-400">Your Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  icon={<FiUser className="text-[#3563E9] dark:text-blue-400" />}
                />
                <FormInput
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  icon={<FiMail className="text-[#3563E9] dark:text-blue-400" />}
                  type="email"
                />
                <FormInput
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  icon={<FiPhone className="text-[#3563E9] dark:text-blue-400" />}
                  type="tel"
                />
                <FormInput
                  label="Driving License Number"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleInputChange}
                  icon={<FiUser className="text-[#3563E9] dark:text-blue-400" />}
                />
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#1A202C] dark:text-gray-200">
                    Driver&apos;s License Upload
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex-1 cursor-pointer bg-gray-50 dark:bg-gray-700 rounded-lg p-2 border border-[#EEEFF2] dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <input type="file" accept="image/*" onChange={handleLicenseImageUpload} className="hidden" />
                      <div className="flex items-center justify-center gap-2">
                        <FiUpload className="text-[#3563E9] dark:text-blue-400" />
                        <span className="text-sm text-[#90A3BF] dark:text-gray-400">
                          {licenseImage ? "Uploaded" : "Driver's License Upload"}
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <motion.div whileHover={isFormValid ? { scale: 1.05 } : {}} whileTap={isFormValid ? { scale: 0.95 } : {}}>
              <button
                type="submit"
                className={`w-full py-4 rounded-xl font-semibold transition-colors text-center ${
                  isFormValid
                    ? "bg-[#3563E9] dark:bg-blue-600 text-white hover:bg-[#2549B2] dark:hover:bg-blue-700"
                    : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                }`}
                disabled={!isFormValid}
              >
                Continue to Payment
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>

      {toast.visible && <Toast message={toast.message} />}
    </motion.div>
  )
}

const FormInput = ({
  label,
  name,
  value,
  onChange,
  icon,
  type = "text",
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon: React.ReactNode
  type?: string
}) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-[#1A202C] dark:text-gray-200">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full pl-10 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-[#EEEFF2] dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3563E9] dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
        placeholder={`Enter ${label.toLowerCase()}`}
        required
      />
    </div>
  </div>
)

const DateInput = ({
  label,
  name,
  value,
  onChange,
  icon,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon: React.ReactNode
}) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-[#1A202C] dark:text-gray-200">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>
      <input
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full pl-10 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-[#EEEFF2] dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3563E9] dark:text-gray-200"
        required
      />
    </div>
  </div>
)