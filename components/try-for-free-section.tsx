"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export function TryForFreeSection() {
  const [creditsUsed, setCreditsUsed] = useState(20);
  const maxCredits = 100;
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative bg-black overflow-hidden">
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-medium mb-4 sm:mb-6"
            style={{
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
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Our AI-powered design process combines technology with human
            creativity to transform your space
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Card - Upload Image Reference */}
          <div className="rounded-2xl sm:rounded-3xl border border-white/20 bg-white/5 p-4 sm:p-5 lg:p-6">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-black mb-4 sm:mb-5 lg:mb-6 text-center">
                Upload Image Reference
              </h3>

              {/* Hidden File Input with Camera Support */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/jpg"
                capture="environment"
                onChange={handleFileSelect}
                className="hidden"
              />

              {/* Upload Area */}
              <div 
                onClick={handleUploadClick}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="border-2 border-dashed border-gray-300 rounded-lg sm:rounded-xl p-6 sm:p-7 lg:p-8 mb-4 sm:mb-5 lg:mb-6 text-center hover:border-gray-400 transition-colors cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <Upload size={36} className="sm:w-12 sm:h-12 text-gray-400 mb-3 sm:mb-4" />
                  <p className="text-sm sm:text-base text-gray-600 mb-1">
                    Drag & Drop image here or{" "}
                    <span className="text-red-500 font-semibold cursor-pointer hover:underline">
                      Choose file
                    </span>{" "}
                    to upload
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 italic">
                    Image format supported: JPG, PNG (5.0Mb Max)
                  </p>
                </div>
              </div>

              {/* Room Type and Interior Style Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
                <div>
                  <label className="block text-black font-semibold mb-2 text-sm sm:text-base">
                    Room Type
                  </label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 text-sm sm:text-base text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-black">
                    <option>Select room type</option>
                    <option>Living Room</option>
                    <option>Bedroom</option>
                    <option>Kitchen</option>
                    <option>Bathroom</option>
                    <option>Office</option>
                  </select>
                </div>
                <div>
                  <label className="block text-black font-semibold mb-2 text-sm sm:text-base">
                    Interior Style
                  </label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 text-sm sm:text-base text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-black">
                    <option>Select style</option>
                    <option>Modern</option>
                    <option>Minimalist</option>
                    <option>Industrial</option>
                    <option>Scandinavian</option>
                    <option>Bohemian</option>
                  </select>
                </div>
              </div>

              {/* Credits Used */}
              <div className="mb-4 sm:mb-5 lg:mb-6">
                <p className="text-black font-semibold mb-2 text-sm sm:text-base">Credits Used</p>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-red-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${(creditsUsed / maxCredits) * 100}%` }}
                  />
                </div>
                <p className="text-center text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3">
                  5 Credits Per Image
                </p>
              </div>

              {/* Upload Button */}
              <Button 
                onClick={handleUploadClick}
                className="w-full bg-black text-white hover:bg-secondary hover:text-white transition-colors duration-200 rounded-full py-4 sm:py-4 lg:py-5 text-base sm:text-lg font-semibold"
              >
                Upload Images
              </Button>
            </div>
          </div>

          {/* Right Card - Output Gallery */}
          <div className="rounded-2xl sm:rounded-3xl border border-white/20 bg-white/5 p-4 sm:p-5 lg:p-6">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 h-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-black mb-4 sm:mb-5 lg:mb-6 text-center">
                Output Gallery
              </h3>

              {/* Empty state or Image Preview */}
              <div className="flex items-center justify-center h-[calc(100%-3rem)] sm:h-[calc(100%-4rem)]">
                {uploadedImage ? (
                  <div className="w-full h-full">
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded preview" 
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                ) : (
                  <p className="text-center text-sm sm:text-base px-4 text-gray-400">
                    Your generated designs will appear here
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}