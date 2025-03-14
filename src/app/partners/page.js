import React from "react";
import Image from "next/image";

const partners = [
   { name: "Gillette", src: "/partners/gillette.png" },
   { name: "Hero", src: "/partners/hero.png" },
   { name: "Oppo", src: "/partners/oppo.png" },
   { name: "Jio", src: "/partners/jio.png" },
   { name: "Nike", src: "/partners/nike.png" },
   { name: "Colgate", src: "/partners/colgate.png" },
   { name: "Samsung", src: "/partners/samsung.png" },
   { name: "Adidas", src: "/partners/adidas.png" },
];

const Partners = () => {
   return (
      <div className="dotted-pattern bg-gray-50 py-28 min-h-screen">
         <h2 className="text-teal-900 text-center text-3xl font-bold mb-8 underline">
            OUR VALUED PARTNERS
         </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-t border-l border-gray-700 mx-6 md:mx-20 bg-white">
            {partners.map((partner, index) => (
               <div
                  key={index}
                  className="flex items-center justify-center h-40 border-r border-b border-gray-700 "
               >
                  <Image
                     src={partner.src}
                     alt={partner.name}
                     width={150}
                     height={50}
                     className="object-contain"
                  />
               </div>
            ))}
         </div>
      </div>
   );
};

export default Partners;
