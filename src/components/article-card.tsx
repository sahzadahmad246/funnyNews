import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { Badge } from "@/components/ui/badge"
import { StaticImageData } from "next/image";
interface ArticleCardProps {
  title: string
  description: string
  category: string
  image: string | StaticImageData;
  slug: string
  date: Date
  featured?: boolean
}

export function ArticleCard({ title, description, category, image, slug, date, featured = false }: ArticleCardProps) {
  return (
    <Link href={`/news/${slug}`} className="group block">
      <div className={`overflow-hidden rounded-lg ${featured ? "md:grid md:grid-cols-2 md:gap-4" : ""}`}>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <Badge className="absolute left-2 top-2">{category}</Badge>
        </div>
        <div className={`flex flex-col gap-2 ${featured ? "md:justify-center" : "mt-4"}`}>
          <h3 className={`font-serif font-bold line-clamp-2 ${featured ? "text-xl md:text-2xl" : "text-lg"}`}>
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          <p className="text-xs text-muted-foreground">{formatDistanceToNow(date, { addSuffix: true })}</p>
        </div>
      </div>
    </Link>
  )
}

