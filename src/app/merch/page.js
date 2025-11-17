"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Eye } from "lucide-react";

export default function MerchandisePage() {
   const [quickViewProduct, setQuickViewProduct] = useState(null);

   // Sample product data
   const products = [
      {
         id: 1,
         name: "OCTOPUS DEVOURING HOUSE HOODIE",
         price: 3800.0,
         images: ["/merch/whiteHoodie.jpg"],
         slug: "octopus-devouring-house-hoodie",
         color: "Lavender",
         sizes: ["S", "M", "L", "XL", "XXL"],
      },
      {
         id: 2,
         name: "SEE THE UNIVERSE HOODIE",
         price: 3800.0,
         images: ["/merch/hoodieTwo.jpg"],
         slug: "see-the-universe-hoodie",
         color: "Mint",
         sizes: ["S", "M", "L", "XL"],
      },
      {
         id: 3,
         name: "COLORBLOCK ATOM BARCODE PULLOVER HOODIE",
         price: 4400.0,
         images: ["/merch/brownHoodie.jpg"],
         slug: "colorblock-atom-barcode-pullover-hoodie",
         color: "Pink/Yellow/Black",
         sizes: ["S", "M", "L", "XL", "XXL"],
      },
      {
         id: 4,
         name: "SKATER ALIEN CREWNECK",
         price: 4000.0,
         images: ["/merch/Hoodie.jpg"],
         slug: "skater-alien-crewneck",
         color: "Light Blue",
         sizes: ["S", "M", "L", "XL"],
      },
      {
         id: 5,
         name: "ALIEN CREWNECK",
         price: 4000.0,
         images: ["/merch/brownHoodie.jpg"],
         slug: "skater-alien-crewneck",
         color: "Light Blue",
         sizes: ["S", "M", "L", "XL"],
      },
      {
         id: 6,
         name: "BARCODE PULLOVER HOODIE",
         price: 4400.0,
         images: ["/merch/whiteHoodie.jpg"],
         slug: "colorblock-atom-barcode-pullover-hoodie",
         color: "Pink/Yellow/Black",
         sizes: ["S", "M", "L", "XL", "XXL"],
      },
      {
         id: 7,
         name: "CREWNECK SOLID",
         price: 4000.0,
         images: ["/merch/Hoodie.jpg"],
         slug: "skater-alien-crewneck",
         color: "Light Blue",
         sizes: ["S", "M", "L", "XL"],
      },
      {
         id: 8,
         name: "ALIEN CREWNECK",
         price: 4000.0,
         images: ["/merch/hoodieTwo.jpg"],
         slug: "skater-alien-crewneck",
         color: "Light Blue",
         sizes: ["S", "M", "L", "XL"],
      },
   ];

   const handleQuickView = (product) => {
      setQuickViewProduct(product);
   };

   const closeQuickView = () => {
      setQuickViewProduct(null);
   };

   const addToCart = (product, size) => {
      // Implement your cart logic here
      console.log(`Added ${product.name} (${size}) to cart`);
      // You might want to use a cart context or state management library
   };

   return (
      <div className="px-4 py-24 dotted-pattern bg-gray-50">
         {/* Discount Banner */}
         <div className=" py-4 mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-teal-900 text-center italic underline">
               70% OFF BLOWOUT (DISCOUNT APPLIED AT CHECKOUT)
            </h1>
         </div>

         {/* Product Grid */}
         <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {products.map((product) => (
               <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={handleQuickView}
               />
            ))}
         </div>

         {/* Quick View Modal */}
         {quickViewProduct && (
            <QuickViewModal
               product={quickViewProduct}
               onClose={closeQuickView}
               onAddToCart={addToCart}
            />
         )}
      </div>
   );
}

function ProductCard({ product, onQuickView }) {
   return (
      <div className="group relative">
         {/* Image now triggers quick view instead of navigation */}
         <div
            className="aspect-square overflow-hidden bg-gray-100 mb-4 cursor-pointer"
            onClick={() => onQuickView(product)}
         >
            <div className="relative w-full h-full">
               <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
               />
            </div>
         </div>

         {/* Quick View Button - Appears on Hover */}
         <button
            onClick={() => onQuickView(product)}
            className="absolute right-2 top-2 bg-white bg-opacity-90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Quick view"
         >
            <Eye size={18} />
         </button>

         <div className="mt-2">
            {/* Product name and price now also trigger quick view */}
            <div
               className="cursor-pointer"
               onClick={() => onQuickView(product)}
            >
               <h3 className="text-sm uppercase font-medium text-gray-900">
                  {product.name}
               </h3>
               <p className="text-sm mt-1 text-gray-900">
                  RS. {product.price.toLocaleString()}.00
               </p>
            </div>
         </div>
      </div>
   );
}

function QuickViewModal({ product, onClose, onAddToCart }) {
   const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

   return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
         <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="relative p-6">
               {/* Close Button */}
               <button
                  onClick={onClose}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                  aria-label="Close"
               >
                  <svg
                     className="w-6 h-6"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                     />
                  </svg>
               </button>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Product Image */}
                  <div className="aspect-square relative">
                     <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover rounded"
                     />
                  </div>

                  {/* Product Info */}
                  <div>
                     <h2 className="text-xl font-bold text-gray-900 uppercase">
                        {product.name}
                     </h2>
                     <p className="text-lg font-medium mt-2">
                        RS. {product.price.toLocaleString()}.00
                     </p>

                     <div className="mt-4">
                        <h3 className="text-sm font-medium">
                           Color: {product.color}
                        </h3>
                     </div>

                     {/* Size Selection */}
                     <div className="mt-4">
                        <h3 className="text-sm font-medium mb-2">Size</h3>
                        <div className="flex flex-wrap gap-2">
                           {product.sizes.map((size) => (
                              <button
                                 key={size}
                                 onClick={() => setSelectedSize(size)}
                                 className={`px-3 py-1 border rounded-md ${
                                    selectedSize === size
                                       ? "border-black bg-black text-white"
                                       : "border-gray-300 text-gray-700 hover:border-gray-400"
                                 }`}
                              >
                                 {size}
                              </button>
                           ))}
                        </div>
                     </div>

                     {/* Add to Cart Button */}
                     <button
                        onClick={() => {
                           onAddToCart(product, selectedSize);
                           onClose();
                        }}
                        className="mt-6 w-full bg-black text-white py-3 px-4 rounded-md flex items-center justify-center hover:bg-gray-800"
                     >
                        <ShoppingCart size={18} className="mr-2" />
                        Add to Cart
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
