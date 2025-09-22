import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageCircle, Users, Building, HelpCircle } from "lucide-react"

export function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      details: "hello@notesbubble.com",
      action: "Send Email",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      details: "Available 9 AM - 6 PM SGT",
      action: "Start Chat",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      details: "+65 6123 4567",
      action: "Call Now",
    },
  ]

  const offices = [
    {
      city: "Singapore",
      address: "123 Education Hub, #12-34\nSingapore 123456",
      phone: "+65 6123 4567",
      email: "singapore@notesbubble.com",
    },
  ]

  const inquiryTypes = [
    { icon: HelpCircle, title: "General Support", description: "Questions about using Notesbubble" },
    { icon: Building, title: "School Partnerships", description: "Institutional licensing and partnerships" },
    { icon: Users, title: "Community", description: "Content moderation and community guidelines" },
    { icon: Mail, title: "Press & Media", description: "Media inquiries and press releases" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <method.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{method.details}</p>
                <Button variant="outline" size="sm">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>

            {/* Inquiry Types */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {inquiryTypes.map((type, index) => (
                <Card key={index} className="cursor-pointer hover:bg-gray-50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <type.icon className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-sm text-foreground">{type.title}</p>
                        <p className="text-xs text-muted-foreground">{type.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name *</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name *</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                  <Input placeholder="john.doe@example.com" type="email" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Inquiry Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="support">General Support</SelectItem>
                      <SelectItem value="schools">School Partnerships</SelectItem>
                      <SelectItem value="community">Community</SelectItem>
                      <SelectItem value="press">Press & Media</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Subject *</label>
                  <Input placeholder="Brief description of your inquiry" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                  <Textarea placeholder="Please provide details about your inquiry..." rows={6} />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>

                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within 2-4 hours during business hours.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Office Information */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Visit our office</h2>

            {offices.map((office, index) => (
              <Card key={index} className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>{office.city}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Address</p>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{office.address}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Phone</p>
                    <p className="text-sm text-muted-foreground">{office.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Email</p>
                    <p className="text-sm text-muted-foreground">{office.email}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM SGT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">10:00 AM - 2:00 PM SGT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="mt-6">
              <CardContent className="p-0">
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Interactive map coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
