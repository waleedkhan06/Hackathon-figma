"use client"

import Link from "next/link"


export const Footer = () => {
  return (
    <footer className="w-full bg-white md:bg-transparent">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
       
          <div className="md:col-span-3">
            <Link href="/" className="inline-block">
              <h1 className="text-[#3563E9] text-3xl font-bold">MORENT</h1>
            </Link>
            <p className="mt-4 text-[#90A3BF] text-sm leading-relaxed">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* About Section */}
          <div className="md:col-span-3">
            <h2 className="text-[#1A202C] font-semibold mb-4">About</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/how-it-works" className="text-[#90A3BF] hover:text-[#3563E9] transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/featured" className="text-[#90A3BF] hover:text-[#3563E9] transition-colors">
                  Featured
                </Link>
              </li>
              <li>
                <Link href="/partnership" className="text-[#90A3BF] hover:text-[#3563E9] transition-colors">
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="/business-relation" className="text-[#90A3BF] hover:text-[#3563E9] transition-colors">
                  Business Relation
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="md:col-span-3">
            <h2 className="text-[#1A202C] font-semibold mb-4">Community</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/events" className="text-[#90A3BF] hover:text-[#3563E9] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#90A3BF] hover:text-[#3563E9] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="text-[#90A3BF] hover:text-[#3563E9] transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/invite-friend" className="text-[#90A3BF] hover:text-[#3563E9] transition-colors">
                  Invite a friend
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="md:col-span-3">
            <h2 className="text-[#1A202C] font-semibold mb-4">Socials</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/discord" className="text-[#90A3BF] hover:text-[#3563E9] transition-colors">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/instagram" className="text-[#90A3BF] hover:text-[#3563E9] transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="/twitter" className="text-[#90A3BF] hover:text-[#3563E9] transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="/facebook" className="text-[#90A3BF] hover:text-[#3563E9] transition-colors">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#1A202C] text-sm">
              ©2022 MORENT. All rights reserved
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy-policy" className="text-[#1A202C] text-sm hover:text-[#3563E9] transition-colors">
                Privacy & Policy
              </Link>
              <Link href="/terms" className="text-[#1A202C] text-sm hover:text-[#3563E9] transition-colors">
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;



