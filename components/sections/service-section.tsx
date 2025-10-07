"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useMemo, ReactNode } from "react"

export function ServiceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Individual transformations for each circle
  const circle1Y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -80, -160, -80, 0])
  const circle2Y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 60, 120, 60, 0])
  const circle3Y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -100, -200, -100, 0])
  
  const circle1X = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 40, 80, 40, 0])
  const circle2X = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -60, -120, -60, 0])
  const circle3X = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 80, 160, 80, 0])
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360])
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 540])

  // Split intro text into lines for reveal animation
  const introLines: ReactNode[] = useMemo(
    () => [
      <>I combine <em className="font-serif not-italic">four</em> key areas with <em className="font-serif not-italic">AI</em> and blockchain expertise,</>,
      <>building <em className="font-serif not-italic">intelligent</em> systems that deliver transformative <em className="font-serif not-italic">digital experiences</em>.</>,
    ],
    []
  )

  return (
    <section ref={sectionRef} className="relative">
      {/* Vertical lines pattern - continuing from footer */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-[30%] top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-[70%] top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-[90%] top-0 bottom-0 w-px bg-white" />
      </div>

      {/* Header + Intro */}
      <div className="relative z-10 px-12 max-w-7xl mx-auto pt-24">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <p className="text-xs tracking-wider font-light mb-6">[SERVICE]</p>
        </motion.div>
        
        {/* Intro text with horizontal reveal animation */}
        <div className="max-w-5xl mb-12">
          <div className="space-y-2">
            {introLines.map((node, i) => {
              // Calculate reveal progress for each line
              const lineStart = 0.05 + i * 0.04
              const lineEnd = lineStart + 0.25
              const lineReveal = useTransform(scrollYProgress, [lineStart, lineEnd], [0, 1])
              
              return (
                <div key={i} className="relative overflow-hidden">
                  {/* Base dark gray */}
                  <span className="block text-5xl leading-tight font-light text-gray-900">{node}</span>
                  {/* White reveal overlay */}
                  <motion.span
                    className="absolute inset-0 block text-5xl leading-tight font-light text-white"
                    style={{
                      clipPath: useTransform(lineReveal, (v) => `inset(0 ${(1 - v) * 100}% 0 0)`),
                    }}
                  >
                    {node}
                  </motion.span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-24 max-w-7xl mx-auto px-12">
        {/* Left - Sticky Art */}
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-[600px] h-[600px]">
            <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full">
              <circle cx="250" cy="250" r="220" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
            </svg>
            <motion.svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full" style={{ y: circle1Y, x: circle1X, rotate: rotate1 }}>
              <ellipse cx="250" cy="250" rx="220" ry="70" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
              <ellipse cx="250" cy="250" rx="220" ry="120" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
              <ellipse cx="250" cy="250" rx="220" ry="170" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
            </motion.svg>
            <motion.svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full" style={{ y: circle2Y, x: circle2X, rotate: rotate2 }}>
              <ellipse cx="250" cy="250" rx="70" ry="220" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
              <ellipse cx="250" cy="250" rx="120" ry="220" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
              <ellipse cx="250" cy="250" rx="170" ry="220" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
            </motion.svg>
            <motion.svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full" style={{ y: circle3Y, x: circle3X, rotate: rotate3 }}>
              <circle cx="250" cy="250" r="6" fill="rgba(255,255,255,0.9)" />
              <circle cx="250" cy="100" r="5" fill="rgba(255,255,255,0.8)" />
              <circle cx="250" cy="400" r="5" fill="rgba(255,255,255,0.8)" />
              <circle cx="100" cy="250" r="5" fill="rgba(255,255,255,0.8)" />
              <circle cx="400" cy="250" r="5" fill="rgba(255,255,255,0.8)" />
              <circle cx="155" cy="155" r="4" fill="rgba(255,255,255,0.7)" />
              <circle cx="345" cy="155" r="4" fill="rgba(255,255,255,0.7)" />
              <circle cx="155" cy="345" r="4" fill="rgba(255,255,255,0.7)" />
              <circle cx="345" cy="345" r="4" fill="rgba(255,255,255,0.7)" />
            </motion.svg>
          </div>
        </div>

        {/* Right - 4 full-screen services stacked */}
        <div>
          <div className="min-h-screen flex items-center text-white">
            <div>
              <p className="text-xs tracking-[0.3em] font-light mb-6 text-white/60">01</p>
              <h3 className="text-5xl font-light mb-6 tracking-tight">AI/ML Solutions</h3>
              <p className="text-lg leading-relaxed font-light text-white/90">I design and build intelligent systems with LLMs, RAG pipelines, and self-refinement methods for smarter, context-aware user experiences across various AI-powered applications.</p>
            </div>
          </div>
          <div className="min-h-screen flex items-center text-white">
            <div>
              <p className="text-xs tracking-[0.3em] font-light mb-6 text-white/60">02</p>
              <h3 className="text-5xl font-light mb-6 tracking-tight">Full-Stack Web Development</h3>
              <p className="text-lg leading-relaxed font-light text-white/90">I develop modern, responsive web applications using React, Next.js, and Node.js with integrated APIs and cloud databases, focusing on performance, scalability, and exceptional user experiences.</p>
            </div>
          </div>
          <div className="min-h-screen flex items-center text-white">
            <div>
              <p className="text-xs tracking-[0.3em] font-light mb-6 text-white/60">03</p>
              <h3 className="text-5xl font-light mb-6 tracking-tight">Web3 & Blockchain</h3>
              <p className="text-lg leading-relaxed font-light text-white/90">I create decentralized platforms, NFT marketplaces, and AI-driven blockchain experiences on Solana and Ethereum. Building secure smart contracts and seamless wallet integrations for the next generation of Web3 applications.</p>
            </div>
          </div>
          <div className="min-h-screen flex items-center text-white">
            <div>
              <p className="text-xs tracking-[0.3em] font-light mb-6 text-white/60">04</p>
              <h3 className="text-5xl font-light mb-6 tracking-tight">Data Visualization</h3>
              <p className="text-lg leading-relaxed font-light text-white/90">I build interactive data dashboards, generative media tools, and immersive 3D user interfaces for digital storytelling. Transforming complex data into engaging visual narratives that drive insights and decision-making.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
