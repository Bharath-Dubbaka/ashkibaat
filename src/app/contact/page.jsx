"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { toast, Toaster } from "sonner";
import { Metadata } from "next";

const Contact = () => {
   const form = useRef(null);
   const apiKey = process.env.NEXT_PUBLIC_EMAIL_API_KEY || "fallback-api-key";
   const templateId =
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "fallback-template-id";
   const serviceId =
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID_KEY || "fallback-service-id";
   const [errors, setErrors] = useState({});

   // Check for missing env variables and log or throw error if any are missing
   if (!apiKey || !templateId || !serviceId) {
      throw new Error("Missing environment variables: Check your .env file.");
   }
   //  Validating form fields
   const validateForm = () => {
      const formErrors = {};
      const formData = form.current;
      console.log(formData, form.current);
      if (formData) {
         if (!formData.user_name.value)
            formErrors.user_name = "Name is required.";
         if (!formData.user_email.value)
            formErrors.user_email = "Email is required";
         else if (!/\S+@\S+\.\S+/.test(formData.user_email.value))
            formErrors.user_email = "Invalid email format.";
         if (!formData.user_subject.value)
            formErrors.user_subject = "Subject is required.";
         if (!formData.message.value)
            formErrors.message = "Message is required.";
      }

      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
   };
   const sendEmail = (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      if (form.current) {
         emailjs
            .sendForm(serviceId, templateId, form.current, {
               publicKey: apiKey,
            })
            .then(
               () => {
                  console.log("SUCCESS!");
                  alert.success("Successfully sent email to RecruitCatch.com", {
                     duration: 3000,
                  });
                  // Clear all the fields and errors
                  form.current?.reset();
                  setErrors({});
               },
               (error) => {
                  console.log("FAILED...", error.text);
                  alert.error("Error while trying to server");
               }
            );
      }
   };

   return (
      <div className="py-24 dotted-pattern bg-gray-50">
         {/* <Toaster
            position="top-center"
            toastOptions={{
               style: {
                  background: "lightgreen",
               },
               className: "class",
            }}
         /> */}
         <div className="p-4 max-w-7xl mx-auto text-center relative z-10 w-full">
            <h1 className="text-gradient text-5xl font-bold text-center mb-4 text-gray-900">
               {" "}
               Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mx-auto">
               Have questions? Our team will respond within 24 hours.
            </p>
         </div>
         <div className="flex justify-between px:6 md:px-20 gap-8">
            <div className="hidden md:flex flex-col w-[38%] py-8 px-6 ml-20 pl-20 border-l border-slate-600">
               <h2 className="text-4xl font-bold text-gray-900 mb-12 text-gradient">
                  Have a <br />
                  Question?
               </h2>

               <div className="mt-12">
                  <h3 className="text-xl font-medium mb-4">Email</h3>
                  <div className="w-64 h-px bg-gray-300 mb-4"></div>
                  <p className="text-lg">support@ashkibaat.com </p>
                  {/* <p className="text-lg">Anandyedugani1995@gmail.com </p> */}
               </div>
            </div>

            <form
               ref={form}
               onSubmit={sendEmail}
               className="flex flex-col w-[100%] md:w-[56%] bg-white shadow-2xl rounded-lg mx-4 px-4 py-8 mt-8"
            >
               <div className="flex flex-col mb-4">
                  <label className="mb-2 font-medium" htmlFor="fullName">
                     *Full Name
                  </label>
                  <input
                     type="text"
                     name="user_name"
                     placeholder="Tyler Durden"
                     id="fullName"
                     className="font-sans text-base h-12 border border-gray-300 rounded-md px-4 focus:ring-2 focus:ring-indigo-500"
                  />
                  {errors.user_name && (
                     <span className="text-red-500 text-sm mt-1">
                        {errors.user_name}
                     </span>
                  )}
               </div>
               <div className="flex flex-col mb-4">
                  <label className="mb-2 font-medium" htmlFor="email">
                     *Email
                  </label>
                  <input
                     type="email"
                     name="user_email"
                     placeholder="projectmayhem@fc.com"
                     id="email"
                     className="font-sans text-base h-12 border border-gray-300 rounded-md px-4 focus:ring-2 focus:ring-indigo-500"
                  />
                  {errors.user_email && (
                     <span className="text-red-500 text-sm mt-1">
                        {errors.user_email}
                     </span>
                  )}
               </div>
               <div className="flex flex-col mb-4">
                  <label className="mb-2 font-medium" htmlFor="subject">
                     *Subject
                  </label>
                  <input
                     type="text"
                     name="user_subject"
                     placeholder="Subject here..."
                     id="subject"
                     className="font-sans text-base h-12 border border-gray-300 rounded-md px-4 focus:ring-2 focus:ring-indigo-500"
                  />
                  {errors.user_subject && (
                     <span className="text-red-500 text-sm mt-1">
                        {errors.user_subject}
                     </span>
                  )}
               </div>
               <div className="flex flex-col mb-6">
                  <label className="mb-2 font-medium" htmlFor="messageArea">
                     *Message
                  </label>
                  <textarea
                     name="message"
                     placeholder="Write your message here..."
                     id="messageArea"
                     className="font-sans text-base h-32 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                  />
                  {errors.message && (
                     <span className="text-red-500 text-sm mt-1">
                        {errors.message}
                     </span>
                  )}
               </div>
               <div className="flex justify-center">
                  <button
                     className="h-12 px-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                     type="submit"
                  >
                     Send Email
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Contact;
