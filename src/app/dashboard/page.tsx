"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FaHome, FaCar, FaChartBar, FaSyncAlt, FaInbox, FaCalendarAlt, FaCog, FaQuestionCircle, FaMoon, FaSignOutAlt, FaEllipsisV } from 'react-icons/fa'
import { FiMenu } from "react-icons/fi"
import AOS from 'aos'
import 'aos/dist/aos.css'

// Sample data
const recentTransactions = [
  {
    id: 1,
    name: "Nissan GT - R",
    type: "Sport Car",
    date: "20 July",
    price: 80.00,
    image: "/nissan.png"
  },
  {
    id: 2,
    name: "Koenigsegg",
    type: "Sport Car",
    date: "19 July",
    price: 99.00,
    image: "/Koenigsegg.png"
  },
  {
    id: 3,
    name: "Rolls - Royce",
    type: "Sport Car",
    date: "18 July",
    price: 96.00,
    image: "/ROLLS.png"
  },
  {
    id: 4,
    name: "CR - V",
    type: "SUV",
    date: "17 July",
    price: 80.00,
    image: "/crv.png"
  }
]

const rentalStats = [
  { type: "Sport Car", count: 17439 },
  { type: "SUV", count: 9478 },
  { type: "Coupe", count: 18197 },
  { type: "Hatchback", count: 12510 },
  { type: "MPV", count: 14406 }
]

const menuItems = [
  { icon: FaHome, label: "Dashboard", active: true },
  { icon: FaCar, label: "Car Rent" },
  { icon: FaChartBar, label: "Insight" },
  { icon: FaSyncAlt, label: "Reimburse" },
  { icon: FaInbox, label: "Inbox" },
  { icon: FaCalendarAlt, label: "Calendar" }
]

