"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function TransformationsSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const images = [
    {
      src: "/modern-living-room-with-dark-walls.jpg",
      alt: "Modern living room",
    },
    {
      src: "/bedroom-with-white-bedding-and-plants.jpg",
      alt: "Bedroom design",
    },
    { src: "/minimalist-bathroom-with-mirror.jpg", alt: "Bathroom design" },
    {
      src: "/luxury-living-room-with-green-walls.jpg",
      alt: "Luxury living room",
    },
    { src: "/modern-office-space-with-windows.jpg", alt: "Office space" },
    {
      src: "/modern-living-room-with-dark-walls.jpg",
      alt: "Modern living room",
    },
  ];

  return (
    <section className="relative pt-12 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            See the amazing transformations
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore how real spaces are reimagined through powerful AI + Human
            Design collaborations.
          </p>
        </div>

        {/* Gallery */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 px-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[320px] h-[240px] rounded-3xl overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Image
                    height={240}
                    width={320}
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phone Mockup - Cut off at bottom */}
        <div className="flex justify-center items-end animate-fade-in-up h-[400px] overflow-hidden">
          <div className="relative max-w-md w-full -mb-48">
            <img
              src="/3d_image.png"
              alt="Instagram profile on phone"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
