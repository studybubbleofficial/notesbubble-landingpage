import Link from "next/link"
import { BookOpen, GraduationCap, Building, University } from "lucide-react"

export function SubjectsLevelsGrid() {
  const levels = [
    {
      name: "Primary School", // replaced Polytechnic with Primary School
      icon: Building,
      description: "Primary 1-6 study materials", // updated description for primary school
      subjects: ["English", "Mathematics", "Science", "Mother Tongue"], // updated subjects for primary school
      color: "bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20",
    },
    {
      name: "Secondary",
      icon: BookOpen,
      description: "Sec 1-4 notes and resources",
      subjects: ["Mathematics", "Science", "English", "History"],
      color: "bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20",
    },
    {
      name: "Junior College",
      icon: GraduationCap,
      description: "JC 1-2 H1/H2 subjects",
      subjects: ["Physics", "Chemistry", "Biology", "Economics"],
      color: "bg-green-500/10 border-green-500/20 hover:bg-green-500/20",
    },
    {
      name: "University",
      icon: University,
      description: "Degree-level resources",
      subjects: ["Computer Science", "Medicine", "Law", "Business"],
      color: "bg-orange-500/10 border-orange-500/20 hover:bg-orange-500/20",
    },
  ]

  return (
    <section className="w-full px-5 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Browse by Education Level</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find notes tailored to your specific education level and subjects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level) => {
            const IconComponent = level.icon
            return (
              <Link key={level.name} href={`/catalogue?level=${level.name.toLowerCase()}`}>
                <div className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${level.color}`}>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-background/50">
                      <IconComponent className="h-8 w-8 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{level.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{level.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {level.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="px-2 py-1 text-xs bg-background/50 rounded-full text-muted-foreground"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
