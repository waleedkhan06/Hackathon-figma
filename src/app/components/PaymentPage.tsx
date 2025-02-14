"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FaStar, FaCreditCard, FaPaypal, FaBitcoin } from "react-icons/fa"
import type { Car } from "../../../types/car"
import { useUser } from "@clerk/nextjs"
import Swal from "sweetalert2"
import type React from "react"
import { urlFor } from "@/sanity/lib/image"

interface PaymentPageClientProps {
  car: Car
}

export default function PaymentPageClient({ car }: PaymentPageClientProps) {
  const { user, isSignedIn, isLoaded } = useUser()
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "bitcoin">("card")
  const [totalPrice, setTotalPrice] = useState(0)
  const [discountedPrice, setDiscountedPrice] = useState(0)
  const [formComplete, setFormComplete] = useState(false)
  const [loading, setLoading] = useState(false)
  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    pickupLocation: "",
    dropOffLocation: "",
    pickupDate: "",
    dropOffDate: "",
    pickupTime: "",
    dropOffTime: "",
  })

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        userName: user.fullName || "",
        userEmail: user.primaryEmailAddress?.emailAddress || "",
      }))
    }
  }, [user])

  useEffect(() => {
    if (formData.pickupDate && formData.dropOffDate) {
      const start = new Date(`${formData.pickupDate}T${formData.pickupTime || "00:00"}`)
      const end = new Date(`${formData.dropOffDate}T${formData.dropOffTime || "00:00"}`)
      const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
      const price = Number.parseFloat(car.pricePerDay.replace(/[^0-9.]/g, ""))
      const total = days * price
      setTotalPrice(total)
      setDiscountedPrice(couponApplied ? total * 0.75 : total) // Changed from 0.5 to 0.75 for 25% discount
    }
  }, [
    formData.pickupDate,
    formData.dropOffDate,
    formData.pickupTime,
    formData.dropOffTime,
    car.pricePerDay,
    couponApplied,
  ])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    const isComplete = Object.values(formData).every((value) => value !== "") && paymentMethod !== null
    setFormComplete(isComplete)
  }, [formData, paymentMethod])

  const handleRentNow = async () => {
    if (!formComplete) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all required fields before renting.",
        icon: "error",
        confirmButtonText: "OK",
      })
      return
    }

    setLoading(true)

    try {
      const start = new Date(`${formData.pickupDate}T${formData.pickupTime}`)
      const end = new Date(`${formData.dropOffDate}T${formData.dropOffTime}`)
      const rentalDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))

      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          carId: car._id,
          carName: car.name,
          totalPrice: discountedPrice,
          rentalDays,
          status: "Pending",
          createdAt: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Your rental has been confirmed.",
          icon: "success",
          confirmButtonText: "OK",
        })
      } else {
        throw new Error("Failed to create order")
      }
    } catch (error) {
      console.error("Error creating order:", error)
      Swal.fire({
        title: "Error!",
        text: "There was a problem processing your order. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === "PRIME") {
      setCouponApplied(true)
      setDiscountedPrice(totalPrice * 0.75) // Changed from 0.5 to 0.75 for 25% discount
      Swal.fire({
        title: "Success!",
        text: "25% discount applied successfully!", // Updated text
        icon: "success",
        confirmButtonText: "OK",
      })
    } else {
      Swal.fire({
        title: "Error!",
        text: "Invalid coupon code.",
        icon: "error",
        confirmButtonText: "OK",
      })
    }
  }

  if (!isLoaded || !isSignedIn) {
    return null
  }

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50 dark:bg-gray-900"
      >
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-6">
              {/* Billing Info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-[#3563E9] dark:text-white">Billing Info</h2>
                    <p className="text-sm text-[#90A3BF] dark:text-gray-300">Please enter your billing info</p>
                  </div>
                  <span className="text-sm text-[#90A3BF] dark:text-gray-300">Step 1 of 4</span>
                </div>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm text-[#1A202C] dark:text-white">Name</label>
                      <input
                        type="text"
                        name="userName"
                        placeholder="Name"
                        required
                        className="w-full p-3 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                        value={formData.userName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm text-[#1A202C] dark:text-white">Email</label>
                      <input
                        type="email"
                        name="userEmail"
                        placeholder="Email"
                        required
                        className="w-full p-3 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                        value={formData.userEmail}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm text-[#1A202C] dark:text-white">Phone Number</label>
                      <input
                        type="tel"
                        name="userPhone"
                        placeholder="Phone Number"
                        required
                        className="w-full p-3 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                        value={formData.userPhone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </form>
              </motion.div>

              {/* Rental Info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-[#3563E9] dark:text-white">Rental Info</h2>
                    <p className="text-sm text-[#90A3BF] dark:text-gray-300">Please select your rental date</p>
                  </div>
                  <span className="text-sm text-[#90A3BF] dark:text-gray-300">Step 2 of 4</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm text-[#1A202C] dark:text-white">Pick-Up Location</label>
                    <input
                      type="text"
                      name="pickupLocation"
                      placeholder="Pick-Up Location"
                      required
                      className="w-full p-3 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                      value={formData.pickupLocation}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm text-[#1A202C] dark:text-white">Drop-Off Location</label>
                    <input
                      type="text"
                      name="dropOffLocation"
                      placeholder="Drop-Off Location"
                      required
                      className="w-full p-3 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                      value={formData.dropOffLocation}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm text-[#1A202C] dark:text-white">Pick-Up Date</label>
                    <input
                      type="date"
                      name="pickupDate"
                      required
                      className="w-full p-3 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                      value={formData.pickupDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm text-[#1A202C] dark:text-white">Drop-Off Date</label>
                    <input
                      type="date"
                      name="dropOffDate"
                      required
                      className="w-full p-3 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                      value={formData.dropOffDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm text-[#1A202C] dark:text-white">Pick-Up Time</label>
                    <input
                      type="time"
                      name="pickupTime"
                      required
                      className="w-full p-3 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                      value={formData.pickupTime}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm text-[#1A202C] dark:text-white">Drop-Off Time</label>
                    <input
                      type="time"
                      name="dropOffTime"
                      required
                      className="w-full p-3 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                      value={formData.dropOffTime}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-[#3563E9] dark:text-white">Payment Method</h2>
                    <p className="text-sm text-[#90A3BF] dark:text-gray-300">Please enter your payment method</p>
                  </div>
                  <span className="text-sm text-[#90A3BF] dark:text-gray-300">Step 3 of 4</span>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                        className="w-4 h-4 text-[#3563E9]"
                      />
                      <FaCreditCard className="text-[#3563E9]" />
                      <span className="text-[#1A202C] dark:text-white">Credit Card</span>
                    </div>
                    <Image src="/Visa.png" alt="Visa" width={80} height={20} />
                  </label>

                  {paymentMethod === "card" && (
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div className="space-y-1">
                        <label className="text-sm text-[#1A202C] dark:text-white">Card Number</label>
                        <input
                          type="text"
                          placeholder="Card Number"
                          required
                          className="w-full p-3 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm text-[#1A202C] dark:text-white">Expiration Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          required
                          className="w-full p-3 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm text-[#1A202C] dark:text-white">Card Holder</label>
                        <input
                          type="text"
                          placeholder="Card Holder"
                          required
                          className="w-full p-3 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm text-[#1A202C] dark:text-white">CVC</label>
                        <input
                          type="text"
                          placeholder="CVC"
                          required
                          className="w-full p-3 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                        />
                      </div>
                    </div>
                  )}

                  <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "paypal"}
                        onChange={() => setPaymentMethod("paypal")}
                        className="w-4 h-4 text-[#3563E9]"
                      />
                      <FaPaypal className="text-[#3563E9]" />
                      <span className="text-[#1A202C] dark:text-white">PayPal</span>
                    </div>
                    <Image src="/Paypal.png" alt="PayPal" width={80} height={20} />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "bitcoin"}
                        onChange={() => setPaymentMethod("bitcoin")}
                        className="w-4 h-4 text-[#3563E9]"
                      />
                      <FaBitcoin className="text-[#3563E9]" />
                      <span className="text-[#1A202C] dark:text-white">Bitcoin</span>
                    </div>
                    <Image src="/Bitcoin.png" alt="Bitcoin" width={80} height={20} />
                  </label>
                </div>
              </motion.div>

              {/* Confirmation Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md"
              >
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-[#3563E9] dark:text-white">Confirmation</h2>
                    <p className="text-sm text-[#90A3BF] dark:text-gray-300">
                      We are getting to the end. Just a few clicks and your rental is ready!
                    </p>
                  </div>
                  <span className="text-sm text-[#90A3BF] dark:text-gray-300">Step 4 of 4</span>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center gap-4 bg-[#F6F7F9] dark:bg-gray-700 py-4 px-5 rounded-lg border border-[#EDEDED] dark:border-gray-700">
                    <input type="checkbox" className="w-5 h-5 accent-[#3563E9] cursor-pointer" />
                    <span className="text-sm text-[#1A202C] dark:text-white">
                      I agree with sending an Marketing and newsletter emails. No spam, promised!
                    </span>
                  </label>

                  <label className="flex items-center gap-4 bg-[#F6F7F9] dark:bg-gray-700 py-4 px-5 rounded-lg border border-[#EDEDED] dark:border-gray-700">
                    <input type="checkbox" className="w-5 h-5 accent-[#3563E9] cursor-pointer" />
                    <span className="text-sm text-[#1A202C] dark:text-white">
                      I agree with our terms and conditions and privacy policy.
                    </span>
                  </label>

                  <button
                    className={`w-full ${
                      formComplete ? "bg-[#3563E9] hover:bg-[#274abc]" : "bg-gray-400 cursor-not-allowed"
                    } text-white px-5 py-3 rounded-lg font-semibold transition-colors duration-300`}
                    onClick={handleRentNow}
                    disabled={!formComplete}
                  >
                    Rent Now
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Summary */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sticky top-8">
                <h2 className="text-xl font-semibold text-[#3563E9] dark:text-white">Rental Summary</h2>
                <p className="text-sm text-[#90A3BF] dark:text-gray-300 mb-6">
                  Prices may change depending on the length of the rental and the price of your rental car.
                </p>

                <div className="flex items-center gap-4 bg-[#3563E9] p-4 rounded-xl mb-6">
                  <div className="relative w-[116px] h-[80px]">
                    <Image
                      src={urlFor(car.image).url() || "/placeholder.svg"}
                      alt={car.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{car.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4].map((i) => (
                          <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                        ))}
                        <FaStar className="w-4 h-4 text-gray-300" />
                      </div>
                      <span className="text-sm text-white/80">440+ Reviewer</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[#90A3BF] dark:text-gray-300">Subtotal</span>
                    <span className="font-semibold text-[#1A202C] dark:text-white">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#90A3BF] dark:text-gray-300">Tax</span>
                    <span className="font-semibold text-[#1A202C] dark:text-white">$0</span>
                  </div>
                  <div className="flex bg-gray-100 dark:bg-gray-700 items-center justify-between rounded-lg p-4 dark:border-gray-700">
                    <input
                      type="text"
                      placeholder="Apply promo code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="bg-transparent text-[#90A3BF] dark:text-gray-300 focus:outline-none"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="font-semibold hover:underline text-[#3563E9] dark:text-white"
                    >
                      Apply now
                    </button>
                  </div>
                  <div className="pt-6 border-t">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-lg text-[#1A202C] dark:text-white">Total Rental Price</h4>
                        <p className="text-sm text-[#90A3BF] dark:text-gray-300">
                          Overall price and includes rental discount
                        </p>
                      </div>
                      <span className="text-2xl font-bold text-[#1A202C] dark:text-white">
                        ${discountedPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  )
}

