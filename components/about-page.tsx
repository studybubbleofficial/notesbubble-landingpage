import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Heart, BookOpen, Shield, Zap, Globe } from "lucide-react"

export function AboutPage() {
  const stats = [
    { number: "50K+", label: "Study Resources" },
    { number: "25K+", label: "Active Students" },
    { number: "500+", label: "Partner Schools" },
    { number: "98%", label: "Satisfaction Rate" },
  ]

  const values = [
    {
      icon: BookOpen,
      title: "Quality First",
      description: "Every resource is reviewed and verified to ensure the highest educational standards",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "We maintain strict content policies and protect intellectual property rights",
    },
    {
      icon: Heart,
      title: "Student Success",
      description: "Our mission is to help every student achieve their academic goals",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making quality education resources available to all Singapore students",
    },
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      background: "Former MOE educator with 15+ years in Singapore education",
      image: "/professional-asian-woman-ceo.jpg",
    },
    {
      name: "Marcus Lim",
      role: "CTO & Co-founder",
      background: "Ex-Google engineer passionate about educational technology",
      image: "/professional-asian-man-cto.jpg",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Head of Content",
      background: "PhD in Education, former NIE researcher and curriculum specialist",
      image: "/professional-indian-woman-educator.jpg",
    },
    {
      name: "David Tan",
      role: "Head of Community",
      background: "Former student leader, passionate about peer-to-peer learning",
      image: "/professional-asian-man-community.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              About Notesbubble
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering Singapore Students Through Shared Knowledge
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We believe that every student deserves access to quality study resources. Notesbubble connects Singapore's
              brightest minds, creating a trusted community where knowledge flows freely and academic success is shared.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <Target className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to quality study resources across Singapore's education system, fostering a
                collaborative learning environment where students support each other's academic journey through trusted,
                verified content.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <Zap className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To become the definitive platform for educational resource sharing in Singapore, where every student has
                the tools they need to excel, and where academic success is built on a foundation of community and
                collaboration.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Notesbubble
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate educators and technologists working to transform education in Singapore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                Notesbubble was born from a simple observation: Singapore's students are incredibly talented and
                hardworking, but access to quality study resources was often limited by school boundaries and social
                networks.
              </p>
              <p className="mb-6">
                Founded in 2023 by former educators and tech professionals, we set out to break down these barriers. We
                wanted to create a platform where a student from any school could access the same high-quality notes
                that helped their peers excel.
              </p>
              <p className="mb-6">
                Today, Notesbubble serves thousands of students across Singapore, from Secondary schools to
                Universities. Our Supreme collection represents the gold standard of student-created content, while our
                community continues to grow stronger every day.
              </p>
              <p>
                We're just getting started. Our vision extends beyond Singapore, but our commitment to quality, trust,
                and student success remains unwavering.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a student looking to excel or an educator passionate about sharing knowledge, there's a place
            for you in the Notesbubble community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Learning Today
            </Button>
            <Button size="lg" variant="outline">
              Share Your Notes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
