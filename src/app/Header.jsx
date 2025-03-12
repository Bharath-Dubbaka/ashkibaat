"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   return (
      <header className="border-b bg-white/70 backdrop-blur-md fixed top-0 w-full z-50">
         <div className="mx-auto px-4">
            <div className="flex items-center justify-between h-[5.3rem]">
               {/* Logo */}
               <Link
                  href="/"
                  className="flex items-center space-x-1 ml-2 md:ml-8"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 200 200"
                     width={50}
                     height={50}
                     style={{ display: "block" }}
                  >
                     <defs>
                        <linearGradient
                           id="avGradient"
                           x1="0%"
                           y1="0%"
                           x2="100%"
                           y2="100%"
                        >
                           <stop offset="10%" stopColor="#FFD700" />{" "}
                           {/* Yellow */}
                           <stop offset="30%" stopColor="#FF8C00" />{" "}
                           {/* Orange */}
                           <stop offset="75%" stopColor="#1E90FF" />{" "}
                           {/* Blue */}
                        </linearGradient>

                        <pattern
                           id="dotPattern"
                           patternUnits="userSpaceOnUse"
                           width="10"
                           height="10"
                        >
                           <circle
                              cx="2"
                              cy="2"
                              r="1.5"
                              fill="rgba(255,255,255,0.2)"
                           />
                        </pattern>
                     </defs>

                     {/* Background with gradient */}
                     <rect
                        width="100%"
                        height="100%"
                        fill="url(#avGradient)"
                        rx="20"
                     />
                     <rect
                        width="100%"
                        height="100%"
                        fill="url(#dotPattern)"
                        rx="20"
                     />

                     {/* Centered "A" */}
                     <path
                        d="M100 60 L80 140 M100 60 L120 140"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="12"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                     />
                  </svg>
                  <span
                     className={`text-xl md:text-[2.3rem] pb-2 flex justify-end items-baseline font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300`}
                  >
                     <span className="text-[1.3rem] md:text-[1.5rem] font-light">
                        {" "}
                        sh ki Baat
                     </span>
                  </span>
               </Link>

               {/* Desktop Navigation */}
               <nav className="hidden md:flex items-center space-x-8">
                  {[
                     "Merch",
                     "Podcast",
                     "Poll",
                     "Contact",
                     "Partners",
                  ].map((item) => (
                     <Link
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        className="text-slate-600 hover:text-indigo-600 font-medium transition-colors duration-200 hover:scale-105 transform"
                     >
                        {item}
                     </Link>
                  ))}
               </nav>

               {/* Mobile Menu Button */}
               <button
                  className="md:hidden p-2 mr-2 rounded-md focus:outline-none"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               >
                  <svg
                     className="w-6 h-6 text-slate-600"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     {mobileMenuOpen ? (
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M6 18L18 6M6 6l12 12"
                        />
                     ) : (
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M4 6h16M4 12h16M4 18h16"
                        />
                     )}
                  </svg>
               </button>
            </div>
         </div>

         {/* Mobile Menu Dropdown */}
         {mobileMenuOpen && (
            <nav className="md:hidden bg-white border-t py-4 px-4 shadow-lg">
               {[
                  "Merch",
                  "Podcast",
                  "Poll",
                  "About",
                  "Contact",
                  "Partners",
               ].map((item) => (
                  <Link
                     key={item}
                     href={`/${item.toLowerCase()}`}
                     className="block py-3 px-4 text-slate-600 hover:text-indigo-600 font-medium transition-colors duration-200 border-b border-gray-100"
                     onClick={() => setMobileMenuOpen(false)}
                  >
                     {item}
                  </Link>
               ))}
            </nav>
         )}
      </header>
   );
};

export default Header;
