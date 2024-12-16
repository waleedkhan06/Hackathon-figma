import Link from 'next/link'
import { FiHeart, FiBell, FiSettings } from 'react-icons/fi'

export function Header() {
  return (
    <header className="bg-white py-6 px-4 md:px-16">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="text-[32px] font-bold text-[#3563E9]">
          MORENT
        </Link>
        <div className="hidden md:flex relative flex-1 max-w-[492px]">
          <input
            type="search"
            placeholder="Search something here"
            className="w-full pl-12 border border-gray-300 rounded-lg py-2"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#596780"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 21L17 17"
              stroke="#596780"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-full p-2 hover:bg-gray-100">
            <FiHeart className="h-6 w-6" />
          </button>
          <button className="rounded-full p-2 hover:bg-gray-100">
            <FiBell className="h-6 w-6" />
          </button>
          <button className="rounded-full p-2 hover:bg-gray-100">
            <FiSettings className="h-6 w-6" />
          </button>
          <Link href="/dashboard">
      <div className="w-12 h-12 rounded-full bg-gray-200 cursor-pointer">
        <img
          src="/Profil.png" 
          alt="Description" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </Link>
        </div>
      </div>
    </header>
  )
}
