"use client"

import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section className="relative py-24 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/design-showcase-video.jpg" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full px-6">
        {/* Play Video Section */}
        <div className="flex items-center justify-center gap-8 my-8">
          <span className="text-3xl md:text-4xl lg:text-5xl text-white font-light">Play</span>
          
          <button className="w-18 h-18 md:w-18 md:h-18 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl">
            <Play size={48} className="text-black fill-black ml-2" />
          </button>
          
          <span className="text-3xl md:text-4xl lg:text-5xl text-white font-light">Video</span>
        </div>
      </div>
    </section>
  )
}
// "use client";

// import { Play } from "lucide-react";
// import { motion } from "framer-motion";

// export function VideoSection() {
//   return (
//     <section className="relative py-24 overflow-hidden flex items-center justify-center min-h-screen">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="/design-showcase-video.jpg"
//           alt="Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: false, margin: "-100px" }}
//         className="relative z-10 w-full px-6"
//       >
//         {/* Play Video Section */}
//         <div className="flex items-center justify-center gap-6 md:gap-8 my-8">
//           <span className="text-3xl md:text-4xl lg:text-5xl text-white font-light">
//             Play
//           </span>

//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center transition-transform duration-300 shadow-2xl"
//           >
//             <Play size={32} className="md:w-12 md:h-12 text-black fill-black ml-2" />
//           </motion.button>

//           <span className="text-3xl md:text-4xl lg:text-5xl text-white font-light">
//             Video
//           </span>
//         </div>
//       </motion.div>
//     </section>
//   );
// }