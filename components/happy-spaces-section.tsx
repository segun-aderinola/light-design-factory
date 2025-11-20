"use client";

import { Button } from "@/components/ui/button";
import { Gift, Users, Paintbrush } from "lucide-react";
import { RiHeartFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import {
  VideoCard,
  DonationCard,
  LargeTextCard,
  DesignersCard,
  StoriesCard,
  GiftCardsCard,
} from "./HappySpaceCards";

export function HappySpacesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-3 sm:mb-4 md:mb-6">
            Happy Spaces
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl leading-relaxed">
            We strongly believe that everyone — no matter their background,
            status, or situation — deserves to live in a space that brings joy,
            dignity, and peace. At Light Design Factory, Happy Spaces are the
            reason we exist. Our passion is to create environments that uplift
            the human spirit — places where people can feel seen, safe, and
            inspired.
          </p>
        </div>

        {/* Desktop & Tablet Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {/* Card 1: Gift Cards */}
          <div
            className="lg:col-span-1 animate-fade-in-up"
            data-aos="fade-up"
          >
            <GiftCardsCard />
          </div>

          {/* Card 2: Video Card */}
          <div
            className="lg:col-span-2 sm:col-span-2 animate-fade-in-up"
            data-aos="fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <VideoCard />
          </div>

          {/* Card 3: Donation */}
          <div
            className="lg:col-span-1 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
            data-aos="fade-up"
          >
            <DonationCard />
          </div>

          {/* Card 4: Large Text Card */}
          <div
            className="lg:col-span-2 sm:col-span-2 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
            data-aos="fade-up"
          >
            <LargeTextCard />
          </div>

          {/* Card 5: Designers */}
          <div
            className="lg:col-span-1 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
            data-aos="fade-up"
          >
            <DesignersCard />
          </div>

          {/* Card 6: Stories */}
          <div
            className="lg:col-span-1 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
            data-aos="fade-up"
          >
            <StoriesCard />
          </div>
        </div>

        {/* Mobile: Video Card + Carousel */}
        <div className="sm:hidden">
          {/* Video Card First - Full width with fixed height */}
          <div className="mb-6 h-[260px]">
            <VideoCard />
          </div>

          {/* Horizontal Scroll Carousel for other cards */}
          <div className="-mx-4">
            <div
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 gap-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div className="flex-shrink-0 w-[85vw] snap-center h-[400px]">
                <div className="h-full">
                  <DonationCard />
                </div>
              </div>

              <div className="flex-shrink-0 w-[85vw] snap-center h-[400px]">
                <div className="h-full">
                  <LargeTextCard />
                </div>
              </div>

              <div className="flex-shrink-0 w-[85vw] snap-center h-[400px]">
                <div className="h-full">
                  <DesignersCard />
                </div>
              </div>

              <div className="flex-shrink-0 w-[85vw] snap-center h-[400px]">
                <div className="h-full">
                  <StoriesCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollbar hide styles */}
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