"use client";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { FaPinterest, FaSnapchat, FaTiktok, FaYoutube } from "react-icons/fa";
import { RiThreadsFill, RiTwitterXFill } from "react-icons/ri";

export function Footer() {
  return (
    <footer className="bg-white py-10 sm:py-12 md:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          
           <a href="https://x.com/Light_DesignFac?t=kzjtuYVJg6Qc9g5aE-t7IQ&s=09"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="X (Twitter)"
          >
            <RiTwitterXFill className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          
           <a href="https://www.instagram.com/light.designfactory?igsh=ZWdrbDVsemQ4bHNv"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="https://www.linkedin.com/company/light-design-factory/"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a href="https://www.facebook.com/people/Light-Design-Factory/61570107773694/"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="https://www.tiktok.com/@the.light.design?_t=ZS-8zHMG7BQKBD&_r=1"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="TikTok"
          >
            <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="https://pin.it/3fF5aA3oB"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="Pinterest"
          >
            <FaPinterest className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="https://www.snapchat.com/add/thelightdesign?sender_web_id=eff3211f-5fb6-4b90-b211-bf2cdcad521f&device_type=desktop&is_copy_url=true"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="Snapchat"
          >
            <FaSnapchat className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="https://www.threads.com/@light.designfactory"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="Threads"
          >
            <RiThreadsFill className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="https://youtube.com/@lightdesignfactory?si=mdQYT-AQl7FDNraC"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="Youtube"
          >
            <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>

        {/* Partner Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 md:mb-8 font-urbanist px-2">
            Partner with us
          </h3>

          <div className="flex justify-center px-2">
            <div className="inline-flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 bg-gray-100 p-3 sm:p-4 md:p-5 lg:p-6 rounded-2xl sm:rounded-3xl font-medium max-w-5xl">
              <a
                href="https://cc-light-design.vercel.app/forms/investor"
                className="text-black hover:underline text-xs sm:text-sm md:text-base whitespace-nowrap mx-2 sm:mx-3 md:mx-4"
              >
                Investor/Funding
              </a>

              <a
                href="https://cc-light-design.vercel.app/forms/artist"
                className="text-black hover:underline text-xs sm:text-sm md:text-base whitespace-nowrap mx-2 sm:mx-3 md:mx-4"
              >
                Artist
              </a>

              <a
                href="https://cc-light-design.vercel.app/forms/interior-designer"
                className="text-black hover:underline text-xs sm:text-sm md:text-base whitespace-nowrap mx-2 sm:mx-3 md:mx-4"
              >
                Interior Designer
              </a>

              <a
                href="https://cc-light-design.vercel.app/forms/product-designer"
                className="text-black hover:underline text-xs sm:text-sm md:text-base whitespace-nowrap mx-2 sm:mx-3 md:mx-4"
              >
                Furniture Designer
              </a>
              
              <a  href="https://cc-light-design.vercel.app/forms/social-impact-partner"
                className="text-black hover:underline text-xs sm:text-sm md:text-base whitespace-nowrap mx-2 sm:mx-3 md:mx-4"
              >
                Social Impact Partner
              </a>

              <a
                href="https://cc-light-design.vercel.app/forms/retailer"
                className="text-black hover:underline text-xs sm:text-sm md:text-base whitespace-nowrap mx-2 sm:mx-3 md:mx-4"
              >
                Retailer
              </a>
            </div>
          </div>
        </div>

        {/* Large Background Text Slider */}
        <div className="relative mt-8 sm:mt-10 md:mt-12">
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.333%);
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
          `}</style>
          <div className="flex animate-scroll">
            <div className="text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] xl:text-[280px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap opacity-40 pr-8 sm:pr-12 md:pr-16 lg:pr-20">
              LIGHT DESIGN FACTORY
            </div>
            <div className="text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] xl:text-[280px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap opacity-40 pr-8 sm:pr-12 md:pr-16 lg:pr-20">
              LIGHT DESIGN FACTORY
            </div>
            <div className="text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] xl:text-[280px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap opacity-40 pr-8 sm:pr-12 md:pr-16 lg:pr-20">
              LIGHT DESIGN FACTORY
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}