"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function SocialProof() {
  const [counts, setCounts] = useState({
    basic: 0,
    pro: 0,
    supreme: 0,
  })

  const targetCounts = {
    basic: 14902,
    pro: 23264,
    supreme: 9,
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        basic: Math.floor(targetCounts.basic * progress),
        pro: Math.floor(targetCounts.pro * progress),
        supreme: Math.floor(targetCounts.supreme * progress),
      })

      if (currentStep >= steps) {
        setCounts(targetCounts)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }

  return (
    <div className="px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Primary School Students</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join thousands of students accessing quality study materials across all tiers
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Notesbubble Basic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{formatNumber(counts.basic)}</div>
          <div className="text-lg font-semibold text-foreground mb-1">Notesbubble</div>
          <div className="text-sm text-muted-foreground">Free study resources</div>
        </motion.div>

        {/* Notesbubble Pro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-blue-600/10 border border-blue-500/20"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">{formatNumber(counts.pro)}</div>
          <div className="text-lg font-semibold text-foreground mb-1">Notesbubble Pro</div>
          <div className="text-sm text-muted-foreground">Premium study materials</div>
        </motion.div>

        {/* Notesbubble Supreme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-500/5 to-orange-500/10 border border-yellow-500/20"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
            </svg>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">{formatNumber(counts.supreme)}</div>
          <div className="text-lg font-semibold text-foreground mb-1">Notesbubble Supreme</div>
          <div className="text-sm text-muted-foreground">Exclusive elite resources</div>
        </motion.div>
      </div>
    </div>
  )
}
