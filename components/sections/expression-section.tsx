"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ExpressionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  // 8 directions to corners/edges + 1 final center fullscreen
  const baseTargets = [
    { x: -48, y: -40 }, // 1 top-left
    { x: 0, y: -44 },   // 2 top-center
    { x: 48, y: -40 },  // 3 top-right
    { x: -52, y: 0 },   // 4 mid-left
    { x: 52, y: 0 },    // 5 mid-right
    { x: -48, y: 40 },  // 6 bottom-left
    { x: 0, y: 44 },    // 7 bottom-center
    { x: 48, y: 40 },   // 8 bottom-right
    { x: 0, y: 0 },     // 9 center → fullscreen
  ]

  // Allocate timeline windows so user can't finish before all 9 animations
  const windowSize = 0.09
  const windowGap = 0.02

  const items = baseTargets.map((t, i) => {
    const start = 0.12 + i * (windowSize + windowGap)
    const edge = start + windowSize * 0.55
    const off = start + windowSize

    const isLast = i === baseTargets.length - 1

    const fullEnd = isLast ? off + 0.18 : off

    const x = isLast
      ? useTransform(scrollYProgress, [start, edge, off, fullEnd], ["0%", "0%", "0%", "0%"])
      : useTransform(scrollYProgress, [start, edge, off], ["0%", `${t.x}%`, `${t.x * 2}%`])

    const y = isLast
      ? useTransform(scrollYProgress, [start, edge, off, fullEnd], ["0%", "0%", "0%", "0%"])
      : useTransform(scrollYProgress, [start, edge, off], ["0%", `${t.y}%`, `${t.y * 2}%`])

    const scale = isLast
      ? useTransform(scrollYProgress, [start, edge, off, fullEnd], [0.6, 0.8, 1.2, 9])
      : useTransform(scrollYProgress, [start, edge, off], [0.6, 1, 0.9])

    const opacity = isLast
      ? useTransform(scrollYProgress, [0, start - 0.01, start, fullEnd], [0, 0, 1, 1])
      : useTransform(scrollYProgress, [start - 0.02, start, edge, off], [0, 1, 1, 0])

    const zIndex = isLast ? 30 : 5

    return { x, y, scale, opacity, zIndex, isLast, fullEnd }
  })

  const lastFullEnd = (items[items.length - 1] as any).fullEnd
  const headingOpacity = useTransform(scrollYProgress, [0, lastFullEnd - 0.08, lastFullEnd, 1], [1, 0.5, 0, 0])

  return (
    <section ref={sectionRef} className="relative min-h-[520vh]">
      {/* Sticky full-screen stage */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Centered heading */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <motion.h2
            style={{ opacity: headingOpacity }}
            className="text-7xl leading-tight font-light text-center px-6"
          >
            <em className="font-serif not-italic">Innovating</em> with Intelligence.
            <br />
            Continuously <em className="font-serif not-italic">Building</em>
            <br />
            Smart <em className="font-serif not-italic">and</em> Decentralized Solutions.
          </motion.h2>
        </div>

        {/* Stage center: rectangles emerge and fly; last scales to fullscreen */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0">
          {items.map((it, i) => (
            <motion.div
              key={i}
              style={{ x: it.x, y: it.y, scale: it.scale, opacity: it.opacity, zIndex: it.zIndex }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[640px] h-[360px] overflow-hidden border border-white/25 bg-transparent"
            >
              <img
                src={`/gradient-sphere-background.png`}
                alt={`Image ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
