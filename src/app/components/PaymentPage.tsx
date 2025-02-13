// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import type { Car } from "../../../types/car"
// import { useUser } from "@clerk/nextjs"
// import Swal from "sweetalert2"
// import type React from "react"

// interface PaymentPageClientProps {
//   car: Car
// }

// export default function PaymentPageClient({ car }: PaymentPageClientProps) {
//   const router = useRouter()
//   const { user, isSignedIn, isLoaded } = useUser()
//   const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "bitcoin">("card")
//   const [totalPrice, setTotalPrice] = useState(0)
//   const [formComplete, setFormComplete] = useState(false)
//   const [formData, setFormData] = useState({
//     userName: "",
//     userEmail: "",
//     userPhone: "",
//     pickupLocation: "",
//     dropOffLocation: "",
//     pickupDate: "",
//     dropOffDate: "",
//   })

//   useEffect(() => {
//     if (isLoaded && !isSignedIn) {
//       router.push("/sign-in")
//     }
//   }, [isLoaded, isSignedIn, router])

//   useEffect(() => {
//     if (user) {
//       setFormData((prev) => ({
//         ...prev,
//         userName: user.fullName || "",
//         userEmail: user.primaryEmailAddress?.emailAddress || "",
//       }))
//     }
//   }, [user])

//   useEffect(() => {
//     if (formData.pickupDate && formData.dropOffDate) {
//       const start = new Date(formData.pickupDate)
//       const end = new Date(formData.dropOffDate)
//       const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
//       const price = Number.parseFloat(car.pricePerDay.replace(/[^0-9.]/g, ""))
//       setTotalPrice(days * price)
//     }
//   }, [formData.pickupDate, formData.dropOffDate, car.pricePerDay])

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   useEffect(() => {
//     const isComplete = Object.values(formData).every((value) => value !== "") && paymentMethod !== ""
//     setFormComplete(isComplete)
//   }, [formData, paymentMethod])

//   const handleRentNow = async () => {
//     if (!formComplete) {
//       Swal.fire({
//         title: "Error!",
//         text: "Please fill in all required fields before renting.",
//         icon: "error",
//         confirmButtonText: "OK",
//       })
//       return
//     }

//     try {
//       const response = await fetch("/api/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...formData,
//           carId: car._id,
//           carName: car.name,
//           totalPrice: totalPrice,
//           status: "Pending",
//         }),
//       })

//       if (response.ok) {
//         Swal.fire({
//           title: "Success!",
//           text: "Your rental has been confirmed.",
//           icon: "success",
//           confirmButtonText: "OK",
//         }).then(() => {
//           router.push("/notifications")
//         })
//       } else {
//         throw new Error("Failed to create order")
//       }
//     } catch (error) {
//       console.error("Error creating order:", error)
//       Swal.fire({
//         title: "Error!",
//         text: "There was a problem processing your order. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//       })
//     }
//   }

//   if (!isLoaded || !isSignedIn) {
//     return null
//   }

//   // The rest of the component code remains the same as in the original file
//   // ...
// }

