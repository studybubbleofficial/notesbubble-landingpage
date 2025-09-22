"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { Search, BookOpen, Users, Star, Download, Crown } from "lucide-react"
import Link from "next/link"

export function CollectionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedSubject, setSelectedSubject] = useState("all")

  const collections = [
    {
      id: 1,
      title: "H2 Chemistry Prelims Complete Package",
      description:
        "Comprehensive collection of prelim papers from top JCs with detailed solutions and marking schemes.",
      level: "JC",
      subject: "Chemistry",
      resourceCount: 24,
      totalDownloads: 3420,
      rating: 4.8,
      isSupreme: true,
      schools: ["Raffles Institution", "Hwa Chong Institution", "Victoria JC"],
      lastUpdated: "3 days ago",
      coverImage: "/chemistry-textbook.png",
    },
    {
      id: 2,
      title: "Sec 4 EOY Mathematics Bundle",
      description: "End-of-year exam papers and revision materials for Secondary 4 Mathematics covering all topics.",
      level: "Secondary",
      subject: "Mathematics",
      resourceCount: 18,
      totalDownloads: 2890,
      rating: 4.7,
      isSupreme: false,
      schools: ["Various Secondary Schools"],
      lastUpdated: "1 week ago",
      coverImage: "/mathematics-textbook.png",
    },
    {
      id: 3,
      title: "JC Economics Market Analysis Collection",
      description: "Curated notes and case studies on market structures, competition, and economic analysis.",
      level: "JC",
      subject: "Economics",
      resourceCount: 15,
      totalDownloads: 1950,
      rating: 4.6,
      isSupreme: true,
      schools: ["National JC", "Temasek JC"],
      lastUpdated: "5 days ago",
      coverImage: "/economics-textbook.jpg",
    },
    {
      id: 4,
      title: "Uni Computer Science Data Structures Pack",
      description: "Complete study materials for data structures and algorithms including code examples and exercises.",
      level: "University",
      subject: "Computer Science",
      resourceCount: 32,
      totalDownloads: 2150,
      rating: 4.9,
      isSupreme: true,
      schools: ["NUS", "NTU"],
      lastUpdated: "2 days ago",
      coverImage: "/computer-science-textbook.jpg",
    },
    {
      id: 5,
      title: "Primary School Mathematics Fundamentals",
      description: "Essential mathematics concepts and practice exercises for primary school students.",
      level: "Primary School",
      subject: "Mathematics",
      resourceCount: 21,
      totalDownloads: 1680,
      rating: 4.5,
      isSupreme: false,
      schools: ["Raffles Girls' Primary School", "Anglo-Chinese School (Primary)"],
      lastUpdated: "1 week ago",
      coverImage: "/mathematics-textbook.png",
    },
    {
      id: 6,
      title: "A-Level Physics Mechanics Mastery",
      description: "Complete mechanics module with theory, worked examples, and practice questions.",
      level: "JC",
      subject: "Physics",
      resourceCount: 19,
      totalDownloads: 2340,
      rating: 4.7,
      isSupreme: true,
      schools: ["Anglo-Chinese JC", "Catholic JC"],
      lastUpdated: "4 days ago",
      coverImage: "/physics-textbook.png",
    },
  ]

  const levels = ["Primary School", "Secondary", "JC", "University"]
  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "History",
    "Geography",
    "Economics",
    "Computer Science",
    "Business",
  ]

  const filteredCollections = collections.filter((collection) => {
    const matchesSearch =
      collection.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      collection.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = selectedLevel === "all" || collection.level.toLowerCase() === selectedLevel
    const matchesSubject = selectedSubject === "all" || collection.subject.toLowerCase() === selectedSubject

    return matchesSearch && matchesLevel && matchesSubject
  })

  const CollectionCard = ({ collection }) => (
    <Link href={`/collections/${collection.id}`}>
      <div className="bg-background border border-foreground/10 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer">
        <div className="relative">
          <img
            src={collection.coverImage || "/placeholder.svg"}
            alt={collection.title}
            className="w-full h-48 object-cover"
          />
          {collection.isSupreme && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-yellow-500 text-black">
                <Crown className="h-3 w-3 mr-1" />
                Supreme
              </Badge>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="font-semibold text-foreground text-lg mb-2 line-clamp-2">{collection.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{collection.description}</p>

          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="text-xs">
              {collection.level}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {collection.subject}
            </Badge>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{collection.resourceCount} resources</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{collection.totalDownloads}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{collection.rating}</span>
            </div>
          </div>

          <div className="text-xs text-muted-foreground mb-4">
            <p>Schools: {collection.schools.join(", ")}</p>
            <p>Updated: {collection.lastUpdated}</p>
          </div>

          <Button className="w-full">
            <Download className="h-4 w-4 mr-2" />
            View Collection
          </Button>
        </div>
      </div>
    </Link>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Study Collections</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Syllabus-aligned bundles of study materials curated by education level and subject
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-background border border-foreground/10 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search collections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                {levels.map((level) => (
                  <SelectItem key={level} value={level.toLowerCase()}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Subjects" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject.toLowerCase()}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">Showing {filteredCollections.length} collections</p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCollections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>

        {filteredCollections.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No collections found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      <FooterSection />
    </div>
  )
}
