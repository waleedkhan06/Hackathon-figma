export default function HowItWorks() {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">How It Works</h1>
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Simple Process</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our platform makes car rental easy and convenient. Follow these simple steps to get started:
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-4">1</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Choose Your Car</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Browse our extensive collection of vehicles and select the perfect car for your needs.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-4">2</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Book Your Dates</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Select your pickup and return dates, and complete the booking process.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-4">3</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Enjoy Your Ride</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Pick up your car at the designated location and enjoy your journey.
                  </p>
                </div>
              </div>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600">Easy Booking</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our streamlined booking process ensures you can reserve your car in minutes.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600">Flexible Pickup</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Choose from multiple convenient pickup locations across the city.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600">24/7 Support</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our customer support team is always available to assist you.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600">Transparent Pricing</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    No hidden fees - see all costs upfront before booking.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
  
  