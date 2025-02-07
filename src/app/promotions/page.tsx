"use client"

import { useState } from "react"
import { FaTag, FaGift, FaCopy, FaRegClock } from "react-icons/fa"
import { GiCash } from "react-icons/gi"

export default function PromotionsPage() {
  const [activeCategory] = useState("all")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const promotions = [
    {
      code: "SUMMER24",
      discount: "20% OFF",
      title: "Summer Special",
      description: "Get 20% off all weekend rentals",
      expiry: "2024-08-31",
      type: "seasonal"
    },
    {
      code: "FREEWEEK",
      discount: "1 Week Free",
      title: "Referral Bonus",
      description: "Earn 1 free week for every 3 friends who sign up",
      expiry: "2024-12-31",
      type: "referral"
    },
    {
      code: "LOYALTY15",
      discount: "15% OFF",
      title: "Loyalty Reward",
      description: "Exclusive discount for loyal customers",
      expiry: "2024-06-30",
      type: "loyalty"
    }
  ]

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 
            bg-gradient-to-r from-blue-600 to-blue-500 
            dark:from-blue-500 dark:to-blue-700 
            bg-clip-text text-transparent">
            Special Offers & Promotions
          </h1>
          <p className="text-lg text-gray-600 dark:text-blue-200">
            Unlock exclusive discounts and deals
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12">
          {["all", "seasonal", "referral", "loyalty"].map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-blue-600 dark:bg-blue-700 text-white"
                  : "bg-gray-200 dark:bg-blue-800 text-gray-700 dark:text-blue-300"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Promotions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {promotions.map(promo => (
            <div 
              key={promo.code}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-blue-600 dark:bg-blue-700 text-white px-3 py-1 rounded-full text-sm">
                {promo.type}
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <GiCash className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-blue-100">{promo.title}</h3>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{promo.discount}</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-blue-300 mb-4">{promo.description}</p>
              
              <div className="flex items-center justify-between bg-blue-50 dark:bg-blue-900 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <FaTag className="text-blue-600 dark:text-blue-400" />
                  <span className="font-mono text-gray-900 dark:text-blue-100">{promo.code}</span>
                </div>
                <button 
                  onClick={() => copyToClipboard(promo.code)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  <FaCopy />
                </button>
              </div>
              
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-600 dark:text-blue-400">
                <FaRegClock />
                <span>Expires: {new Date(promo.expiry).toLocaleDateString()}</span>
              </div>
              
              {copiedCode === promo.code && (
                <div className="absolute bottom-4 right-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                  Copied!
                </div>
              )}
            </div>
          ))}
        </div>

        {/* How to Use */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-6">
            <FaGift className="inline mr-2 text-blue-600 dark:text-blue-400" />
            How to Redeem
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border border-blue-200 dark:border-blue-800 rounded-xl">
              <div className="text-blue-600 dark:text-blue-400 text-2xl mb-2">1</div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-blue-100 mb-2">
                Find Your Code
              </h3>
              <p className="text-gray-600 dark:text-blue-300">
                Browse available promotions and copy your desired code
              </p>
            </div>
            
            <div className="p-4 border border-blue-200 dark:border-blue-800 rounded-xl">
              <div className="text-blue-600 dark:text-blue-400 text-2xl mb-2">2</div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-blue-100 mb-2">
                Apply at Checkout
              </h3>
              <p className="text-gray-600 dark:text-blue-300">
                Enter the promo code during payment process
              </p>
            </div>
            
            <div className="p-4 border border-blue-200 dark:border-blue-800 rounded-xl">
              <div className="text-blue-600 dark:text-blue-400 text-2xl mb-2">3</div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-blue-100 mb-2">
                Enjoy Savings
              </h3>
              <p className="text-gray-600 dark:text-blue-300">
                Your discount will be automatically applied
              </p>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="text-center text-gray-600 dark:text-blue-300">
          <p>* Offers subject to terms and conditions. Cannot be combined with other promotions.</p>
        </div>
      </div>
    </div>
  )
}