"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export function TransformationsSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    {
      src: "/modern-living-room-with-dark-walls.jpg",
      alt: "Modern living room",
      hoverSrc: "/ugly-modern-living-room-with-dark-wall.png", // Second image for hover
    },
    {
      src: "/bedroom-with-white-bedding-and-plants.jpg",
      alt: "Bedroom design",
      hoverSrc: "/ugly-bedroom-with-white-bedding-and-plants.png",
    },
    {
      src: "/minimalist-bathroom-with-mirror.jpg",
      alt: "Bathroom design",
      hoverSrc: "/ugly-minimalist-bathroom-with-mirror.png",
    },
    {
      src: "/luxury-living-room-with-green-walls.jpg",
      alt: "Luxury living room",
      hoverSrc: "/ugly-modern-living-room-with-dark-walls.png",
    },
    {
      src: "/modern-office-space-with-windows.jpg",
      alt: "Office space",
      hoverSrc: "/ugly-modern-office-space-with-windows.png",
    },
    {
      src: "/modern-living-room-with-dark-walls.jpg",
      alt: "Modern living room",
      hoverSrc: "/ugly-modern-living-room-with-dark-wall.png",
    },
  ];

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardClick = (index: number) => {
    if (isMobile) {
      setClickedIndex(clickedIndex === index ? null : index);
    }
  };

  return (
    <section className="relative pt-8 sm:pt-10 md:pt-12 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-3 sm:mb-4 md:mb-6 px-4">
            See the amazing transformations
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Explore how real spaces are reimagined through powerful AI + Human
            Design collaborations.
          </p>
        </div>

        {/* Gallery */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-2 sm:px-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className="group flex-shrink-0 w-[240px] h-[180px] sm:w-[280px] sm:h-[210px] md:w-[320px] md:h-[240px] rounded-2xl sm:rounded-3xl overflow-hidden relative animate-fade-in cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Main Image */}
                  <Image
                    height={240}
                    width={320}
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-all duration-300 md:group-hover:scale-105 ${
                      clickedIndex === index ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* Hover/Click Effect: Second Image (Before) */}
                  <div
                    className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ${
                      clickedIndex === index
                        ? "opacity-100"
                        : "opacity-0 md:group-hover:opacity-100"
                    }`}
                  >
                    <Image
                      height={240}
                      width={320}
                      src={image.hoverSrc}
                      alt={`Before transformation of ${image.alt}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text Overlay - Only on mobile when not clicked */}
                  {isMobile && clickedIndex !== index && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 md:hidden">
                      <p className="text-white text-xs font-semibold px-3 py-1.5 bg-black/60 rounded-full backdrop-blur-sm">
                        Tap to see the before
                      </p>
                    </div>
                  )}

                  {/* "After" label when showing before image on mobile */}
                  {isMobile && clickedIndex === index && (
                    <div className="absolute top-3 right-3 md:hidden">
                      <span className="text-white text-xs font-semibold px-3 py-1.5 bg-black/60 rounded-full backdrop-blur-sm">
                        Before
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
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