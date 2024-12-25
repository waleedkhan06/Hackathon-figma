'use client';

import Link from 'next/link';
import { FiSearch, FiHeart, FiBell, FiSettings } from 'react-icons/fi';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function Header() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <header className="bg-white py-4 px-4 md:py-6 md:px-16 shadow-sm">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        <div className="flex items-center justify-between">
         
          <Link href="/" className="text-2xl font-bold text-[#3563E9]">
            MORENT
          </Link>

         
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 cursor-pointer md:hidden">
            <Link href="/dashboard">
              <Image
                src="/profil.png" 
                alt="Profile Image"
                width={48}
                height={48}
                className="w-full h-full object-cover rounded-full"
              />
            </Link>
          </div>
        </div>

       
<div
  className="w-full flex items-center relative mt-4 md:mt-0 md:max-w-[492px] border border-gray-300 rounded-full py-2"
  data-aos-delay="100"
>
  <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#596780]" />
  <input
    type="text"
    placeholder="Search something here"
    className="w-full pl-12 pr-14 border-none rounded-full outline-none"
  />
  <button className="absolute right-4 top-1/2 -translate-y-1/2">
    <Image
      src="/filter.png"
      alt="Filter Icon"
      width={24}
      height={24}
      className="cursor-pointer"
    />
  </button>
</div>

        
        <div className="hidden md:flex items-center gap-4">
          <button className="rounded-full p-2 hover:bg-gray-100">
            <FiHeart className="h-6 w-6 text-[#596780]" />
          </button>
          <button className="rounded-full p-2 hover:bg-gray-100 relative">
            <FiBell className="h-6 w-6 text-[#596780]" />
           
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="rounded-full p-2 hover:bg-gray-100">
            <FiSettings className="h-6 w-6 text-[#596780]" />
          </button>

          
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 cursor-pointer">
            <Link href="/dashboard">
              <Image
                src="/profil.png" 
                alt="Profile Image"
                width={48}
                height={48}
                className="w-full h-full object-cover rounded-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
