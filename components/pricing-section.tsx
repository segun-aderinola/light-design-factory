"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export function PricingSection() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    })
  }, [])

  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      credits: "100 Total Credits",
      features: ["2 free image generations", "Basic AI suggestions", "Skip to procurement"],
      cta: "Get started for free",
      highlighted: false,
    },
    {
      name: "Light Plan",
      price: "$75",
      badge: "Most Popular",
      features: [
        "Everything in free",
        "AI moodboards & concepts",
        "Human designer furniture board",
        "Second room: $73.50 (10% off)",
      ],
      cta: "Select light plan",
      highlighted: true,
    },
    {
      name: "Power Up",
      price: "$125",
      features: [
        "Everything in light",
        "AI generated floor plan",
        "Product & Material schedule",
        "Second room: $112.50 (10% off)",
      ],
      cta: "Select power up",
      highlighted: false,
    },
    {
      name: "Ultimate",
      price: "$200",
      features: [
        "Everything in power up",
        "Full procurement support",
        "Priority designer access",
        "Second room: $180.00 (10% off)",
      ],
      cta: "Select Ultimate",
      highlighted: false,
    },
  ]

  const creditOptions = [
    { credits: "200 Credits", price: "$5", details: "40 Images - Expires 1 year" },
    { credits: "450 Credits", price: "$10", details: "90 Images - Expires 1 year" },
    { credits: "1000 Credits", price: "$20", details: "200 Images - Never expires" },
  ]

  return (
    <section id="packages" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Choose your package</h2>

          <p className="text-xl text-gray-300">Flexible pricing that grows with your design needs</p>
        </div>

        {/* Pricing Cards - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/30 lg:scale-105"
                  : "bg-white/5 border border-white/10 hover:border-white/20"
              }`}
              data-aos="fade-up" // AOS animation for fade-up
              data-aos-delay={`${index * 100}`} // Delay based on the index
            >
              {plan.badge && (
                <div className="text-sm font-semibold text-white bg-white/20 rounded-full px-3 py-1 inline-block mb-4">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-2xl font-heading font-bold text-white mb-4">{plan.name}</h3>

              <div className="mb-6 bg-black rounded-xl p-4">
                <span className="text-4xl font-heading font-bold text-white">{plan.price}</span>
                {plan.credits && <p className="text-sm text-gray-400 mt-2">{plan.credits}</p>}
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-white flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full rounded-full font-semibold bg-white text-black hover:bg-secondary hover:text-white transition-colors duration-200">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Buy Credits Card - Centered Below */}
        <div className="flex justify-center">
          <div
            className="rounded-2xl p-8 bg-white/5 border border-white/10 hover:border-white/20 animate-fade-in-up max-w-md w-full"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-sm font-semibold text-gray-400 mb-2">Credits Only</div>
            <h3 className="text-3xl font-heading font-bold text-white mb-6">Buy Credits</h3>

            <div className="space-y-4 mb-6">
              {creditOptions.map((option, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{option.credits}</p>
                    <p className="text-sm text-gray-400">{option.details}</p>
                  </div>
                  <span className="text-2xl font-bold text-white">{option.price}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-8 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3">
                <Check size={20} className="text-white flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">No subscription needed</span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-white flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Gift to friends & family</span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-white flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Pay as you generate</span>
              </div>
            </div>

            <Button className="w-full rounded-full font-semibold bg-white text-black hover:bg-secondary hover:text-white transition-colors duration-200">
              Buy Credits
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
