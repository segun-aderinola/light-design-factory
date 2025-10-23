"use client"

import { Button } from "@/components/ui/button"

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
  ]

  return (
    <section id="blog" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 
            className="text-5xl lg:text-6xl font-heading font-bold mb-6"
            style={{
              background: "linear-gradient(96.42deg, #000000 2.48%, rgba(0, 0, 0, 0) 152.62%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Light Design Edits
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover inspiration, learn new design tips, and dive into stories from our global design community. Light
            Design Edit is where creativity, innovation, and intention come to life.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="animate-fade-in-up group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="rounded-2xl overflow-hidden mb-6 h-64">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-2xl font-heading font-semibold text-black mb-3">{article.title}</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">{article.description}</p>

              <Button
                variant="outline"
                className="rounded-full border-black text-black bg-black text-white hover:bg-white"
              >
                Read More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}