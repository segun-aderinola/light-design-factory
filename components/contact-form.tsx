"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
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

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-6">
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
  );
}