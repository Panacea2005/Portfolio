"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { MenuOverlay } from "@/components/menu-overlay"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cursorText, setCursorText] = useState<string | null>(null)
  const [percent, setPercent] = useState(0)
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

  const textColor = percent >= 98 ? 'text-black' : 'text-white'

  return (
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

      {/* Contact Details Section with Background */}
      <ContactWithBackground />
    </>
  )
}

function ContactWithBackground() {
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
        {/* Contact section with white text */}
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
              {/* Contact Heading */}
              <div className="mb-32 overflow-hidden" style={{ paddingLeft: '10%' }}>
                <motion.h2 
                  className="text-9xl font-light tracking-tight"
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.03, delayChildren: 0.8 }}
                >
                  {"Contact".split("").map((char, i) => (
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

              {/* Sections container with proper alignment - from line 1 (10%) to line 5 (90%) */}
              <div className="relative" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                {/* Information Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden"
                  style={{ height: '60vh' }}
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="border-t-2 border-white/60 origin-left"
                  />
                  <div className="pt-16 grid grid-cols-2 gap-0">
                    <div className="overflow-hidden">
                      <motion.h3 
                        className="text-3xl font-light mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.02, delayChildren: 0.4 }}
                      >
                        {"Information".split("").map((char, i) => (
                          <motion.span
                            key={i}
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0 }
                            }}
                            style={{ display: "inline-block" }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </motion.h3>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }} viewport={{ once: true }} className="text-sm leading-relaxed font-light">
                      <p>Currently available for new projects and collaborations. Open to AI/ML development, Web3 applications, and full-stack solutions. Available from immediately.</p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Collaboration Section */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} viewport={{ once: true }} className="relative overflow-hidden" style={{ height: '60vh' }}>
                  <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="border-t-2 border-white/60 origin-left" />
                  <div className="pt-16 grid grid-cols-2 gap-0">
                    <div className="overflow-hidden">
                      <motion.h3 
                        className="text-3xl font-light mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.02, delayChildren: 0.5 }}
                      >
                        {"Collaboration".split("").map((char, i) => (
                          <motion.span
                            key={i}
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0 }
                            }}
                            style={{ display: "inline-block" }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </motion.h3>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }} viewport={{ once: true }} className="text-sm leading-relaxed font-light">
                      <p>Slack / Discord / Zoom / GitHub</p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Mail Section */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} viewport={{ once: true }} className="relative overflow-hidden" style={{ height: '60vh' }}>
                  <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="border-t-2 border-white/60 origin-left" />
                  <div className="pt-16 grid grid-cols-2 gap-0">
                    <div className="overflow-hidden">
                      <motion.h3 
                        className="text-3xl font-light mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.02, delayChildren: 0.6 }}
                      >
                        {"Mail".split("").map((char, i) => (
                          <motion.span
                            key={i}
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0 }
                            }}
                            style={{ display: "inline-block" }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </motion.h3>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }} viewport={{ once: true }} className="text-sm leading-relaxed font-light space-y-2">
                      <p>ng.t.thien01@gmail.com</p>
                      <p>Phone: +84 931 549 083</p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Achievements Section */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} viewport={{ once: true }} className="relative overflow-hidden" style={{ height: '60vh' }}>
                  <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="border-t-2 border-white/60 origin-left" />
                  <div className="pt-16 grid grid-cols-2 gap-0">
                    <div className="overflow-hidden">
                      <motion.h3 
                        className="text-3xl font-light mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.02, delayChildren: 0.7 }}
                      >
                        {"Achievements".split("").map((char, i) => (
                          <motion.span
                            key={i}
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0 }
                            }}
                            style={{ display: "inline-block" }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </motion.h3>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }} viewport={{ once: true }} className="text-sm leading-relaxed font-light space-y-2">
                      <p>🏆 Best AI App – Solana Swinburne Hackathon 2025 (VOID)</p>
                      <p>🎯 Solana Colosseum Breakout Hackathon 2025 (N.OVA)</p>
                      <p>💡 Best Performance – Computing Technology Innovative Project (Flipside)</p>
                      <p>🌍 Top Global Participant – Colosseum Breakout Hackathon 2025</p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* SNS Section */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }} viewport={{ once: true }} className="relative overflow-hidden" style={{ height: '60vh' }}>
                  <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ delay: 0.6, duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="border-t-2 border-white/60 origin-left" />
                  <div className="pt-16 grid grid-cols-2 gap-0">
                    <div className="overflow-hidden">
                      <motion.h3 
                        className="text-3xl font-light mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.02, delayChildren: 0.8 }}
                      >
                        {"SNS".split("").map((char, i) => (
                          <motion.span
                            key={i}
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0 }
                            }}
                            style={{ display: "inline-block" }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </motion.h3>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }} viewport={{ once: true }} className="text-sm leading-relaxed font-light space-y-3">
                      <a href="https://github.com/Panacea2005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity" data-cursor-text="GITHUB">
                        GitHub <span className="text-xs">↗</span>
                      </a>
                      <a href="https://www.linkedin.com/in/thi%C3%AAn-nguy%E1%BB%85n-l%C3%AA-tr%C6%B0%E1%BB%9Dng-65773b29b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity" data-cursor-text="LINKEDIN">
                        LinkedIn <span className="text-xs">↗</span>
                      </a>
                      <a href="https://x.com/panacea___005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity" data-cursor-text="X / TWITTER">
                        X <span className="text-xs">↗</span>
                      </a>
                      <a href="https://www.youtube.com/@Panacea2005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity" data-cursor-text="YOUTUBE">
                        YouTube <span className="text-xs">↗</span>
                      </a>
                      <a href="https://www.instagram.com/__tthien/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity" data-cursor-text="INSTAGRAM">
                        Instagram <span className="text-xs">↗</span>
                      </a>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Inspirational Text */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }} viewport={{ once: true }} className="relative overflow-hidden">
                  <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ delay: 0.7, duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="border-t-2 border-white/60 origin-left" />
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="pt-32 mt-16">
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
                </motion.div>
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
