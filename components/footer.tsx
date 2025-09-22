import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Star, Users, Shield, Heart } from "lucide-react"

export function Footer() {
  const productLinks = [
    { name: "Browse Catalogue", href: "/catalogue" },
    { name: "Collections", href: "/collections" },
    { name: "Supreme Library", href: "/supreme" },
    { name: "Upload Notes", href: "/upload" },
    { name: "Mobile App", href: "/mobile" },
  ]

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Community Guidelines", href: "/guidelines" },
    { name: "Trust & Safety", href: "/safety" },
    { name: "Report Content", href: "/report" },
    { name: "Status", href: "/status" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Copyright", href: "/copyright" },
  ]

  const subjects = ["Mathematics", "Chemistry", "Physics", "Biology", "Economics", "History", "Geography", "Literature"]

  const levels = ["Primary School", "Secondary School", "Junior College", "University"] // replaced Polytechnic with Primary School

  return (
    <footer className="bg-background border-t">
      {/* Newsletter Section */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Quality Resources</h3>
            <p className="text-primary-foreground/80 mb-6">
              Get notified when new Supreme resources are added and receive study tips from top students.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="bg-background text-foreground border-0 flex-1" />
              <Button className="bg-background text-primary hover:bg-muted font-medium px-6">Subscribe</Button>
            </div>
            <p className="text-xs text-primary-foreground/60 mt-3">
              Join 100+ students already subscribed. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">N</span>
              </div>
              <span className="text-foreground text-xl font-semibold">Notesbubble</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Singapore's trusted platform for quality study resources. Connecting students with verified notes from top
              performers across all education levels.
            </p>

            {/* Trust Indicators */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-muted-foreground">50,000+ quality resources</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-muted-foreground">25,000+ active students</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-muted-foreground">Expert-verified content</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <Link href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <Link href="mailto:hello@notesbubble.com" className="text-sm text-foreground hover:text-blue-600">
                    support@notesbubble.com
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <Link href="tel:+6561234567" className="text-sm text-foreground hover:text-blue-600">
                    +65 83588488
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="text-sm text-foreground">
                    123 Education Hub
                    <br />
                    Singapore 123456
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Subjects & Levels */}
        <div className="border-t pt-12 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Popular Subjects</h4>
              <div className="flex flex-wrap gap-2">
                {subjects.map((subject) => (
                  <Link key={subject} href={`/catalogue?subject=${subject.toLowerCase()}`}>
                    <Badge variant="secondary" className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                      {subject}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Education Levels</h4>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <Link key={level} href={`/catalogue?level=${level.toLowerCase().replace(" ", "-")}`}>
                    <Badge variant="secondary" className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                      {level}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-card">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© 2025 Notesbubble. All rights reserved.</span>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-red-500" />
                <span>in Singapore</span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
