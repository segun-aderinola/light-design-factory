"use client";

import Image from "next/image";

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Upload",
      description: "Upload photos of your space",
      details: [
        "* Take a clear photo of the part of the room you'd like us to transform",
        "Pro Tip: The clearer the angle and image details, the better the results",
      ],
      svgPath: "/image_1.svg",
    },
    {
      number: "2",
      title: "Select",
      description: "Choose your room type and preferred style",
      details: [],
      svgPath: "/image_2.svg",
    },
    {
      number: "3",
      title: "Generate",
      description: "Get AI-generated design visualizations",
      details: [],
      svgPath: "/image_3.svg",
    },
    {
      number: "4",
      title: "Refine",
      description: "Fine-tune your design with expert guidance",
      details: [
        "* Work with our designers to perfect every detail",
        "Pro Tip: Iterate as much as needed to achieve your dream space",
      ],
      svgPath: "/image_4.svg",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative bg-black overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-semibold mb-3 sm:mb-4 md:mb-6"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 600,
              lineHeight: "100%",
              letterSpacing: "-2px",
              background:
                "linear-gradient(96.42deg, #FFFFFF 2.48%, rgba(255, 255, 255, 0) 152.62%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            How it works
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl">
            Our AI-powered design process combines technology with human
            creativity to transform your space
          </p>
        </div>

        {/* Stepped Cards Container */}
        <div className="relative pb-8 sm:pb-20 md:pb-32 lg:pb-40 xl:pb-72">
          {/* Desktop & Tablet: 4 columns with stepped layout */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {steps.map((step, index) => {
              // Stepped offset: each card moves down progressively
              const getTransformClass = () => {
                switch (index) {
                  case 0:
                    return "sm:translate-y-0 lg:translate-y-0";
                  case 1:
                    return "sm:translate-y-[20px] lg:translate-y-[100px]";
                  case 2:
                    return "sm:translate-y-[60px] lg:translate-y-[200px]";
                  case 3:
                    return "sm:translate-y-[100px] lg:translate-y-[40px]";
                  default:
                    return "";
                }
              };

              return (
                <div key={index} className={`relative ${getTransformClass()}`}>
                  {/* Giant Background Number */}
                  <div
                    className={`absolute -top-12 -left-4 sm:-top-16 sm:-left-6 md:-top-20 md:-left-8 lg:-top-28 lg:-left-6 text-[120px] sm:text-[160px] md:text-[200px] font-heading-variant font-bold leading-none pointer-events-none select-none z-0 ${step.number === "1" && "italic lg:-left-12"} z-50 ${
                      index === 0 ? "text-white opacity-80" : "opacity-[0.08]"
                    }`}
                    style={
                      index !== 0
                        ? {
                            background:
                              "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }
                        : {}
                    }
                  >
                    {step.number}
                  </div>

                  {/* Card */}
                  <div
                    className="relative z-10 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-white/20 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/40 hover:shadow-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {/* Card Content */}
                    <div className="p-4 sm:p-6 lg:p-8 min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col relative z-10">
                      {/* SVG Pattern */}
                      <div className="flex-1 flex items-center justify-center mb-4 sm:mb-6 relative min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]">
                        <div className="w-full h-full flex items-center justify-center">
                          <Image
                            src={step.svgPath}
                            alt={`${step.title} pattern`}
                            width={200}
                            height={200}
                            className="w-full h-full max-w-[120px] max-h-[120px] sm:max-w-[140px] sm:max-h-[140px] md:max-w-[160px] md:max-h-[160px] lg:max-w-[200px] lg:max-h-[200px] object-contain opacity-70"
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-shrink-0">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white mb-2 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-300 mb-2 sm:mb-3 leading-relaxed">
                          {step.description}
                        </p>

                        {step.details.length > 0 && (
                          <div className="space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
                            {step.details.map((detail, i) => (
                              <p
                                key={i}
                                className="text-xs lg:text-sm text-gray-400 italic leading-relaxed"
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: Simple stacked layout */}
          <div className="sm:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Giant Background Number */}
                <div
                  className={`absolute -top-10 -left-3 text-[100px] font-heading-variant font-bold leading-none pointer-events-none select-none z-0 ${
                    index === 0 ? "text-white opacity-20" : "opacity-[0.08]"
                  }`}
                  style={
                    index !== 0
                      ? {
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }
                      : {}
                  }
                >
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className="relative z-10 rounded-xl border border-white/20 backdrop-blur-sm overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {/* Card Content */}
                  <div className="p-5 flex flex-col relative z-10">
                    {/* SVG Pattern */}
                    <div className="flex items-center justify-center mb-5 relative h-[120px]">
                      <div className="w-full h-full flex items-center justify-center">
                        <Image
                          src={step.svgPath}
                          alt={`${step.title} pattern`}
                          width={140}
                          height={140}
                          className="w-full h-full max-w-[120px] max-h-[120px] object-contain opacity-70"
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div>
                      <h3 className="text-xl font-heading font-bold text-white mb-2 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-2 leading-relaxed">
                        {step.description}
                      </p>

                      {step.details.length > 0 && (
                        <div className="space-y-1.5 mt-3">
                          {step.details.map((detail, i) => (
                            <p
                              key={i}
                              className="text-xs text-gray-400 italic leading-relaxed"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}