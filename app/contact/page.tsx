"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { MenuOverlay } from "@/components/menu-overlay"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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

      <div className="bg-black text-white">
        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-12 z-50 text-xs tracking-wider font-light text-white/60 hover:text-white transition-colors"
        >
          BACK TO TOP
        </button>

        <Header onMenuClick={() => setIsMenuOpen(true)} />

        {/* Get in Touch Hero */}
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

        {/* Contact Details Section */}
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
                <p>Currently available for new projects and collaborations. Open to AI/ML development, Web3 applications, and full-stack solutions. Available from immediately.</p>
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
                <p>Phone: +84 931 549 083</p>
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
                <p>🏆 Best AI App – Solana Swinburne Hackathon 2025 (VOID)</p>
                <p>🎯 Solana Colosseum Breakout Hackathon 2025 (N.OVA)</p>
                <p>💡 Best Performance – Computing Technology Innovative Project (Flipside)</p>
                <p>🌍 Top Global Participant – Colosseum Breakout Hackathon 2025</p>
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
      </div>

      <Footer />
    </>
  )
}
