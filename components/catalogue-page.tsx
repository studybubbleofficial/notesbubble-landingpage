"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { Search, Filter, Grid, List, Star, Download, Eye, Crown, Calendar, FileText } from "lucide-react"

export function CataloguePage() {
  const [isClient, setIsClient] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"card" | "list">("card")
  const [selectedFilters, setSelectedFilters] = useState({
    level: "",
    subject: "",
    school: "",
    year: "",
    resourceType: "",
    rating: "",
    format: "",
    lastUpdated: "",
  })

  // Mock data for resources
  const resources = [
    {
      id: 1,
      title: "H2 Mathematics Integration Techniques Complete Guide",
      level: "JC",
      subject: "Mathematics",
      school: "Raffles Institution",
      year: "2024",
      type: "Notes",
      rating: 4.9,
      downloads: 1250,
      fileSize: "2.4 MB",
      format: "PDF",
      lastUpdated: "2 days ago",
      isSupreme: true,
      author: "Sarah Chen",
      description:
        "Comprehensive guide covering all integration techniques for H2 Mathematics with worked examples and practice questions.",
    },
    {
      id: 2,
      title: "Sec 4 Chemistry Organic Compounds Cheatsheet",
      level: "Secondary",
      subject: "Chemistry",
      school: "Hwa Chong Institution",
      year: "2024",
      type: "Cheatsheet",
      rating: 4.8,
      downloads: 890,
      fileSize: "1.2 MB",
      format: "PDF",
      lastUpdated: "1 week ago",
      isSupreme: false,
      author: "Marcus Tan",
      description: "Quick reference guide for organic compounds with reaction mechanisms and key formulas.",
    },
    {
      id: 3,
      title: "JC Economics Market Structures Analysis",
      level: "JC",
      subject: "Economics",
      school: "Victoria JC",
      year: "2024",
      type: "Notes",
      rating: 4.7,
      downloads: 670,
      fileSize: "3.1 MB",
      format: "PDF",
      lastUpdated: "3 days ago",
      isSupreme: true,
      author: "Emily Wong",
      description: "Detailed analysis of different market structures with real-world examples and case studies.",
    },
    {
      id: 4,
      title: "A-Level Physics Waves & Oscillations Prelim Papers",
      level: "JC",
      subject: "Physics",
      school: "National JC",
      year: "2024",
      type: "Prelim",
      rating: 4.6,
      downloads: 540,
      fileSize: "4.5 MB",
      format: "PDF",
      lastUpdated: "5 days ago",
      isSupreme: false,
      author: "David Lim",
      description: "Collection of prelim papers focusing on waves and oscillations with detailed solutions.",
    },
    {
      id: 5,
      title: "Uni Computer Science Data Structures Notes",
      level: "University",
      subject: "Computer Science",
      school: "NUS",
      year: "2024",
      type: "Notes",
      rating: 4.8,
      downloads: 420,
      fileSize: "5.2 MB",
      format: "PDF",
      lastUpdated: "1 week ago",
      isSupreme: false,
      author: "Alex Kumar",
      description: "Comprehensive notes on data structures including arrays, linked lists, trees, and graphs.",
    },
    {
      id: 6,
      title: "Primary School Mathematics Fundamentals",
      level: "Primary School",
      subject: "Mathematics",
      school: "Raffles Girls' Primary School",
      year: "2024",
      type: "Notes",
      rating: 4.5,
      downloads: 320,
      fileSize: "2.8 MB",
      format: "PDF",
      lastUpdated: "2 weeks ago",
      isSupreme: false,
      author: "Rachel Ng",
      description: "Essential mathematics concepts and practice exercises for primary school students.",
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
  const schools = [
    "Raffles Institution",
    "Hwa Chong Institution",
    "Victoria JC",
    "National JC",
    "NUS",
    "NTU",
    "SMU",
    "Raffles Girls' Primary School",
  ]
  const years = ["2024", "2023", "2022", "2021", "2020"]
  const resourceTypes = ["Notes", "Prelim", "EOY", "Topical", "Cheatsheet"]
  const ratings = ["4.5+", "4.0+", "3.5+", "3.0+"]
  const formats = ["PDF", "Slides", "Word", "Excel"]
  const lastUpdatedOptions = ["Last 7 days", "Last 30 days", "Last 3 months", "Last 6 months"]

  const ResourceCard = ({ resource }) => (
    <div className="bg-background border border-foreground/10 rounded-xl p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-foreground text-lg line-clamp-2">{resource.title}</h3>
            {resource.isSupreme && <Crown className="h-5 w-5 text-yellow-500 flex-shrink-0" />}
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            {resource.level} • {resource.subject} • {resource.school} • {resource.year}
          </p>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{resource.description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{resource.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            <span>{resource.downloads}</span>
          </div>
          <div className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span>{resource.fileSize}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{resource.lastUpdated}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {resource.type}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {resource.format}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="text-xs bg-transparent">
            <Eye className="h-3 w-3 mr-1" />
            Preview
          </Button>
          <Button size="sm" className="text-xs">
            <Download className="h-3 w-3 mr-1" />
            Save
          </Button>
        </div>
      </div>
    </div>
  )

  const ResourceListItem = ({ resource }) => (
    <div className="bg-background border border-foreground/10 rounded-lg p-4 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground text-base truncate">{resource.title}</h3>
            {resource.isSupreme && <Crown className="h-4 w-4 text-yellow-500 flex-shrink-0" />}
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            {resource.level} • {resource.subject} • {resource.school} • {resource.year}
          </p>
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
            <span>{resource.lastUpdated}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <Badge variant="secondary" className="text-xs">
            {resource.type}
          </Badge>
          <Button size="sm" variant="outline" className="text-xs bg-transparent">
            <Eye className="h-3 w-3 mr-1" />
            Preview
          </Button>
          <Button size="sm" className="text-xs">
            <Download className="h-3 w-3 mr-1" />
            Save
          </Button>
        </div>
      </div>
    </div>
  )

  useState(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-muted rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Browse Study Notes</h1>
          <p className="text-lg text-muted-foreground">
            Discover quality study materials from students across Singapore
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 space-y-6">
            <div className="bg-background border border-foreground/10 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </h2>

              {/* Search */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Level Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">Level</label>
                <Select
                  value={selectedFilters.level}
                  onValueChange={(value) => setSelectedFilters({ ...selectedFilters, level: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level.toLowerCase()}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Subject Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Select
                  value={selectedFilters.subject}
                  onValueChange={(value) => setSelectedFilters({ ...selectedFilters, subject: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject.toLowerCase()}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* School Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">School</label>
                <Select
                  value={selectedFilters.school}
                  onValueChange={(value) => setSelectedFilters({ ...selectedFilters, school: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select school" />
                  </SelectTrigger>
                  <SelectContent>
                    {schools.map((school) => (
                      <SelectItem key={school} value={school.toLowerCase()}>
                        {school}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Year Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">Year</label>
                <Select
                  value={selectedFilters.year}
                  onValueChange={(value) => setSelectedFilters({ ...selectedFilters, year: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Resource Type Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">Resource Type</label>
                <Select
                  value={selectedFilters.resourceType}
                  onValueChange={(value) => setSelectedFilters({ ...selectedFilters, resourceType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {resourceTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">Rating</label>
                <Select
                  value={selectedFilters.rating}
                  onValueChange={(value) => setSelectedFilters({ ...selectedFilters, rating: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Minimum rating" />
                  </SelectTrigger>
                  <SelectContent>
                    {ratings.map((rating) => (
                      <SelectItem key={rating} value={rating}>
                        {rating} stars
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Format Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">Format</label>
                <Select
                  value={selectedFilters.format}
                  onValueChange={(value) => setSelectedFilters({ ...selectedFilters, format: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    {formats.map((format) => (
                      <SelectItem key={format} value={format.toLowerCase()}>
                        {format}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Last Updated Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">Last Updated</label>
                <Select
                  value={selectedFilters.lastUpdated}
                  onValueChange={(value) => setSelectedFilters({ ...selectedFilters, lastUpdated: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    {lastUpdatedOptions.map((option) => (
                      <SelectItem key={option} value={option.toLowerCase()}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() =>
                  setSelectedFilters({
                    level: "",
                    subject: "",
                    school: "",
                    year: "",
                    resourceType: "",
                    rating: "",
                    format: "",
                    lastUpdated: "",
                  })
                }
              >
                Clear All Filters
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-muted-foreground">Showing {resources.length} results</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "card" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("card")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className={viewMode === "card" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4"}>
              {resources.map((resource) =>
                viewMode === "card" ? (
                  <ResourceCard key={resource.id} resource={resource} />
                ) : (
                  <ResourceListItem key={resource.id} resource={resource} />
                ),
              )}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="default" size="sm">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}
