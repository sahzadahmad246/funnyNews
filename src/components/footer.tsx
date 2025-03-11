import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid gap-8 px-4 py-10 md:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-xl font-bold">Shahzad Times</h3>
          <p className="text-sm text-muted-foreground">
            Bringing you the latest news and insights from around the world since 2024.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Sections</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/news/politics" className="text-sm text-muted-foreground hover:text-foreground">
              Politics
            </Link>
            <Link href="/news/business" className="text-sm text-muted-foreground hover:text-foreground">
              Business
            </Link>
            <Link href="/news/technology" className="text-sm text-muted-foreground hover:text-foreground">
              Technology
            </Link>
            <Link href="/news/entertainment" className="text-sm text-muted-foreground hover:text-foreground">
              Entertainment
            </Link>
            <Link href="/news/sports" className="text-sm text-muted-foreground hover:text-foreground">
              Sports
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Company</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About Us
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
              Careers
            </Link>
            <Link href="/advertise" className="text-sm text-muted-foreground hover:text-foreground">
              Advertise
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Legal</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col gap-2 px-4 py-6 text-center md:px-6 md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">© 2024 Shahzad Times. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Designed and developed with ❤️</p>
        </div>
      </div>
    </footer>
  )
}

