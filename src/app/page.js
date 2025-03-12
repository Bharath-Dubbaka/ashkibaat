"use client";

import { motion } from "motion/react";
import {
   IconMenu2,
   IconBrandTwitter,
   IconBrandFacebook,
   IconBrandInstagram,
} from "@tabler/icons-react";
import { Mail } from "lucide-react";
import Hero from "@/components/Hero";
import Hosts from "@/components/Hosts";
import YTChannelVideos from "@/components/YTchannelVideos";

export default function Home() {
   return (
      <div className="relative min-h-screen w-full overflow-hidden mt-20 bg-gray-50">
         {/* Hero Section */}

         <Hero />
         <Hosts />
         <YTChannelVideos />
         {/* <section className="relative bg-gradient-to-br from-yellow-100  to-blue-200 text-black py-20">
            <div className="container mx-auto px-4 text-center">
               <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-4xl md:text-6xl font-bold mb-6"
               >
                  Elevate Your Cricket Knowledge
               </motion.h1>

               <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl mb-8 max-w-2xl mx-auto"
               >
                  Exclusive Hindi Youtube Channel of Ravichandran Ashwin!
               </motion.p>

               <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center space-x-4"
               >
                  <button className="bg-white text-primary-600 px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
                     Get Started
                  </button>
                  <button className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-primary-600 transition-all">
                     Learn More
                  </button>
               </motion.div>
            </div>
         </section> */}

         {/* Features Section */}
         {/* <section className="py-20 dotted-pattern bg-gray-50">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
               {[
                  "Performance Analytics",
                  "Expert Coaching",
                  "Career Guidance",
               ].map((feature, index) => (
                  <motion.div
                     key={feature}
                     initial={{ y: 40, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ delay: index * 0.2 }}
                     viewport={{ once: true }}
                     className="p-6 bg-gray-50 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
                  >
                     <div className="w-12 h-12 bg-primary-600 rounded-full mb-4 flex items-center justify-center text-black">
                        <Mail className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                     <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     </p>
                  </motion.div>
               ))}
            </div>
         </section> */}
      </div>
   );
}
