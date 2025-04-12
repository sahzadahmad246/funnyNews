import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { QuoteIcon } from "lucide-react"
import image9 from "../../../images/image9.jpg"
import profile2 from "../../../images/profile4.jpg"

const article = {
  title: "Woman Reschedules Her Birthday Party Due to X Payout Delay",
  category: "Social Media",
  image: image9,
  author: {
    name: "Shahzad Khan",
    avatar: profile2,
  },
  date: new Date(2025, 3, 12),
}

export default function ArticlePage() {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(article.date)

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      <main className="flex-1">
        <article className="container max-w-3xl mx-auto px-4 py-6 md:px-6 md:py-10">
          <div className="flex flex-col gap-5">
            <Badge className="w-fit bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700">
              {article.category}
            </Badge>

            <h1 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl leading-tight">{article.title}</h1>

            <div className="flex items-center gap-3 py-2">
              <Avatar className="h-10 w-10 border-2 border-background">
                <AvatarImage src={article.author.avatar.src || "/placeholder.svg"} alt={article.author.name} />
                <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-medium text-foreground">{article.author.name}</span>
                <time className="text-sm text-muted-foreground">{formattedDate}</time>
              </div>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg my-4 md:my-6 shadow-md">
              <Image
                src={article.image || "/placeholder.svg"}
                alt="Shocked creator checking dashboard"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-xs md:text-sm">
                When the dashboard refuses to move an inch
              </div>
            </div>

            <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-base md:text-lg">
              <p className="font-medium text-lg md:text-xl leading-relaxed">
                On what should've been her birthday celebration, 27-year-old creator Allison Marks found herself
                cancelling the cake. The balloons were replaced with budgeting spreadsheets.
              </p>

              <p className="leading-relaxed">The reason? X's payout didn't arrive.</p>

              <div className="pl-4 md:pl-6 border-l-4 border-zinc-300 dark:border-zinc-700 italic text-zinc-700 dark:text-zinc-300 my-6 py-2">
                <p className="flex gap-2">
                  <QuoteIcon className="h-5 w-5 text-zinc-400 flex-shrink-0 mt-1" />
                  <span>
                    "I had 13.2 million impressions last month," she said, still clutching an untouched party hat. "And
                    nothing. No payment. Not even a 'we're working on it.'"
                  </span>
                </p>
              </div>

              <p className="leading-relaxed">
                Across the US, creators glued to their analytics pages shared a collective sigh that could power a wind
                turbine.
              </p>

              <p className="leading-relaxed">
                From Seattle to South Beach, dashboards were refreshed every 30 seconds. One guy live-tweeted all 78 of
                his refresh attempts.
              </p>

              <p className="leading-relaxed">
                Meanwhile, group chats titled "Reply Hustlers" and "X Refund Taskforce" lit up with memes, rage posts,
                and financial breakdowns.
              </p>

              <p className="leading-relaxed">A meme of Elon hiding behind a sofa hit 42k likes in 12 minutes.</p>

              <div className="pl-4 md:pl-6 border-l-4 border-zinc-300 dark:border-zinc-700 italic text-zinc-700 dark:text-zinc-300 my-6 py-2">
                <p className="flex gap-2">
                  <QuoteIcon className="h-5 w-5 text-zinc-400 flex-shrink-0 mt-1" />
                  <span>"No payout. No punchlines. I'm going back to Facebook. Even my mom liked my posts there."</span>
                </p>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                — Brian, a 32-year-old sarcasm specialist who made $50 last month from roasting tweets
              </p>

              <p className="leading-relaxed">
                At 2:00 AM PST, creators were seen comparing payment delays to heartbreak, slow airport WiFi, and one
                guy even compared it to his dad never coming back with the milk.
              </p>

              <p className="leading-relaxed">
                Some even considered getting real jobs. Briefly. Then they remembered meetings exist.
              </p>

              <Separator className="my-6" />

              <p className="leading-relaxed">
                As of now, there's no update from X. Just a growing thread of creators who now know what it feels like
                to wait for something that may never come.
              </p>

              <p className="font-medium text-lg italic">Happy belated birthday, Allison. Maybe next week.</p>

              <p className="font-medium text-center my-8">Until then, the reply gang remains broke.</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
