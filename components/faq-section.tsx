"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "./ui/button"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
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
        "Lorem ipsum dolor sit amet consectetur. Duis dignissim quisque feugiat consequat libero ac ut id. Integer tempor enim hendrerit feugiat arcu. Accumsan sit ullamcorper magna tellus quis. Ipsum nisl enim mattis cras vestibulum sed justo massa vestibulum. Accumsan sit ullamcorper magna tellus quis. Ipsum nisl enim mattis cras vestibulum sed justo massa vestibulum.",
    },
    {
      question: "Can i upgrade at any time?",
      answer: "Yes, you can upgrade your plan at any time. Your new plan will take effect immediately.",
    },
    {
      question: "How long does the design process take?",
      answer: "The design process typically takes 5-7 business days from start to finish.",
    },
    {
      question: "Do you work internationally?",
      answer: "Yes, we work with clients worldwide. We offer international shipping and design services.",
    },
    {
      question: "What is Light Design Lab?",
      answer: "Light Design Lab is our research and development division focused on innovation in design technology.",
    },
    {
      question: "What is happy spaces?",
      answer:
        "Happy Spaces is our community initiative dedicated to creating beautiful, functional spaces for everyone.",
    },
    {
      question: "Can i bring my own furniture or design into the design processes?",
      answer: "We encourage you to bring your own furniture and design preferences into our process.",
    },
  ]

  return (
    <section id="faq" className="relative bg-gray-100 py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-heading font-bold text-black mb-6">Frequently Asked Questions</h2>

          <p className="text-xl text-gray-600">Everything you need to know about Light Design Factory</p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-black rounded-3xl p-8 space-y-4 animate-fade-in-up">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10 last:border-b-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
              >
                <span
                  className={`text-lg font-semibold transition-colors ${
                    openIndex === index ? "text-white" : "text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-white transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="pb-6 animate-fade-in">
                  <div className="bg-white rounded-2xl p-6 text-black">
                    <p className="text-base leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
       <div className="max-w-4xl mx-auto px-6 pt-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-black mb-4">
            Still have a question we haven't answered?
          </h2>
          <p className="text-lg text-gray-600">
            Contact us here — we're happy to help.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-black font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                  placeholder=""
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-black font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                  placeholder=""
                />
              </div>
            </div>

            {/* Question Textarea */}
            <div className="mb-8">
              <label htmlFor="question" className="block text-black font-medium mb-2">
                Your Question <span className="text-red-500">*</span>
              </label>
              <textarea
                id="question"
                name="question"
                value={formData.question}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all resize-none"
                placeholder=""
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-black text-white hover:bg-black/90 rounded-full px-16 py-6 text-base font-semibold"
              >
                Ask Us
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
