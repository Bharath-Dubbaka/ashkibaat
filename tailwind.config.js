/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: {
               500: "#your-primary-color",
               800: "#your-primary-dark-color",
               900: "#your-primary-darker-color",
            },
         },
      },
   },
   plugins: [require("tailwindcss-animate")],
};
