// for preview of YT video list
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString) {
   const date = new Date(dateString);
   const options = { year: "numeric", month: "long", day: "numeric" };
   return date.toLocaleDateString("en-US", options);
}
