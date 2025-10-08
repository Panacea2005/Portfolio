"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { MenuOverlay } from "@/components/menu-overlay"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"

const projects = [
  { id: 1, title: "VOID", category: "AI,WEB3", span: "col-span-2 row-span-1" },
  { id: 2, title: "N.OVA", category: "AI,WEB3", span: "col-span-1 row-span-1" },
  { id: 3, title: "Genie", category: "AI,HEALTHTECH", span: "col-span-1 row-span-1" },
  { id: 4, title: "Flipside", category: "BLOCKCHAIN,ANALYTICS", span: "col-span-2 row-span-1" },
  { id: 5, title: "AI Music Generator", category: "AI", span: "col-span-1 row-span-1" },
  { id: 6, title: "NFT Marketplace", category: "WEB3", span: "col-span-1 row-span-1" },
  { id: 7, title: "RAG Pipeline System", category: "AI", span: "col-span-1 row-span-1" },
  { id: 8, title: "DeFi Dashboard", category: "WEB3,ANALYTICS", span: "col-span-1 row-span-1" },
  { id: 9, title: "AI Chatbot Platform", category: "AI", span: "col-span-2 row-span-1" },
  { id: 10, title: "Smart Contract Suite", category: "BLOCKCHAIN", span: "col-span-1 row-span-1" },
  { id: 11, title: "Data Visualization Tool", category: "WEB,ANALYTICS", span: "col-span-1 row-span-1" },
  { id: 12, title: "AI Image Generator", category: "AI", span: "col-span-1 row-span-1" },
]

export default function WorksPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cursorText, setCursorText] = useState<string | null>(null)
  const [percent, setPercent] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedType, setSelectedType] = useState("ALL")
  const [selectedCategory, setSelectedCategory] = useState("ALL")
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        }
      })
      
      const target = e.target as HTMLElement
      const hoverText = target.getAttribute('data-cursor-text')
      if (hoverText !== cursorText) {
        setCursorText(hoverText)
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [cursorText])

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const textColor = percent >= 98 ? 'text-black' : 'text-white'

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {!isLoading && (
        <>
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
            <div 
              className="absolute inset-0 rounded-full bg-zinc-700/30"
              style={{ filter: "blur(3px)" }}
            />
            
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

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-12 z-40 text-xs tracking-wider font-light transition-colors duration-300 ${textColor}`}
            data-cursor-text="SCROLL TO TOP"
          >
            BACK TO TOP
          </button>

          {/* Scroll Percentage */}
          <div className={`fixed bottom-8 left-12 z-40 text-xs tracking-wider font-light transition-colors duration-300 ${textColor}`}>
            SCROLL {percent}%
          </div>

          {/* Works Content with Background */}
          <WorksWithBackground selectedType={selectedType} setSelectedType={setSelectedType} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </>
      )}
    </>
  )
}

interface WorksWithBackgroundProps {
  selectedType: string
  setSelectedType: (type: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

function WorksWithBackground({ selectedType, setSelectedType, selectedCategory, setSelectedCategory }: WorksWithBackgroundProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ["start start", "end end"] })
  
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
        {/* Works section with white text */}
        <div className="text-white">
          <section className="relative min-h-screen bg-transparent py-32">
            {/* Vertical lines pattern - animated from top to bottom */}
            <div className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden">
              {[10, 30, 50, 70, 90].map((left, i) => (
                <motion.div
                  key={`v-${left}`}
                  className="absolute left-0 top-0 bottom-0 w-[0.5px] bg-white origin-top"
                  style={{ left: `${left}%` }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                />
              ))}
            </div>

            <div className="relative z-10">
              {/* Content container with proper alignment */}
              <div className="relative mb-20" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                {/* Works Heading and Filters on same line */}
                <div className="flex items-start justify-between">
                  {/* Works Heading - aligned to left */}
                  <div className="overflow-hidden">
                    <motion.h2 
                      className="text-9xl font-light tracking-tight leading-none"
                      initial="hidden"
                      animate="visible"
                      transition={{ staggerChildren: 0.03, delayChildren: 0.8 }}
                    >
                      {"Works".split("").map((char, i) => (
                        <motion.span
                          key={i}
                          variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                          }}
                          style={{ display: "inline-block" }}
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </motion.h2>
                  </div>

                  {/* Filters - aligned to right */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex gap-16 text-sm"
                  >
                  <div>
                    <p className="text-white mb-4 font-serif not-italic">Type</p>
                    <div className="space-y-2">
                      {["ALL", "PROJECT", "PLAY"].map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`block transition-colors ${
                            selectedType === type ? "text-white" : "text-white/40 hover:text-white/60"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-white mb-4 font-serif not-italic">Category</p>
                    <div className="space-y-2">
                      {["ALL", "AI", "WEB3", "BLOCKCHAIN", "ANALYTICS"].map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`block transition-colors ${
                            selectedCategory === category ? "text-white" : "text-white/40 hover:text-white/60"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  </motion.div>
                </div>
              </div>

              <div className="relative" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                {/* Projects Grid */}
                <div className="grid grid-cols-3 auto-rows-[300px] gap-0 mb-32">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className={`${project.span} group relative overflow-hidden`}
                    >
                      <div className="relative w-full h-full">
                        <img
                          src="/profile.jpg"
                          alt={project.title}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:blur-md group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-8">
                          <h3 className="text-3xl font-light mb-2 text-white">{project.title}</h3>
                          <p className="text-sm text-white/60 tracking-wider">{project.category}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
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
