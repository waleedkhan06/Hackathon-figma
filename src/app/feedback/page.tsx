"use client"
import React, { useState, useEffect } from "react"
import { client } from "@/sanity/lib/client"
import { useTheme } from "../../../contexts/ThemeContext"

interface Feedback {
  _id: string
  user: {
    username: string
  }
  rental: {
    car: {
      name: string
    }
  }
  rating: number
  comment: string
  createdAt: string
  isRead: boolean
}

const CustomerFeedbackComponent = () => {
  const { theme } = useTheme()
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const result = await client.fetch(`
        *[_type == "feedback"] | order(createdAt desc) {
          _id,
          user->{username},
          rental->{car->{name}},
          rating,
          comment,
          createdAt,
          isRead
        }
      `)
      setFeedbacks(result)
    }

    fetchFeedbacks()
  }, [])

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-theme={theme}>
      <h2 className="text-2xl font-bold mb-4">Customer Feedback</h2>
      <div className="space-y-4">
        {feedbacks.map((feedback) => (
          <div
            key={feedback._id}
            className={`${feedback.isRead ? "bg-gray-100 dark:bg-gray-700" : "bg-blue-100 dark:bg-blue-900"} border-b pb-4`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-900 dark:text-gray-100">{feedback.user.username}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(feedback.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="mb-2 text-gray-700 dark:text-gray-300">Car: {feedback.rental.car.name}</p>
            <div className="flex items-center mb-2">
              <span className="mr-2">Rating:</span>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < feedback.rating ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400">{feedback.comment}</p>
            <button
              className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => {
                // Implement mark as read functionality here.  This would likely involve another API call to update the feedback document in Sanity.
                console.log("Mark as read clicked for feedback:", feedback._id)
              }}
            >
              Mark as read
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerFeedbackComponent

