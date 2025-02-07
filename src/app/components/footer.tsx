"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="w-full bg-white dark:bg-gray-900" data-aos="fade-up">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3" data-aos="fade-right">
            <Link href="/" className="inline-block">
              <h1 className="text-[#3563E9] dark:text-blue-400 text-3xl font-bold">MORENT</h1>
            </Link>
          </div>

          {/* About Section */}
          <div className="md:col-span-3" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-[#1A202C] dark:text-white font-semibold mb-4">About</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-[#90A3BF] dark:text-gray-400 hover:text-[#3563E9] dark:hover:text-blue-400 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/featured"
                  className="text-[#90A3BF] dark:text-gray-400 hover:text-[#3563E9] dark:hover:text-blue-400 transition-colors"
                >
                  Featured
                </Link>
              </li>
              <li>
                <Link
                  href="/partnership"
                  className="text-[#90A3BF] dark:text-gray-400 hover:text-[#3563E9] dark:hover:text-blue-400 transition-colors"
                >
                  Partnership
                </Link>
              </li>
              <li>
                <Link
                  href="/business-relation"
                  className="text-[#90A3BF] dark:text-gray-400 hover:text-[#3563E9] dark:hover:text-blue-400 transition-colors"
                >
                  Business Relation
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="md:col-span-3" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-[#1A202C] dark:text-white font-semibold mb-4">Community</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/events"
                  className="text-[#90A3BF] dark:text-gray-400 hover:text-[#3563E9] dark:hover:text-blue-400 transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#90A3BF] dark:text-gray-400 hover:text-[#3563E9] dark:hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/podcast"
                  className="text-[#90A3BF] dark:text-gray-400 hover:text-[#3563E9] dark:hover:text-blue-400 transition-colors"
                >
                  Podcast
                </Link>
              </li>
              <li>
                <Link
                  href="/invite"
                  className="text-[#90A3BF] dark:text-gray-400 hover:text-[#3563E9] dark:hover:text-blue-400 transition-colors"
                >
                  Invite a Friend
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="md:col-span-3" data-aos="fade-left">
            <h2 className="text-[#1A202C] dark:text-white font-semibold mb-4">Socials</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#90A3BF] dark:text-gray-400 hover:text-[#3563E9] dark:hover:text-blue-400 transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#90A3BF] dark:text-gray-400 hover:text-[#3563E9] dark:hover:text-blue-400 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#90A3BF] dark:text-gray-400 hover:text-[#3563E9] dark:hover:text-blue-400 transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#90A3BF] dark:text-gray-400 hover:text-[#3563E9] dark:hover:text-blue-400 transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800" data-aos="fade-up">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#1A202C] dark:text-white text-sm">©2023 MORENT. All Rights Reserved.</p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy-policy"
                className="text-[#1A202C] dark:text-white text-sm hover:text-[#3563E9] dark:hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#1A202C] dark:text-white text-sm hover:text-[#3563E9] dark:hover:text-blue-400 transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/contact"
                className="text-[#1A202C] dark:text-white text-sm hover:text-[#3563E9] dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/Faqs"
                className="text-[#1A202C] dark:text-white text-sm hover:text-[#3563E9] dark:hover:text-blue-400 transition-colors"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
