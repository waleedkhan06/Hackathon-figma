"use client"

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Terms & Conditions</h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-600">1. Acceptance</h2>
            <p className="text-gray-600 dark:text-gray-300">
              By using our services, you agree to these terms. Please read them carefully.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-600">2. Service Usage</h2>
            <ul className="text-gray-600 dark:text-gray-300 space-y-4 list-disc pl-6">
              <li>Provide accurate information</li>
              <li>Maintain account security</li>
              <li>Follow rental guidelines</li>
              <li>Respect vehicle policies</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-600">3. Booking & Payments</h2>
            <ul className="text-gray-600 dark:text-gray-300 space-y-4 list-disc pl-6">
              <li>Booking confirmation process</li>
              <li>Payment terms</li>
              <li>Cancellation policy</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-600">4. Vehicle Usage</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Guidelines for proper vehicle use, maintenance responsibilities, and return conditions.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-600">5. Insurance & Liability</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Information about insurance coverage, damage policies, and user responsibilities.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-600">6. Service Modifications</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We may update our services and these terms as needed to improve user experience.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-600">7. Contact</h2>
            <p className="text-gray-600 dark:text-gray-300">
              For questions about these terms, please contact our support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

