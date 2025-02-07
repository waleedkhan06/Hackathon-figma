import Image from "next/image";

export default function Events() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-12">Upcoming Events</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Events */}
          {[
            {
              title: "Car Show 2024",
              date: "March 15, 2024",
              location: "Downtown Convention Center",
              description: "Experience the latest luxury and sports cars in our annual showcase event.",
              type: "Exhibition",
              image: "/car2.png",
            },
            {
              title: "Test Drive Day",
              date: "April 2, 2024",
              location: "City Circuit",
              description: "Try out our premium vehicle collection with professional guidance.",
              type: "Test Drive",
              image: "/car3.png",
            },
            {
              title: "Auto Tech Summit",
              date: "May 10, 2024",
              location: "Tech Hub Center",
              description: "Learn about the latest automotive technologies and innovations.",
              type: "Conference",
              image: "/aichatbot.avif",
            },
          ].map((event, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Event Image */}
              <div className="relative w-full h-[150px]">
                <Image
                  src={event.image ? event.image : "/placeholder.svg"}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{event.type}</div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{event.title}</h2>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <div>{event.date}</div>
                    <div>{event.location}</div>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
