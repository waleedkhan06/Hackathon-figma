"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FaStar,  } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'bitcoin'>('card')

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Billing Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm" data-aos="fade-up">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-[#3563E9]">Billing Info</h2>
                  <p className="text-sm text-[#90A3BF]">Please enter your billing info</p>
                </div>
                <span className="text-sm text-[#90A3BF]">Step 1 of 4</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm text-[#1A202C]">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-[#1A202C]">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-[#1A202C]">Address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-[#1A202C]">Town/City</label>
                  <input
                    type="text"
                    placeholder="Town/City"
                    className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                  />
                </div>
              </div>
            </div>

            {/* Rental Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm" data-aos="fade-up">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-[#3563E9]">Rental Info</h2>
                  <p className="text-sm text-[#90A3BF]">Please select your rental date</p>
                </div>
                <span className="text-sm text-[#90A3BF]">Step 2 of 4</span>
              </div>

              {/* Pick-Up Section */}
<div className="space-y-4 mb-6">
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-full bg-[#3563E9]"></div>
    <span className="text-sm font-medium text-[#1A202C]">Pick - Up</span>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-1">
      <label className="text-sm text-[#1A202C]">Locations</label>
      <input
        type="text"
        placeholder="Enter your city"
        className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
      />
    </div>
    <div className="space-y-1">
      <label className="text-sm text-[#1A202C]">Date</label>
      <input
        type="text"
        placeholder="Enter your date"
        className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
      />
    </div>
    <div className="space-y-1">
      <label className="text-sm text-[#1A202C]">Time</label>
      <input
        type="text"
        placeholder="Enter your time"
        className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
      />
    </div>
  </div>
</div>


              {/* Drop-Off Section */}
<div className="space-y-4">
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-full bg-[#3563E9]"></div>
    <span className="text-sm font-medium text-[#1A202C]">Drop - Off</span>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-1">
      <label className="text-sm text-[#1A202C]">Locations</label>
      <input
        type="text"
        placeholder="Enter your city"
        className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
      />
    </div>
    <div className="space-y-1">
      <label className="text-sm text-[#1A202C]">Date</label>
      <input
        type="text"
        placeholder="Enter your date"
        className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
      />
    </div>
    <div className="space-y-1">
      <label className="text-sm text-[#1A202C]">Time</label>
      <input
        type="text"
        placeholder="Enter your time"
        className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
      />
    </div>
  </div>
</div>
</div>


            {/* Payment Method */}
            <div className="bg-white rounded-2xl p-6 shadow-sm" data-aos="fade-up">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-[#3563E9]">Payment Method</h2>
                  <p className="text-sm text-[#90A3BF]">Please enter your payment method</p>
                </div>
                <span className="text-sm text-[#90A3BF]">Step 3 of 4</span>
              </div>

              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="w-4 h-4 text-[#3563E9]"
                    />
                    <span className="text-[#1A202C]">Credit Card</span>
                  </div>
                  <div className="flex gap-2">
                    <Image src="/Visa.png" alt="Visa" width={80} height={20} />
                  </div>
                </label>

                {paymentMethod === 'card' && (
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="space-y-1">
                      <label className="text-sm text-[#1A202C]">Card Number</label>
                      <input
                        type="text"
                        placeholder="Card number"
                        className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm text-[#1A202C]">Expiration Date</label>
                      <input
                        type="text"
                        placeholder="DD/MM/YY"
                        className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm text-[#1A202C]">Card Holder</label>
                      <input
                        type="text"
                        placeholder="Card holder"
                        className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm text-[#1A202C]">CVC</label>
                      <input
                        type="text"
                        placeholder="CVC"
                        className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
                      />
                    </div>
                  </div>
                )}

                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                      className="w-4 h-4 text-[#3563E9]"
                    />
                    <span className="text-[#1A202C]">PayPal</span>
                  </div>
                  <Image src="/Paypal.png" alt="PayPal" width={80} height={20} />
                </label>

                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'bitcoin'}
                      onChange={() => setPaymentMethod('bitcoin')}
                      className="w-4 h-4 text-[#3563E9]"
                    />
                    <span className="text-[#1A202C]">Bitcoin</span>
                  </div>
                  <Image src="/Bitcoin.png" alt="Bitcoin" width={80} height={20} />
                </label>
              </div>
            </div>

            {/* Confirmation Section */}
            <div className="bg-white rounded-lg p-8 shadow-md" data-aos="fade-up">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#3563E9]">Confirmation</h2>
                  <p className="text-sm text-[#90A3BF]">
                    We are getting to the end. Just a few clicks and your rental is ready!
                  </p>
                </div>
                <span className="text-sm text-[#90A3BF]">Step 4 of 4</span>
              </div>

              <div className="space-y-4">
                {/* First Checkbox */}
                <label className="flex items-center gap-4 bg-[#F6F7F9] py-4 px-5 rounded-lg border border-[#EDEDED]">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-[#3563E9] cursor-pointer"
                  />
                  <span className="text-sm text-[#1A202C]">
                    I agree with sending Marketing and newsletter emails. No spam, promised!
                  </span>
                </label>

                {/* Second Checkbox */}
                <label className="flex items-center gap-4 bg-[#F6F7F9] py-4 px-5 rounded-lg border border-[#EDEDED]">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-[#3563E9] cursor-pointer"
                  />
                  <span className="text-sm text-[#1A202C]">
                    I agree with our terms and conditions and privacy policy.
                  </span>
                </label>

                {/* Rent Now Button */}
                <button className="w-36 bg-[#3563E9] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#2549B2] transition-colors duration-300">
                  Rent Now
                </button>

                <div className="flex items-start gap-4 mt-6">
                  <Image
                    src="/safety.png"
                    alt="Shield Icon"
                    width={24}
                    height={24}
                  />
                  <div>
                    <p className="font-medium text-[#1A202C]">
                      All your data are safe
                    </p>
                    <p className="text-sm text-[#90A3BF]">
                      We are using the most advanced security to provide you the best experience ever.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-8" data-aos="fade-left">
              <h2 className="text-xl font-semibold text-[#3563E9]">Rental Summary</h2>
              <p className="text-sm text-[#90A3BF] mb-6">
                Prices may change depending on the length of the rental and the price of your rental car.
              </p>

              <div className="flex items-center gap-4 bg-[#3563E9] p-4 rounded-xl mb-6">
                <div className="relative w-[116px] h-[80px]">
                  <Image
                    src="/nissan-gtr.png"
                    alt="Nissan GT-R"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Nissan GT-R</h3>
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
                  <span className="text-[#90A3BF]">Subtotal</span>
                  <span className="font-semibold text-[#1A202C]">$80.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#90A3BF]">Tax</span>
                  <span className="font-semibold text-[#1A202C]">$0</span>
                </div>
                <div className="flex bg-gray-100 items-center justify-between rounded-lg p-4">
                  <span className="text-[#90A3BF]">Apply promo code</span>
                  <button className="font-semibold hover:underline text-[#3563E9]">
                    Apply now
                  </button>
                </div>
                <div className="pt-6 border-t">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-lg text-[#1A202C]">Total Rental Price</h4>
                      <p className="text-sm text-[#90A3BF]">Overall price and includes rental discount</p>
                    </div>
                    <span className="text-2xl font-bold text-[#1A202C]">$80.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

