export default function Partnership() {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Partnership Program</h1>
  
          <div className="space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Join Our Network</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
                Partner with us to grow your business and reach more customers. Our partnership program offers exclusive
                benefits and support to help you succeed.
              </p>
  
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Car Owners</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>List your vehicles</li>
                    <li>Set your own rates</li>
                    <li>Manage bookings</li>
                    <li>24/7 support</li>
                  </ul>
                </div>
  
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Dealerships</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Expand your reach</li>
                    <li>Digital presence</li>
                    <li>Marketing support</li>
                    <li>Fleet management</li>
                  </ul>
                </div>
  
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Service Providers</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Join our network</li>
                    <li>Increase visibility</li>
                    <li>Grow your business</li>
                    <li>Quality leads</li>
                  </ul>
                </div>
              </div>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Partnership Benefits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600">Increased Visibility</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get exposure to our large customer base and increase your business reach.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600">Marketing Support</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Access our marketing resources and promotional opportunities.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600">Technical Integration</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Seamless integration with our platform and booking system.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600">Revenue Growth</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Increase your revenue through our partnership program.
                  </p>
                </div>
              </div>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Get Started</h2>
              <div className="max-w-xl">
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Business Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Enter your business name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
  
  