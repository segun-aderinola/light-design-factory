"use client"

import { Upload as UploadIcon, Settings, Zap, Sparkles } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Upload",
      description: "Upload photos of your space",
      details: [
        "* Take a clear photo of the part of the room you'd like us to transform",
        "Pro Tip: The clearer the angle and image details, the better the results"
      ],
      icon: <UploadIcon size={40} className="text-white" />,
      marginTop: "mt-0"
    },
    {
      number: "2",
      title: "Select",
      description: "Choose your room type and preferred style",
      details: [],
      icon: <Settings size={40} className="text-white" />,
      marginTop: "mt-24"
    },
    {
      number: "3",
      title: "Generate",
      description: "Get AI- generated design visualizations",
      details: [],
      icon: <Zap size={40} className="text-white" />,
      marginTop: "mt-48"
    },
    {
      number: "4",
      title: "Refine",
      description: "Fine-tune your design with expert guidance",
      details: [
        "* Work with our designers to perfect every detail",
        "Pro Tip: Iterate as much as needed to achieve your dream space"
      ],
      icon: <Sparkles size={40} className="text-white" />,
      marginTop: "mt-0"
    }
  ]

  return (
    <section id="how-it-works" className="relative py-24 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-32 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-6">How it works</h2>
          <p className="text-xl text-gray-300 max-w-2xl">
            Our AI-powered design process combines technology with human creativity to transform your space
          </p>
        </div>

        {/* Process Steps - Horizontally Scrollable */}
        <div className="overflow-x-auto overflow-y-visible scrollbar-hide -mx-6 px-6">
          <div className="flex gap-16 lg:gap-24 min-w-max pb-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative animate-fade-in-up w-[350px] flex-shrink-0 ${step.marginTop}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Giant Background Number */}
                <div 
                  className="absolute -top-32 -left-16 text-[320px] font-heading font-bold leading-none pointer-events-none select-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.number}
                </div>

                {/* Card with decorative pattern/icon */}
                <div className="relative z-10 mb-8">
                  <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 h-80 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                    {/* Decorative grid pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `
                          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                      }} />
                    </div>
                    
                    {/* Icon */}
                    <div className="relative w-24 h-24 rounded-2xl border-2 border-white/20 flex items-center justify-center bg-black/20">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-lg">
                    {step.description}
                  </p>
                  
                  {step.details.length > 0 && (
                    <div className="space-y-2 mt-6">
                      {step.details.map((detail, i) => (
                        <p key={i} className="text-sm text-gray-400 italic leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}