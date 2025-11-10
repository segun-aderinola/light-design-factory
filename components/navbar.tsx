"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const navItems = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Packages", href: "#packages" },
    { label: "Shop Curated Pieces", href: "#shop", comingSoon: true },
    { label: "Blog", href: "#blog" },
    { label: "FAQs", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/logo.png" height={80} width={80} alt="logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.comingSoon ? (
                  <button
                    type="button"
                    className="text-white/70 hover:text-white text-sm transition-colors duration-300"
                    onMouseEnter={() => setShowComingSoon(true)}
                    onMouseLeave={() => setShowComingSoon(false)}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-secondary hover:text-white transition-colors duration-200 bg-black rounded-4xl"
            >
              Log In
            </Button>
            <Button className="bg-white text-black hover:bg-secondary hover:text-white transition-colors duration-200 rounded-4xl">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-4 border-t border-white/10">
                <Button
                  variant="outline"
                  className="flex-1 border-white/30 text-white hover:bg-secondary hover:text-white transition-colors duration-200 bg-transparent"
                >
                  Log In
                </Button>
                <Button className="flex-1 bg-white text-black hover:bg-secondary hover:text-white transition-colors duration-200">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Coming Soon Overlay */}
      {showComingSoon && (
        <div
          className="absolute top-full left-0 right-0 z-60 flex justify-center pt-4 animate-in fade-in slide-in-from-top-2 duration-200"
          onMouseEnter={() => setShowComingSoon(true)}
          onMouseLeave={() => setShowComingSoon(false)}
        >
          <div className="bg-black rounded-3xl p-8 max-w-2xl mx-4 border border-white/20 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">Coming Soon</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Browse AI-recommended furniture, decor, and accessories. Shop
              directly from affiliate partners or discover curated brands after
              completing your design journey.
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}