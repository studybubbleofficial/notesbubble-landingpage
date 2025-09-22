"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Users, BookOpen, Shield, Headphones } from "lucide-react"

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      price: { monthly: 0, annual: 0 },
      badge: null,
      features: [
        "Browse all public resources",
        "Basic search and filters",
        "Download up to 5 resources/month",
        "Community ratings and reviews",
        "Mobile-responsive access",
      ],
      limitations: ["No Supreme library access", "Limited download quota", "Standard support only"],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Student",
      description: "Unlimited access for serious learners",
      price: { monthly: 9.9, annual: 99 },
      badge: "Most Popular",
      features: [
        "Everything in Free",
        "Unlimited downloads",
        "Full Supreme library access",
        "Advanced search filters",
        "Offline reading mode",
        "Priority customer support",
        "Early access to new features",
        "Personal favorites collection",
      ],
      limitations: [],
      cta: "Start Student Plan",
      popular: true,
    },
    {
      name: "Premium",
      description: "For power users and top performers",
      price: { monthly: 19.9, annual: 199 },
      badge: "Best Value",
      features: [
        "Everything in Student",
        "Exclusive premium content",
        "AI-powered study recommendations",
        "Custom study planner",
        "Progress tracking & analytics",
        "Direct access to top contributors",
        "Premium-only webinars",
        "Bulk download tools",
        "24/7 priority support",
      ],
      limitations: [],
      cta: "Go Premium",
      popular: false,
    },
  ]

  const schoolFeatures = [
    {
      icon: Users,
      title: "Bulk Licensing",
      description: "Site-wide access for all students and teachers",
    },
    {
      icon: Shield,
      title: "Admin Dashboard",
      description: "Manage users, track usage, and monitor engagement",
    },
    {
      icon: BookOpen,
      title: "Custom Collections",
      description: "Curate subject-specific resource libraries",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Priority support with dedicated account manager",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Choose Your Learning Journey</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access thousands of quality study resources from Singapore's top students and schools
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span
                className={`text-sm ${billingCycle === "monthly" ? "text-foreground font-medium" : "text-muted-foreground"}`}
              >
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === "annual" ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-sm ${billingCycle === "annual" ? "text-foreground font-medium" : "text-muted-foreground"}`}
              >
                Annual
              </span>
              {billingCycle === "annual" && (
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                  Save 17%
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={plan.name} className={`relative ${plan.popular ? "border-blue-500 shadow-lg scale-105" : ""}`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">{plan.badge}</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>

                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-foreground">
                      ${billingCycle === "monthly" ? plan.price.monthly : plan.price.annual}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-muted-foreground ml-2">
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    )}
                  </div>
                  {billingCycle === "annual" && plan.price.monthly > 0 && (
                    <p className="text-sm text-muted-foreground mt-1">
                      ${(plan.price.annual / 12).toFixed(2)}/month billed annually
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button
                  className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">What's included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Compare All Features</h2>
            <p className="text-muted-foreground">See exactly what's included in each plan</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-medium text-foreground">Features</th>
                  <th className="text-center p-4 font-medium text-foreground">Free</th>
                  <th className="text-center p-4 font-medium text-foreground">Student</th>
                  <th className="text-center p-4 font-medium text-foreground">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4 text-muted-foreground">Monthly downloads</td>
                  <td className="text-center p-4">5</td>
                  <td className="text-center p-4">Unlimited</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 text-muted-foreground">Supreme library access</td>
                  <td className="text-center p-4">✗</td>
                  <td className="text-center p-4">✓</td>
                  <td className="text-center p-4">✓</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">AI recommendations</td>
                  <td className="text-center p-4">✗</td>
                  <td className="text-center p-4">✗</td>
                  <td className="text-center p-4">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 text-muted-foreground">Study analytics</td>
                  <td className="text-center p-4">✗</td>
                  <td className="text-center p-4">✗</td>
                  <td className="text-center p-4">✓</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Priority support</td>
                  <td className="text-center p-4">✗</td>
                  <td className="text-center p-4">✓</td>
                  <td className="text-center p-4">24/7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Schools Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <Crown className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">For Schools & Institutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Empower your entire school community with comprehensive access to quality study resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {schoolFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Sales Team
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Custom pricing available for schools and institutions</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I cancel my subscription anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time. You'll continue to have access to premium features
                  until the end of your billing period.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's included in the Supreme library?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Supreme library contains our highest-quality, expert-verified study resources from top-performing
                  students and schools across Singapore.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer student discounts?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our Student plan is already designed with affordability in mind. We also offer special rates for
                  schools and bulk purchases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
