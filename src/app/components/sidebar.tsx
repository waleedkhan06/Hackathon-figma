// import { useState } from "react"

// interface SidebarProps {
//   isOpen: boolean
//   onToggle: () => void
//   onTypeSelect: (type: string) => void
//   onCapacitySelect: (capacity: string) => void
//   onPriceChange: (price: number) => void
//   carTypes: string[]
//   carCapacities: string[]
// }

// export function Sidebar({
//   isOpen,
//   onToggle,
//   onTypeSelect,
//   onCapacitySelect,
//   onPriceChange,
//   carTypes,
//   carCapacities,
// }: SidebarProps) {
//   return (
//     <>
//       <aside
//         className={`
//           fixed lg:sticky top-0 left-0 h-screen
//           w-64 bg-white shadow-lg
//           transition-transform duration-300 ease-in-out
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}
//           z-40
//         `}
//       >
//         <div className="p-6">
//           <h2 className="text-lg font-semibold mb-6">Filters</h2>
//           <div className="space-y-6">
//             {/* Type Filter */}
//             <div>
//               <h3 className="text-sm font-medium text-[#90A3BF] mb-4">TYPE</h3>
//               <div className="space-y-3">
//                 {carTypes.map((type) => (
//                   <label key={type} className="flex items-center">
//                     <input
//                       type="radio"
//                       name="type"
//                       onChange={() => onTypeSelect(type)}
//                       className="w-5 h-5 rounded border-gray-300"
//                     />
//                     <span className="ml-3 text-sm">{type}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Capacity Filter */}
//             <div>
//               <h3 className="text-sm font-medium text-[#90A3BF] mb-4">CAPACITY</h3>
//               <div className="space-y-3">
//                 {carCapacities.map((capacity) => (
//                   <label key={capacity} className="flex items-center">
//                     <input
//                       type="radio"
//                       name="capacity"
//                       onChange={() => onCapacitySelect(capacity)}
//                       className="w-5 h-5 rounded border-gray-300"
//                     />
//                     <span className="ml-3 text-sm">{capacity}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Price Range Filter */}
//             <div>
//               <h3 className="text-sm font-medium text-[#90A3BF] mb-4">PRICE</h3>
//               <input
//                 type="range"
//                 min="0"
//                 max="1000"
//                 defaultValue="1000"
//                 onChange={(e) => onPriceChange(Number(e.target.value))}
//                 className="w-full h-2 bg-[#4f7fdf] rounded-lg appearance-none cursor-pointer accent-[#3563E9]"
//               />
//               <div className="mt-2 text-sm">Max. $1000.00</div>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* Mobile Overlay */}
//       {isOpen && (
//         <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30" onClick={onToggle} aria-hidden="true" />
//       )}
//     </>
//   )
// }

