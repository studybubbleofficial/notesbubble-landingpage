import { Search, Shield, Users, BookOpen, Star, Download } from "lucide-react"

const BentoCard = ({ title, description, icon: Icon, className = "" }) => (
  <div
    className={`overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-center items-center relative min-h-[280px] ${className}`}
  >
    <div className="absolute inset-0 gradient-animated rounded-2xl" />
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

    <div className="w-full p-6 flex flex-col justify-center items-center gap-4 relative z-10 flex-1 text-center">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 flex-1">
        <h3 className="text-foreground text-xl font-semibold leading-tight">{title}</h3>
        <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
)

export function BentoSection() {
  const cards = [
    {
      title: "Real-time previews",
      description:
        "Open PDFs and slides in-browser, skim with page thumbnails, and resume where you left off—no downloads required.",
      icon: Search,
    },
    {
      title: "One-click imports",
      description:
        "Upload or paste a Google Drive link; we fetch, store, and auto-organize by subject, level, school, and year.",
      icon: Shield,
    },
    {
      title: "Trusted Community",
      description: "Join thousands of Singapore students sharing and discovering quality study materials together.",
      icon: Users,
    },
    {
      title: "Syllabus-Aligned Collections",
      description: "Curated bundles that perfectly match your curriculum requirements and learning progression.",
      icon: BookOpen,
    },
    {
      title: "Quality Ratings & Reviews",
      description: "Make informed decisions with detailed ratings and reviews from fellow students and educators.",
      icon: Star,
    },
    {
      title: "Instant Access & Downloads",
      description: "Get immediate access to study materials with fast, reliable downloads whenever you need them.",
      icon: Download,
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] gradient-orb blur-[130px] z-0" />
        <div
          className="w-[400px] h-[600px] absolute top-[200px] right-[100px] origin-center rotate-[25deg] gradient-orb blur-[100px] z-0"
          style={{ animationDelay: "4s" }}
        />

        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Empower your education with Notesbubble
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              Finding, sharing, and trusting quality notes should be effortless.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
