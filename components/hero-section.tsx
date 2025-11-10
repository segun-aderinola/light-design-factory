"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [stars, setStars] = useState<any[]>([]);  // Initialize stars as an empty array
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

    // Generate stars on the client side only
  useEffect(() => {
    const generatedStars = [...Array(50)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
    }));
    setStars(generatedStars);  // Set the generated stars to state
  }, []);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values based on scroll
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 3]);
  const videoY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 400]);
  const videoX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 150, 300]);
  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 1, 0.8, 0]
  );
  const borderOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Play button appearance (removed since we don't need it)
  const playButtonScale = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const playButtonOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.6, 0.9, 1],
    [0, 1, 1, 0]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure video plays automatically
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          video.muted = true;
          video.playsInline = true;
          await video.play();
        } catch (error) {
          console.log("Autoplay prevented:", error);
          // Fallback: try playing on user interaction
          const playOnInteraction = () => {
            video.play();
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('scroll', playOnInteraction);
          };
          document.addEventListener('click', playOnInteraction);
          document.addEventListener('scroll', playOnInteraction);
        }
      };
      
      playVideo();
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden"
    >
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
          className="absolute inset-0 z-0 left-25% hidden lg:block"
          style={{
            backgroundImage:
              "url('/person-wearing-vr-glasses-with-particles-effect.png')",
            backgroundSize: "cover",
            backgroundPosition: "right bottom",
            height: "100%",
            backgroundRepeat: "no-repeat",
            left: "35%",
          }}
        >
          <div className="lg:hidden absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center w-full h-screen">
            {/* Left Content */}
            <div className="animate-fade-in-up z-20 relative">
              <h1 className="text-6xl lg:text-7xl font-urbanist font-bold text-white leading-tight mb-6 ">
                Let us reimagine your <br />
                <span className="text-gray-400"> space</span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md">
                AI-powered interior design that transforms your space through
                cognitive technology, human creativity and a whole lot of soul.
              </p>

              <Button className="bg-white text-black hover:bg-secondary hover:text-white transition-colors duration-200 rounded-full px-8 py-6 text-base font-semibold mb-12">
                Start your Journey
              </Button>

              {/* Animated Video Container */}
              <div className="relative w-full max-w-sm h-48">
                <motion.div
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
                    className="rounded-2xl overflow-hidden border border-white/40"
                  >
                    <div className="bg-black rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
                      {/* Video Element */}
                      <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover rounded-lg"
                        poster="/interior-design-video-thumbnail.jpg" // Optional: fallback image
                      >
                        <source src="/videos/explainer_video.mp4" type="video/mp4" />
                        <source src="/videos/explainer_video.webm" type="video/webm" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Overlay for darkening during transition */}
                      <motion.div
                        style={{
                          opacity: useTransform(
                            scrollYProgress,
                            [0.3, 0.6],
                            [0, 0.4]
                          ),
                        }}
                        className="absolute inset-0 bg-black"
                      />
                    </div>
                  </motion.div>
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