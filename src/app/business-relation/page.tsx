export default function BusinessRelation() {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Business Relations</h1>
  
          <div className="space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Our Business Solutions</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
                We offer comprehensive business solutions designed to help companies manage their transportation needs
                efficiently and cost-effectively.
              </p>
  
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Corporate Accounts</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Dedicated account manager</li>
                    <li>Priority booking</li>
                    <li>Corporate rates</li>
                    <li>Monthly billing</li>
                  </ul>
                </div>
  
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Fleet Management</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Vehicle tracking</li>
                    <li>Maintenance scheduling</li>
                    <li>Cost optimization</li>
                    <li>Usage analytics</li>
                  </ul>
                </div>
  
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Business Travel</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Group bookings</li>
                    <li>Airport transfers</li>
                    <li>Event transportation</li>
                    <li>24/7 support</li>
                  </ul>
                </div>
              </div>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Why Choose Us</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600">Cost Savings</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Optimize your transportation costs with our competitive corporate rates and efficient management
                    solutions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600">Flexibility</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Adapt our services to your specific business needs with customizable solutions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600">Reliability</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Count on our well-maintained fleet and professional service for your business transportation needs.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-600">Technology</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Access advanced booking and management tools through our digital platform.
                  </p>
                </div>
              </div>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Us</h2>
              <div className="max-w-xl">
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Company Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Contact Person</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Enter contact person name"
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
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea
                      className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      rows={4}
                      placeholder="Tell us about your business needs"
                    ></textarea>
                  </div>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
  
  