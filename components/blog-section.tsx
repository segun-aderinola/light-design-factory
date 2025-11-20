"use client";

import { Button } from "@/components/ui/button";
import { BlogCard } from "./BlogCard";

export function BlogSection() {
  const articles = [
    {
      title: "Meet the light design edit team",
      description:
        "Get to know the voices curating our stories — the editors, thinkers, and creators shaping the future of intentional design.",
      image: "/modern-blue-sofa-living-room.png",
      link: "#",
    },
    {
      title: "Fashion Meets Interiors",
      description:
        "What happens when runway style meets room design? See how our team reimagines fashion icons as interior moods.",
      image: "/luxury-bedroom-with-dark-walls.png",
      link: "#",
    },
    {
      title: "Spaces Inspired by Music",
      description:
        "Can a song shape a space? Discover how rhythm and emotion translate into design through this melodic storytelling experiment.",
      image: "/modern-living-room-plants.png",
      link: "#",
    },
  ];

  return (
    <section
      id="blog"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 animate-fade-in-up">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4 md:mb-6 px-4"
            style={{
              background:
                "linear-gradient(96.42deg, #000000 2.48%, rgba(0, 0, 0, 0) 152.62%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Light Design Edits
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Discover inspiration, learn new design tips, and dive into stories
            from our global design community. Light Design Edit is where
            creativity, innovation, and intention come to life.
          </p>
        </div>

        {/* Desktop & Tablet: Grid Layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BlogCard article={article} />
            </div>
          ))}
        </div>

        {/* Mobile: Horizontal Scroll Carousel */}
        <div className="sm:hidden -mx-4">
          <div
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 gap-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {articles.map((article, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] snap-center"
              >
                <BlogCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}