// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FiSearch, FiHeart, FiBell, FiSettings, FiChevronDown, FiSun, FiMoon, FiGlobe } from "react-icons/fi";
// import { client } from "@/sanity/lib/client";
// import { useTheme } from "../../../contexts/ThemeContext";
// import { useUser, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import type React from "react"; // Import React
// import { IconType } from "react-icons"; // Import IconType

// interface Car {
//   _id: string;
//   name: string;
//   brand: string;
//   type: string;
//   slug: string;
//   image: string;
// }

// interface MenuItem {
//   name: string;
//   href?: string;
//   onClick?: () => void;
//   icon?: IconType | React.ReactNode; // Allow IconType or ReactNode
// }

// declare global {
//   interface Window {
//     google: {
//       translate: {
//         TranslateElement: {
//           new (options: any, elementId: string): void;
//           InlineLayout: {
//             SIMPLE: string;
//           };
//         };
//       };
//     };
//     googleTranslateElementInit: () => void;
//   }
// }

// export function Header() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState<Car[]>([]);
//   const [favorites, setFavorites] = useState<string[]>([]);
//   const [showResults, setShowResults] = useState(false);
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const searchRef = useRef<HTMLDivElement>(null);
//   const profileRef = useRef<HTMLDivElement>(null);
//   const { theme, toggleTheme } = useTheme();
//   const { user, isSignedIn } = useUser();

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//     });

//     const handleClickOutside = (event: MouseEvent) => {
//       if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
//         setShowResults(false);
//       }
//       if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
//         setShowProfileMenu(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     const googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           includedLanguages: "en,ur,ar,es,fr,de",
//           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//         },
//         "google_translate_element",
//       );
//     };

//     window.googleTranslateElementInit = googleTranslateElementInit;

//     const script = document.createElement("script");
//     script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.body.removeChild(script);
//     };
//   }, []);

//   useEffect(() => {
//     const observer = new MutationObserver(() => {
//       const googleText = document.querySelector(".goog-te-menu-value span:first-child");
//       if (googleText) {
//         googleText.innerHTML = "Languages";
//       }
//     });

//     observer.observe(document.body, {
//       childList: true,
//       subtree: true,
//     });

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const searchCars = async () => {
//       if (searchQuery.length > 0) {
//         const results = await client.fetch(`
//           *[_type == "car" && (name match "*${searchQuery}*" || brand match "*${searchQuery}*" || type match "*${searchQuery}*")] {
//             _id,
//             name,
//             brand,
//             type,
//             "slug": slug.current,
//             "image": image.asset->url
//           }
//         `);
//         setSearchResults(results);
//         setShowResults(true);
//       } else {
//         setSearchResults([]);
//         setShowResults(false);
//       }
//     };

//     const debounceTimer = setTimeout(searchCars, 300);
//     return () => clearTimeout(debounceTimer);
//   }, [searchQuery]);

//   useEffect(() => {
//     const storedFavorites = localStorage.getItem("favorites");
//     if (storedFavorites) {
//       setFavorites(JSON.parse(storedFavorites));
//     }
//   }, []);

//   const menuItems: MenuItem[] = [
//     { name: "Analytics Dashboard", href: "/loyalty-programs" },
//     { name: "Order Tracking", href: "/dashboard" },
//     { name: "Customer Feedback", href: "/feedback" },
//     { name: "FAQ & Help Center", href: "/faqs" },
//     { name: "Discount & Promotions", href: "/promotions" },
//     { name: "Subscription Management", href: "/subscription" },
//     { name: "Settings", href: "/settings" },
//     {
//       name: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
//       onClick: () => {
//         toggleTheme();
//         setShowProfileMenu(false);
//       },
//       icon: theme === "dark" ? FiSun : FiMoon,
//     },
//   ];

//   return (
//     <header className="bg-white dark:bg-gray-900 py-4 px-4 md:py-6 md:px-16 shadow-sm transition-colors duration-200">
//       {/* Top Bar */}
//       <div className="flex items-center justify-between mb-4 md:mb-6">
//         {/* Language Selector - Only visible on desktop */}
//         <div className="hidden md:flex items-center gap-2 group">
//           <FiGlobe className="w-5 h-5 text-[#3563E9] dark:text-blue-400" />
//           <div id="google_translate_element" className="language-selector cursor-pointer" />
//         </div>

//         {/* Auth Links */}
//         <div className="flex items-center gap-2">
//           {!isSignedIn ? (
//             <>
//               <SignInButton mode="modal">
//                 <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-3 py-1.5 rounded-lg transition-colors">
//                   Log In
//                 </button>
//               </SignInButton>
//               <SignUpButton mode="modal">
//                 <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
//                   Sign Up
//                 </button>
//               </SignUpButton>
//             </>
//           ) : (
//             <UserButton afterSignOutUrl="/" />
//           )}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-[#3563E9] dark:text-blue-400 mb-4 md:mb-0">
//           RideSwife
//         </Link>

//         {/* Search Bar */}
//         <div className="relative w-full md:max-w-[600px]" ref={searchRef}>
//           <div className="flex items-center relative border border-gray-300 dark:border-gray-600 rounded-full py-2.5 bg-white dark:bg-gray-800">
//             <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#596780] dark:text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search by car name, brand, or type"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-11 pr-14 border-none rounded-full outline-none bg-transparent dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
//             />
//             <button className="absolute right-4 top-1/2 -translate-y-1/2">
//               <Image
//                 src="/filter.png"
//                 alt="Filter Icon"
//                 width={20}
//                 height={20}
//                 className="cursor-pointer dark:invert"
//               />
//             </button>
//           </div>

//           {showResults && searchResults.length > 0 && (
//             <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto border border-gray-200 dark:border-gray-700">
//               {searchResults.map((car) => (
//                 <Link
//                   key={car._id}
//                   href={`/car/${car.slug}`}
//                   className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//                 >
//                   <Image
//                     src={car.image || "/placeholder.svg"}
//                     alt={car.name}
//                     width={50}
//                     height={50}
//                     className="rounded-md mr-3"
//                   />
//                   <div>
//                     <div className="font-medium">{car.name}</div>
//                     <div className="text-sm text-gray-500 dark:text-gray-400">
//                       {car.brand} - {car.type}
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Icons Section */}
//         <div className="flex items-center gap-4 md:gap-5 w-full md:w-auto justify-between md:justify-normal">
//           <div className="flex items-center gap-4">
//             <Link href="/wishlist" className="relative">
//               <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
//                 <FiHeart className="h-5 w-5 text-[#596780] dark:text-gray-400" />
//               </button>
//               {favorites.length > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                   {favorites.length}
//                 </span>
//               )}
//             </Link>
//             <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full relative">
//               <FiBell className="h-5 w-5 text-[#596780] dark:text-gray-400" />
//               <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full"></span>
//             </button>
//             <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
//               <FiSettings className="h-5 w-5 text-[#596780] dark:text-gray-400" />
//             </button>
//           </div>

