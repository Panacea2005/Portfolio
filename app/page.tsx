"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { MenuOverlay } from "@/components/menu-overlay"

export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollProgress(Math.round(latest * 100))
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="fixed w-20 h-20 rounded-full bg-zinc-700/40 backdrop-blur-md pointer-events-none z-50 flex items-center justify-center transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          filter: "blur(2px)",
        }}
      >
        <span className="text-white/50 text-xl font-light">+</span>
      </div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div ref={containerRef} className="bg-black text-white">
        {/* Scroll Progress */}
        <div className="fixed bottom-8 left-12 z-50 text-xs tracking-wider font-light text-white/60">
          SCROLL {scrollProgress}%
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-12 z-50 text-xs tracking-wider font-light text-white/60 hover:text-white transition-colors"
        >
          BACK TO TOP
        </button>

        <HeroSection onMenuClick={() => setIsMenuOpen(true)} />
        <ProfileSection />
        <ExpressionSection />
        <ServiceSection />
        <MotionDesignSection />
        <WebDevelopmentSection />
        <VisualDesignSection />
        <ArtDirectionSection />
        <WorksSection />
        <GetInTouchSection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  )
}

function HeroSection({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Circular Grid Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <CircularGrid left="8%" size={400} rings={4} />
        <CircularGrid left="35%" size={450} rings={5} />
        <CircularGrid left="58%" size={500} rings={6} />
        <CircularGrid right="8%" size={400} rings={4} />
      </div>

      {/* Glowing Sphere */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-[58%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px]"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/40 via-blue-500/50 to-purple-600/60 blur-3xl" />
          <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-cyan-300/60 via-blue-400/70 to-purple-500/80 blur-2xl" />
          <div className="absolute inset-[25%] rounded-full bg-gradient-to-br from-cyan-200/80 via-blue-300/90 to-purple-400/90 blur-xl" />
        </div>
      </motion.div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20%" y1="50%" x2="48%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="52%" y1="50%" x2="80%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      </svg>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-12 py-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-wider font-light"
        >
          KAITO NOTE
        </motion.div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onClick={onMenuClick}
          className="text-sm tracking-wider font-light hover:opacity-60 transition-opacity"
        >
          (MENU)
        </motion.button>
      </header>

      {/* Main Content */}
      <main className="relative z-20 px-12 flex items-center min-h-[calc(100vh-100px)]">
        <div className="w-full">
          {/* Category Labels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute left-[8%] top-[45%] text-xs tracking-wider font-light"
          >
            [AI/ML SOLUTIONS]
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute left-[32%] top-[45%] text-xs tracking-wider font-light"
          >
            [WEB DEVELOPMENT]
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute left-[60%] top-[45%] text-xs tracking-wider font-light"
          >
            [WEB3 & BLOCKCHAIN]
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute right-[8%] top-[45%] text-xs tracking-wider font-light"
          >
            [DATA VISUALIZATION]
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute right-12 top-32 max-w-md text-right"
          >
            <p className="text-[11px] leading-relaxed tracking-wide font-light">
              I CREATE INTELLIGENT, INTERACTIVE, AND DECENTRALIZED DIGITAL EXPERIENCES COMBINING AI REASONING,
              BLOCKCHAIN TECHNOLOGY, AND MODERN WEB FRAMEWORKS TO BUILD PRODUCTS THAT EMPOWER CREATIVITY.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-4xl mt-32"
          >
            <h1 className="text-7xl leading-tight font-light tracking-tight">
              Building <em className="font-serif not-italic">Intelligent</em> Solutions,
              <br />
              Crafting <em className="font-serif not-italic">Decentralized</em> Experiences.
              <br />
              <em className="font-serif not-italic">Empowering</em> the Future <em className="font-serif not-italic">of</em> Tech.
            </h1>
          </motion.div>
        </div>
      </main>
    </section>
  )
}

function ProfileSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-800 py-32">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-profile" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-profile)" />
        </svg>
      </div>

      {/* Large glowing sphere */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[500px] h-[500px]"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 via-blue-500/40 to-purple-600/50 blur-3xl" />
          <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-cyan-300/50 via-blue-400/60 to-purple-500/70 blur-2xl" />
        </div>
      </motion.div>

      <div className="relative z-10 px-12 max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-9xl font-light tracking-tight">Hello</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-xs tracking-wider font-light mb-8">[PROFILE]</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <p className="text-4xl leading-relaxed font-light">
            {"I'm "}
            <em className="font-serif not-italic">Panacea</em>.
            <br />
            AI Engineer and <em className="font-serif not-italic">Web</em> Developer.
            <br />I build <em className="font-serif not-italic">intelligent</em> systems and
            <br />
            decentralized applications, based in
            <br />
            Ho Chi Minh City, Vietnam,
            <br />
            with AI and blockchain at the core.
            <br />I create experiences that empower
            <br />
            creativity and innovation,
            <br />
            transforming how we <em className="font-serif not-italic">connect</em> with technology.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ExpressionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const image1Z = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 200])
  const image2Z = useTransform(scrollYProgress, [0, 0.5, 1], [-300, 0, 300])
  const image3Z = useTransform(scrollYProgress, [0, 0.5, 1], [-250, 0, 250])
  const image4Z = useTransform(scrollYProgress, [0, 0.5, 1], [-180, 0, 180])

  const image1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 1.2])
  const image2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1.3])
  const image3Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 1.1])
  const image4Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.15])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cyan-800 via-zinc-900 to-black py-32"
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-expression" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-expression)" />
        </svg>
      </div>

      {/* Circular overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
      </div>

      <div className="relative z-10 px-12 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-7xl leading-tight font-light">
            <em className="font-serif not-italic">Innovating</em> with Intelligence.
            <br />
            Continuously <em className="font-serif not-italic">Building</em>
            <br />
            Smart <em className="font-serif not-italic">and</em> Decentralized Solutions.
          </h2>
        </motion.div>

        <motion.div
          style={{
            scale: image1Scale,
            z: image1Z,
            rotateY: useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]),
          }}
          className="absolute left-[8%] top-[15%] w-72 h-56 rounded-lg overflow-hidden shadow-2xl"
        >
          <img src="/placeholder.svg?height=400&width=500" alt="Design mockup" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          style={{
            scale: image2Scale,
            z: image2Z,
            rotateY: useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, 20]),
          }}
          className="absolute left-[15%] top-[55%] w-64 h-48 rounded-lg overflow-hidden shadow-2xl"
        >
          <img src="/placeholder.svg?height=350&width=450" alt="Design mockup" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          style={{
            scale: image3Scale,
            z: image3Z,
            rotateY: useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]),
          }}
          className="absolute right-[12%] top-[25%] w-80 h-60 rounded-lg overflow-hidden shadow-2xl"
        >
          <img src="/placeholder.svg?height=450&width=600" alt="Design mockup" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          style={{
            scale: image4Scale,
            z: image4Z,
            rotateY: useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 15]),
          }}
          className="absolute left-[45%] top-[65%] w-72 h-52 rounded-lg overflow-hidden shadow-2xl"
        >
          <img src="/placeholder.svg?height=380&width=520" alt="Design mockup" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  )
}

function ServiceSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-blue-950/20 to-black py-32">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-service" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-service)" />
        </svg>
      </div>

      <div className="relative z-10 px-12 max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs tracking-wider font-light mb-8">[SERVICE]</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl leading-tight font-light mb-12">
            I combine <em className="font-serif not-italic">four</em> key areas
            <br />
            with <em className="font-serif not-italic">AI</em> and blockchain expertise,
            <br />
            building intelligent systems
            <br />
            that deliver transformative <em className="font-serif not-italic">digital experiences</em>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-sm leading-relaxed max-w-xl ml-auto text-right"
        >
          <p className="font-light">
            From AI-powered applications to decentralized platforms,
            <br />
            I create solutions that merge cutting-edge technology
            <br />
            with intuitive design to empower the future of digital innovation.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute right-[20%] bottom-[20%] text-xs tracking-wider"
      >
        01
        <br />
        AI/ML Solutions
      </motion.div>
    </section>
  )
}

function MotionDesignSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-end overflow-hidden bg-gradient-to-b from-black via-blue-950/30 to-black py-32">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-motion" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-motion)" />
        </svg>
      </div>

      <div className="relative z-10 px-12 py-32 max-w-3xl mr-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-xs tracking-wider font-light mb-16">01</p>
          <h3 className="text-6xl font-light mb-8">AI/ML Solutions</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed font-light">
            I design and build intelligent systems with LLMs,
            <br />
            RAG pipelines, and self-refinement methods for smarter,
            <br />
            context-aware user experiences across
            <br />
            various AI-powered applications.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function WebDevelopmentSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-black via-blue-950/20 to-black py-32">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-web" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-web)" />
        </svg>
      </div>

      {/* 3D Sphere wireframe */}
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[400px] h-[400px]">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <ellipse cx="200" cy="200" rx="180" ry="100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <ellipse cx="200" cy="200" rx="180" ry="140" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <ellipse cx="200" cy="200" rx="60" ry="180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <ellipse cx="200" cy="200" rx="100" ry="180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <ellipse cx="200" cy="200" rx="140" ry="180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <circle cx="200" cy="200" r="4" fill="rgba(255,255,255,0.2)" />
          <circle cx="200" cy="80" r="3" fill="rgba(255,255,255,0.2)" />
          <circle cx="200" cy="320" r="3" fill="rgba(255,255,255,0.2)" />
          <circle cx="80" cy="200" r="3" fill="rgba(255,255,255,0.2)" />
          <circle cx="320" cy="200" r="3" fill="rgba(255,255,255,0.2)" />
        </svg>
      </div>

      <div className="relative z-10 px-12 py-32 max-w-3xl ml-auto mr-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-xs tracking-wider font-light mb-16">02</p>
          <h3 className="text-6xl font-light mb-8">Full-Stack Web Development</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed font-light">
            I develop modern, responsive web applications
            <br />
            using React, Next.js, and Node.js with integrated APIs
            <br />
            and cloud databases, focusing on performance,
            <br />
            scalability, and exceptional user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function VisualDesignSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-end overflow-hidden bg-gradient-to-b from-black via-blue-950/30 to-black py-32">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-visual" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-visual)" />
        </svg>
      </div>

      <div className="relative z-10 px-12 py-32 max-w-3xl mr-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-xs tracking-wider font-light mb-16">03</p>
          <h3 className="text-6xl font-light mb-8">Web3 & Blockchain</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed font-light">
            I create decentralized platforms, NFT marketplaces,
            <br />
            and AI-driven blockchain experiences on Solana and Ethereum.
            <br />
            Building secure smart contracts and seamless wallet integrations
            <br />
            for the next generation of Web3 applications.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ArtDirectionSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-black via-blue-950/20 to-black py-32">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-art" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-art)" />
        </svg>
      </div>

      <div className="relative z-10 px-12 py-32 max-w-3xl ml-auto mr-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-xs tracking-wider font-light mb-16">04</p>
          <h3 className="text-6xl font-light mb-8">Data Visualization</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed font-light">
            I build interactive data dashboards, generative media tools,
            <br />
            and immersive 3D user interfaces for digital storytelling.
            <br />
            Transforming complex data into engaging visual narratives
            <br />
            that drive insights and decision-making.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function WorksSection() {
  return (
    <section className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-b from-black via-blue-950/30 to-black">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-5">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="whitespace-nowrap text-[200px] font-light"
        >
          WORKS • PORTFOLIO • PROJECTS • WORKS • PORTFOLIO • PROJECTS •
        </motion.div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-works" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-works)" />
        </svg>
      </div>

      <div className="absolute left-1/2 top-32 bottom-32 w-px bg-white/10" />

      <div className="relative z-10 px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16 flex items-center justify-between"
        >
          <p className="text-xs tracking-wider font-light">[WORKS]</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="aspect-video bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg overflow-hidden mb-6 relative shadow-2xl"
            >
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="VOID project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
            <h4 className="text-3xl font-light mb-2 group-hover:opacity-60 transition-opacity">VOID</h4>
            <p className="text-sm text-white/60 tracking-wider">AI, WEB3</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="aspect-video bg-gradient-to-br from-cyan-400 to-teal-600 rounded-lg overflow-hidden mb-6 flex items-center justify-center shadow-2xl relative"
            >
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="N.OVA project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </motion.div>
            <h4 className="text-3xl font-light mb-2 group-hover:opacity-60 transition-opacity">N.OVA</h4>
            <p className="text-sm text-white/60 tracking-wider">AI, WEB3, IDENTITY</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="aspect-video bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg overflow-hidden mb-6 relative shadow-2xl"
            >
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Genie project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
            <h4 className="text-3xl font-light mb-2 group-hover:opacity-60 transition-opacity">Genie</h4>
            <p className="text-sm text-white/60 tracking-wider">AI, HEALTHTECH</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 rounded-lg overflow-hidden mb-6 relative shadow-2xl"
            >
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Flipside project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
            <h4 className="text-3xl font-light mb-2 group-hover:opacity-60 transition-opacity">Flipside</h4>
            <p className="text-sm text-white/60 tracking-wider">BLOCKCHAIN, ANALYTICS</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function GetInTouchSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-blue-950/40 to-black py-32">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-contact" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-contact)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-12"
      >
        <h2 className="text-9xl font-light tracking-tight">Get in Touch</h2>
      </motion.div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-blue-950/40 to-blue-950/60 py-32">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-contact-detail" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-contact-detail)" />
        </svg>
      </div>

      <div className="relative z-10 px-12 max-w-7xl mx-auto">
        {/* Contact Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-9xl font-light tracking-tight">Contact</h2>
        </motion.div>

        {/* Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-16 grid grid-cols-2 gap-16"
        >
          <div>
            <h3 className="text-3xl font-light mb-8">Information</h3>
          </div>
          <div className="text-sm leading-relaxed font-light">
            <p>Currently available for new projects and collaborations. Open to AI/ML development, Web3 applications, and full-stack solutions.</p>
          </div>
        </motion.div>

        {/* Collaboration Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-16 grid grid-cols-2 gap-16"
        >
          <div>
            <h3 className="text-3xl font-light mb-8">Collaboration</h3>
          </div>
          <div className="text-sm leading-relaxed font-light">
            <p>Slack / Discord / Zoom / GitHub</p>
          </div>
        </motion.div>

        {/* Mail Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-16 grid grid-cols-2 gap-16"
        >
          <div>
            <h3 className="text-3xl font-light mb-8">Mail</h3>
          </div>
          <div className="text-sm leading-relaxed font-light space-y-2">
            <p>ng.t.thien01@gmail.com</p>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-16 grid grid-cols-2 gap-16"
        >
          <div>
            <h3 className="text-3xl font-light mb-8">Achievements</h3>
          </div>
          <div className="text-sm leading-relaxed font-light space-y-2">
            <p>🏆 Best AI App – Solana Swinburne Hackathon 2025</p>
            <p>🎯 Solana Colosseum Breakout Hackathon 2025</p>
            <p>💡 Best Performance – Computing Technology Innovative Project</p>
          </div>
        </motion.div>

        {/* SNS Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-16 grid grid-cols-2 gap-16"
        >
          <div>
            <h3 className="text-3xl font-light mb-8">SNS</h3>
          </div>
          <div className="text-sm leading-relaxed font-light space-y-3">
            <a href="https://github.com/Panacea2005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
              GitHub <span className="text-xs">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/thi%C3%AAn-nguy%E1%BB%85n-l%C3%AA-tr%C6%B0%E1%BB%9Dng-65773b29b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
              LinkedIn <span className="text-xs">↗</span>
            </a>
            <a href="https://x.com/panacea___005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
              X <span className="text-xs">↗</span>
            </a>
            <a href="https://www.youtube.com/@Panacea2005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
              YouTube <span className="text-xs">↗</span>
            </a>
            <a href="https://www.instagram.com/__tthien/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
              Instagram <span className="text-xs">↗</span>
            </a>
          </div>
        </motion.div>

        {/* Inspirational Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-32 mt-16"
        >
          <h3 className="text-6xl leading-tight font-light">
            Feel <em className="font-serif not-italic">free</em> to get in touch.
            <br />
            {"I'm looking "}
            <em className="font-serif not-italic">forward</em> to hearing from you.
            <br />
            {"Let's create something "}
            <em className="font-serif not-italic">amazing</em> together.
          </h3>
        </motion.div>
      </div>
    </section>
  )
}

function FooterSection() {
  return (
    <section className="relative min-h-screen bg-white text-black py-32">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-footer" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" />
        </svg>
      </div>

      {/* Circular overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-black" />
        <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-black" />
        <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-black" />
      </div>

      <div className="relative z-10 px-12 flex gap-24">
        {/* Left side - Navigation */}
        <div className="w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-4xl font-light mb-12">INDEX</h3>
            <nav className="space-y-6 text-2xl font-light">
              <Link href="/profile" className="block hover:opacity-60 transition-opacity">
                PROFILE
              </Link>
              <Link href="/works" className="block hover:opacity-60 transition-opacity">
                WORKS
              </Link>
              <Link href="/contact" className="block hover:opacity-60 transition-opacity">
                CONTACT
              </Link>
            </nav>
          </motion.div>
        </div>

        {/* Right side - Contact Info */}
        <div className="w-2/3 flex flex-col gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <p className="text-xs tracking-wider mb-4 italic">ADDRESS</p>
            <p className="text-sm font-light mb-1">{"34°41'38\"N, 135°30'08\"E"}</p>
            <p className="text-sm font-light">20.34.06</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <p className="text-xs tracking-wider mb-4 italic">MAIL</p>
            <p className="text-sm font-light">id@kaitonote.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <p className="text-xs tracking-wider mb-4 italic">SNS</p>
            <div className="space-y-2 text-sm font-light">
              <div className="flex items-center justify-end gap-2 hover:opacity-60 transition-opacity">
                X <span className="text-xs">↗</span>
              </div>
              <div className="flex items-center justify-end gap-2 hover:opacity-60 transition-opacity">
                Instagram <span className="text-xs">↗</span>
              </div>
              <div className="flex items-center justify-end gap-2 hover:opacity-60 transition-opacity">
                Vimeo <span className="text-xs">↗</span>
              </div>
              <div className="flex items-center justify-end gap-2 hover:opacity-60 transition-opacity">
                YouTube <span className="text-xs">↗</span>
              </div>
              <div className="flex items-center justify-end gap-2 hover:opacity-60 transition-opacity">
                Behance <span className="text-xs">↗</span>
              </div>
              <div className="flex items-center justify-end gap-2 hover:opacity-60 transition-opacity">
                GitHub <span className="text-xs">↗</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CircularGrid({
  left,
  right,
  size,
  rings,
}: {
  left?: string
  right?: string
  size: number
  rings: number
}) {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2"
      style={{
        left: left,
        right: right,
      }}
    >
      <div className="relative" style={{ width: size, height: size }}>
        {Array.from({ length: rings }).map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-white/10"
            style={{
              width: `${((i + 1) / rings) * 100}%`,
              height: `${((i + 1) / rings) * 100}%`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    </div>
  )
}
