// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { FiHeart, FiSend } from "react-icons/fi"
// import { BsFuelPump, BsGearWide } from "react-icons/bs"
// import { HiOutlineUsers } from "react-icons/hi"
// import { FaStar } from "react-icons/fa"
// import { motion } from "framer-motion"
// import { client } from "@/sanity/lib/client"
// import type { Car } from "../../../types/car"

// import { useUser } from "@clerk/nextjs"
// import ReactPaginate from "react-paginate"
// import Toast from "../components/Toast"
// import { urlForImage } from "@/sanity/lib/image";


// interface CarDetailClientProps {
//   car: Car
// }

// export default function CarDetailClient({ car }: CarDetailClientProps) {
//   const [selectedImage, setSelectedImage] = useState(0)
//   const [showAllReviews, setShowAllReviews] = useState(false)
//   const [recentCars, setRecentCars] = useState<Car[]>([])
//   const [reviews, setReviews] = useState<Review[]>([])
//   const [newReview, setNewReview] = useState<Omit<Review, "id" | "date">>({
//     name: "",
//     rating: 0,
//     comment: "",
//   })
//   const [currentPage, setCurrentPage] = useState(0)
//   const [favorites, setFavorites] = useState<string[]>([])
//   const { user } = useUser()
//   const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: "", visible: false })

//   const carsPerPage = 8
//   const pageCount = Math.ceil(recentCars.length / carsPerPage)

//   useEffect(() => {
//     const fetchAllCars = async () => {
//       const query = `*[_type == "car"] | order(_createdAt desc)`
//       const cars = await client.fetch(query)
//       setRecentCars(cars)
//     }

//     fetchAllCars()

//     const fetchReviews = async () => {
//       const mockReviews: Review[] = [
//         {
//           id: "1",
//           name: "Alex Stanton",
//           role: "CEO",
//           company: "Bukalapak",
//           date: "21 July 2022",
//           rating: 4,
//           comment:
//             "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
//           avatar: "/Profil.png",
//         },
//         {
//           id: "2",
//           name: "Skylar Dias",
//           role: "CEO",
//           company: "Amazon",
//           date: "20 July 2022",
//           rating: 4,
//           comment:
//             "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
//           avatar: "/profil2.png",
//         },
//       ]
//       setReviews(mockReviews)
//     }

//     fetchReviews()
//   }, [])

//   useEffect(() => {
//     const storedFavorites = localStorage.getItem("favorites")
//     if (storedFavorites) {
//       setFavorites(JSON.parse(storedFavorites))
//     }
//   }, [])

//   const toggleFavorite = (carId: string) => {
//     setFavorites((prev) => {
//       const newFavorites = prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]
//       localStorage.setItem("favorites", JSON.stringify(newFavorites))

//       const targetCar = carId === car._id ? car : recentCars.find((c) => c._id === carId)
//       if (targetCar) {
//         const message = newFavorites.includes(carId)
//           ? `${targetCar.name} added to wishlist`
//           : `${targetCar.name} removed from wishlist`
//         setToast({ message, visible: true })
//         setTimeout(() => setToast({ message: "", visible: false }), 3000)
//       }

//       return newFavorites
//     })
//   }

//   const carImages = [
//   car.image ? `/cars/${car.image}` : "/placeholder.svg", // Using public folder images
//   "/View 2.png",
//   "/View 3.png",
// ];

//   const specs = [
//     { type: "Type Car", value: car.type },
//     { type: "Steering", value: car.transmission },
//     { type: "Capacity", value: car.seatingCapacity },
//     { type: "Gasoline", value: car.fuelCapacity },
//   ]

//   const handleSubmitReview = (e: React.FormEvent) => {
//     e.preventDefault()
//     const newReviewWithId: Review = {
//       ...newReview,
//       id: Date.now().toString(),
//       date: new Date().toLocaleDateString(),
//     }
//     setReviews((prevReviews) => [newReviewWithId, ...prevReviews])
//     setNewReview({ name: "", rating: 0, comment: "" })
//   }

//   const handlePageChange = ({ selected }: { selected: number }) => {
//     setCurrentPage(selected)
//   }

//   const paginatedCars = recentCars.slice(currentPage * carsPerPage, (currentPage + 1) * carsPerPage)

