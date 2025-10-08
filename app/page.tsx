"use client"

import { useEffect, useState, useRef } from "react"
import { useScroll, motion, useTransform, useMotionTemplate } from "framer-motion"
import { MenuOverlay } from "@/components/menu-overlay"
import { HeroSection } from "@/components/sections/hero-section"
import { ProfileSection } from "@/components/sections/profile-section"
import { ExpressionSection } from "@/components/sections/expression-section"
import { ServiceSection } from "@/components/sections/service-section"
import { WorksSection } from "@/components/sections/works-section"
import { GetInTouchSection } from "@/components/sections/get-in-touch-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { LoadingScreen } from "@/components/loading-screen"

export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cursorText, setCursorText] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth animation
      requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        }
      })
      
      // Detect hover target and set cursor text
      const target = e.target as HTMLElement
      const hoverText = target.getAttribute('data-cursor-text')
      if (hoverText !== cursorText) {
        setCursorText(hoverText)
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [cursorText])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[999] flex items-center justify-center transition-all duration-200 ease-out"
        style={{
          transform: "translate(0px, 0px)",
          width: cursorText ? '140px' : '100px',
          height: cursorText ? '140px' : '100px',
          marginLeft: cursorText ? '-70px' : '-50px',
          marginTop: cursorText ? '-70px' : '-50px',
          willChange: 'transform',
        }}
      >
        {/* Blurred background circle */}
        <div 
          className="absolute inset-0 rounded-full bg-zinc-700/30"
          style={{ filter: "blur(3px)" }}
        />
        
        {/* Sharp content (plus or text) */}
        <div className="relative z-10 flex items-center justify-center">
          {cursorText ? (
            <span className="text-white text-xs font-light text-center px-3 leading-tight">
              {cursorText}
            </span>
          ) : (
            <span className="text-white/50 text-2xl font-light">+</span>
          )}
        </div>
      </div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Persistent Header */}
      <div className="fixed top-0 left-0 right-0 z-40 text-white pt-8">
        <Header onMenuClick={() => setIsMenuOpen(true)} />
        </div>

      {/* Back to Top - fixed */}
        <button
          onClick={scrollToTop}
        className="fixed bottom-8 right-12 z-40 text-xs tracking-wider font-light text-white hover:opacity-80 transition-opacity"
        data-cursor-text="SCROLL TO TOP"
        >
          BACK TO TOP
        </button>

      {/* Scroll Percentage - bottom-left fixed */}
      <ScrollPercent />

      {/* Hero + Profile + Expression wrapper with scoped rotating sphere */}
      <HeroProfileWithSphere>
        <div className="relative z-10 text-white">
        <HeroSection onMenuClick={() => setIsMenuOpen(true)} isLoadingComplete={!isLoading} />
        <ProfileSection />
        <ExpressionSection />
        </div>
      </HeroProfileWithSphere>

      {/* Services to Get In Touch + Footer with /background.png (scoped sticky) */}
      <ServicesGetInTouchFooterWithBackground />
    </>
  )
}

function HeroProfileWithSphere({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  // Map the sphere evolution across hero -> profile -> expression
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ["start start", "end end"] })
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [1.5, 3.0, 4.2, 1.2])
  const blurPx = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 8, 22, 28])
  const filter = useMotionTemplate`blur(${blurPx}px)`
  const opacity = useTransform(scrollYProgress, [0, 0.7, 0.9, 1], [1, 1, 0.6, 0])

  return (
    <div ref={wrapperRef} className="relative bg-black">
      <motion.div className="fixed inset-0 pointer-events-none flex items-center justify-center z-0" style={{ opacity }}>
        <motion.img
          src="/gradient-sphere.png"
          alt="Gradient Sphere"
          className="w-[66vmin] h-[66vmin] object-contain"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          style={{ scale, filter, willChange: "transform", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        />
      </motion.div>
      {children}
      </div>
  )
}

function ServicesGetInTouchFooterWithBackground() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ["start start", "end end"] })
  
  // Quick transition at 98%+
  const footerTransition = useTransform(scrollYProgress, [0.98, 1], [0, 1])
  
  return (
    <div ref={wrapperRef} className="relative">
      {/* Sticky background image */}
      <div className="sticky top-0 h-0 z-0">
        <div
          className="h-screen w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/background.png')" }}
        />
      </div>
      
      <div className="relative z-10">
        {/* Service, Works, GetInTouch with white text */}
        <div className="text-white">
          <ServiceSection />
          <WorksSection />
          <GetInTouchSection />
        </div>
        
        {/* Footer with transition at 98% */}
        <motion.div 
          className="relative"
          style={{
            backgroundColor: useTransform(footerTransition, (v) => `rgba(255, 255, 255, ${v})`),
          }}
        >
          <Footer transitionProgress={footerTransition} />
        </motion.div>
      </div>
    </div>
  )
}

function ScrollPercent() {
  const [percent, setPercent] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const p = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0
      setPercent(Math.round(p))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  
  // Change to black when scroll is >= 98% (footer transition)
  const textColor = percent >= 98 ? 'text-black' : 'text-white'
  
  return (
    <div className={`fixed bottom-8 left-12 z-40 text-xs tracking-wider font-light transition-colors duration-300 ${textColor}`}>
      SCROLL {percent}%
    </div>
  )
}