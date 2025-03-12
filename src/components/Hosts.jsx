import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const hostsList = [
   {
      name: "R. ASHWIN",
      image: "/images/RVfront.jpg",
      bio: [
         "Adam's career started with a decade in Canberra advising Australian politicians including a Prime Minister. When they were voted out he followed his first love.",
         "His writing appears around the cricket world, including as the Australian correspondent for Wisden Cricket Monthly. He commentates on television for Sky Sports and radio for SEN, including the 2019 World Cup Final. He hosts videos alongside Harsha Bhogle on Cricbuzz, the world's biggest cricket website. In 2021 Adam was named the Christopher Martin-Jenkins cricket broadcaster of the year in the UK. He lives in London with his young family.",
      ],
      links: [
         { name: "Ash ki Baat", url: "#" },
         { name: "Ashwin", url: "#" },
         { name: "AshwinAnna", url: "#" },
      ],
   },
   {
      name: "VIMAL",
      image: "/images/RVtwo.jpg",
      bio: [
         "Geoff began his writing life as a poet, touring nationally and internationally at festivals and performing with musicians like TZU and The Church's Steve Kilbey.",
         "He spent seven years as editor of one of Australia's oldest literary journals, Going Down Swinging, and directed the National Young Writers Festival. He wrote on music and politics before he began covering cricket full-time in 2013 and founded commentary station White Line Wireless. He has written for most cricket publications and commentates for the BBC and ABC. He recently published his fifth book.",
      ],
      links: [{ name: "VimalBa", url: "#" }],
   },
   //    {
   //       name: "MELINDA FARRELL",
   //       image: "/images/RVthree.jpg",
   //       bio: [
   //          "Melinda is an award-winning sports journalist and broadcaster with over 15 years of experience covering cricket around the world.",
   //          "She has worked with ESPNcricinfo, the ICC, and various television networks, bringing insightful analysis and interviews to cricket fans globally. Known for her in-depth knowledge of the game and engaging presentation style, Melinda has become one of the most respected voices in cricket journalism.",
   //       ],
   //       links: [],
   //    },
   //    {
   //       name: "JARROD KIMBER",
   //       image: "/images/placeholder-host.jpg",
   //       bio: [
   //          "Jarrod is one of cricket's most distinctive voices, known for his irreverent style and analytical approach to the game.",
   //          "He co-created the groundbreaking cricket film 'Death of a Gentleman' and has written for ESPNcricinfo, Cricket Monthly, and numerous other publications. Formerly of Cricinfo and Cricket Monthly, he now produces independent content through his own platforms and contributes to global cricket broadcasts.",
   //       ],
   //       links: [],
   //    },
];

const Hosts = () => {
   //    const [currentIndex, setCurrentIndex] = useState(0);

   //    const nextSlide = () => {
   //       setCurrentIndex((prevIndex) =>
   //          prevIndex === hostsList.length - 2 ? 0 : prevIndex + 1
   //       );
   //    };

   //    const prevSlide = () => {
   //       setCurrentIndex((prevIndex) =>
   //          prevIndex === 0 ? hostsList.length - 2 : prevIndex - 1
   //       );
   //    };

   return (
      <div className="py-16 dotted-pattern ">
         <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-12 text-center text-teal-900 underline">
               OUR HOSTS & GUESTS:
            </h2>

            {/* Navigation Controls for Mobile */}
            {/* <div className="flex justify-between mb-6 md:hidden">
               <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-yellow-400 hover:bg-yellow-500"
                  aria-label="Previous speaker"
               >
                  <ChevronLeft size={24} />
               </button>
               <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-yellow-400 hover:bg-yellow-500"
                  aria-label="Next speaker"
               >
                  <ChevronRight size={24} />
               </button>
            </div> */}

            {/* Hosts Grid/Carousel */}
            <div className="relative">
               {/* Desktop View: Show 2 hosts side by side */}
               <div className="hidden px-8 md:grid md:grid-cols-2 gap-12">
                  {hostsList.map((host, index) => (
                     <HostCard key={index} host={host} />
                  ))}
               </div>

               {/* Mobile View: Show 1 host at a time */}
               <div className="md:hidden">
                  {hostsList.map((host, index) => (
                     <HostCard key={index} host={host} />
                  ))}
                  {/* <HostCard host={hostsList[currentIndex]} /> */}
               </div>

               {/* Desktop Navigation Controls */}
               {/* <button
                  onClick={prevSlide}
                  className="hidden md:block absolute top-1/2 -left-12 transform -translate-y-1/2 p-2 rounded-full bg-yellow-300/80 hover:bg-yellow-400"
                  aria-label="Previous speakers"
               >
                  <ChevronLeft size={24} />
               </button>
               <button
                  onClick={nextSlide}
                  className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2 p-2 rounded-full bg-yellow-300/80 hover:bg-yellow-400"
                  aria-label="Next speakers"
               >
                  <ChevronRight size={24} />
               </button> */}
            </div>

            {/* Carousel Indicators */}
            {/* <div className="flex justify-center mt-8">
               {Array.from({ length: Math.ceil(hostsList.length / 2) }).map(
                  (_, idx) => (
                     <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx * 2)}
                        className={`w-3 h-3 mx-1 rounded-full ${
                           Math.floor(currentIndex / 2) === idx
                              ? "bg-black"
                              : "bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                     />
                  )
               )}
            </div> */}
         </div>
      </div>
   );
};

const HostCard = ({ host }) => {
   return (
      <div className="flex flex-col items-center md:items-center md:flex-col bg-gradient-to-br from-blue-100  to-yellow-50 shadow-xl px-10 pt-4 pb-8 rounded-lg hover:shadow-2xl duration-300 hover:-translate-y-1.5 transition-transform">
         {/* Host Image */}
         <div className="w-48 h-48 relative mb-6 md:mb-0 md:mr-8 flex-shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
               <Image
                  src={host.image}
                  alt={host.name}
                  width={192}
                  height={192}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg=="
               />
            </div>
         </div>

         {/* Host Details */}
         <div>
            <h3 className="text-2xl font-bold mb-4 text-teal-900">
               {host.name}
            </h3>
            {host.bio.map((paragraph, idx) => (
               <p key={idx} className="mb-4 text-sm md:text-base text-gray-600">
                  {paragraph}
               </p>
            ))}

            {/* Links */}
            {host.links.length > 0 && (
               <div className="mt-2">
                  {host.links.map((link, idx) => (
                     <a
                        key={idx}
                        href={link.url}
                        className="underline font-medium hover:text-gray-800 mr-4"
                     >
                        {link.name}
                     </a>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
};

export default Hosts;
