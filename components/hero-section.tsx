"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useMemo } from "react";
import Image from "next/image";

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
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
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
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

      {/* Background Image - Full Width */}
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
        {/* Optional overlay for mobile readability */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-0 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full min-h-screen">
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

            {/* Video Thumbnail */}
            <div className="rounded-2xl overflow-hidden border border-white/20 w-full max-w-sm bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1">
              <div className="bg-black rounded-xl aspect-video flex items-center justify-center">
                <Image
                  height={300}
                  width={500}
                  src="/interior-design-video-thumbnail.jpg"
                  alt="Design showcase"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-white/50" size={24} />
      </div>
    </section>
  );
}