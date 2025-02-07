"use client"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Privacy Policy</h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-600">1. Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and
              safeguard your information when you use our services.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-600">2. Information Collection</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We collect information that you provide directly to us when using our services, including:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-4 list-disc pl-6">
              <li>Basic account information</li>
              <li>Booking and rental details</li>
              <li>Payment information</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-600">3. Information Usage</h2>
            <p className="text-gray-600 dark:text-gray-300">We use your information to:</p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-4 list-disc pl-6">
              <li>Process your bookings and payments</li>
              <li>Provide customer support</li>
              <li>Send important service updates</li>
              <li>Improve our services</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-600">4. Information Protection</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We implement appropriate security measures to protect your information and maintain the trust you place in
              us.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-600">5. Your Choices</h2>
            <p className="text-gray-600 dark:text-gray-300">
              You can control how we use your information and can request access to your data at any time.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-600">6. Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about our Privacy Policy, please contact our support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

