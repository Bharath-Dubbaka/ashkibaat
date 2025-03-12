"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { formatDate } from "@/lib/utils";

// You'll need to get a YouTube Data API key from Google Cloud Console
const API_KEY = "AIzaSyDQOddRZFCCtfcFqC6f8ykGzhjzO2wC44I";
const CHANNEL_ID = "ashkibaat99";

export default function YTChannelVideos() {
   const [videos, setVideos] = useState([]);
   const [latestVideoId, setLatestVideoId] = useState("");
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      async function fetchVideos() {
         try {
            setLoading(true);

            // First, get the channel ID from the username
            const channelResponse = await fetch(
               `https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${CHANNEL_ID}&key=${API_KEY}`
            );
            const channelData = await channelResponse.json();

            // If no channel is found with the username, try searching for it
            let actualChannelId;
            if (channelData.items && channelData.items.length > 0) {
               actualChannelId = channelData.items[0].id;
            } else {
               const searchResponse = await fetch(
                  `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${CHANNEL_ID}&type=channel&key=${API_KEY}`
               );
               const searchData = await searchResponse.json();

               if (searchData.items && searchData.items.length > 0) {
                  actualChannelId = searchData.items[0].id.channelId;
               } else {
                  throw new Error("Channel not found");
               }
            }

            // Now fetch the videos for the channel
            const videosResponse = await fetch(
               `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${actualChannelId}&maxResults=6&order=date&type=video&key=${API_KEY}`
            );
            const videosData = await videosResponse.json();

            if (videosData.items && videosData.items.length > 0) {
               setVideos(videosData.items);
               // Set the latest video ID (first item in the response)
               setLatestVideoId(videosData.items[0].id.videoId);
            } else {
               setVideos([]);
            }
         } catch (err) {
            console.error("Error fetching YouTube videos:", err);
            setError("Failed to load videos. Please try again later.");
         } finally {
            setLoading(false);
         }
      }

      fetchVideos();
   }, []);

   if (loading) {
      return (
         <div className="w-full py-20 text-center">
            <p className="text-lg font-medium">Loading videos...</p>
         </div>
      );
   }

   if (error) {
      return (
         <div className="w-full py-20 text-center">
            <p className="text-lg font-medium text-red-500">{error}</p>
         </div>
      );
   }

   return (
      <div className="w-full  px-24 dotted-pattern mb-4 pb-4 text-teal-900">
         <h2 className="text-4xl font-extrabold pt-8 mb-8 text-center text-teal-900 underline">
            LATEST, ASH KI-BAAT :
         </h2>
         <div className="flex justify-center no-img-style">
            {latestVideoId && (
               <iframe
                  className="rounded-2xl w-[95%]  no-img-style"
                  height="493"
                  src={`https://www.youtube.com/embed/${latestVideoId}?autoplay=1&mute=0&rel=0`}
                  title={videos[0]?.snippet.title || "Latest Video"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
               ></iframe>
            )}
         </div>
         <div className="flex justify-between items-center my-8 ">
            <h2 className="text-4xl font-bold text-teal-900 underline">
               Recent Episodes:
            </h2>
            <a
               href="https://www.youtube.com/@ashkibaat99/videos"
               target="_blank"
               rel="noopener noreferrer"
               className="text-blue-500 hover:text-amber-600 transition-colors flex items-center"
            >
               View all <ExternalLink className="ml-1 w-4 h-4" />
            </a>
         </div>

         <div className=" bg-white px-4 md:px-6  shadow-2xl  rounded-lg">
            {videos.map((video) => (
               <div
                  key={video.id.videoId}
                  className="flex flex-col md:flex-row gap-6 border-b border-gray-200 py-4 shadow-md hover:shadow-2xl duration-300 hover:-translate-y-2.5 transition-transform rounded-lg"
               >
                  <div className="w-full md:w-1/3 ">
                     <a
                        href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative aspect-video rounded-md overflow-hidden"
                     >
                        <img
                           src={video.snippet.thumbnails.high.url}
                           alt={video.snippet.title}
                           className="w-full h-full object-cover"
                        />
                     </a>
                  </div>
                  <div className="w-full md:w-2/3">
                     <div className="mb-2">
                        <p className="text-gray-500">
                           {formatDate(video.snippet.publishedAt)}
                        </p>
                        <h3 className="text-xl font-bold uppercase mt-1">
                           {video.snippet.title}
                        </h3>
                     </div>
                     <p className="text-gray-700 mb-4">
                        {video.snippet.description}
                     </p>
                     <a
                        href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-500 hover:text-amber-600 transition-colors flex items-center w-fit"
                     >
                        → Listen to the Episode
                     </a>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
