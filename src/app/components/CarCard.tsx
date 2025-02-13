// import { motion } from "framer-motion"
// import Image from "next/image"
// import Link from "next/link"
// import { FiHeart } from "react-icons/fi"
// import { BsFuelPump, BsGearWide } from "react-icons/bs"
// import { HiOutlineUsers } from "react-icons/hi"
// import type { Car } from "../../../types/car"
// import { urlForImage } from "@/sanity/lib/image";

// interface CarCardProps {
//   car: Car
//   isFavorite: boolean
//   onToggleFavorite: (id: string) => void
// }

// const fadeInUpVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// }

// export function CarCard({ car, isFavorite, onToggleFavorite }: CarCardProps) {
//   return (
//     <motion.div
//       className="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl shadow-md"
//     // variants={fadeInUpVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       {/* Top Section: Car Name + Favorite Button */}
//       <div className="flex justify-between items-start mb-4">
//         <div>
//           <Link href={`/car/${car.slug}`} className="group">
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//               {car.name}
//             </h3>
//             <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
//               {car.brand}
//             </p>
//           </Link>
//         </div>
//         <button
//           onClick={() => onToggleFavorite(car._id)}
//           className={`${isFavorite ? "text-red-500" : "text-[#90A3BF] dark:text-gray-400"} hover:text-red-500 transition-colors`}
//           aria-label={`Add ${car.name} to favorites`}
//         >
//           <FiHeart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
//         </button>
//       </div>

//       {/* Grid Layout for Image and Car Details */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
//         {/* Car Image */}
//         <div className="relative h-[140px] w-full">
//         <Image
//     src={urlForImage(car.image)}
//     alt={car.name}
//     width={300} // Add width & height to avoid Next.js errors
//     height={200}
//     className="object-contain"
//   />
//         </div>

//         {/* Car Specifications */}
//         <div className="flex flex-col gap-2">
//           <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
//             <BsFuelPump className="w-4 h-4 dark:text-blue-500" />
//             <span className="text-sm">{car.fuelCapacity}</span>
//           </div>
//           <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
//             <BsGearWide className="w-4 h-4 dark:text-blue-500" />
//             <span className="text-sm">{car.transmission}</span>
//           </div>
//           <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
//             <HiOutlineUsers className="w-4 h-4 dark:text-blue-500" />
//             <span className="text-sm">{car.seatingCapacity}</span>
//           </div>
//         </div>
//       </div>

//       {/* Price & Booking Section */}
//       <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
//         <div>
//           <p className="text-lg font-bold text-gray-900 dark:text-white">
//             {car.pricePerDay}
//             <span className="text-sm font-normal text-gray-500 dark:text-gray-400">/day </span>
//           </p>
//           {car.originalPrice && (
//             <p className="text-sm text-[#90A3BF] dark:text-gray-500 line-through">{car.originalPrice}</p>
//           )}
//         </div>
//         <Link
//           href={`/book-a-ride/${car.slug}`}
//           className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
//         >
//           Book a ride
//         </Link>
//       </div>
//     </motion.div>
//   )
// }

