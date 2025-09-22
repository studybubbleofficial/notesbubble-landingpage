"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  BookOpen,
  Upload,
  CreditCard,
  Shield,
  MessageCircle,
  Mail,
  Clock,
  ChevronDown,
  ChevronRight,
} from "lucide-react"

export function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const categories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics of using Notesbubble",
      articles: 12,
    },
    {
      icon: Search,
      title: "Finding Resources",
      description: "Tips for searching and filtering content",
      articles: 8,
    },
    {
      icon: Upload,
      title: "Sharing Notes",
      description: "How to upload and share your study materials",
      articles: 6,
    },
    {
      icon: CreditCard,
      title: "Subscriptions & Billing",
      description: "Manage your account and payments",
      articles: 10,
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Quality standards and content policies",
      articles: 5,
    },
  ]

  const faqs = [
    {
      question: "How do I find notes for my specific syllabus?",
      answer:
        "Use our advanced filters to select your education level (Secondary, JC, Poly, University), subject, and school. You can also search by specific topics or exam years to find the most relevant resources.",
    },
    {
      question: 'What makes a resource "Supreme" quality?',
      answer:
        "Supreme resources are hand-picked by our expert team based on accuracy, completeness, clarity, and student feedback. They come from top-performing students and are verified for quality and syllabus alignment.",
    },
    {
      question: "Can I upload notes from any school?",
      answer:
        "Yes! We welcome quality study materials from all Singapore schools and institutions. All uploads go through our review process to ensure they meet our quality standards.",
    },
    {
      question: "How do I report inappropriate content?",
      answer:
        'Click the "Report" button on any resource page. Our moderation team reviews all reports within 24 hours and takes appropriate action to maintain content quality.',
    },
    {
      question: "What file formats are supported?",
      answer:
        "We support PDF, DOC, DOCX, JPG, and PNG files. PDFs are preferred for the best viewing experience. Maximum file size is 50MB per upload.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        'Go to Account Settings > Subscription and click "Cancel Subscription". You\'ll retain access to premium features until the end of your billing period.',
    },
    {
      question: "Can teachers use Notesbubble for their classes?",
      answer:
        "We offer special school licenses with bulk access, admin dashboards, and custom collections. Contact our sales team for institutional pricing.",
    },
    {
      question: "How do you ensure content quality?",
      answer:
        "We use a combination of automated checks, peer reviews, and expert moderation. Resources are rated by users and regularly audited for accuracy and relevance.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">How can we help you?</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers, get support, and learn how to make the most of Notesbubble
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <category.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary">{category.articles} articles</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-medium">{faq.question}</CardTitle>
                    {expandedFaq === index ? (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                {expandedFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Still need help?</h2>
            <p className="text-muted-foreground">Our support team is here to help you succeed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-medium text-foreground mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-3">Get detailed help via email</p>
              <p className="text-sm font-medium text-blue-600">support@notesbubble.com</p>
            </div>
            <div className="text-center">
              <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-medium text-foreground mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-3">Chat with our team in real-time</p>
              <Button variant="outline" size="sm">
                Start Chat
              </Button>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-medium text-foreground mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground mb-3">We typically respond within</p>
              <p className="text-sm font-medium text-foreground">2-4 hours</p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>Describe your issue and we'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input placeholder="your.email@example.com" type="email" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input placeholder="Brief description of your issue" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea placeholder="Please provide as much detail as possible about your issue..." rows={5} />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
