"use client";

import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section className="relative py-0 overflow-hidden flex flex-col items-center justify-center min-h-[50vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/design-showcase-video.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

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

      <div className="relative z-10 w-full flex flex-col items-center justify-center gap-0">
        {/* Top Scrolling Text */}
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll-left">
            <div className="absolute -top-6 text-[120px] sm:text-[160px] lg:text-[200px] font-bold text-white/20 uppercase tracking-wider whitespace-nowrap pr-20">
              LIGHT DESIGN FACTORY
            </div>
            {/* <div className="text-[120px] sm:text-[160px] lg:text-[200px] xl:text-[240px] font-bold text-white/20 uppercase tracking-wider whitespace-nowrap pr-20">
              LIGHT DESIGN FACTORY
            </div> */}
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
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl"
            aria-label="Play video"
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

        {/* Bottom Scrolling Text (opposite direction - outlined) */}
        {/* <div className="relative overflow-hidden w-full"> */}
        <div className="relative  w-full">
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
            {/* <div
              className="text-[120px] sm:text-[160px] lg:text-[200px] xl:text-[240px] font-bold uppercase tracking-wider whitespace-nowrap pr-20"
              style={{
                WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
                color: "transparent",
              }}
            >
              LIGHT DESIGN FACTORY
            </div> */}
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
      </div>
    </section>
  );
}
