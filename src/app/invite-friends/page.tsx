"use client"

import { motion } from "framer-motion"

export default function InviteFriend() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-600 text-center mb-12"
        >
          Invite a Friend
        </motion.h1>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-2xl mx-auto">
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm">
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="text-center">
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Share the joy of premium car rentals with your friends and earn rewards!
                </p>
              </motion.div>

              <div className="space-y-6">
                <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white dark:bg-gray-700 rounded-lg text-center"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">$50</div>
                    <div className="text-gray-600 dark:text-gray-300">For you</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white dark:bg-gray-700 rounded-lg text-center"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">$50</div>
                    <div className="text-gray-600 dark:text-gray-300">For your friend</div>
                  </motion.div>
                </motion.div>

                <motion.form variants={itemVariants} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Friends Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter your friend's name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Friends Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter your friend's email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Personal Message (Optional)
                    </label>
                    <textarea
                      className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      rows={4}
                      placeholder="Add a personal message"
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Invitation
                  </motion.button>
                </motion.form>

                <motion.div variants={itemVariants} className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Or share your referral link</p>
                  <div className="mt-2 flex gap-2">
                    <input
                      type="text"
                      readOnly
                      value="https://morent.com/refer/YOUR_CODE"
                      className="flex-1 p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      Copy
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

