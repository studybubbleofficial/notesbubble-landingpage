"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import {
  Star,
  Download,
  Eye,
  Crown,
  Calendar,
  FileText,
  User,
  School,
  Clock,
  Hash,
  Flag,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Shield,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

interface ResourceDetailPageProps {
  resourceId: string
}

export function ResourceDetailPage({ resourceId }: ResourceDetailPageProps) {
  const [currentRating, setCurrentRating] = useState(0)
  const [reportText, setReportText] = useState("")
  const [showReportForm, setShowReportForm] = useState(false)

  // Mock data - in real app this would be fetched based on resourceId
  const resource = {
    id: resourceId,
    title: "H2 Mathematics Integration Techniques Complete Guide",
    level: "JC",
    subject: "Mathematics",
    school: "Raffles Institution",
    year: "2024",
    type: "Notes",
    rating: 4.9,
    totalRatings: 127,
    downloads: 1250,
    fileSize: "2.4 MB",
    format: "PDF",
    lastUpdated: "2 days ago",
    isSupreme: true,
    author: "Sarah Chen",
    submitter: "sarah.chen@student.ri.edu.sg",
    description:
      "Comprehensive guide covering all integration techniques for H2 Mathematics including integration by parts, substitution, partial fractions, and trigonometric integrals. Includes worked examples, practice questions, and exam tips.",
    syllabusTags: ["Integration", "Calculus", "H2 Math", "A-Levels"],
    versionHistory: [
      { version: "v2.1", date: "2024-01-15", changes: "Added more practice questions" },
      { version: "v2.0", date: "2024-01-10", changes: "Major revision with new examples" },
      { version: "v1.0", date: "2023-12-20", changes: "Initial release" },
    ],
    fileHash: "sha256:a1b2c3d4e5f6...",
    license: "Creative Commons BY-SA 4.0",
    originalSource: "https://example.com/original-notes",
    trustMetrics: {
      accuracy: 4.8,
      clarity: 4.9,
      completeness: 4.7,
      whySupreme:
        "Selected for exceptional clarity in explaining complex integration concepts with step-by-step solutions.",
    },
  }

  const relatedResources = [
    {
      id: 2,
      title: "H2 Math Differentiation Techniques",
      level: "JC",
      subject: "Mathematics",
      rating: 4.7,
      downloads: 980,
      isSupreme: true,
    },
    {
      id: 3,
      title: "JC Math Calculus Practice Papers",
      level: "JC",
      subject: "Mathematics",
      rating: 4.6,
      downloads: 750,
      isSupreme: false,
    },
    {
      id: 4,
      title: "A-Level Math Formula Sheet",
      level: "JC",
      subject: "Mathematics",
      rating: 4.8,
      downloads: 1100,
      isSupreme: true,
    },
  ]

  const StarRating = ({ rating, interactive = false, onRate = null }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
            onClick={interactive && onRate ? () => onRate(star) : undefined}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/catalogue" className="hover:text-foreground">
            Catalogue
          </Link>
          <span>/</span>
          <Link href={`/catalogue?subject=${resource.subject.toLowerCase()}`} className="hover:text-foreground">
            {resource.subject}
          </Link>
          <span>/</span>
          <span className="text-foreground">{resource.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Resource Header */}
            <div className="bg-background border border-foreground/10 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl md:text-3xl font-semibold text-foreground">{resource.title}</h1>
                    {resource.isSupreme && <Crown className="h-6 w-6 text-yellow-500" />}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {resource.level} • {resource.subject} • {resource.school} • {resource.year}
                  </p>
                  <p className="text-foreground leading-relaxed">{resource.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <StarRating rating={resource.rating} />
                  <span className="text-sm text-muted-foreground ml-1">
                    {resource.rating} ({resource.totalRatings} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Download className="h-4 w-4" />
                  <span>{resource.downloads} downloads</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span>{resource.fileSize}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Updated {resource.lastUpdated}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {resource.syllabusTags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Button className="flex-1 sm:flex-none">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline">
                  <Eye className="h-4 w-4 mr-2" />
                  Quick Preview
                </Button>
                <Button variant="outline">Save to Library</Button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="bg-background border border-foreground/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Document Preview</h2>
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">PDF Preview</p>
                  <p className="text-sm text-gray-500">
                    {resource.title} - {resource.fileSize}
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Button variant="outline" size="sm">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-gray-600">Page 1 of 24</span>
                    <Button variant="outline" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Metadata */}
            <div className="bg-background border border-foreground/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Resource Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      <span className="text-muted-foreground">Author:</span> {resource.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <School className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      <span className="text-muted-foreground">School:</span> {resource.school}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      <span className="text-muted-foreground">Year:</span> {resource.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      <span className="text-muted-foreground">Last Updated:</span> {resource.lastUpdated}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Hash className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      <span className="text-muted-foreground">File Hash:</span> {resource.fileHash.substring(0, 20)}...
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      <span className="text-muted-foreground">License:</span> {resource.license}
                    </span>
                  </div>
                  {resource.originalSource && (
                    <div className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      <Link href={resource.originalSource} className="text-sm text-primary hover:underline">
                        Original Source
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Version History */}
            <div className="bg-background border border-foreground/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Version History</h2>
              <div className="space-y-3">
                {resource.versionHistory.map((version, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <span className="font-medium text-foreground">{version.version}</span>
                      <span className="text-sm text-muted-foreground ml-2">{version.date}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{version.changes}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Report Form */}
            <div className="bg-background border border-foreground/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">Report Issue</h2>
                <Button variant="outline" size="sm" onClick={() => setShowReportForm(!showReportForm)}>
                  <Flag className="h-4 w-4 mr-2" />
                  Report Problem
                </Button>
              </div>

              {showReportForm && (
                <div className="space-y-4">
                  <Textarea
                    placeholder="Describe the issue (broken link, incorrect content, copyright concern, etc.)"
                    value={reportText}
                    onChange={(e) => setReportText(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <div className="flex items-center gap-2">
                    <Button size="sm">Submit Report</Button>
                    <Button variant="outline" size="sm" onClick={() => setShowReportForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trust Panel */}
            {resource.isSupreme && (
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Crown className="h-5 w-5 text-yellow-500" />
                  <h3 className="font-semibold text-foreground">Supreme Quality</h3>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Accuracy</span>
                    <div className="flex items-center gap-2">
                      <StarRating rating={Math.round(resource.trustMetrics.accuracy)} />
                      <span className="text-sm font-medium">{resource.trustMetrics.accuracy}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Clarity</span>
                    <div className="flex items-center gap-2">
                      <StarRating rating={Math.round(resource.trustMetrics.clarity)} />
                      <span className="text-sm font-medium">{resource.trustMetrics.clarity}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Completeness</span>
                    <div className="flex items-center gap-2">
                      <StarRating rating={Math.round(resource.trustMetrics.completeness)} />
                      <span className="text-sm font-medium">{resource.trustMetrics.completeness}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Why this is Supreme</p>
                      <p className="text-xs text-muted-foreground">{resource.trustMetrics.whySupreme}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Rate This Resource */}
            <div className="bg-background border border-foreground/10 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Rate This Resource</h3>
              <div className="flex items-center gap-2 mb-4">
                <StarRating rating={currentRating} interactive={true} onRate={setCurrentRating} />
                <span className="text-sm text-muted-foreground">
                  {currentRating > 0 ? `${currentRating}/5` : "Click to rate"}
                </span>
              </div>
              {currentRating > 0 && (
                <Button size="sm" className="w-full">
                  Submit Rating
                </Button>
              )}
            </div>

            {/* Related Resources */}
            <div className="bg-background border border-foreground/10 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Related Resources</h3>
              <div className="space-y-4">
                {relatedResources.map((related) => (
                  <Link key={related.id} href={`/resource/${related.id}`}>
                    <div className="p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-foreground text-sm line-clamp-2 flex-1">{related.title}</h4>
                        {related.isSupreme && <Crown className="h-4 w-4 text-yellow-500 ml-2 flex-shrink-0" />}
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        {related.level} • {related.subject}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <StarRating rating={Math.round(related.rating)} />
                          <span className="text-xs text-muted-foreground">{related.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{related.downloads} downloads</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Attribution */}
            <div className="bg-background border border-foreground/10 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Attribution & License</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>This resource is shared under {resource.license}</p>
                <p>Original author: {resource.author}</p>
                <p>Submitted by: {resource.submitter}</p>
                <p className="text-xs pt-2 border-t border-foreground/10">
                  Please respect the license terms when using this material.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}
