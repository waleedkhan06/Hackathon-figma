export default function Blog() {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-blue-600 text-center mb-12">Our Blog</h1>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Top 10 Luxury Cars for 2024",
                date: "January 15, 2024",
                category: "Car Reviews",
                excerpt: "Discover the most luxurious vehicles that define automotive excellence in 2024.",
                author: "John Smith",
              },
              {
                title: "Essential Car Maintenance Tips",
                date: "January 12, 2024",
                category: "Maintenance",
                excerpt: "Learn how to keep your vehicle in perfect condition with these expert tips.",
                author: "Sarah Johnson",
              },
              {
                title: "Future of Electric Vehicles",
                date: "January 10, 2024",
                category: "Technology",
                excerpt: "Exploring the innovations and trends shaping the future of electric vehicles.",
                author: "Mike Wilson",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-6 space-y-4">
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{post.category}</div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  