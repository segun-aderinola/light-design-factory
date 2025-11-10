"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HowItWorksCarousel() {
  const [activeStep, setActiveStep] = useState(0);

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveStep((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setActiveStep((prev) => Math.min(steps.length - 1, prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [steps.length]);

  // Touch support for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left
      nextStep();
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right
      prevStep();
    }
  };

  const nextStep = () => {
    setActiveStep((prev) => Math.min(steps.length - 1, prev + 1));
  };

  const prevStep = () => {
    setActiveStep((prev) => Math.max(0, prev - 1));
  };

  // Calculate card transforms based on active step
  const getCardTransform = (index: number) => {
    const distanceFromActive = index - activeStep;

    let x = 0;
    let opacity = 1;
    let scale = 1;
    let blur = 0;
    let y = 0;

    if (distanceFromActive < 0) {
      // Passed cards (move left and fade out)
      const passedAmount = Math.abs(distanceFromActive);
      x = -100 - (passedAmount - 1) * 50;
      opacity = passedAmount === 1 ? 0.2 : 0;
      scale = 0.8 - (passedAmount - 1) * 0.1;
      blur = passedAmount * 6;
      y = -20;
    } else if (distanceFromActive > 0) {
      // Upcoming cards (stacked to the right)
      x = 50 + (distanceFromActive - 1) * 25;
      opacity = distanceFromActive === 1 ? 0.5 : 0.25;
      scale = 0.9 - (distanceFromActive - 1) * 0.05;
      blur = distanceFromActive * 3;
      y = 10 + (distanceFromActive - 1) * 5;
    } else {
      // Active card
      x = 0;
      opacity = 1;
      scale = 1.05;
      blur = 0;
      y = -20;
    }

    return { x: `${x}%`, opacity, scale, blur, y };
  };

  return (
    <section
      id="how-it-works"
      className="relative bg-black overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6">
            How it works
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl">
            Our AI-powered design process combines technology with human
            creativity to transform your space
          </p>
        </motion.div>

        {/* Cards Container */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isPassed = activeStep > index;
              const isUpcoming = activeStep < index;
              const transform = getCardTransform(index);

              return (
                <motion.div
                  key={index}
                  animate={{
                    x: transform.x,
                    y: transform.y,
                    scale: transform.scale,
                    opacity: transform.opacity,
                    filter: `blur(${transform.blur}px)`,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 0.61, 0.36, 1], // Custom cubic-bezier for fluid motion
                  }}
                  className="relative"
                  style={{
                    transformOrigin: "center center",
                  }}
                >
                  {/* Giant Background Number */}
                  <motion.div
                    animate={{
                      opacity: isActive ? 0.2 : isPassed ? 0.01 : 0.06,
                      scale: isActive ? 1.2 : isPassed ? 0.8 : 0.9,
                      x: isPassed ? -35 : isUpcoming ? 15 : 0,
                      y: isActive ? -12 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="absolute -top-16 -left-6 sm:-top-20 sm:-left-8 lg:-top-24 lg:-left-12 text-[160px] sm:text-[200px] lg:text-[280px] font-heading-variant font-bold leading-none pointer-events-none select-none z-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    animate={{
                      borderColor: isActive
                        ? "rgba(255, 255, 255, 0.5)"
                        : isPassed
                          ? "rgba(255, 255, 255, 0.02)"
                          : "rgba(255, 255, 255, 0.1)",
                      boxShadow: isActive
                        ? "0 30px 80px rgba(255, 255, 255, 0.2), 0 0 50px rgba(255, 255, 255, 0.1)"
                        : isPassed
                          ? "0 5px 15px rgba(0, 0, 0, 0.5)"
                          : "0 10px 30px rgba(0, 0, 0, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 rounded-2xl lg:rounded-3xl border backdrop-blur-sm overflow-hidden"
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 100%)"
                        : isPassed
                          ? "linear-gradient(135deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.005) 100%)"
                          : "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                    }}
                  >
                    {/* Glow effect for active card */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent pointer-events-none"
                        />
                      )}
                    </AnimatePresence>

                    {/* Card Content */}
                    <div className="p-6 lg:p-8 h-[380px] sm:h-[420px] lg:h-[450px] flex flex-col relative z-10">
                      {/* SVG Pattern */}
                      <div className="flex-1 flex items-center justify-center mb-6 relative">
                        <motion.div
                          animate={{
                            opacity: isActive ? 1 : isPassed ? 0.2 : 0.5,
                            scale: isActive ? 1.08 : isPassed ? 0.8 : 0.9,
                            rotate: isActive ? 0 : isPassed ? -10 : 5,
                          }}
                          transition={{
                            duration: 0.4,
                            ease: "easeOut",
                          }}
                          className="w-full h-full flex items-center justify-center"
                        >
                          <Image
                            src={step.svgPath}
                            alt={`${step.title} pattern`}
                            width={200}
                            height={200}
                            className="w-full h-full max-w-[180px] max-h-[180px] sm:max-w-[200px] sm:max-h-[200px] object-contain"
                          />
                        </motion.div>
                      </div>

                      {/* Text Content */}
                      <motion.div
                        animate={{
                          opacity: isActive ? 1 : isPassed ? 0.3 : 0.6,
                          y: isActive ? 0 : 8,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm lg:text-base text-gray-300 mb-3">
                          {step.description}
                        </p>

                        {step.details.length > 0 && (
                          <div className="space-y-1 mt-4">
                            {step.details.map((detail, i) => (
                              <motion.p
                                key={i}
                                animate={{
                                  opacity: isActive ? 1 : 0.2,
                                  x: isActive ? 0 : -12,
                                }}
                                transition={{
                                  duration: 0.3,
                                  delay: isActive ? i * 0.08 : 0,
                                }}
                                className="text-xs lg:text-sm text-gray-400 italic leading-relaxed"
                              >
                                {detail}
                              </motion.p>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-12 flex items-center justify-center gap-6">
          {/* Previous Button */}
          <button
            type="button"
            onClick={prevStep}
            disabled={activeStep === 0}
            className="group relative p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Previous step"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Step Indicators */}
          <div className="flex items-center gap-3">
            {steps.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setActiveStep(index)}
                className="group relative"
                aria-label={`Go to step ${index + 1}`}
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeStep === index
                      ? "w-12 bg-white"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextStep}
            disabled={activeStep === steps.length - 1}
            className="group relative p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Next step"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Step Counter */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Step{" "}
            <span className="text-white font-semibold">{activeStep + 1}</span>{" "}
            of {steps.length}
          </p>
        </div>
      </div>
    </section>
  );
}