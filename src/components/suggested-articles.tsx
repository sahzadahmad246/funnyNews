import { ArticleCard } from "@/components/article-card"
import type { StaticImageData } from "next/image"

interface Article {
  title: string
  description: string
  category: string
  image: string | StaticImageData
  slug: string
  date: Date
}

interface SuggestedArticlesProps {
  articles: Article[]
}

export function SuggestedArticles({ articles }: SuggestedArticlesProps) {
  return (
    <section className="container mx-auto px-4 py-8 md:px-6">
      <h2 className="font-serif text-2xl font-bold mb-6">More Articles</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            category={article.category}
            image={article.image}
            slug={article.slug}
            date={article.date}
          />
        ))}
      </div>
    </section>
  )
}