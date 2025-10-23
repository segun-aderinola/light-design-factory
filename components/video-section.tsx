"use client"

import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section className="relative py-24 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/design-showcase-video.jpg" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full px-6">
        {/* Top Large Text */}
        {/* <div className="text-center mb-8">
          <h2 
            className="text-[120px] md:text-[180px] lg:text-[240px] font-heading font-bold tracking-tighter leading-none"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px white',
              textStroke: '2px white',
            }}
          >
            LIGHT DESIGN FAC
          </h2>
        </div> */}

        {/* Play Video Section */}
        <div className="flex items-center justify-center gap-8 my-8">
          <span className="text-3xl md:text-4xl lg:text-5xl text-white font-light">Play</span>
          
          <button className="w-18 h-18 md:w-18 md:h-18 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl">
            <Play size={48} className="text-black fill-black ml-2" />
          </button>
          
          <span className="text-3xl md:text-4xl lg:text-5xl text-white font-light">Video</span>
        </div>

        {/* Bottom Large Text */}
        {/* <div className="text-center mt-8">
          <h2 
            className="text-[120px] md:text-[180px] lg:text-[240px] font-heading font-bold tracking-tighter leading-none"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px white',
              textStroke: '2px white',
            }}
          >
            LIGHT DESIGN
          </h2>
        </div> */}
      </div>
    </section>
  )
}