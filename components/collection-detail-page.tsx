"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { BookOpen, Users, Star, Download, Eye, Crown, Calendar, ChevronLeft } from "lucide-react"
import Link from "next/link"

interface CollectionDetailPageProps {
  collectionId: string
}

export function CollectionDetailPage({ collectionId }: CollectionDetailPageProps) {
  // Mock data - in real app this would be fetched based on collectionId
  const collection = {
    id: collectionId,
    title: "H2 Chemistry Prelims Complete Package",
    description:
      "Comprehensive collection of prelim papers from top JCs with detailed solutions and marking schemes. This collection covers all major topics in H2 Chemistry including organic chemistry, physical chemistry, and inorganic chemistry.",
    level: "JC",
    subject: "Chemistry",
    resourceCount: 24,
    totalDownloads: 3420,
    rating: 4.8,
    totalRatings: 156,
    isSupreme: true,
    schools: ["Raffles Institution", "Hwa Chong Institution", "Victoria JC"],
    lastUpdated: "3 days ago",
    coverImage: "/chemistry-textbook-collection.jpg",
    resources: [
      {
        id: 1,
        title: "RI 2024 Chemistry Prelim Paper 1",
        type: "Prelim",
        fileSize: "1.2 MB",
        rating: 4.9,
        downloads: 450,
        isSupreme: true,
      },
      {
        id: 2,
        title: "HCI 2024 Chemistry Prelim Paper 2",
        type: "Prelim",
        fileSize: "1.8 MB",
        rating: 4.8,
        downloads: 380,
        isSupreme: true,
      },
      {
        id: 3,
        title: "VJC 2024 Chemistry Prelim Solutions",
        type: "Solutions",
        fileSize: "2.1 MB",
        rating: 4.7,
        downloads: 420,
        isSupreme: true,
      },
      {
        id: 4,
        title: "Organic Chemistry Summary Notes",
        type: "Notes",
        fileSize: "950 KB",
        rating: 4.8,
        downloads: 520,
        isSupreme: true,
      },
      {
        id: 5,
        title: "Physical Chemistry Formulas",
        type: "Cheatsheet",
        fileSize: "680 KB",
        rating: 4.6,
        downloads: 390,
        isSupreme: false,
      },
    ],
  }

  const ResourceItem = ({ resource }) => (
    <Link href={`/resource/${resource.id}`}>
      <div className="bg-background border border-foreground/10 rounded-lg p-4 hover:shadow-md transition-all duration-200 cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium text-foreground text-sm truncate">{resource.title}</h3>
              {resource.isSupreme && <Crown className="h-4 w-4 text-yellow-500 flex-shrink-0" />}
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>{resource.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="h-3 w-3" />
                <span>{resource.downloads}</span>
              </div>
              <span>{resource.fileSize}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Badge variant="secondary" className="text-xs">
              {resource.type}
            </Badge>
            <Button size="sm" variant="outline" className="text-xs bg-transparent">
              <Eye className="h-3 w-3 mr-1" />
              View
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/collections" className="hover:text-foreground flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Collections
          </Link>
          <span>/</span>
          <span className="text-foreground">{collection.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Collection Header */}
            <div className="bg-background border border-foreground/10 rounded-xl p-6">
              <div className="flex items-start gap-6">
                <img
                  src={collection.coverImage || "/placeholder.svg"}
                  alt={collection.title}
                  className="w-32 h-40 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl md:text-3xl font-semibold text-foreground">{collection.title}</h1>
                    {collection.isSupreme && <Crown className="h-6 w-6 text-yellow-500" />}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {collection.level} • {collection.subject}
                  </p>
                  <p className="text-foreground leading-relaxed mb-6">{collection.description}</p>

                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">
                        {collection.rating} ({collection.totalRatings} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>{collection.resourceCount} resources</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{collection.totalDownloads} downloads</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Updated {collection.lastUpdated}</span>
                    </div>
                  </div>

                  <Button className="w-full sm:w-auto">
                    <Download className="h-4 w-4 mr-2" />
                    Download All Resources
                  </Button>
                </div>
              </div>
            </div>

            {/* Resources List */}
            <div className="bg-background border border-foreground/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Included Resources</h2>
              <div className="space-y-4">
                {collection.resources.map((resource) => (
                  <ResourceItem key={resource.id} resource={resource} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Collection Info */}
            <div className="bg-background border border-foreground/10 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Collection Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Level:</span>
                  <span className="text-foreground">{collection.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subject:</span>
                  <span className="text-foreground">{collection.subject}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Resources:</span>
                  <span className="text-foreground">{collection.resourceCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Downloads:</span>
                  <span className="text-foreground">{collection.totalDownloads}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Updated:</span>
                  <span className="text-foreground">{collection.lastUpdated}</span>
                </div>
              </div>
            </div>

            {/* Schools */}
            <div className="bg-background border border-foreground/10 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Contributing Schools</h3>
              <div className="space-y-2">
                {collection.schools.map((school) => (
                  <div key={school} className="text-sm text-muted-foreground">
                    {school}
                  </div>
                ))}
              </div>
            </div>

            {/* Supreme Badge */}
            {collection.isSupreme && (
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Crown className="h-5 w-5 text-yellow-500" />
                  <h3 className="font-semibold text-foreground">Supreme Collection</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  This collection has been curated and verified by our education experts for exceptional quality and
                  accuracy.
                </p>
                <Link href="/supreme">
                  <Button size="sm" className="bg-yellow-500 text-black hover:bg-yellow-600 w-full">
                    Learn About Supreme
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}
