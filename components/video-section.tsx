// "use client";

// import { Play } from "lucide-react";
// import { useRef, useState, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export function VideoSection() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);

//   // Initialize scroll tracking only after component is mounted and ref is available
//   const { scrollYProgress } = useScroll({
//     target: isMounted ? containerRef : undefined,
//     offset: ["start end", "end start"],
//   });

//   // Transform values - use default values until mounted
//   const sectionOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
//   const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
//   const contentY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

//   // Mount effect
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Scroll progress effect
//   useEffect(() => {
//     if (!isMounted || !scrollYProgress) return;

//     const unsubscribe = scrollYProgress.on("change", (latest) => {
//       if (latest > 0.05) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     });

//     return unsubscribe;
//   }, [scrollYProgress, isMounted]);

//   const handlePlayVideo = async () => {
//     if (!videoRef.current) return;

//     try {
//       if (videoRef.current.requestFullscreen) {
//         await videoRef.current.requestFullscreen();
//       } else if ((videoRef.current as any).webkitRequestFullscreen) {
//         await (videoRef.current as any).webkitRequestFullscreen();
//       } else if ((videoRef.current as any).msRequestFullscreen) {
//         await (videoRef.current as any).msRequestFullscreen();
//       }

//       setIsFullscreen(true);
//       videoRef.current.muted = false;
//       videoRef.current.play();

//       const handleFullscreenChange = () => {
//         if (!document.fullscreenElement &&
//             !(document as any).webkitFullscreenElement &&
//             !(document as any).msFullscreenElement) {
//           setIsFullscreen(false);
//           if (videoRef.current) {
//             videoRef.current.muted = true;
//           }
//           document.removeEventListener('fullscreenchange', handleFullscreenChange);
//           document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
//           document.removeEventListener('msfullscreenchange', handleFullscreenChange);
//         }
//       };

//       document.addEventListener('fullscreenchange', handleFullscreenChange);
//       document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
//       document.addEventListener('msfullscreenchange', handleFullscreenChange);

//     } catch (error) {
//       console.error('Error entering fullscreen:', error);
//     }
//   };

//   // Don't render anything until the HeroSection video expansion is complete
//   // This must be AFTER all hooks
//   if (!isVisible) {
//     return null;
//   }

//   return (
//     <section
//       ref={containerRef}
//       className="relative py-0 overflow-hidden flex flex-col items-center justify-center min-h-screen bg-black"
//     >
//       {/* Background Video - already expanded from HeroSection */}
//       <motion.div
//         className="absolute inset-0"
//         style={{ opacity: isMounted ? sectionOpacity : 0 }}
//       >
//         <video
//           ref={videoRef}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="w-full h-full object-cover"
//           poster="/design-showcase-video-poster.jpg"
//         >
//           <source src="/videos/explainer_video.mp4" type="video/mp4" />
//           <source src="/videos/explainer_video.webm" type="video/webm" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 bg-black/30" />
//       </motion.div>

//       {/* Scrolling Text Animations */}
//       <style jsx>{`
//         @keyframes scroll-left {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-33.333%); }
//         }
//         @keyframes scroll-right {
//           0% { transform: translateX(-33.333%); }
//           100% { transform: translateX(0); }
//         }
//         .animate-scroll-left {
//           animation: scroll-left 40s linear infinite;
//         }
//         .animate-scroll-right {
//           animation: scroll-right 40s linear infinite;
//         }
//       `}</style>

//       {/* Content - fades in slowly after video is fully expanded */}
//       <motion.div
//         className="relative z-10 w-full flex flex-col items-center justify-center gap-0"
//         style={{
//           opacity: isMounted ? contentOpacity : 0,
//           y: isMounted ? contentY : 50,
//         }}
//       >
//         {/* Top Scrolling Text */}
//         <div className="relative overflow-hidden w-full">
//           <div className="flex animate-scroll-left">
//             <div className="absolute -top-6 text-[120px] sm:text-[160px] lg:text-[200px] font-bold text-white/20 uppercase tracking-wider whitespace-nowrap pr-20">
//               LIGHT DESIGN FACTORY
//             </div>
//             <div className="text-[120px] sm:text-[160px] lg:text-[200px] font-bold text-white/20 uppercase tracking-wider whitespace-nowrap pr-20 invisible">
//               LIGHT DESIGN FACTORY
//             </div>
//           </div>
//         </div>

//         {/* Play Video Section */}
//         <div className="flex items-center justify-center gap-6 md:gap-8 my-8 relative z-20">
//           <span className="text-3xl md:text-4xl lg:text-5xl text-white font-light">
//             Play
//           </span>

//           <button
//             type="button"
//             onClick={handlePlayVideo}
//             className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl"
//             aria-label="Play video in fullscreen"
//           >
//             <Play
//               size={28}
//               className="md:w-8 md:h-8 text-black fill-black ml-1"
//             />
//           </button>

//           <span className="text-3xl md:text-4xl lg:text-5xl text-white font-light">
//             Video
//           </span>
//         </div>