//   return (
//     <div className="flex min-h-screen bg-[#F6F7F9] dark:bg-gray-900">
//       <main className="flex-1 p-4 lg:p-8">
//         <div className="max-w-7xl mx-auto space-y-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <motion.div
//               className="space-y-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="bg-[#3563E9] dark:bg-blue-700 rounded-[10px] p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <h1 className="text-2xl font-bold mb-2 text-white dark:text-blue-300">{car.name}</h1>
//                 <p className="text-sm">
//                   Experience luxury and comfort with our top-tier rental cars affordable rates, premium quality, and
//                   hassle-free service. Drive your dream car today.
//                 </p>
//                 <div className="mt-4 relative h-[300px] w-full">
//                   <Image
//                     src={carImages[selectedImage] || "/placeholder.svg"}
//                     alt={car.name}
//                     fill
//                     className="object-contain"
//                     priority
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-3 gap-4">
//                 {carImages.map((image, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedImage(index)}
//                     className={`relative h-24 w-full rounded-[10px] overflow-hidden border-2 transition-colors ${
//                       selectedImage === index ? "border-[#3563E9]" : "border-transparent"
//                     }`}
//                   >
//                     <Image
//                       src={image || "/placeholder.svg"}
//                       alt={`Car view ${index + 1}`}
//                       fill
//                       className={`object-cover ${index > 0 ? "w-full" : "object-contain p-2"}`}
//                       sizes="(max-width: 768px) 33vw, 20vw"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               className="rounded-[10px] space-y-8 p-4 md:p-6 lg:p-8 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{car.name}</h2>
//                   <div className="flex items-center gap-1 mt-1">
//                     {Array(5)
//                       .fill(null)
//                       .map((_, i) => (
//                         <FaStar
//                           key={i}
//                           className={`w-4 h-4 ${i < 4 ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
//                         />
//                       ))}
//                     <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">440+ Reviewer</span>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => toggleFavorite(car._id)}
//                   className="relative group p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
//                 >
//                   <FiHeart
//                     className={`w-6 h-6 transition-colors ${
//                       favorites.includes(car._id)
//                         ? "text-red-500 fill-current"
//                         : "text-[#90A3BF] dark:text-gray-300 group-hover:text-red-500"
//                     }`}
//                   />
//                 </button>
//               </div>

//               <p className="text-gray-600 dark:text-gray-400">{car.description}</p>

//               <div className="grid grid-cols-4 gap-4 mb-6">
//                 {specs.map((spec, index) => (
//                   <div key={index} className="text-center">
//                     <span className="text-gray-400 dark:text-gray-500 text-sm">{spec.type}</span>
//                     <span className="block font-medium mt-1 text-gray-900 dark:text-white">{spec.value}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex justify-between items-center">
//                 <div>
//                   <span className="text-2xl font-bold text-gray-900 dark:text-blue-300">{car.pricePerDay}/</span>
//                   <span className="text-gray-500 dark:text-gray-400">day</span>
//                   {car.originalPrice && (
//                     <span className="text-gray-400 dark:text-gray-500 line-through ml-2">{car.originalPrice}</span>
//                   )}
//                 </div>
//                 <Link
//                   href={`/car-payment/${car.slug?.current || car._id}`}
//                   className="bg-blue-600 text-white px-8 py-3 rounded-[4px] hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors"
//                 >
//                   Rent Now
//                 </Link>
//               </div>
//             </motion.div>
//           </div>

//           {/* Reviews Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-[10px] p-6"
//           >
//             <div className="flex items-center gap-2 mb-6">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-blue-300">Reviews</h3>
//               <span className="bg-blue-600 dark:bg-blue-500 text-white text-sm px-2 py-0.5 rounded-full">
//                 {reviews.length}
//               </span>
//             </div>
//             <div className="space-y-6">
//               {(showAllReviews ? reviews : reviews.slice(0, 2)).map((review) => (
//                 <div key={review.id} className="flex gap-4">
//                   <Image
//                     src={
//                       review.id === "1"
//                         ? "/profil.png"
//                         : review.id === "2"
//                           ? "/profil2.png"
//                           : user?.imageUrl || "/placeholder.svg"
//                     }
//                     alt={review.name}
//                     width={56}
//                     height={56}
//                     className="object-contain rounded-full"
//                   />
//                   <div className="flex-1">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h4 className="font-semibold text-gray-900 dark:text-white">{review.name}</h4>
//                         {review.role && review.company && (
//                           <p className="text-sm text-gray-500 dark:text-gray-400">
//                             {review.role} at {review.company}
//                           </p>
//                         )}
//                       </div>
//                       <div className="text-right">
//                         <div className="flex items-center gap-1">
//                           {Array(5)
//                             .fill(null)
//                             .map((_, i) => (
//                               <FaStar
//                                 key={i}
//                                 className={`w-4 h-4 ${
//                                   i < review.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-400"
//                                 }`}
//                               />
//                             ))}
//                         </div>
//                         <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{review.date}</p>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 dark:text-gray-400 mt-2">{review.comment}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button
//               onClick={() => setShowAllReviews(!showAllReviews)}
//               className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mt-4 mx-auto"
//             >
//               {showAllReviews ? "Show Less" : "Show All Reviews"}
//             </button>

