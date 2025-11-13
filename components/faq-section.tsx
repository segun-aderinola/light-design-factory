"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const faqs = [
    {
      question: "How does the credit system work?",
      answer:
        "It works by giving you a certain number of credits depending on the plan you choose. Each credit is used to generate a design. You can use the credits to generate as many designs as you want.",
    },
    {
      question: "Can i upgrade at any time?",
      answer:
        "Yes, you can upgrade your plan at any time. Your new plan will take effect immediately.",
    },
    {
      question: "How long does the design process take?",
      answer:
        "The design process typically takes 5-7 business days from start to finish.",
    },
    {
      question: "Do you work internationally?",
      answer:
        "Yes, we work with clients worldwide. We offer international shipping and design services.",
    },
    {
      question: "What is Light Design Lab?",
      answer:
        "Light Design Lab is our research and development division focused on innovation in design technology.",
    },
    {
      question: "What is happy spaces?",
      answer:
        "Happy Spaces is our community initiative dedicated to creating beautiful, functional spaces for everyone.",
    },
    {
      question:
        "Can i bring my own furniture or design into the design processes?",
      answer:
        "We encourage you to bring your own furniture and design preferences into our process.",
    },
  ];

  return (
    <section id="faq" className="relative bg-gray-100 py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-3 sm:mb-4 md:mb-6 px-2">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-2">
            Everything you need to know about Light Design Factory
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-black rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 animate-fade-in-up">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/10 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full py-4 sm:py-5 md:py-6 flex items-center justify-between gap-3 sm:gap-4 text-left hover:opacity-80 transition-opacity"
              >
                <span
                  className={`text-sm sm:text-base md:text-lg font-semibold transition-colors leading-tight ${
                    openIndex === index ? "text-white" : "text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`sm:w-6 sm:h-6 text-white transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="pb-4 sm:pb-5 md:pb-6 animate-fade-in">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-black">
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black mb-3 sm:mb-4 px-2">
            Still have a question we haven't answered?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">
            Contact us here — we're happy to help.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-sm">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-black font-medium mb-2 text-sm sm:text-base"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all text-sm sm:text-base"
                  placeholder=""
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-black font-medium mb-2 text-sm sm:text-base"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all text-sm sm:text-base"
                  placeholder=""
                />
              </div>
            </div>

            {/* Question Textarea */}
            <div className="mb-6 sm:mb-7 md:mb-8">
              <label
                htmlFor="question"
                className="block text-black font-medium mb-2 text-sm sm:text-base"
              >
                Your Question <span className="text-red-500">*</span>
              </label>
              <textarea
                id="question"
                name="question"
                value={formData.question}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all resize-none text-sm sm:text-base"
                placeholder=""
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-black text-white hover:bg-secondary hover:text-white rounded-full px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base font-semibold w-full sm:w-auto"
              >
                Ask Us
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}