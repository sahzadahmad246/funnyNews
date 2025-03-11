"use client"

import Link from "next/link"
import { Menu, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium transition-colors hover:text-primary">
                  Home
                </Link>
                <Link href="/news/politics" className="text-lg font-medium transition-colors hover:text-primary">
                  Politics
                </Link>
                <Link href="/news/business" className="text-lg font-medium transition-colors hover:text-primary">
                  Business
                </Link>
                <Link href="/news/technology" className="text-lg font-medium transition-colors hover:text-primary">
                  Technology
                </Link>
                <Link href="/news/entertainment" className="text-lg font-medium transition-colors hover:text-primary">
                  Entertainment
                </Link>
                <Link href="/news/sports" className="text-lg font-medium transition-colors hover:text-primary">
                  Sports
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tighter md:text-3xl">Shahzad Times</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/news/politics" className="text-sm font-medium transition-colors hover:text-primary">
            Politics
          </Link>
          <Link href="/news/business" className="text-sm font-medium transition-colors hover:text-primary">
            Business
          </Link>
          <Link href="/news/technology" className="text-sm font-medium transition-colors hover:text-primary">
            Technology
          </Link>
          <Link href="/news/entertainment" className="text-sm font-medium transition-colors hover:text-primary">
            Entertainment
          </Link>
          <Link href="/news/sports" className="text-sm font-medium transition-colors hover:text-primary">
            Sports
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <form className="hidden md:flex items-center gap-2">
            <Input type="search" placeholder="Search..." className="w-[150px] lg:w-[250px]" />
            <Button type="submit" size="icon" variant="ghost">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
          <Button variant="ghost" size="icon" aria-label="User account">
            <User className="h-5 w-5" />
            <span className="sr-only">User account</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

