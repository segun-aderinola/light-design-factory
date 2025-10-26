"use client";

import { Button } from "@/components/ui/button";
import { Gift, Users, Play, Paintbrush } from "lucide-react";
import { RiHeartFill } from "react-icons/ri";

export function HappySpacesSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-4 sm:mb-6">
            Happy Spaces
          </h2>

          <p className="text-base sm:text-lg text-gray-700 max-w-3xl leading-relaxed">
            We strongly believe that everyone — no matter their background,
            status, or situation — deserves to live in a space that brings joy,
            dignity, and peace. At Light Design Factory, Happy Spaces are the
            reason we exist. Our passion is to create environments that uplift
            the human spirit — places where people can feel seen, safe, and
            inspired.
          </p>
        </div>

        {/* Cards Grid - Responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Gift Cards */}
          <div className="rounded-2xl sm:rounded-3xl bg-black text-white p-6 sm:p-8 flex flex-col animate-fade-in-up min-h-[280px] sm:min-h-[320px] lg:col-span-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0">
              <Gift
                size={24}
                className="sm:w-7 sm:h-7 text-black"
                strokeWidth={2}
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-3 sm:mb-4">
              Gift Cards
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 flex-grow">
              Purchase design support for others and spread the joy of beautiful
              spaces
            </p>
            <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full py-4 sm:py-6 font-semibold text-sm sm:text-base">
              Buy Gift Cards
            </Button>
          </div>

          {/* Card 2: Video/Image Card - Full width on mobile, 2 cols on desktop */}
          <div
            className="rounded-2xl sm:rounded-3xl overflow-hidden animate-fade-in-up min-h-[280px] sm:min-h-[320px] lg:col-span-2 sm:col-span-2"
            style={{ animationDelay: "0.1s" }}
          >
            <div
              className="relative h-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center group cursor-pointer bg-cover bg-center hover:bg-[length:105%] transition-all duration-300"
              style={{ backgroundImage: "url('/modern-living-room.jpg')" }}
            >
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play
                    size={20}
                    className="sm:w-6 sm:h-6 text-black fill-black ml-1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Donation */}
          <div
            className="rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200 p-6 sm:p-8 flex flex-col animate-fade-in-up min-h-[280px] sm:min-h-[320px] lg:col-span-1"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0">
              <RiHeartFill
                size={28}
                className="sm:w-8 sm:h-8 text-black"
                strokeWidth={2}
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-black mb-3 sm:mb-4">
              Donation
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 flex-grow">
              Support community transformation projects across West Africa
              through design donations.
            </p>
            <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full py-4 sm:py-6 font-semibold text-sm sm:text-base">
              Make a Donation
            </Button>
          </div>

          {/* Card 4: Large Text/Image Card - Full width on mobile, 2 cols on desktop */}
          <div
            className="rounded-2xl sm:rounded-3xl overflow-hidden animate-fade-in-up min-h-[280px] sm:min-h-[320px] lg:col-span-2 sm:col-span-2"
            style={{ animationDelay: "0.3s" }}
          >
            <div
              className="relative h-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center group cursor-pointer bg-cover bg-center transition-all duration-300"
              style={{ backgroundImage: "url('/holding_hands.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="relative z-10 p-4 sm:p-6 md:p-8">
                <p className="text-white font-semibold text-base sm:text-lg mb-2 sm:mb-3 leading-relaxed">
                  This belief fuels everything we do across the entire Light
                  Design Factory ecosystem.
                </p>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  Right now, we're focused on transforming the homes of widows,
                  orphans, and underserved communities across West Africa —
                  individuals who are too often overlooked or marginalized.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5: Designers */}
          <div
            className="rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200 p-6 sm:p-8 flex flex-col animate-fade-in-up min-h-[280px] sm:min-h-[320px] lg:col-span-1"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0">
              <Paintbrush size={24} className="sm:w-7 sm:h-7 text-black" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-black mb-3 sm:mb-4">
              Designers
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-2">
              Partner with Light Design Factory to create healing spaces for
              widows, orphans, and individuals in need across West Africa.
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 flex-grow">
              Showcase your expertise, grow your reach, and design with purpose.
            </p>
            <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full py-4 sm:py-6 font-semibold text-sm sm:text-base">
              Apply Now
            </Button>
          </div>

          {/* Card 6: Stories */}
          <div
            className="rounded-2xl sm:rounded-3xl bg-black text-white p-6 sm:p-8 flex flex-col animate-fade-in-up min-h-[280px] sm:min-h-[320px] lg:col-span-1"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0">
              <Users
                size={24}
                className="sm:w-7 sm:h-7 text-black"
                strokeWidth={2}
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-3 sm:mb-4">
              Stories
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 flex-grow">
              Read inspiring stories from Happy Space Projects and community
              transformations.
            </p>
            <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full py-4 sm:py-6 font-semibold text-sm sm:text-base">
              Read Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
