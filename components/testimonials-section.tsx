// "use client"

// import { useState } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// export function TestimonialsSection() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const testimonials = [
//     {
//       quote: "Finally! Something to help me get over my indecisiveness when decorating my house!",
//       author: "Amy & Rachel R.",
//       role: "Interior Designer",
//       image: "/professional-woman-headshot.png",
//     },
//     {
//       quote: "The AI suggestions were incredibly helpful and saved me so much time on my project.",
//       author: "John D.",
//       role: "Homeowner",
//       image: "/professional-man-headshot.png",
//     },
//     {
//       quote: "Best design tool I've used. The human touch combined with AI is unbeatable.",
//       author: "Sarah M.",
//       role: "Design Enthusiast",
//       image: "/professional-woman-smiling-headshot.png",
//     },
//   ]

//   const next = () => setCurrentIndex((currentIndex + 1) % testimonials.length)
//   const prev = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)

//   return (
//     <section className="relative py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h2 className="text-5xl lg:text-6xl font-heading font-bold text-black mb-6">What our community says</h2>

//           <p className="text-xl text-gray-600">Real stories from transformed spaces worldwide</p>
//         </div>

//         {/* Testimonial */}
//         <div className="max-w-4xl mx-auto animate-fade-in-up">
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             {/* Quote Mark */}
//             <div className="text-9xl font-heading font-bold text-black/20 flex-shrink-0">"</div>

//             {/* Content */}
//             <div className="flex-1">
//               <p className="text-2xl lg:text-3xl font-light text-black italic mb-8">
//                 {testimonials[currentIndex].quote}
//               </p>

//               <div className="flex items-center gap-4 mb-8">
//                 <img
//                   src={testimonials[currentIndex].image || "/placeholder.svg"}
//                   alt={testimonials[currentIndex].author}
//                   className="w-16 h-16 rounded-full object-cover bg-orange-500"
//                 />
//                 <div>
//                   <p className="font-heading font-bold text-black">{testimonials[currentIndex].author}</p>
//                   <p className="text-gray-600">{testimonials[currentIndex].role}</p>
//                 </div>
//               </div>

//               {/* Red Underline */}
//               <div className="w-16 h-1 bg-red-500 mb-8" />
//             </div>
//           </div>

//           {/* Navigation */}
//           <div className="flex gap-4 justify-end mt-12">
//             <button
//               onClick={prev}
//               className="p-3 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <button
//               onClick={next}
//               className="p-3 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
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
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-heading font-bold text-black mb-6">What our community says</h2>
          <p className="text-xl text-gray-600">Real stories from transformed spaces worldwide</p>
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Quote Mark with Red Line */}
            <div className="flex flex-col items-start flex-shrink-0">
              <FaQuoteLeft size={120} className="text-black fill-black" strokeWidth={0} />
              <div className="w-24 h-1 bg-red-500 mt-4" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-2xl lg:text-3xl font-light text-black italic mb-8">
                {testimonials[currentIndex].quote}
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].author}
                  className="w-16 h-16 rounded-full object-cover bg-orange-500"
                />
                <div>
                  <p className="font-heading font-bold text-black">{testimonials[currentIndex].author}</p>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 justify-end mt-12">
            <button
              onClick={prev}
              className="p-3 rounded-full border-2  bg-black text-white hover:bg-secondary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border-2  bg-black text-white hover:bg-secondary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}