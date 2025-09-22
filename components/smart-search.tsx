"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function SmartSearch() {
  const [isClient, setIsClient] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("")
  const [selectedSchool, setSelectedSchool] = useState("")
  const [selectedYear, setSelectedYear] = useState("")
  const [selectedType, setSelectedType] = useState("")

  useState(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="w-full max-w-4xl mx-auto bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-2xl p-6 shadow-lg">
        <div className="animate-pulse space-y-4">
          <div className="h-12 bg-muted rounded-full"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-10 bg-muted rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const levels = ["Primary School", "Secondary", "JC", "University"] // replaced Polytechnic with Primary School
  const subjects = ["Mathematics", "Physics", "Chemistry", "Biology", "English", "History", "Geography", "Economics"]
  const schools = ["Raffles Institution", "Hwa Chong Institution", "National JC", "Victoria JC", "NUS", "NTU", "SMU"]
  const years = ["2024", "2023", "2022", "2021", "2020"]
  const resourceTypes = ["Notes", "Prelim Papers", "EOY Papers", "Topical", "Cheatsheet"]

  return (
    <div className="w-full max-w-4xl mx-auto bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-2xl p-6 shadow-lg">
      <div className="space-y-4">
        {/* Main search bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Search for notes, topics, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 py-3 text-lg rounded-full border-foreground/20 focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger className="rounded-full">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              {levels.map((level) => (
                <SelectItem key={level} value={level.toLowerCase()}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedSubject} onValueChange={setSelectedSubject}>
            <SelectTrigger className="rounded-full">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              {subjects.map((subject) => (
                <SelectItem key={subject} value={subject.toLowerCase()}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedSchool} onValueChange={setSelectedSchool}>
            <SelectTrigger className="rounded-full">
              <SelectValue placeholder="School" />
            </SelectTrigger>
            <SelectContent>
              {schools.map((school) => (
                <SelectItem key={school} value={school.toLowerCase()}>
                  {school}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="rounded-full">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="rounded-full">
              <SelectValue placeholder="Type" />
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

        {/* Search button */}
        <div className="flex justify-center">
          <Button className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
            <Search className="mr-2 h-4 w-4" />
            Search Notes
          </Button>
        </div>
      </div>
    </div>
  )
}