//             {/* Review Submission Form */}
//             <form onSubmit={handleSubmitReview} className="mt-8 space-y-4">
//               <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Submit Review</h4>
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   value={newReview.name}
//                   onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="rating" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                   Your Rating
//                 </label>
//                 <select
//                   id="rating"
//                   value={newReview.rating}
//                   onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                   required
//                 >
//                   <option value="">Select rating</option>
//                   {[1, 2, 3, 4, 5].map((rating) => (
//                     <option key={rating} value={rating}>
//                       {rating} {rating === 1 ? "Star" : "Stars"}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                   Your Comment
//                 </label>
//                 <textarea
//                   id="comment"
//                   value={newReview.comment}
//                   onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//                   rows={4}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
//               >
//                 Submit
//                 <FiSend className="ml-2" />
//               </button>
//             </form>
//           </motion.div>

//           {/* Recent Cars Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-blue-300">Popular Cars</h3>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {paginatedCars.map((car) => (
//                 <CarCard
//                   key={car._id}
//                   car={car}
//                   isFavorite={favorites.includes(car._id)}
//                   onToggleFavorite={toggleFavorite}
//                 />
//               ))}
//             </div>
//             <ReactPaginate
//               previousLabel={"Previous"}
//               nextLabel={"Next"}
//               breakLabel={"..."}
//               pageCount={pageCount}
//               marginPagesDisplayed={2}
//               pageRangeDisplayed={5}
//               onPageChange={handlePageChange}
//               containerClassName={"pagination flex justify-center mt-8 space-x-2"}
//               pageClassName={"page-item"}
//               pageLinkClassName={
//                 "page-link px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
//               }
//               previousClassName={"page-item"}
//               previousLinkClassName={
//                 "page-link px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
//               }
//               nextClassName={"page-item"}
//               nextLinkClassName={
//                 "page-link px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
//               }
//               breakClassName={"page-item"}
//               breakLinkClassName={
//                 "page-link px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
//               }
//               activeClassName={"active"}
//               activeLinkClassName={"bg-blue-600 text-white"}
//             />
//           </motion.div>
//         </div>
//         {toast.visible && <Toast message={toast.message} />}
//       </main>
//     </div>
//   )
// }

// interface Review {
//   id: string
//   name: string
//   role?: string
//   company?: string
//   date: string
//   rating: number
//   comment: string
//   avatar?: string
// }

// interface CarCardProps {
//   car: Car
//   isFavorite: boolean
//   onToggleFavorite: (id: string) => void
// }

// function CarCard({ car, isFavorite, onToggleFavorite }: CarCardProps) {
//   return (
//     <motion.div
//       className="bg-white dark:bg-gray-800 p-4 rounded-2xl"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="flex justify-between items-start mb-4">
//         <div>
//           <Link href={`/car/${car.slug?.current || car._id}`} className="group">
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

//       <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
//       <Image
//     src={urlForImage(car.image)}
//     alt={car.name}
//     width={300} // Add width & height to avoid Next.js errors
//     height={200}
//     className="object-contain"
//   />
//       </div>

//       <div className="flex justify-between mt-4 mb-4">
//         <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
//           <BsFuelPump className="w-4 h-4 dark: text-blue-500" />
//           <span className="text-sm"> {car.fuelCapacity}</span>
//         </div>
//         <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
//           <BsGearWide className="w-4 h-4 dark: text-blue-500" />
//           <span className="text-sm">{car.transmission}</span>
//         </div>
//         <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
//           <HiOutlineUsers className="w-4 h-4 dark: text-blue-500" />
//           <span className="text-sm">{car.seatingCapacity}</span>
//         </div>
//       </div>

//       <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
//         <div>
//           <p className="text-lg font-bold text-gray-900 dark:text-white">
//             {car.pricePerDay}
//             <span className="text-sm font-normal text-gray-500 dark:text-gray-400">/day</span>
//           </p>
//           {car.originalPrice && (
//             <p className="text-sm text-[#90A3BF] dark:text-gray-500 line-through">{car.originalPrice}</p>
//           )}
//         </div>
//         <Link
//           href={`/car-payment/${car.slug?.current || car._id}`}
//           className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
//         >
//           Rent Now
//         </Link>
//       </div>
//     </motion.div>
//   )
// }

