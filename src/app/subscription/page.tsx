"use client"

import { useState } from "react"
import { FaCar, FaCrown, FaStar, FaSyncAlt, FaShieldAlt, FaUsers, FaRocket } from "react-icons/fa"
import { GiProgression } from "react-icons/gi"

export default function SubscriptionPage() {
  const [activePlan, setActivePlan] = useState<string | null>(null)
  const [hasSubscription, setHasSubscription] = useState(false)

  const currentDate = new Date()
  const renewalDate = new Date(currentDate)
  renewalDate.setMonth(renewalDate.getMonth() + 1)

  const plans = [
    {
      name: "Basic",
      price: "Free",
      icon: <FaUsers className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      features: ["5 rentals/month", "Standard Support", "Basic Insurance"]
    },
    {
      name: "Pro",
      price: "$29/month",
      icon: <FaRocket className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      features: ["15 rentals/month", "Priority Support", "Premium Insurance", "Free Cancellations"]
    },
    {
      name: "Enterprise",
      price: "$99/month",
      icon: <FaCrown className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />,
      features: ["Unlimited rentals", "24/7 Support", "VIP Services", "Dedicated Manager"]
    }
  ]

  const handleSubscribe = (planName: string) => {
    if (planName === "Basic") {
      setActivePlan(planName)
      setHasSubscription(true)
    } else {
      alert("Payment required. Stripe integration coming soon.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 
            bg-gradient-to-r from-blue-600 to-blue-500 
            dark:from-blue-500 dark:to-blue-700 
            bg-clip-text text-transparent">
            Subscription Management
          </h1>
          <p className="text-lg text-gray-600 dark:text-blue-200">
            {hasSubscription ? "Manage your plan and payment methods" : "Choose your perfect plan"}
          </p>
        </div>

        {hasSubscription ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <GiProgression className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100">Current Plan</h2>
                <p className="text-gray-600 dark:text-blue-300">{activePlan} Plan</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 border border-blue-200 dark:border-blue-800 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <FaSyncAlt className="text-blue-600 dark:text-blue-400" />
                  <span className="font-medium text-gray-900 dark:text-blue-100">Renewal Date</span>
                </div>
                <p className="text-gray-600 dark:text-blue-300">{renewalDate.toDateString()}</p>
              </div>

              <div className="p-4 border border-blue-200 dark:border-blue-800 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <FaShieldAlt className="text-blue-600 dark:text-blue-400" />
                  <span className="font-medium text-gray-900 dark:text-blue-100">Plan Usage</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-blue-900 h-2 rounded-full">
                  <div className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full w-6/12" />
                </div>
                <p className="text-gray-600 dark:text-blue-300 mt-2">6/15 rentals used</p>
              </div>

              <div className="p-4 border border-blue-200 dark:border-blue-800 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <FaStar className="text-blue-600 dark:text-blue-400" />
                  <span className="font-medium text-gray-900 dark:text-blue-100">Member Since</span>
                </div>
                <p className="text-gray-600 dark:text-blue-300">{currentDate.toDateString()}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <GiProgression className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-4">
                Get Started with MORENT Pro
              </h2>
              <p className="text-gray-600 dark:text-blue-300 mb-8">
                Choose a subscription plan that fits your needs and unlock exclusive benefits
              </p>
            </div>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-8">
            {hasSubscription ? "Change Plan" : "Available Plans"}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map(plan => (
              <div 
                key={plan.name}
                className={`p-6 rounded-xl border-2 ${
                  activePlan === plan.name 
                    ? "border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-900"
                    : "border-gray-200 dark:border-blue-800"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {plan.icon}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-blue-100">{plan.name}</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  {plan.price}
                </p>
                <ul className="text-gray-600 dark:text-blue-300 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FaCar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleSubscribe(plan.name)}
                  className={`mt-6 w-full py-2 rounded-lg ${
                    activePlan === plan.name
                      ? "bg-gray-200 dark:bg-blue-800 text-gray-700 dark:text-blue-300"
                      : "bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-800"
                  }`}
                >
                  {activePlan === plan.name ? "Current Plan" : "Subscribe Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