//           {/* Profile Dropdown */}
//           {isSignedIn && (
//             <div className="relative" ref={profileRef}>
//               <button
//                 onClick={() => setShowProfileMenu(!showProfileMenu)}
//                 className="flex items-center gap-2 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer p-1"
//               >
//                 <Image
//                   src={user?.imageUrl || "/profile.png"}
//                   alt="Profile"
//                   width={36}
//                   height={36}
//                   className="rounded-full object-cover"
//                 />
//                 <FiChevronDown className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-1" />
//               </button>

//               {showProfileMenu && (
//                 <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-700">
//                   {menuItems.map((item) =>
//                     item.href ? (
//                       <Link
//                         key={item.href}
//                         href={item.href}
//                         className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//                       >
//                         {item.name}
//                       </Link>
//                     ) : (
//                       <button
//                         key={item.name}
//                         onClick={item.onClick}
//                         className="w-full text-left px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
//                       >
//                         {item.icon && typeof item.icon === "function" ? (
//                           <item.icon className="w-4 h-4" />
//                         ) : (
//                           item.icon
//                         )}
//                         {item.name}
//                       </button>
//                     ),
//                   )}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <style jsx global>{`
//         /* Google Translate Custom Styles */
//         .goog-te-gadget {
//           font-family: inherit !important;
//           font-size: 14px !important;
//           color: #3563E9 !important;
//           display: flex !important;
//           align-items: center !important;
//         }

//         .goog-te-gadget-simple {
//           background: rgba(53, 99, 233, 0.1) !important;
//           border: none !important;
//           padding: 8px 16px !important;
//           border-radius: 8px !important;
//           transition: all 0.2s !important;
//           cursor: pointer !important;
//           display: flex !important;
//           align-items: center !important;
//           gap: 8px !important;
//         }

//         .goog-te-gadget-simple:hover {
//           background: rgba(53, 99, 233, 0.2) !important;
//         }

//         .goog-te-menu-value {
//           border: none !important;
//           padding: 0 !important;
//           display: flex !important;
//           align-items: center !important;
//           gap: 8px !important;
//         }

//         .goog-te-menu-value span {
//           color: #3563E9 !important;
//           font-weight: 500 !important;
//           font-size: 14px !important;
//         }

//         .goog-te-menu-value:after {
//           content: '▼' !important;
//           font-size: 10px !important;
//           color: #3563E9 !important;
//           margin-left: 4px !important;
//         }

//         /* Dark Mode Styles */
//         .dark .goog-te-gadget-simple {
//           background: rgba(96, 165, 250, 0.1) !important;
//         }

//         .dark .goog-te-gadget-simple:hover {
//           background: rgba(96, 165, 250, 0.2) !important;
//         }

//         .dark .goog-te-menu-value span {
//           color: #60a5fa !important;
//         }

//         .dark .goog-te-menu-value:after {
//           color: #60a5fa !important;
//         }

//         /* Dropdown Styling */
//         .goog-te-menu-frame {
//           min-width: 180px !important;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
//           border-radius: 8px !important;
//           border: none !important;
//           margin-top: 8px !important;
//         }

//         .dark .goog-te-menu-frame {
//           background: #1f2937 !important;
//           border: 1px solid #374151 !important;
//         }

//         .goog-te-menu2-item div {
//           color: #1f2937 !important;
//           padding: 10px 16px !important;
//           font-size: 14px !important;
//           transition: all 0.2s !important;
//         }

//         .dark .goog-te-menu2-item div {
//           color: #f3f4f6 !important;
//         }

//         .goog-te-menu2-item:hover div {
//           background: #f3f4f6 !important;
//           color: #1f2937 !important;
//         }

//         .dark .goog-te-menu2-item:hover div {
//           background: #374151 !important;
//           color: #f3f4f6 !important;
//         }

//         /* Hide Google Branding */
//         .goog-te-gadget img {
//           display: none !important;
//         }

//         .goog-te-gadget .goog-te-combo {
//           // margin: 0 !important
//         }
//       `}</style>
//     </header>
//   )
// }