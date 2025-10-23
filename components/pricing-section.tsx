"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
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

  return (
    <section id="packages" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Choose your package</h2>

          <p className="text-xl text-gray-300">Flexible pricing that grows with your design needs</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 animate-fade-in-up transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/30 lg:scale-105"
                  : "bg-white/5 border border-white/10 hover:border-white/20"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.badge && (
                <div className="text-sm font-semibold text-white bg-white/20 rounded-full px-3 py-1 inline-block mb-4">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-2xl font-heading font-bold text-white mb-4">{plan.name}</h3>

              <div className="mb-6">
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

              <Button
                className={`w-full rounded-full font-semibold ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
