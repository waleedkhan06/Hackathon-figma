import Image from "next/image";

export default function Podcast() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-12">Car Talk Podcast</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              title: "The Future of Autonomous Driving",
              episode: "Episode 45",
              duration: "45 minutes",
              description:
                "Exploring the latest developments in self-driving technology and its impact on the automotive industry.",
              guest: "Dr. Emily Chen - Automotive AI Expert",
              image: "/pod2.jpg",
            },
            {
              title: "Electric Vehicle Revolution",
              episode: "Episode 44",
              duration: "38 minutes",
              description:
                "Discussing the rapid growth of electric vehicles and their role in sustainable transportation.",
              guest: "Mark Thompson - EV Industry Analyst",
              image: "/pod3.jpg",
            },
            {
              title: "Classic Cars in Modern Times",
              episode: "Episode 43",
              duration: "42 minutes",
              description:
                "Exploring the enduring appeal of classic cars and their place in today's automotive landscape.",
              guest: "James Wilson - Vintage Car Collector",
              image: "/pod1.avif",
            },
          ].map((episode, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Podcast Image */}
                <div className="relative w-full md:w-64 h-64">
                  <Image
                    src={episode.image ? episode.image : "/placeholder.svg"}
                    alt={episode.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{episode.episode}</div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">{episode.title}</h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{episode.description}</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <div>Guest: {episode.guest}</div>
                    <div>Duration: {episode.duration}</div>
                  </div>
                  <div className="flex gap-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                      Listen Now
                    </button>
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
