import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArticleCard } from "@/components/article-card"
import { Button } from "@/components/ui/button"
import type { StaticImageData } from "next/image"
import image3 from "../images/image3.jpg"
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image4 from "../images/image4.jpg"
import image6 from "../images/image6.jpg"
import image7 from "../images/image1.jpg"

// Define types for articles
interface Article {
  title: string
  description: string
  category: string
  image: string | StaticImageData
  slug: string
  date: Date
}

// Featured article - Reply Gang article
const featuredArticle: Article = {
  title: "Reply Gang Faces Massive Losses Due to Global X Outage, Mr. Kutkutjiya and Mr. Bholu Share Their Stories",
  description:
    "Yesterday, the world witnessed a disaster unlike any other – an unprecedented global X outage. It wasn't just any outrage, this was a financial crisis for the reply guys of the internet.",
  category: "Social Media",
  image: image3,
  slug: "reply-gang-x-outage",
  date: new Date(2024, 2, 15),
}

// Recent articles including new satirical ones
const recentArticles: Article[] = [
  {
    title: "Influencer in Crisis: 'My Phone Died During a Viral Moment'",
    description:
      "Local content creator shares harrowing tale of how a dead battery cost them thousands of potential followers.",
    category: "Social Media",
    image: image7,
    slug: "influencer-phone-crisis",
    date: new Date(2024, 2, 14),
  },
  {
    title: "Man Spends 72 Hours Crafting 'Perfect' Comment, Gets Zero Likes",
    description: "A heartbreaking story of internet validation and the pursuit of the perfect witty response.",
    category: "Social Media",
    image: image6,
    slug: "perfect-comment-zero-likes",
    date: new Date(2024, 2, 13),
  },
  {
    title: "Study Shows 97% of Internet Arguments Could Be Avoided By Simply Logging Off",
    description: "Researchers confirm what we all suspected: most online debates are completely unnecessary.",
    category: "Technology",
    image: image3,
    slug: "internet-arguments-study",
    date: new Date(2024, 2, 12),
  },
  {
    title: "Tech Giant Unveils Revolutionary AI Assistant That Can Understand Human Emotions",
    description:
      "The new AI system can detect subtle emotional cues in text and voice, potentially transforming customer service and mental health support.",
    category: "Technology",
    image: image4,
    slug: "tech-giant-ai-emotions",
    date: new Date(2024, 2, 9),
  },
  {
    title: "Stock Markets Reach All-Time High Following Positive Economic Data",
    description:
      "Global markets surge as inflation cools and employment numbers exceed expectations, signaling economic recovery.",
    category: "Business",
    image: image2,
    slug: "stock-markets-all-time-high",
    date: new Date(2024, 2, 8),
  },
  {
    title: "Local Man Can't Decide Which Streaming Service to Cancel This Month",
    description: "With subscription costs rising, one man's monthly dilemma represents the struggle of a generation.",
    category: "Entertainment",
    image: image1,
    slug: "streaming-service-dilemma",
    date: new Date(2024, 2, 7),
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-8 md:px-6">
          <div className="mb-12">
            <ArticleCard
              title={featuredArticle.title}
              description={featuredArticle.description}
              category={featuredArticle.category}
              image={featuredArticle.image}
              slug={featuredArticle.slug}
              date={featuredArticle.date}
              featured={true}
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold">Latest News</h2>
            <Button variant="outline" asChild>
              <Link href="/news">View All</Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentArticles.map((article, index) => (
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
      </main>
      <Footer />
    </div>
  )
}

