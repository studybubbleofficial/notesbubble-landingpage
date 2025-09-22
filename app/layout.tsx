import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import { CustomCursor } from "@/components/custom-cursor"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased font-sans`}>
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
  font-variant-ligatures: contextual;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
        `}</style>
      </head>
      <body>
        <CustomCursor />
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center bg-background">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading...</p>
                  </div>
                </div>
              }
            >
              {children}
            </Suspense>
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
