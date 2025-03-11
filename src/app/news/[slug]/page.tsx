import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsArticle } from "@/components/news-article"
import { SuggestedArticles } from "@/components/suggested-articles"

// Sample article data
const article = {
  title: "Global Leaders Gather for Climate Summit as Extreme Weather Events Intensify",
  subtitle:
    "The high-stakes meeting comes as scientists warn that time is running out to prevent catastrophic climate change",
  content: [
    "GENEVA — World leaders from over 190 countries gathered in Geneva this week for an emergency climate summit, as scientists warn that recent extreme weather events are just a preview of what's to come if dramatic action isn't taken immediately.",
    'The summit, which began on Monday, comes after a year of record-breaking temperatures, devastating wildfires, and catastrophic flooding that have affected millions of people worldwide. UN Secretary-General António Guterres opened the conference with a stark warning: "We are at a tipping point. The decisions we make today will determine the livability of our planet for generations to come."',
    "Representatives from the United States, China, and the European Union—the world's largest carbon emitters—have pledged to announce new, more ambitious targets for reducing greenhouse gas emissions. However, tensions have already emerged over how to balance climate action with economic growth and who should bear the greatest financial burden for the transition to clean energy.",
    '"We need to see concrete commitments, not just rhetoric," said climate activist Sophia Rodriguez, who is leading protests outside the summit. "Every fraction of a degree matters, and right now, we\'re headed for a catastrophe."',
    "The summit comes just weeks after the release of a landmark report from the Intergovernmental Panel on Climate Change (IPCC), which found that the planet is warming faster than previously predicted and that many of the changes already set in motion—such as sea level rise and biodiversity loss—will be irreversible for centuries to millennia.",
    'Developing nations, which are often the most vulnerable to climate impacts despite contributing the least to global emissions, are pushing for increased financial support from wealthy countries. "This is a matter of climate justice," said Ibrahim Ndiaye, the representative from Senegal. "Our people are losing their homes, their livelihoods, and even their lives due to a crisis they did little to create."',
    "The summit is scheduled to continue through Friday, with negotiators working around the clock to hammer out agreements on emissions reductions, climate finance, and adaptation strategies. Whether these talks will result in the transformative action scientists say is necessary remains to be seen.",
    '"The science is clear," said Dr. Elena Patel, a climate scientist attending the summit. "We have the technology and knowledge to solve this crisis. What we need now is the political will."',
    "As delegates debate inside the conference center, the real-world impacts of climate change continue to unfold. Just yesterday, authorities in Australia announced evacuations due to unprecedented flooding, while officials in California reported that this year's wildfire season has already burned twice the acreage compared to this time last year.",
    "The clock is ticking, and the world is watching.",
  ],
  category: "Politics",
  image: "/placeholder.svg?height=600&width=1200",
  author: {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  date: new Date(2024, 2, 10),
}

// Sample suggested articles
const suggestedArticles = [
  {
    title: "Climate Activists Stage Global Protests Ahead of Summit",
    description:
      "Millions take to the streets in coordinated demonstrations demanding immediate action on climate change.",
    category: "Politics",
    image: "/placeholder.svg?height=400&width=600",
    slug: "climate-activists-global-protests",
    date: new Date(2024, 2, 9),
  },
  {
    title: "The Economic Case for Climate Action: New Study Reveals Benefits",
    description:
      "Research shows that investing in green technology and infrastructure could create millions of jobs and boost GDP.",
    category: "Business",
    image: "/placeholder.svg?height=400&width=600",
    slug: "economic-case-climate-action",
    date: new Date(2024, 2, 8),
  },
  {
    title: "How Extreme Weather Is Reshaping Global Agriculture",
    description:
      "Farmers worldwide are adapting to unpredictable conditions as traditional growing seasons become increasingly unreliable.",
    category: "Science",
    image: "/placeholder.svg?height=400&width=600",
    slug: "extreme-weather-agriculture",
    date: new Date(2024, 2, 7),
  },
]

// Define the PageProps interface with Promise-wrapped params
export interface PageProps {
  params: Promise<{ slug: string }>
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

// Make the component async to handle the Promise-wrapped params
export default async function ArticlePage({ params }: PageProps) {
  // Await the params to get the slug
  const { slug } = await params;

  // In a real application, you would fetch the article data based on the slug
  // For this example, we're using the sample data
  // Example: const article = await fetchArticle(slug);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <NewsArticle
          title={article.title}
          subtitle={article.subtitle}
          content={article.content}
          category={article.category}
          image={article.image}
          author={article.author}
          date={article.date}
        />
        <SuggestedArticles articles={suggestedArticles} />
      </main>
      <Footer />
    </div>
  )
}