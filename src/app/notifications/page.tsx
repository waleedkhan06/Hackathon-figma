"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useUser } from "@clerk/nextjs"
import {  FaCalendar, FaMapMarkerAlt } from "react-icons/fa"

interface Order {
  id: string
  carName: string
  pickupLocation: string
  dropOffLocation: string
  pickupDate: string
  dropOffDate: string
  totalPrice: number
  status: string
}

export default function NotificationsPage() {
  const {  isSignedIn, isLoaded } = useUser()
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      fetchOrders()
    }
  }, [isLoaded, isSignedIn])

  const fetchOrders = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await fetch("/api/create-order")
      if (response.ok) {
        const data = await response.json()
        setOrders(data)
      } else {
        throw new Error("Failed to fetch orders")
      }
    } catch (error) {
      console.error("Error fetching orders:", error)
      setError("Failed to fetch orders. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isLoaded || !isSignedIn) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8"
        >
          Your Notifications
        </motion.h1>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10"
          >
            Loading...
          </motion.div>
        ) : error ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10 text-red-500"
          >
            {error}
          </motion.div>
        ) : (
          <AnimatePresence>
            <div className="space-y-6">
              {orders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 shadow-lg"
                >
                  <h2 className="text-xl font-semibold mb-4">{order.carName}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-blue-400 mr-2" />
                      <span>Pickup: {order.pickupLocation}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-blue-400 mr-2" />
                      <span>Drop-off: {order.dropOffLocation}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendar className="text-blue-400 mr-2" />
                      <span>From: {new Date(order.pickupDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendar className="text-blue-400 mr-2" />
                      <span>To: {new Date(order.dropOffDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-semibold">Total: ${order.totalPrice.toFixed(2)}</span>
                    <span className={`px-3 py-1 rounded-full ${
                      order.status === "Confirmed" ? "bg-green-500" : "bg-yellow-500"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        )}
      </main>
    </div>
  )
}
