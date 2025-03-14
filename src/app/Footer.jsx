import React from "react";
import Link from "next/link";
import {
   IconBrandFacebook,
   IconBrandInstagram,
   IconBrandTwitter,
   IconBrandX,
   IconBrandYoutube,
} from "@tabler/icons-react";

const Footer = () => {
   return (
      <footer className="bg-gradient-to-br from-yellow-100/80  to-blue-200/70 border-t ">
         <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {/* Brand Column */}
               <div className="space-y-4 pr-10">
                  {/* <h2 className="flex flex-col text-2xl font-bold text-gradient ">
                     AVinnovations
                     <span className="text-xs text-black font-normal">
                        our place,{" "}
                        <span className="font-bold"> your comfort</span>
                     </span>
                  </h2> */}
                  <Link href="/" className="flex items-center space-x-1 ">
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

                     {/* <div className="flex flex-col"> */}
                     <span
                        className={`text-[2.3rem] pb-2 flex justify-end items-baseline font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300`}
                     >
                        <span className="text-[1.5rem] font-light">
                           {" "}
                           sh ki Baat
                        </span>
                        {/* <span className="text-xs text-black font-normal"> */}
                        {/* prod by <span className="font-bold"> CVtoSalary</span> */}
                        {/* </span> */}
                     </span>
                     {/* </div> */}
                  </Link>
                  <p className="text-slate-600">
                     We love what we do and therefore come up with the best
                     possible solutions to help you get an office space faster
                     and cheaper
                  </p>
               </div>

               {/* Product Column */}
               <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Product</h3>
                  <ul className="space-y-3">
                     <li>
                        <Link
                           href="/merch"
                           className="text-slate-600 hover:text-slate-900 hover:underline"
                        >
                           Merch
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/podcast"
                           className="text-slate-600 hover:text-slate-900 hover:underline"
                        >
                           Podcast
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/partners"
                           className="text-slate-600 hover:text-slate-900"
                        >
                           Partners
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Company Column */}
               <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
                  <ul className="space-y-3">
                     <li>
                        <Link
                           href="/"
                           className="text-slate-600 hover:text-slate-900  hover:underline"
                        >
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/contact"
                           className="text-slate-600 hover:text-slate-900 hover:underline"
                        >
                           Contact
                        </Link>
                     </li>
                     {/* <li>
                        <Link
                           href="/blog"
                           className="text-slate-600 hover:text-slate-900"
                        >
                           Blog
                        </Link>
                     </li> */}
                  </ul>
               </div>

               {/* Legal Column */}
               <div>
                  <h5 className="font-semibold mb-4">Follow Us</h5>
                  <div className="flex space-x-4">
                     <Link href="https://x.com/ashwinravi99">
                        <IconBrandX className="w-6 h-6 hover:text-primary-600 cursor-pointer" />
                     </Link>
                     <Link href="https://www.facebook.com/AshwinRaviOfficial/">
                        <IconBrandFacebook className="w-6 h-6 hover:text-primary-600 cursor-pointer" />
                     </Link>
                     <Link href="https://instagram.com/rashwin99">
                        <IconBrandInstagram className="w-6 h-6 hover:text-primary-600 cursor-pointer" />
                     </Link>
                     <Link href="https://youtube.com/@ashkibaat99">
                        <IconBrandYoutube className="w-6 h-6 hover:text-primary-600 cursor-pointer" />
                     </Link>
                  </div>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-300 mt-12 pt-8">
               <p className="text-center text-slate-600">
                  © {new Date().getFullYear()} AshkiBaat. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
