import React from "react";
import Image from "next/image";
import { IconBrandYoutube } from "@tabler/icons-react";

const Hero = () => {
   return (
      <div className="relative w-full overflow-hidden">
         {/* Right Image Section - Full Width Background */}
         <div className="relative w-full h-[500px] md:h-[600px] ">
            <Image
               src="/images/RVthree.jpg"
               alt="R. Ashwin"
               fill
               className="object-cover"
               quality={100}
            />

            {/* Dark caption box at top right */}
            {/* <div className="absolute top-6 right-6 bg-black/80 text-white p-3 max-w-xs">
               <p className="text-sm">
                  Historic 150th Anniversary Test to be played under lights
               </p>
            </div> */}

            {/* White diagonal overlay */}
            <div className="absolute top-0 left-0 w-full h-full">
               <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
               >
                  <polygon points="0,0 55,0 35,100 0,100" fill="white" />
               </svg>
            </div>
         </div>

         {/* Left Content Section - Overlay on top */}
         <div className="absolute top-0 left-0 w-full md:w-7/12 lg:w-5/12 p-6 md:p-12 z-20 ">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-teal-900 mb-6">
               Ash Ki Baat: Cricket, Conversations & Beyond!
            </h1>

            <p className="text-base md:text-lg text-gray-700 mb-6">
               Exclusive insights, match analysis, and candid conversations with
               cricketing legends all from the mind of one of India's finest
               spinners. Join{" "}
               <span className="font-extrabold"> Ravichandran Ashwin</span> as
               he deciphers the game like never before.
            </p>

            <div className="flex items-center text-sm text-gray-500 mt-2 ">
               <span className="">New Episode Out Now</span>
               <span className="mx-2">•</span>
               <span className="flex cursor-pointer text-red-700 hover:text-red-400">
                  Watch on YouTube
                  <IconBrandYoutube className="w-5 h-5 ml-2 text-red-600 hover:text-red-400" />
               </span>
            </div>
         </div>
      </div>
   );
};

export default Hero;
