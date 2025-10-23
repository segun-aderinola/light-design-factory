"use client"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-6">How it works</h2>

          <p className="text-xl text-gray-300 max-w-2xl">
            Our AI-powered design process combines technology with human creativity to transform your space
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              number: "01",
              title: "Share Your Vision",
              description: "Tell us about your space and design preferences through our intuitive interface",
            },
            {
              number: "02",
              title: "AI Analysis",
              description: "Our AI analyzes your space and generates personalized design concepts",
            },
            {
              number: "03",
              title: "Human Touch",
              description: "Our designers refine the concepts to create your perfect space",
            },
          ].map((step, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-6xl font-heading font-bold text-white/20 mb-4">{step.number}</div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
