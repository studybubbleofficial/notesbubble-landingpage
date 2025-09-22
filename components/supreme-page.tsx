"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { Search, Crown, Star, Download, Eye, CheckCircle, Shield, Zap, Clock } from "lucide-react"
import Link from "next/link"

export function SupremePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedSubject, setSelectedSubject] = useState("all")

  const supremeResources = [
    {
      id: 1,
      title: "H2 Mathematics Integration Techniques Complete Guide",
      level: "JC",
      subject: "Mathematics",
      school: "Raffles Institution",
      year: "2024",
      rating: 4.9,
      downloads: 1250,
      badges: ["Accuracy", "Clarity", "Completeness"],
      description:
        "Comprehensive guide covering all integration techniques with expert verification and detailed solutions.",
      whySupreme:
        "Selected for exceptional clarity in explaining complex integration concepts with step-by-step solutions verified by mathematics educators.",
      lastUpdated: "2 days ago",
    },
    {
      id: 2,
      title: "JC Economics Market Structures Analysis",
      level: "JC",
      subject: "Economics",
      school: "Victoria JC",
      year: "2024",
      rating: 4.8,
      downloads: 890,
      badges: ["Accuracy", "Real-world Examples"],
      description: "Detailed analysis of market structures with current Singapore case studies and expert insights.",
      whySupreme:
        "Features up-to-date Singapore market examples and has been reviewed by economics professionals for accuracy.",
      lastUpdated: "1 week ago",
    },
    {
      id: 3,
      title: "Uni Computer Science Algorithms Masterclass",
      level: "University",
      subject: "Computer Science",
      school: "NUS",
      year: "2024",
      rating: 4.9,
      downloads: 670,
      badges: ["Completeness", "Code Quality", "Industry-Relevant"],
      description:
        "Advanced algorithms course materials with industry-standard code examples and optimization techniques.",
      whySupreme:
        "Developed by industry professionals and includes cutting-edge algorithmic approaches used in top tech companies.",
      lastUpdated: "3 days ago",
    },
    {
      id: 4,
      title: "A-Level Physics Quantum Mechanics Simplified",
      level: "JC",
      subject: "Physics",
      school: "Hwa Chong Institution",
      year: "2024",
      rating: 4.7,
      downloads: 540,
      badges: ["Clarity", "Visual Learning"],
      description: "Complex quantum mechanics concepts explained with intuitive diagrams and real-world applications.",
      whySupreme:
        "Transforms difficult quantum concepts into understandable content with award-winning visual explanations.",
      lastUpdated: "5 days ago",
    },
  ]

  const levels = ["Primary School", "Secondary", "JC", "University"] // replaced Polytechnic with Primary School
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

  const filteredResources = supremeResources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = selectedLevel === "all" || resource.level.toLowerCase() === selectedLevel
    const matchesSubject = selectedSubject === "all" || resource.subject.toLowerCase() === selectedSubject

    return matchesSearch && matchesLevel && matchesSubject
  })

  const SupremeCard = ({ resource }) => (
    <Link href={`/resource/${resource.id}`}>
      <div className="bg-gradient-to-br from-yellow-500/5 to-orange-500/5 border border-yellow-500/20 rounded-xl p-6 hover:shadow-lg hover:border-yellow-500/30 transition-all duration-200 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="h-5 w-5 text-yellow-500" />
              <Badge className="bg-yellow-500 text-black text-xs">Supreme</Badge>
            </div>
            <h3 className="font-semibold text-foreground text-lg mb-2 line-clamp-2">{resource.title}</h3>
            <p className="text-muted-foreground text-sm mb-3">
              {resource.level} • {resource.subject} • {resource.school} • {resource.year}
            </p>
            <p className="text-foreground text-sm mb-4 line-clamp-2">{resource.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {resource.badges.map((badge) => (
            <Badge key={badge} variant="secondary" className="text-xs bg-yellow-100 text-yellow-800">
              <CheckCircle className="h-3 w-3 mr-1" />
              {badge}
            </Badge>
          ))}
        </div>

        <div className="bg-background/50 rounded-lg p-3 mb-4">
          <div className="flex items-start gap-2">
            <Shield className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">Why this is Supreme</p>
              <p className="text-xs text-muted-foreground">{resource.whySupreme}</p>
            </div>
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
              <Clock className="h-4 w-4" />
              <span>{resource.lastUpdated}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button className="flex-1 bg-yellow-500 text-black hover:bg-yellow-600">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline" className="border-yellow-500/30 hover:bg-yellow-500/10 bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
    </Link>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="h-8 w-8 text-yellow-500" />
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground">Supreme Library</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Curated, expert-verified study materials with guaranteed quality and accuracy
          </p>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-yellow-500/10 rounded-full p-3 mb-3">
                <CheckCircle className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Expert Verified</h3>
              <p className="text-sm text-muted-foreground">
                All content reviewed by subject matter experts and educators
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-yellow-500/10 rounded-full p-3 mb-3">
                <Zap className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Always Updated</h3>
              <p className="text-sm text-muted-foreground">
                Regular updates to ensure content stays current with syllabus changes
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-yellow-500/10 rounded-full p-3 mb-3">
                <Shield className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quality Guaranteed</h3>
              <p className="text-sm text-muted-foreground">
                Rigorous quality control with accuracy, clarity, and completeness ratings
              </p>
            </div>
          </div>

          <Link href="/pricing">
            <Button className="bg-yellow-500 text-black hover:bg-yellow-600 px-8 py-3 text-lg">
              <Crown className="h-5 w-5 mr-2" />
              Upgrade to Supreme
            </Button>
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border border-yellow-500/20 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search Supreme resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50"
              />
            </div>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full md:w-48 bg-background/50">
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
              <SelectTrigger className="w-full md:w-48 bg-background/50">
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
          <p className="text-muted-foreground">Showing {filteredResources.length} Supreme resources</p>
        </div>

        {/* Supreme Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((resource) => (
            <SupremeCard key={resource.id} resource={resource} />
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <Crown className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No Supreme resources found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-8 mt-12 text-center">
          <Crown className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Access Supreme Quality?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of students who trust Supreme resources for their academic success. Get unlimited access to
            expert-verified materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600">View Pricing Plans</Button>
            </Link>
            <Link href="/help">
              <Button variant="outline" className="border-yellow-500/30 hover:bg-yellow-500/10 bg-transparent">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}
