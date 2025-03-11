import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface NewsArticleProps {
  title: string
  subtitle?: string
  content: string[]
  category: string
  image: string
  author: {
    name: string
    avatar: string
  }
  date: Date
}

export function NewsArticle({ title, subtitle, content, category, image, author, date }: NewsArticleProps) {
  return (
    <article className="container max-w-4xl mx-auto px-4 py-8 md:px-6">
      <div className="flex flex-col gap-4">
        <Badge className="w-fit">{category}</Badge>
        <h1 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && <p className="text-xl text-muted-foreground md:text-2xl">{subtitle}</p>}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Avatar className="h-8 w-8">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-foreground">{author.name}</span>
            <time>{formatDistanceToNow(date, { addSuffix: true })}</time>
          </div>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg my-4">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        </div>
        <div className="prose prose-stone dark:prose-invert max-w-none">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  )
}

