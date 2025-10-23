"use client"

import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <img src="/interior-design-background-with-lighting.jpg" alt="Background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-7xl lg:text-8xl font-heading font-bold text-white mb-12 tracking-tight">HT DESIGN FAC</h2>

          <div className="flex items-center justify-center gap-6 mb-12">
            <span className="text-2xl text-white font-light">Play</span>
            <button className="w-20 h-20 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl">
              <Play size={32} className="text-black fill-black ml-1" />
            </button>
            <span className="text-2xl text-white font-light">Video</span>
          </div>

          {/* Video Thumbnail */}
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border-2 border-white/20">
            <img src="/design-showcase-video-thumbnail.jpg" alt="Video thumbnail" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
