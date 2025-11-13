"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "It's been 16 years since I lost my husband. Raising three children alone has been a long, difficult journey. Even now, two of them are graduates still searching for stable jobs. But today, I finally have a space to call my own — a home that brings me peace and dignity. Thanks to the Light Design Factory team, my family is forever grateful.",
      author: "Omotoluwa Oluwatoyin",
      role: "Lagos, Nigeria",
      image: "/omotoluwa_oluwatoyin.jpeg",
    },
  ]

  const next = () => setCurrentIndex((currentIndex + 1) % testimonials.length)
  const prev = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="relative py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-black mb-3 md:mb-4 lg:mb-6">
            What our community says
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            Real stories from transformed spaces worldwide
          </p>
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-12">
            {/* Quote Mark with Red Line */}
            <div className="flex flex-col items-start flex-shrink-0">
              <FaQuoteLeft 
                size={60} 
                className="text-black fill-black sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" 
                strokeWidth={0} 
              />
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-red-500 mt-2 md:mt-3 lg:mt-4" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-black italic mb-6 md:mb-8 leading-relaxed">
                {testimonials[currentIndex].quote}
              </p>

              <div className="flex items-center gap-3 md:gap-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].author}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover bg-orange-500"
                />
                <div>
                  <p className="font-heading font-bold text-black text-sm sm:text-base md:text-lg">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-3 md:gap-4 justify-center lg:justify-end mt-8 md:mt-10 lg:mt-12">
            <button
              onClick={prev}
              className="p-2 md:p-3 rounded-full border-2 bg-black text-white hover:bg-secondary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>
            <button
              onClick={next}
              className="p-2 md:p-3 rounded-full border-2 bg-black text-white hover:bg-secondary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}