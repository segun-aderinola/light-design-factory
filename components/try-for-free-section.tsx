"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export function TryForFreeSection() {
  const [creditsUsed, setCreditsUsed] = useState(20);
  const maxCredits = 100;

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-medium mb-6"
            style={{
              // fontFamily: 'Urbanist, sans-serif',
              fontWeight: 600,
              lineHeight: "100%",
              letterSpacing: "-2px",
              textAlign: "center",
              background:
                "linear-gradient(96.42deg, #FFFFFF 2.48%, rgba(255, 255, 255, 0) 152.62%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Try For Free
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI-powered design process combines technology with human
            creativity to transform your space
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Card - Upload Image Reference */}
          <div className="rounded-3xl border border-white/20 bg-white/5 p-8">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-black mb-8 text-center">
                Upload Image Reference
              </h3>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 mb-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                <div className="flex flex-col items-center">
                  <Upload size={48} className="text-gray-400 mb-4" />
                  <p className="text-gray-600 mb-1">
                    Drag & Drop image here or{" "}
                    <span className="text-red-500 font-semibold cursor-pointer hover:underline">
                      Choose file
                    </span>{" "}
                    to upload
                  </p>
                  <p className="text-sm text-gray-400 italic">
                    Image format supported: JPG, PNG (5.0Mb Max)
                  </p>
                </div>
              </div>

              {/* Room Type and Interior Style Dropdowns */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="block text-black font-semibold mb-2">
                    Room Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-black">
                    <option>Select room type</option>
                    <option>Living Room</option>
                    <option>Bedroom</option>
                    <option>Kitchen</option>
                    <option>Bathroom</option>
                    <option>Office</option>
                  </select>
                </div>
                <div>
                  <label className="block text-black font-semibold mb-2">
                    Interior Style
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-black">
                    <option>Select room type</option>
                    <option>Modern</option>
                    <option>Minimalist</option>
                    <option>Industrial</option>
                    <option>Scandinavian</option>
                    <option>Bohemian</option>
                  </select>
                </div>
              </div>

              {/* Credits Used */}
              <div className="mb-8">
                <p className="text-black font-semibold mb-2">Credits Used</p>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-red-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${(creditsUsed / maxCredits) * 100}%` }}
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-3">
                  5 Credits Per Image
                </p>
              </div>

              {/* Upload Button */}
              <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full py-6 text-lg font-semibold">
                Upload Images
              </Button>
            </div>
          </div>

          {/* Right Card - Output Gallery */}
          <div className="rounded-3xl border border-white/20 bg-white/5 p-8">
            <div className="bg-white rounded-2xl p-8 h-full min-h-[600px]">
              <h3 className="text-2xl font-heading font-bold text-black mb-8 text-center">
                Output Gallery
              </h3>

              {/* Empty state - you can add generated images here */}
              <div className="flex items-center justify-center h-[calc(100%-4rem)] text-gray-400">
                <p className="text-center">
                  Your generated designs will appear here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
