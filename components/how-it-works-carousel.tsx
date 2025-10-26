"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function HowItWorksCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 4 (for 4 steps)
  const [isLocked, setIsLocked] = useState(false);
  const scrollAccumulator = useRef(0);
  const hasCompletedRef = useRef(false);

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

  // Handle scroll events when locked - BIDIRECTIONAL
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isLocked || hasCompletedRef.current) return;

      e.preventDefault();
      e.stopPropagation();

      // Accumulate scroll delta (positive = scrolling down, negative = scrolling up)
      const delta = e.deltaY;
      scrollAccumulator.current += delta;

      // Each step requires ~300px of scroll
      const scrollPerStep = 300;
      const totalScrollNeeded = scrollPerStep * 4; // 1200px total

      // Clamp between 0 and totalScrollNeeded (allow going backwards)
      scrollAccumulator.current = Math.max(
        0,
        Math.min(scrollAccumulator.current, totalScrollNeeded)
      );

      // Calculate progress (0 to 4)
      const progress = scrollAccumulator.current / scrollPerStep;
      setScrollProgress(progress);

      // Update active step (0, 1, 2, 3)
      const newStep = Math.min(Math.floor(progress), 3);
      setActiveStep(newStep);

      // If completed all steps (reached the end), unlock scrolling after a delay
      if (
        scrollAccumulator.current >= totalScrollNeeded &&
        !hasCompletedRef.current
      ) {
        setTimeout(() => {
          setIsLocked(false);
          hasCompletedRef.current = true;
          document.body.style.overflow = "unset";
        }, 300);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isLocked && !hasCompletedRef.current) {
        e.preventDefault();
      }
    };

    if (isLocked) {
      document.body.style.overflow = "hidden";
      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isLocked]);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasCompletedRef.current) {
            setIsLocked(true);
            // Reset scroll accumulator when entering the section
            scrollAccumulator.current = 0;
            setScrollProgress(0);
            setActiveStep(0);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Calculate card transforms based on scroll progress
  const getCardTransform = (index: number) => {
    const distanceFromActive = index - scrollProgress;

    let x = 0;
    let opacity = 1;
    let scale = 1;
    let blur = 0;
    let y = 0;

    if (distanceFromActive < -0.3) {
      // Card has passed (to the left)
      const passedAmount = Math.abs(distanceFromActive) - 0.3;
      x = -120 - passedAmount * 50;
      opacity = Math.max(0, 1 - passedAmount * 1.2);
      scale = Math.max(0.7, 1 - passedAmount * 0.25);
      blur = Math.min(10, passedAmount * 8);
      y = -20 - passedAmount * 10;
    } else if (distanceFromActive > 0.3) {
      // Card is upcoming (to the right)
      const upcomingAmount = distanceFromActive - 0.3;
      x = 60 + upcomingAmount * 30;
      opacity = Math.max(0.25, 1 - upcomingAmount * 0.5);
      scale = Math.max(0.82, 1 - upcomingAmount * 0.12);
      blur = Math.min(5, upcomingAmount * 4);
      y = 15 + upcomingAmount * 8;
    } else {
      // Card is active or transitioning
      const activeIntensity = 1 - Math.abs(distanceFromActive) * 3.3;
      x = 0;
      opacity = 0.65 + activeIntensity * 0.35;
      scale = 0.96 + activeIntensity * 0.09;
      blur = 0;
      y = -18 * Math.max(0, activeIntensity);
    }

    return { x: `${x}%`, opacity, scale, blur, y };
  };

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative bg-black overflow-hidden min-h-screen flex items-center"
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
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const isActive = Math.abs(activeStep - index) < 0.5;
              const isPassed = scrollProgress > index + 0.5;
              const isUpcoming = scrollProgress < index - 0.5;
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
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
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
                    className="absolute -top-16 -left-6 sm:-top-20 sm:-left-8 lg:-top-24 lg:-left-12 text-[160px] sm:text-[200px] lg:text-[280px] font-heading font-bold leading-none pointer-events-none select-none z-0"
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
                          className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
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

        {/* Scroll Progress Indicator */}
        <AnimatePresence>
          {isLocked && !hasCompletedRef.current && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            >
              <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
                <p className="text-sm text-white font-medium">
                  Step {activeStep + 1} of 4
                </p>
                {/* Progress bar */}
                <div className="w-32 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white rounded-full"
                    animate={{
                      width: `${(scrollProgress / 4) * 100}%`,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                  <span>Scroll up/down</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
// "use client";

// import Image from "next/image";

// export function HowItWorksSection() {
//   const steps = [
//     {
//       number: "1",
//       title: "Upload",
//       description: "Upload photos of your space",
//       details: [
//         "* Take a clear photo of the part of the room you'd like us to transform",
//         "Pro Tip: The clearer the angle and image details, the better the results",
//       ],
//       svgPath: "/image_1.svg",
//     },
//     {
//       number: "2",
//       title: "Select",
//       description: "Choose your room type and preferred style",
//       details: [],
//       svgPath: "/image_2.svg",
//     },
//     {
//       number: "3",
//       title: "Generate",
//       description: "Get AI-generated design visualizations",
//       details: [],
//       svgPath: "/image_3.svg",
//     },
//     {
//       number: "4",
//       title: "Refine",
//       description: "Fine-tune your design with expert guidance",
//       details: [
//         "* Work with our designers to perfect every detail",
//         "Pro Tip: Iterate as much as needed to achieve your dream space",
//       ],
//       svgPath: "/image_4.svg",
//     },
//   ];

//   return (
//     <section
//       id="how-it-works"
//       className="relative bg-black overflow-hidden py-20 sm:py-24 lg:py-32"
//     >
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-16 lg:mb-20">
//           <h2
//             className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-semibold mb-4 sm:mb-6"
//             style={{
//               fontFamily: "Urbanist, sans-serif",
//               fontWeight: 600,
//               lineHeight: "100%",
//               letterSpacing: "-2px",
//               background:
//                 "linear-gradient(96.42deg, #FFFFFF 2.48%, rgba(255, 255, 255, 0) 152.62%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             How it works
//           </h2>
//           <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl">
//             Our AI-powered design process combines technology with human
//             creativity to transform your space
//           </p>
//         </div>

//         {/* Stepped Cards Container */}
//         <div className="relative pb-20 sm:pb-40 lg:pb-72">
//           {/* Desktop & Tablet: 4 columns with stepped layout */}
//           <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//             {steps.map((step, index) => {
//               // Stepped offset: each card moves down progressively
//               const getTransformClass = () => {
//                 switch (index) {
//                   case 0:
//                     return "sm:translate-y-0 lg:translate-y-0";
//                   case 1:
//                     return "sm:translate-y-[60px] lg:translate-y-[100px]";
//                   case 2:
//                     return "sm:translate-y-[120px] lg:translate-y-[200px]";
//                   case 3:
//                     return "sm:translate-y-[20px] lg:translate-y-[40px]";
//                   default:
//                     return "";
//                 }
//               };

//               return (
//                 <div key={index} className={`relative ${getTransformClass()}`}>
//                   {/* Giant Background Number */}
//                   <div
//                     className={`absolute -top-16 -left-6 sm:-top-20 sm:-left-8 lg:-top-24 lg:-left-12 text-[160px] sm:text-[200px] lg:text-[280px] font-heading font-bold leading-none pointer-events-none select-none z-0 ${
//                       index === 0 ? "text-white opacity-80" : "opacity-[0.08]"
//                     }`}
//                     style={
//                       index !== 0
//                         ? {
//                             background:
//                               "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 100%)",
//                             WebkitBackgroundClip: "text",
//                             WebkitTextFillColor: "transparent",
//                             backgroundClip: "text",
//                           }
//                         : {}
//                     }
//                   >
//                     {step.number}
//                   </div>

//                   {/* Card */}
//                   <div
//                     className="relative z-10 rounded-2xl lg:rounded-3xl border border-white/20 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/40 hover:shadow-2xl"
//                     style={{
//                       background:
//                         "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
//                       boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
//                     }}
//                   >
//                     {/* Card Content */}
//                     <div className="p-6 lg:p-8 min-h-[420px] lg:min-h-[480px] flex flex-col relative z-10">
//                       {/* SVG Pattern */}
//                       <div className="flex-1 flex items-center justify-center mb-6 relative min-h-[180px]">
//                         <div className="w-full h-full flex items-center justify-center">
//                           <Image
//                             src={step.svgPath}
//                             alt={`${step.title} pattern`}
//                             width={200}
//                             height={200}
//                             className="w-full h-full max-w-[160px] max-h-[160px] lg:max-w-[200px] lg:max-h-[200px] object-contain opacity-70"
//                           />
//                         </div>
//                       </div>

//                       {/* Text Content */}
//                       <div className="flex-shrink-0">
//                         <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-white mb-2 leading-tight">
//                           {step.title}
//                         </h3>
//                         <p className="text-sm lg:text-base text-gray-300 mb-3 leading-relaxed">
//                           {step.description}
//                         </p>

//                         {step.details.length > 0 && (
//                           <div className="space-y-2 mt-4">
//                             {step.details.map((detail, i) => (
//                               <p
//                                 key={i}
//                                 className="text-xs lg:text-sm text-gray-400 italic leading-relaxed"
//                               >
//                                 {detail}
//                               </p>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Mobile: Simple stacked layout */}
//           <div className="sm:hidden space-y-8">
//             {steps.map((step, index) => (
//               <div key={index} className="relative">
//                 {/* Giant Background Number */}
//                 <div
//                   className={`absolute -top-12 -left-4 text-[120px] font-heading font-bold leading-none pointer-events-none select-none z-0 ${
//                     index === 0 ? "text-white opacity-20" : "opacity-[0.08]"
//                   }`}
//                   style={
//                     index !== 0
//                       ? {
//                           background:
//                             "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 100%)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                           backgroundClip: "text",
//                         }
//                       : {}
//                   }
//                 >
//                   {step.number}
//                 </div>

//                 {/* Card */}
//                 <div
//                   className="relative z-10 rounded-2xl border border-white/20 backdrop-blur-sm overflow-hidden"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
//                     boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
//                   }}
//                 >
//                   {/* Card Content */}
//                   <div className="p-6 flex flex-col relative z-10">
//                     {/* SVG Pattern */}
//                     <div className="flex items-center justify-center mb-6 relative h-[140px]">
//                       <div className="w-full h-full flex items-center justify-center">
//                         <Image
//                           src={step.svgPath}
//                           alt={`${step.title} pattern`}
//                           width={160}
//                           height={160}
//                           className="w-full h-full max-w-[140px] max-h-[140px] object-contain opacity-70"
//                         />
//                       </div>
//                     </div>

//                     {/* Text Content */}
//                     <div>
//                       <h3 className="text-xl font-heading font-bold text-white mb-2 leading-tight">
//                         {step.title}
//                       </h3>
//                       <p className="text-sm text-gray-300 mb-3 leading-relaxed">
//                         {step.description}
//                       </p>

//                       {step.details.length > 0 && (
//                         <div className="space-y-2 mt-4">
//                           {step.details.map((detail, i) => (
//                             <p
//                               key={i}
//                               className="text-xs text-gray-400 italic leading-relaxed"
//                             >
//                               {detail}
//                             </p>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