const preferenceItems = [
  { icon: FaCog, label: "Settings" },
  { icon: FaQuestionCircle, label: "Help & Center" }
]

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const totalRentals = rentalStats.reduce((acc, stat) => acc + stat.count, 0)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <div className={`flex min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
     
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
          w-[280px] sm:w-[320px] lg:w-[280px] 
          ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white'}
          shadow-lg
          transform lg:transform-none transition-transform duration-300 ease-in-out
          ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
          z-40
        `}
      >
        <div className="p-6 space-y-8">
         
          <div className="text-sm font-semibold text-[#90A3BF]" data-aos="fade-right">
            MAIN MENU
          </div>

         
          <nav className="flex-1">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={item.label} data-aos="fade-right" data-aos-delay={index * 100}>
                  <a
                    href="#"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors
                      ${item.active 
                        ? 'bg-[#3563E9] text-white' 
                        : `${isDarkMode ? 'text-[#90A3BF] hover:bg-blue-600' : 'text-[#90A3BF] hover:bg-blue-600'}`
                      }
                    `}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

       
            <div className="text-sm font-semibold text-[#90A3BF] mt-8 mb-4" data-aos="fade-right">
              PREFERENCES
            </div>

            
            <ul className="space-y-2">
              {preferenceItems.map((item, index) => (
                <li key={item.label} data-aos="fade-right" data-aos-delay={index * 100}>
                  <a
                    href="#"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors
                      ${isDarkMode ? 'text-[#90A3BF] hover:bg-blue-600' : 'text-[#90A3BF] hover:bg-blue-600'}
                    `}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </a>
                </li>
              ))}
              <li data-aos="fade-right" data-aos-delay={200}>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors
                    ${isDarkMode ? 'text-[#90A3BF] hover:bg-blue-800' : 'text-[#90A3BF] hover:bg-blue-50'}
                  `}
                >
                  <FaMoon className="w-5 h-5" />
                  Dark Mode
                </button>
              </li>
            </ul>
          </nav>

         
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700" data-aos="fade-up">
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors
                ${isDarkMode ? 'text-[#90A3BF] hover:bg-blue-800' : 'text-[#90A3BF] hover:bg-blue-50'}
              `}
            >
              <FaSignOutAlt className="w-5 h-5" />
              Log Out
            </button>
          </div>
        </div>
      </aside>

     
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Details Rental */}
          <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm transition-colors duration-200`} data-aos="fade-up">
            <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-[#3563E9]' : 'text-[#1A202C]'}`}>Details Rental</h2>
            
            <Image
              src="/Maps.png"
              alt="Map"
              width={800}
              height={400}
              className="rounded-xl h-48 mb-6 object-cover"
            />

  
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#3563E9] rounded-xl p-2 w-20 h-20 relative">
                <Image
                  src="/car2.png"
                  alt="Nissan GT-R"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className={`text-blue-600 dark:text-blue-400 font-semibold`}>
                  Nissan GT - R
                </h3>
                <p className="text-[#90A3BF] text-sm">
                  Sport Car
                </p>
              </div>
              <div className="ml-auto">
                <span className="text-[#90A3BF] text-sm">
                  #9761
                </span>
              </div>
            </div>

      
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#3563E9]" />
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Pick - Up</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-[#90A3BF] text-sm">Locations</label>
                    <input
                      type="text"
                      placeholder="Enter location"
                      className={`w-full p-2 rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-200 text-blue-600'
                      } transition-colors duration-200`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#90A3BF] text-sm">Date</label>
                    <input
                      type="text"
                      placeholder="Enter date"
                      className={`w-full p-2 rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-200 text-blue-600'
                      } transition-colors duration-200`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#90A3BF] text-sm">Time</label>
                    <input
                      type="text"
                      placeholder="Enter time"
                      className={`w-full p-2 rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-200 text-blue-600'
                      } transition-colors duration-200`}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#3563E9]" />
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Drop - Off</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-[#90A3BF] text-sm">Locations</label>
                    <input
                      type="text"
                      placeholder="Enter location"
                      className={`w-full p-2 rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-200 text-blue-600'
                      } transition-colors duration-200`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#90A3BF] text-sm">Date</label>
                    <input
                      type="text"
                      placeholder="Enter date"
                      className={`w-full p-2 rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-200 text-blue-600'
                      } transition-colors duration-200`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#90A3BF] text-sm">Time</label>
                    <input
                      type="text"
                      placeholder="Enter time"
                      className={`w-full p-2 rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-200 text-blue-600'
                      } transition-colors duration-200`}
                    />
                  </div>
                </div>
              </div>
            </div>

            
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Total Rental Price</p>
                  <p className="text-[#90A3BF] text-xs">Overall price and includes rental discount</p>
                </div>
                <div className="text-blue-600 dark:text-blue-400 text-2xl font-semibold">$80.00</div>
              </div>
            </div>
          </div>

         
          <div className="space-y-6">
            {/* Top 5 Car Rental */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm transition-colors duration-200`} data-aos="fade-up">
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-[#1A202C] dark:text-blue-400 text-xl font-semibold`}>Top 5 Car Rental</h2>
                <button className="text-[#90A3BF]">
                  <FaEllipsisV className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <Image
                    src="/Chart.png"
                    alt="Donut chart"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-blue-600 dark:text-blue-400 text-xl md:text-2xl font-semibold">
                        {totalRentals.toLocaleString()}
                      </div>
                      <div className="text-[#90A3BF] text-sm">Rental Car</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {rentalStats.map((stat) => (
                    <div key={stat.type} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#3563E9]" />
                      <span className="text-blue-600 dark:text-blue-400 text-sm">{stat.type}</span>
                      <span className="text-[#90A3BF] text-sm ml-auto">{stat.count.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Transaction */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm transition-colors duration-200`} data-aos="fade-up">
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-[#1A202C] dark:text-[#3563E9] text-2xl font-semibold`}>Recent Transaction</h2>
                <a href="#" className="text-[#3563E9] text-sm">View All</a>
              </div>

              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center gap-4">
                    <div className="w-16 h-12 relative bg-white rounded-lg p-2">
                      <Image
                        src={transaction.image}
                        alt={transaction.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className={`text-blue-600 dark:text-blue-400 font-semibold`}>{transaction.name}</h3>
                      <p className="text-[#90A3BF] text-sm">{transaction.type}</p>
                      <p className="text-[#90A3BF] text-sm">{transaction.date}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">${transaction.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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


