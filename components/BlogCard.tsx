import { Button } from "@/components/ui/button";

interface Article {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface BlogCardProps {
  article: Article;
}

export function BlogCard({ article }: BlogCardProps) {
  return (
    <div className="group">
      <div className="rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 md:mb-6 h-48 sm:h-56 md:h-64">
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h3 className="text-xl sm:text-2xl font-heading font-semibold text-black mb-2 sm:mb-3 leading-tight">
        {article.title}
      </h3>

      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
        {article.description}
      </p>

      <Button
        variant="outline"
        className="rounded-full bg-black text-white hover:bg-secondary hover:text-white text-sm sm:text-base h-10 sm:h-11 px-5 sm:px-6"
      >
        Read More
      </Button>
    </div>
  );
}