//         {/* Bottom Scrolling Text */}
//         <div className="relative w-full">
//           <div className="flex animate-scroll-right">
//             <div
//               className="absolute md:-bottom-32 text-[120px] sm:text-[160px] lg:text-[200px] font-bold uppercase tracking-wider whitespace-nowrap pr-20"
//               style={{
//                 WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
//                 color: "transparent",
//               }}
//             >
//               LIGHT DESIGN FACTORY
//             </div>
//             <div
//               className="text-[120px] sm:text-[160px] lg:text-[200px] font-bold uppercase tracking-wider whitespace-nowrap pr-20 invisible"
//               style={{
//                 WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
//                 color: "transparent",
//               }}
//             >
//               LIGHT DESIGN FACTORY
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { Play } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize scroll tracking only after component is mounted
  const { scrollYProgress } = useScroll({
    target: isMounted
      ? (containerRef as React.RefObject<HTMLElement>)
      : undefined,
    offset: ["start end", "end start"],
  });

  // Only start appearing after scroll progress
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.05) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    return unsubscribe;
  }, [scrollYProgress, isMounted]);

  const handlePlayVideo = async () => {
    if (!videoRef.current) return;

    try {
      if (videoRef.current.requestFullscreen) {
        await videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        await (videoRef.current as any).webkitRequestFullscreen();
      } else if ((videoRef.current as any).msRequestFullscreen) {
        await (videoRef.current as any).msRequestFullscreen();
      }

      setIsFullscreen(true);
      videoRef.current.muted = false;
      videoRef.current.play();

      const handleFullscreenChange = () => {
        if (
          !document.fullscreenElement &&
          !(document as any).webkitFullscreenElement &&
          !(document as any).msFullscreenElement
        ) {
          setIsFullscreen(false);
          if (videoRef.current) {
            videoRef.current.muted = true;
          }
          document.removeEventListener(
            "fullscreenchange",
            handleFullscreenChange
          );
          document.removeEventListener(
            "webkitfullscreenchange",
            handleFullscreenChange
          );
          document.removeEventListener(
            "msfullscreenchange",
            handleFullscreenChange
          );
        }
      };

      document.addEventListener("fullscreenchange", handleFullscreenChange);
      document.addEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.addEventListener("msfullscreenchange", handleFullscreenChange);
    } catch (error) {
      console.error("Error entering fullscreen:", error);
    }
  };

  if (!isVisible) {
    return null;
  }
  if (!isMounted) return null;
  return (
    <section
      ref={containerRef}
      className="relative py-0 overflow-hidden flex flex-col items-center justify-center min-h-screen bg-black"
    >
      {/* Use motion.div for opacity animation to fix TypeScript error */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: sectionOpacity }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/design-showcase-video-poster.jpg"
        >
          <source src="/videos/explainer_video.mp4" type="video/mp4" />
          <source src="/videos/explainer_video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Scrolling Text Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
      `}</style>

      {/* Content - fades in slowly after video is fully expanded */}
      <motion.div
        className="relative z-10 w-full flex flex-col items-center justify-center gap-0"
        style={{
          opacity: contentOpacity,
          y: contentY,
        }}
      >
        {/* Top Scrolling Text */}
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll-left">
            <div className="absolute -top-6 text-[120px] sm:text-[160px] lg:text-[200px] font-bold text-white/20 uppercase tracking-wider whitespace-nowrap pr-20">
              LIGHT DESIGN FACTORY
            </div>
            <div className="text-[120px] sm:text-[160px] lg:text-[200px] font-bold text-white/20 uppercase tracking-wider whitespace-nowrap pr-20 invisible">
              LIGHT DESIGN FACTORY
            </div>
          </div>
        </div>

        {/* Play Video Section */}
        <div className="flex items-center justify-center gap-6 md:gap-8 my-8 relative z-20">
          <span className="text-3xl md:text-4xl lg:text-5xl text-white font-light">
            Play
          </span>

          <button
            type="button"
            onClick={handlePlayVideo}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl"
            aria-label="Play video in fullscreen"
          >
            <Play
              size={28}
              className="md:w-8 md:h-8 text-black fill-black ml-1"
            />
          </button>

          <span className="text-3xl md:text-4xl lg:text-5xl text-white font-light">
            Video
          </span>
        </div>

        {/* Bottom Scrolling Text */}
        <div className="relative w-full">
          <div className="flex animate-scroll-right">
            <div
              className="absolute md:-bottom-32 text-[120px] sm:text-[160px] lg:text-[200px] font-bold uppercase tracking-wider whitespace-nowrap pr-20"
              style={{
                WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
                color: "transparent",
              }}
            >
              LIGHT DESIGN FACTORY
            </div>
            <div
              className="text-[120px] sm:text-[160px] lg:text-[200px] font-bold uppercase tracking-wider whitespace-nowrap pr-20 invisible"
              style={{
                WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
                color: "transparent",
              }}
            >
              LIGHT DESIGN FACTORY
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
