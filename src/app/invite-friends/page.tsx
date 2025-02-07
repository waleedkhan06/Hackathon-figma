export default function InviteFriend() {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-blue-600 text-center mb-12">Invite a Friend</h1>
  
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm">
              <div className="space-y-8">
                <div className="text-center">
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Share the joy of premium car rentals with your friends and earn rewards!
                  </p>
                </div>
  
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-4 bg-white dark:bg-gray-700 rounded-lg text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">$50</div>
                      <div className="text-gray-600 dark:text-gray-300">For you</div>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-700 rounded-lg text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">$50</div>
                      <div className="text-gray-600 dark:text-gray-300">For your friend</div>
                    </div>
                  </div>
  
                  <form className="space-y-4">
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
                    <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Send Invitation
                    </button>
                  </form>
  
                  <div className="text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Or share your referral link</p>
                    <div className="mt-2 flex gap-2">
                      <input
                        type="text"
                        readOnly
                        value="https://morent.com/refer/YOUR_CODE"
                        className="flex-1 p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  