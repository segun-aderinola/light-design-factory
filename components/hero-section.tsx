"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";
import { useMemo } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const stars = useMemo(
    () =>
      [...Array(50)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3,
      })),
    []
  );

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values based on scroll
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 3]);
  const videoY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 400]);
  const videoX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 150, 300]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.8, 0]);
  const borderOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Play button appearance
  const playButtonScale = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const playButtonOpacity = useTransform(scrollYProgress, [0.4, 0.6, 0.9, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] bg-black overflow-hidden">
      <div className="sticky top-0 h-screen">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-900/20" />

        {/* Animated particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('/person-wearing-vr-glasses-with-particles-effect.png')",
            backgroundSize: "contain",
            backgroundPosition: "right bottom",
            height: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full h-screen">
            {/* Left Content */}
            <div className="animate-fade-in-up z-20 relative">
              <h1 className="text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
                Let us reimagine <span className="text-gray-400">your space</span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md">
                AI-powered interior design that transforms your space through
                cognitive technology, human creativity and a whole lot of soul.
              </p>

              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-base font-semibold mb-12">
                Start your Journey
              </Button>

              {/* Animated Video Thumbnail Container */}
              <div className="relative w-full max-w-sm h-48">
                <motion.div
                  ref={videoRef}
                  style={{
                    scale: videoScale,
                    y: videoY,
                    x: videoX,
                  }}
                  className="origin-center w-full"
                >
                  {/* Border wrapper */}
                  <motion.div
                    style={{ opacity: borderOpacity }}
                    className="rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1"
                  >
                    <div className="bg-black rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
                      <Image
                        height={300}
                        width={500}
                        src="/interior-design-video-thumbnail.jpg"
                        alt="Design showcase"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      
                      {/* Overlay for darkening during transition */}
                      <motion.div 
                        style={{ opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 0.4]) }}
                        className="absolute inset-0 bg-black"
                      />
                    </div>
                  </motion.div>

                  {/* Play Button Overlay - appears during scroll */}
                  {/* <motion.div
                    style={{
                      scale: playButtonScale,
                      opacity: playButtonOpacity,
                    }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-3xl md:text-4xl text-white font-light">Play</span>
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-2xl">
                        <Play size={32} className="text-black fill-black ml-1" />
                      </div>
                      <span className="text-3xl md:text-4xl text-white font-light">Video</span>
                    </div>
                  </motion.div> */}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        >
          <ChevronDown className="text-white/50" size={24} />
        </motion.div>
      </div>
    </section>
  );
}

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronDown, Play } from "lucide-react";
// import { useMemo } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";

// export function HeroSection() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const stars = useMemo(
//     () =>
//       [...Array(50)].map(() => ({
//         left: Math.random() * 100,
//         top: Math.random() * 100,
//         delay: Math.random() * 2,
//         duration: 2 + Math.random() * 3,
//       })),
//     []
//   );

//   // Track scroll progress for the entire container
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   // Hero content fade out
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
//   const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

//   // Video thumbnail transformations
//   const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2.5, 4.5]);
//   const videoY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 200, 350]);
//   const videoX = useTransform(scrollYProgress, [0, 0.6, 1], [0, 100, 200]);
  
//   // Border and gradient fade out
//   const borderOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  
//   // Video background image fade in
//   const videoBackgroundOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  
//   // Play button elements
//   const playButtonScale = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
//   const playButtonOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  
//   // VR person image fade out
//   const vrImageOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  
//   // Background transitions
//   const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section ref={containerRef} className="relative min-h-[250vh] bg-black overflow-hidden">
//       <div className="sticky top-0 h-screen overflow-hidden">
//         {/* Background with gradient overlay */}
//         <motion.div 
//           style={{ opacity: bgOpacity }}
//           className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-900/20"
//         />

//         {/* Animated particles effect */}
//         <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 overflow-hidden">
//           {stars.map((star, i) => (
//             <div
//               key={i}
//               className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
//               style={{
//                 left: `${star.left}%`,
//                 top: `${star.top}%`,
//                 animationDelay: `${star.delay}s`,
//                 animationDuration: `${star.duration}s`,
//               }}
//             />
//           ))}
//         </motion.div>

//         {/* VR Person Background Image */}
//         <motion.div
//           style={{ opacity: vrImageOpacity }}
//           className="absolute inset-0 z-0"
//         >
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "url('/person-wearing-vr-glasses-with-particles-effect.png')",
//               backgroundSize: "contain",
//               backgroundPosition: "right bottom",
//               height: "100%",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//           </div>
//         </motion.div>

//         {/* Video Section Background - Fades in */}
//         <motion.div
//           style={{ opacity: videoBackgroundOpacity }}
//           className="absolute inset-0 z-0"
//         >
//           <img
//             src="/design-showcase-video.jpg"
//             alt="Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40" />
//         </motion.div>

//         {/* Hero Content */}
//         <motion.div
//           style={{ opacity: heroOpacity, y: heroY }}
//           className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-screen"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full h-screen">
//             {/* Left Content */}
//             <div className="animate-fade-in-up z-20 relative pt-20 lg:pt-0">
//               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-4 sm:mb-6">
//                 Let us reimagine <span className="text-gray-400">your space</span>
//               </h1>

//               <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-md">
//                 AI-powered interior design that transforms your space through
//                 cognitive technology, human creativity and a whole lot of soul.
//               </p>

//               <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold mb-8 sm:mb-12">
//                 Start your Journey
//               </Button>

//               {/* Video Thumbnail Container - Positioned relative to content */}
//               <div className="relative w-full max-w-xs sm:max-w-sm">
//                 <motion.div
//                   style={{
//                     scale: videoScale,
//                     y: videoY,
//                     x: videoX,
//                   }}
//                   className="origin-bottom-left w-full"
//                 >
//                   {/* Border wrapper with gradient - fades out */}
//                   <motion.div
//                     style={{ opacity: borderOpacity }}
//                     className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1"
//                   >
//                     <div className="bg-black rounded-lg sm:rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
//                       <Image
//                         height={300}
//                         width={500}
//                         src="/interior-design-video-thumbnail.jpg"
//                         alt="Design showcase"
//                         className="w-full h-full object-cover rounded-md sm:rounded-lg"
//                         priority
//                       />
                      
//                       {/* Darkening overlay during transition */}
//                       <motion.div
//                         style={{
//                           opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 0.5]),
//                         }}
//                         className="absolute inset-0 bg-black"
//                       />
//                     </div>
//                   </motion.div>

//                   {/* Play Button Overlay - appears during scroll */}
//                   <motion.div
//                     style={{
//                       scale: playButtonScale,
//                       opacity: playButtonOpacity,
//                     }}
//                     className="absolute inset-0 flex items-center justify-center pointer-events-none"
//                   >
//                     <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
//                       <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light">
//                         Play
//                       </span>
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-2xl pointer-events-auto cursor-pointer"
//                       >
//                         <Play size={28} className="sm:w-8 sm:h-8 md:w-10 md:h-10 text-black fill-black ml-1" />
//                       </motion.button>
//                       <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light">
//                         Video
//                       </span>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
//           className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
//         >
//           <ChevronDown className="text-white/50" size={24} />
//         </motion.div>
//       </div>
//     </section>
//   );
// }