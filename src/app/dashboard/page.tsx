"use client"
 import { useState } from "react";
import Image from "next/image";
import { FaHome, FaCar, FaRegChartBar, FaSyncAlt, FaInbox, FaCalendarAlt, FaCog, FaRegQuestionCircle, FaSignOutAlt, FaEllipsisV } from 'react-icons/fa';

// Sample data
const recentTransactions = [
  {
    id: 1,
    name: "Nissan GT - R",
    type: "Sport Car",
    date: "20 July",
    price: 80.00,
    image: "/car2.png"
  },
  {
    id: 2,
    name: "Koenigsegg",
    type: "Sport Car",
    date: "19 July",
    price: 99.00,
    image: "/car1.png"
  },
  {
    id: 3,
    name: "Rolls - Royce",
    type: "Sport Car",
    date: "18 July",
    price: 96.00,
    image: "/car3.png"
  },
  {
    id: 4,
    name: "CR - V",
    type: "SUV",
    date: "17 July",
    price: 80.00,
    image: "/car5.png"
  }
];

const rentalStats = [
  { type: "Sport Car", count: 17439 },
  { type: "SUV", count: 9478 },
  { type: "Coupe", count: 18197 },
  { type: "Hatchback", count: 12510 },
  { type: "MPV", count: 14406 }
];

export default function Dashboard() {
   const [selectedLocation, setSelectedLocation] = useState("Kota Semarang");

  const totalRentals = rentalStats.reduce((acc, stat) => acc + stat.count, 0);

  const menuItems = [
    { icon: FaHome, label: "Dashboard", isActive: true },
    { icon: FaCar, label: "Car Rent" },
    { icon: FaRegChartBar, label: "Insight" },
    { icon: FaSyncAlt, label: "Reimburse" },
    { icon: FaInbox, label: "Inbox" },
    { icon: FaCalendarAlt, label: "Calendar" }
  ];

  const preferenceItems = [
    { icon: FaCog, label: "Settings" },
    { icon: FaRegQuestionCircle, label: "Help & Center" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white p-6 flex flex-col">
        <div className="text-xl font-bold mb-8">MAIN MENU</div>
        
        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm
                    ${item.isActive 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="text-xl font-bold mt-8 mb-4">PREFERENCES</div>
          <ul className="space-y-2">
            {preferenceItems.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-4">
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
            <FaSignOutAlt className="w-5 h-5" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Details Rental */}
          <div className="bg-white rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6">Details Rental</h2>
            
            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-xl h-48 mb-6">
              <Image src="/Maps.png" alt="Map" width={800} height={400} className="w-full h-full object-cover rounded-xl" />
            </div>      

            {/* Car Details */}
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 rounded-xl p-2 w-20 h-20 relative">
                <Image
                  src="/car2.png"
                  alt="Nissan GT-R"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold">Nissan GT - R</h3>
                <p className="text-sm text-gray-500">Sport Car</p>
              </div>
              <div className="ml-auto">
                <span className="text-sm text-blue-600">#9761</span>
              </div>
            </div>

            {/* Pick-up & Drop-off */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-sm font-medium">Pick - Up</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Locations</label>
                    <select className="w-full p-2 rounded-lg border">
                      <option>{selectedLocation}</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Date</label>
                    <select className="w-full p-2 rounded-lg border">
                      <option>20 July 2022</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Time</label>
                    <select className="w-full p-2 rounded-lg border">
                      <option>07:00</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-sm font-medium">Drop - Off</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Locations</label>
                    <select className="w-full p-2 rounded-lg border">
                      <option>{selectedLocation}</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Date</label>
                    <select className="w-full p-2 rounded-lg border">
                      <option>21 July 2022</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Time</label>
                    <select className="w-full p-2 rounded-lg border">
                      <option>01:00</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Price */}
            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Total Rental Price</p>
                  <p className="text-xs text-gray-400">Overall price and includes rental discount</p>
                </div>
                <div className="text-2xl font-semibold">$80.00</div>
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className="space-y-8">
            {/* Top 5 Car Rental */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Top 5 Car Rental</h2>
                <button>
                  <FaEllipsisV className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={transaction.image}
                        alt={transaction.name}
                        width={50}
                        height={50}
                        className="rounded-lg"
                      />
                      <div>
                        <h3 className="font-medium">{transaction.name}</h3>
                        <p className="text-sm text-gray-500">{transaction.type}</p>
                        <span className="text-xs text-gray-400">{transaction.date}</span>
                      </div>
                    </div>
                    <div className="text-sm font-semibold">${transaction.price}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Car Types */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Car Types</h2>
                <button>
                  <FaEllipsisV className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4">
                {rentalStats.map((stat) => (
                  <div key={stat.type} className="flex justify-between">
                    <div className="text-sm text-gray-600">{stat.type}</div>
                    <div className="text-sm text-gray-600">{stat.count}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

