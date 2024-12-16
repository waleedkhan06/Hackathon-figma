"use client"

import { useState } from "react"
import Image from "next/image"
import { FaStar, FaShieldAlt } from 'react-icons/fa';

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'bitcoin'>('card')

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Billing Info */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold">Billing Info</h2>
                  <p className="text-sm text-gray-500">Please enter your billing info</p>
                </div>
                <span className="text-sm text-gray-400">Step 1 of 4</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm">Address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm">Town/City</label>
                  <input
                    type="text"
                    placeholder="Town/City"
                    className="w-full p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Rental Info */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold">Rental Info</h2>
                  <p className="text-sm text-gray-500">Please select your rental date</p>
                </div>
                <span className="text-sm text-gray-400">Step 2 of 4</span>
              </div>
              
              {/* Pick-Up Section */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-sm font-medium">Pick - Up</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm">Locations</label>
                    <select className="w-full p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500">
                      <option>Select your city</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm">Date</label>
                    <select className="w-full p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500">
                      <option>Select your date</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm">Time</label>
                    <select className="w-full p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500">
                      <option>Select your time</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Drop-Off Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-sm font-medium">Drop - Off</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm">Locations</label>
                    <select className="w-full p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500">
                      <option>Select your city</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm">Date</label>
                    <select className="w-full p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500">
                      <option>Select your date</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm">Time</label>
                    <select className="w-full p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500">
                      <option>Select your time</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold">Payment Method</h2>
                  <p className="text-sm text-gray-500">Please enter your payment method</p>
                </div>
                <span className="text-sm text-gray-400">Step 3 of 4</span>
              </div>
              
              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>Credit Card</span>
                  </div>
                  <div className="flex gap-2">
                    <Image src="/Visa.png" alt="Visa" width={80} height={20} />
                    {/* <Image src="/mastercard.png" alt="Mastercard" width={32} height={20} /> */}
                  </div>
                </label>

                {paymentMethod === 'card' && (
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="space-y-1">
                      <label className="text-sm">Card Number</label>
                      <input
                        type="text"
                        placeholder="Card number"
                        className="w-full p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm">Expiration Date</label>
                      <input
                        type="text"
                        placeholder="DD/MM/YY"
                        className="w-full p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm">Card Holder</label>
                      <input
                        type="text"
                        placeholder="Card holder"
                        className="w-full p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm">CVC</label>
                      <input
                        type="text"
                        placeholder="CVC"
                        className="w-full p-3 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
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
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>PayPal</span>
                  </div>
                  <Image src="/PayPal.png" alt="PayPal" width={80} height={20} />
                </label>

                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'bitcoin'}
                      onChange={() => setPaymentMethod('bitcoin')}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>Bitcoin</span>
                  </div>
                  <Image src="/Bitcoin.png" alt="Bitcoin" width={80} height={20} />
                </label>
              </div>
            </div>

            {/* Confirmation */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold">Confirmation</h2>
                  <p className="text-sm text-gray-500">We are getting to the end. Just few clicks and your rental is ready!</p>
                </div>
                <span className="text-sm text-gray-400">Step 4 of 4</span>
              </div>
              
              <div className="space-y-4">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-600">
                    I agree with sending an Marketing and newsletter emails. No spam, promised!
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-600">
                    I agree with our terms and conditions and privacy policy.
                  </span>
                </label>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
                  Rent Now
                </button>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                  <FaShieldAlt className="w-5 h-5" />
                  <div>
                    <p className="font-medium">All your data are safe</p>
                    <p>We are using the most advanced security to provide you the best experience ever.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-2">Rental Summary</h2>
              <p className="text-sm text-gray-500 mb-6">
                Prices may change depending on the length of the rental and the price of your rental car.
              </p>

              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl mb-6">
                <Image
                  src="/car2.png"
                  alt="Nissan GT-R"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">Nissan GT-R</h3>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[1, 2, 3, 4].map((i) => (
                        <FaStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <FaStar className="w-4 h-4 fill-gray-200 text-gray-200" />
                    </div>
                    <span className="text-sm text-gray-500">440+ Reviewer</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">$80.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">$0</span>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Apply promo code</span>
                    <span className="text-blue-600">Apply now</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <div>
                    <p className="font-semibold">Total Rental Price</p>
                    <p className="text-sm text-gray-500">Overall price and includes rental discount</p>
                  </div>
                  <span className="text-2xl font-semibold">$80.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}







