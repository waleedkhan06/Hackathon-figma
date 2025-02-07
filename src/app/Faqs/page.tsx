"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How do I make a reservation?",
      answer: "You can easily make a reservation through our website or mobile app. Select your preferred vehicle, choose dates, and complete the booking process in just a few steps."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards including Visa, MasterCard, and American Express. We also support digital wallets like Apple Pay and Google Pay."
    },
    {
      question: "Can I modify my reservation?",
      answer: "Yes, you can modify your reservation up to 24 hours before pickup time through your account dashboard or by contacting our customer support."
    },
    {
      question: "What's your cancellation policy?",
      answer: "Cancellations made 48 hours prior to pickup receive a full refund. Cancellations within 48 hours may incur a 20% service fee."
    },
    {
      question: "Do you offer insurance options?",
      answer: "Yes, we offer comprehensive insurance packages starting at $15/day. You can choose from basic to premium coverage during the booking process."
    },
    {
      question: "What are your age requirements?",
      answer: "Renters must be at least 21 years old with a valid driver's license. Young drivers under 25 may be subject to a daily surcharge."
    },
    {
      question: "How does vehicle pickup work?",
      answer: "After booking verification, you'll receive pickup instructions. Simply present your ID and payment method at our designated location during business hours."
    },
    {
      question: "Can I extend my rental period?",
      answer: "Extensions are subject to availability. Please contact us at least 6 hours before your scheduled return time to request an extension."
    },
    {
      question: "What's your fuel policy?",
      answer: "Vehicles are provided with a full tank. Please return the vehicle with the same fuel level or pay the difference at market rates plus a $10 service fee."
    },
    {
      question: "Do you offer loyalty programs?",
      answer: "Yes! Join our MORENT Rewards program to earn points on every rental, receive exclusive discounts, and enjoy priority customer service."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div 
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4 
              bg-gradient-to-r from-blue-600 to-blue-500 
              dark:from-blue-500 dark:to-blue-700 
              bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Find answers to common questions about our car rental services
          </motion.p>
        </div>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }} // Stagger animation for each item
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-blue-100">
                  {item.question}
                </span>
                <span className={`transform transition-transform ${activeIndex === index ? "rotate-180" : ""}`}>
                  <svg 
                    className="w-6 h-6 text-blue-600 dark:text-blue-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <motion.div
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="text-gray-600 dark:text-blue-300 leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center border-t pt-12 border-gray-200 dark:border-blue-800">
          <motion.h2
            className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Still have questions?
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-blue-200 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Contact our 24/7 customer support team
          </motion.p>
          <div className="space-x-4">
            <a
              href="tel:+11234567890"
              className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
            >
              Call Now
            </a>
            <a
              href="mailto:support@morent.com"
              className="inline-block px-6 py-3 border-2 border-blue-600 dark:border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
