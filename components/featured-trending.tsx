import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Download, Eye, Crown } from "lucide-react"

export function FeaturedTrending() {
  const featuredResources = [
    {
      title: "H2 Mathematics Integration Techniques",
      level: "JC",
      subject: "Mathematics",
      school: "Raffles Institution",
      year: "2024",
      rating: 4.9,
      downloads: 1250,
      type: "Notes",
      isSupreme: true,
    },
    {
      title: "Sec 4 Chemistry Organic Compounds",
      level: "Secondary",
      subject: "Chemistry",
      school: "Hwa Chong Institution",
      year: "2024",
      rating: 4.8,
      downloads: 890,
      type: "Cheatsheet",
      isSupreme: false,
    },
    {
      title: "JC Economics Market Structures",
      level: "JC",
      subject: "Economics",
      school: "Victoria JC",
      year: "2024",
      rating: 4.7,
      downloads: 670,
      type: "Notes",
      isSupreme: true,
    },
  ]

  const trendingResources = [
    {
      title: "A-Level Physics Waves & Oscillations",
      level: "JC",
      subject: "Physics",
      school: "National JC",
      year: "2024",
      rating: 4.6,
      downloads: 540,
      type: "Prelim Papers",
    },
    {
      title: "Uni Computer Science Data Structures",
      level: "University",
      subject: "Computer Science",
      school: "NUS",
      year: "2024",
      rating: 4.8,
      downloads: 420,
      type: "Notes",
    },
  ]

  const ResourceCard = ({ resource, showSupremeBadge = false }) => (
    <div className="bg-background/50 backdrop-blur-sm border border-foreground/10 rounded-xl p-4 hover:bg-background/70 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground text-sm line-clamp-2">{resource.title}</h3>
            {resource.isSupreme && <Crown className="h-4 w-4 text-yellow-500 flex-shrink-0" />}
          </div>
          <p className="text-xs text-muted-foreground">
            {resource.level} • {resource.subject} • {resource.school} • {resource.year}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span>{resource.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="h-3 w-3" />
            <span>{resource.downloads}</span>
          </div>
        </div>
        <Button size="sm" variant="outline" className="text-xs px-3 py-1 h-7 bg-transparent">
          <Eye className="h-3 w-3 mr-1" />
          Preview
        </Button>
      </div>
    </div>
  )

  return (
    <section className="w-full px-5 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Featured Resources */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Featured Resources</h2>
              <Link href="/catalogue?featured=true">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {featuredResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </div>

          {/* Trending Resources */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Trending Now</h2>
              <Link href="/catalogue?trending=true">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {trendingResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Crown className="h-5 w-5 text-yellow-500" />
            <h3 className="font-semibold text-foreground">Editor's Picks (Supreme)</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Curated, high-quality resources verified by our education experts
          </p>
          <Link href="/supreme">
            <Button size="sm" className="bg-yellow-500 text-black hover:bg-yellow-600">
              Explore Supreme
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
