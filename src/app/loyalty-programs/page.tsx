"use client"

import { useState } from "react"
import { GiMedal, GiGoldBar, GiDiamondTrophy } from "react-icons/gi"
import { FaStar, FaCoins, FaGift } from "react-icons/fa"

export default function LoyaltyProgramPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [points] = useState(2450) // Example points value

  const loyaltyFaq = [
    {
      question: "How do I earn points?",
      answer: "Earn 10 points for every $1 spent on rentals. Bonus points for referrals and off-peak bookings."
    },
    {
      question: "How do tier upgrades work?",
      answer: "Progress through tiers by earning points annually. Silver: 1,000 pts, Gold: 5,000 pts, Diamond: 15,000 pts"
    },
    {
      question: "Do points expire?",
      answer: "Points remain active for 18 months from date of earning. Tier status is evaluated annually."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 
            bg-gradient-to-r from-blue-600 to-blue-500 
            dark:from-blue-500 dark:to-blue-700 
            bg-clip-text text-transparent">
            MORENT Rewards Program
          </h1>
          <p className="text-lg text-gray-600 dark:text-blue-200">
            Earn points, unlock benefits, and enjoy exclusive rewards
          </p>
        </div>

        {/* Current Status */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <GiMedal className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-blue-100">Gold Member</h3>
                <p className="text-gray-600 dark:text-blue-300">{points.toLocaleString()} Points</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="h-3 bg-gray-200 dark:bg-blue-900 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 dark:bg-blue-500" 
                  style={{ width: `${Math.min((points / 5000) * 100, 100)}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-blue-300">
                <span>0 Points</span>
                <span>5,000 for Diamond</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
            <FaCoins className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-blue-100 mb-2">Earn Points Faster</h3>
            <ul className="text-gray-600 dark:text-blue-300 space-y-2">
              <li>• 2x points on weekends</li>
              <li>• 500 pts referral bonus</li>
              <li>• Double upgrade points</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
            <FaGift className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-blue-100 mb-2">Exclusive Rewards</h3>
            <ul className="text-gray-600 dark:text-blue-300 space-y-2">
              <li>• Free vehicle upgrades</li>
              <li>• Priority support</li>
              <li>• Birthday rewards</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
            <FaStar className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-blue-100 mb-2">Member Benefits</h3>
            <ul className="text-gray-600 dark:text-blue-300 space-y-2">
              <li>• No booking fees</li>
              <li>• Flexible cancellations</li>
              <li>• VIP promotions</li>
            </ul>
          </div>
        </div>

        {/* Tier System */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-blue-100 mb-8 text-center">
            Membership Tiers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border-2 border-blue-200 dark:border-blue-800 rounded-2xl">
              <GiMedal className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2">Silver</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">1,000+ Points</p>
              <ul className="text-gray-600 dark:text-blue-300 space-y-2">
                <li>• 5% discount on rentals</li>
                <li>• Free cancellation</li>
                <li>• Basic support</li>
              </ul>
            </div>

            <div className="text-center p-6 border-2 border-blue-300 dark:border-blue-600 rounded-2xl bg-blue-50 dark:bg-blue-900">
              <GiGoldBar className="w-16 h-16 text-blue-500 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2">Gold</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">5,000+ Points</p>
              <ul className="text-gray-600 dark:text-blue-300 space-y-2">
                <li>• 10% discount</li>
                <li>• Free upgrades</li>
                <li>• Priority support</li>
              </ul>
            </div>

            <div className="text-center p-6 border-2 border-blue-400 dark:border-blue-400 rounded-2xl">
              <GiDiamondTrophy className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2">Diamond</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">15,000+ Points</p>
              <ul className="text-gray-600 dark:text-blue-300 space-y-2">
                <li>• 15% discount</li>
                <li>• VIP services</li>
                <li>• Concierge support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-blue-100 mb-8 text-center">
            Program FAQs
          </h2>
          <div className="space-y-6">
            {loyaltyFaq.map((item, index) => (
              <div 
                key={index}
                className="border-b border-gray-200 dark:border-blue-800 pb-6"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left flex justify-between items-center"
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-blue-100">
                    {item.question}
                  </span>
                  <span className={`transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}>
                    <svg 
                      className="w-6 h-6 text-blue-600 dark:text-blue-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </span>
                </button>
                {activeFaq === index && (
                  <p className="mt-4 text-gray-600 dark:text-blue-300">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-4">
            Ready to Join?
          </h2>
          <p className="text-gray-600 dark:text-blue-200 mb-6">
            Start earning rewards with your next rental
          </p>
          <button className="bg-blue-600 dark:bg-blue-700 text-white px-8 py-4 rounded-lg 
            hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors text-lg font-semibold">
            Start Earning Points Now
          </button>
        </div>
      </div>
    </div>
  )
}