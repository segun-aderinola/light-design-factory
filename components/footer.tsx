"use client";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Description Text */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-black mb-8 font-urbanist">
            Launching Q4 2025.
          </h3>
          <p className="text-black text-base leading-relaxed max-w-4xl mx-auto">
            We're working hard to deliver a one-of-a-kind platform that makes
            beautiful, thoughtful interior design solutions accessible and
            impactful for everyone, no matter where you live or what you earn.
            Get ready to transform your space and bring light to someone
            else&apos;s too.
          </p>
        </div>

        {/* Phone Numbers */}
        {/* <div className="flex justify-center items-center gap-8 mb-8">
          <a
            href="tel:+2349016562652"
            className="text-black text-base hover:underline"
          >
            +234 901 6562 652
          </a>
          <a
            href="tel:+2349016562652"
            className="text-black text-base hover:underline"
          >
            +234 901 6562 652
          </a>
        </div> */}

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-6 mb-16">
          <a
            href="#"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="X (Twitter)"
          >
            <RiTwitterXFill size={24} />
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="TikTok"
          >
            <FaTiktok size={24} />
          </a>
        </div>

        {/* Partner Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-black mb-8 font-urbanist">
            Partner with us
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            <div className="flex gap-4 bg-gray-100 p-4 rounded-4xl font-medium">
              <a href="#" className="text-black hover:underline text-base">
                Investor/Funding
              </a>
              <a href="#" className="text-black hover:underline text-base">
                Artist
              </a>
              <a href="#" className="text-black hover:underline text-base">
                Interior Designer
              </a>
              <a href="#" className="text-black hover:underline text-base">
                Furniture Designer
              </a>
              <a href="#" className="text-black hover:underline text-base">
                Social Impact Partner
              </a>
              <a href="#" className="text-black hover:underline text-base">
                Retailer
              </a>
            </div>
          </div>
        </div>

        {/* Large Background Text Slider */}
        <div className="relative overflow-hidden mt-12">
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
            <div className="text-[180px] lg:text-[220px] xl:text-[280px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap opacity-40 pr-20">
              LIGHT DESIGN FACTORY
            </div>
            <div className="text-[180px] lg:text-[220px] xl:text-[280px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap opacity-40 pr-20">
              LIGHT DESIGN FACTORY
            </div>
            <div className="text-[180px] lg:text-[220px] xl:text-[280px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap opacity-40 pr-20">
              LIGHT DESIGN FACTORY
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
