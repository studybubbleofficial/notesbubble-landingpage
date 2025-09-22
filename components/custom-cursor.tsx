"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const isHoveringRef = useRef(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    let animationId: number

    const updateCursorPosition = (e: MouseEvent) => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }

      animationId = requestAnimationFrame(() => {
        if (cursor) {
          cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`
        }
      })
    }

    const handleMouseEnter = () => {
      isHoveringRef.current = true
      if (cursorDot) {
        cursorDot.style.width = "32px"
        cursorDot.style.height = "32px"
        cursorDot.style.borderWidth = "3px"
      }
    }

    const handleMouseLeave = () => {
      isHoveringRef.current = false
      if (cursorDot) {
        cursorDot.style.width = "20px"
        cursorDot.style.height = "20px"
        cursorDot.style.borderWidth = "2px"
      }
    }

    document.addEventListener("mousemove", updateCursorPosition, { passive: true })

    // Track hover states for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button'], input, textarea, select")

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter, { passive: true })
      element.addEventListener("mouseleave", handleMouseLeave, { passive: true })
    })

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      document.removeEventListener("mousemove", updateCursorPosition)
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] will-change-transform"
      style={{
        left: 0,
        top: 0,
      }}
    >
      <div
        ref={cursorDotRef}
        className="border-2 border-primary rounded-full bg-transparent transition-all duration-150 ease-out"
        style={{
          width: "20px",
          height: "20px",
          mixBlendMode: "difference",
        }}
      />
    </div>
  )
}
