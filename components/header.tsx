"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Menu, Search, User } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  const navItems = [
    { name: "Catalogue", href: "/catalogue" },
    { name: "Collections", href: "/collections" },
    { name: "Supreme", href: "/supreme", badge: "Premium" },
    { name: "Upload", href: "/upload" },
    { name: "Pricing", href: "/pricing" },
    { name: "For Schools", href: "/schools" },
    { name: "Help", href: "/help" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Search */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">N</span>
              </div>
              <span className="text-foreground text-xl font-semibold">Notesbubble</span>
            </Link>

            <div className="hidden lg:flex items-center relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search notes, subjects, schools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-80 pl-10 pr-4 py-2 rounded-full border-border focus:border-primary focus:ring-primary"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={item.href.startsWith("#") ? (e) => handleScroll(e, item.href) : undefined}
                className="relative text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg font-medium transition-colors text-sm flex items-center gap-1"
              >
                {item.name}
                {item.badge && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary text-xs px-1.5 py-0.5">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link href="/auth" className="hidden md:block">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Sign In
              </Button>
            </Link>
            <Link href="/pricing" className="hidden md:block">
              <Button className="px-4 py-2 rounded-lg font-medium">Sign Up for Free</Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-left flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xs">N</span>
                    </div>
                    Notesbubble
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Search */}
                <div className="mt-6 mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input type="text" placeholder="Search notes..." className="pl-10" />
                  </div>
                </div>

                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-between text-foreground hover:bg-gray-50 px-3 py-3 rounded-lg transition-colors"
                    >
                      <span>{item.name}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  ))}

                  <div className="border-t pt-4 mt-4 space-y-2">
                    <Link href="/auth" className="block">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <User className="w-4 h-4 mr-2" />
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/pricing" className="block">
                      <Button className="w-full">Sign Up for Free</Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
