"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
  { id: 1, title: "KAITO NOTE", category: "WEB", span: "col-span-1 row-span-1" },
  { id: 2, title: "SAIZEN+", category: "MOVIE,DESIGN", span: "col-span-2 row-span-1" },
  { id: 3, title: "時間 (Time)", category: "DESIGN", span: "col-span-1 row-span-1" },
  { id: 4, title: "ROKU KYOTO", category: "WEB", span: "col-span-2 row-span-1" },
  { id: 5, title: "頑張らない", category: "DESIGN", span: "col-span-1 row-span-1" },
  { id: 6, title: "WELCOME TO OUR WEDDING", category: "WEB,DESIGN", span: "col-span-1 row-span-1" },
  { id: 7, title: "VANSCH", category: "MOVIE", span: "col-span-1 row-span-1" },
  { id: 8, title: "interg", category: "WEB", span: "col-span-1 row-span-1" },
  { id: 9, title: "SHIROISHI", category: "WEB", span: "col-span-2 row-span-1" },
  { id: 10, title: "Typography Exploration", category: "DESIGN", span: "col-span-1 row-span-1" },
  { id: 11, title: "Abstract Composition", category: "DESIGN", span: "col-span-1 row-span-1" },
  { id: 12, title: "Purple Universe", category: "MOTION", span: "col-span-1 row-span-1" },
  { id: 13, title: "Sky Dreams", category: "MOVIE", span: "col-span-1 row-span-1" },
  { id: 14, title: "Circular Vision", category: "DESIGN", span: "col-span-1 row-span-1" },
  { id: 15, title: "Geometric Balance", category: "DESIGN", span: "col-span-1 row-span-1" },
]

function MenuOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex"
    >
      <div onClick={onClose} className="w-1/2 bg-transparent" />
      <div className="w-1/2 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-blue-800/90 backdrop-blur-xl p-16 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-600/40 blur-3xl" />
        </div>

        <button
          onClick={onClose}
          className="absolute top-8 right-12 text-sm tracking-wider font-light text-white hover:opacity-60 transition-opacity"
        >
          [CLOSE]
        </button>

        <nav className="relative z-10 space-y-8 mb-16">
          <Link
            href="/"
            className="block text-6xl font-light text-white hover:opacity-60 transition-opacity tracking-wide"
          >
            INDEX
          </Link>
          <Link
            href="/profile"
            className="block text-6xl font-light text-white hover:opacity-60 transition-opacity tracking-wide"
          >
            PROFILE
          </Link>
          <Link
            href="/works"
            className="block text-6xl font-light text-white hover:opacity-60 transition-opacity tracking-wide"
          >
            WORKS
          </Link>
          <Link
            href="/contact"
            className="block text-6xl font-light text-white hover:opacity-60 transition-opacity tracking-wide"
          >
            CONTACT
          </Link>
        </nav>

        <div className="relative z-10 grid grid-cols-2 gap-x-16 gap-y-3 text-white">
          <Link href="#" className="text-sm hover:opacity-60 transition-opacity flex items-center gap-2">
            X ↗
          </Link>
          <Link href="#" className="text-sm hover:opacity-60 transition-opacity flex items-center gap-2">
            Instagram ↗
          </Link>
          <Link href="#" className="text-sm hover:opacity-60 transition-opacity flex items-center gap-2">
            Vimeo ↗
          </Link>
          <Link href="#" className="text-sm hover:opacity-60 transition-opacity flex items-center gap-2">
            YouTube ↗
          </Link>
          <Link href="#" className="text-sm hover:opacity-60 transition-opacity flex items-center gap-2">
            Behance ↗
          </Link>
          <Link href="#" className="text-sm hover:opacity-60 transition-opacity flex items-center gap-2">
            GitHub ↗
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function WorksPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedType, setSelectedType] = useState("ALL")
  const [selectedCategory, setSelectedCategory] = useState("ALL")

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

      <div className="bg-black text-white min-h-screen">
        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-12 z-50 text-xs tracking-wider font-light text-white/60 hover:text-white transition-colors"
        >
          BACK TO TOP
        </button>

        {/* Header */}
        <header className="relative z-20 flex items-center justify-between px-12 py-8">
          <Link href="/" className="text-sm tracking-wider font-light hover:opacity-60 transition-opacity">
            KAITO NOTE
          </Link>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-sm tracking-wider font-light hover:opacity-60 transition-opacity"
          >
            (MENU)
          </button>
        </header>

        {/* Works Section */}
        <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-blue-950/20 via-black to-black">
          {/* Grid Background */}
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

          <div className="relative z-10 px-12 max-w-[1600px] mx-auto">
            <div className="flex items-start justify-between mb-20">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[120px] font-light leading-none"
              >
                Works
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex gap-16 text-sm"
              >
                <div>
                  <p className="text-white/40 mb-4 italic">Type</p>
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
                  <p className="text-white/40 mb-4 italic">Category</p>
                  <div className="space-y-2">
                    {["ALL", "MOVIE", "WEB", "DESIGN"].map((category) => (
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

            <div className="grid grid-cols-3 auto-rows-[300px] gap-4">
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
                      src={`/placeholder.svg?height=600&width=800&text=${project.title}`}
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
        </section>

        <footer className="relative border-t border-white/10 bg-gradient-to-b from-black to-blue-950/20">
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-footer" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-footer)" />
            </svg>
          </div>

          <div className="relative z-10 px-12 py-16">
            <div className="grid grid-cols-4 gap-12 max-w-[1600px] mx-auto">
              <div>
                <h3 className="text-2xl font-light mb-8">INDEX</h3>
                <nav className="space-y-3">
                  <Link href="/profile" className="block text-sm text-white/60 hover:text-white transition-colors">
                    PROFILE
                  </Link>
                  <Link href="/works" className="block text-sm text-white/60 hover:text-white transition-colors">
                    WORKS
                  </Link>
                  <Link href="/contact" className="block text-sm text-white/60 hover:text-white transition-colors">
                    CONTACT
                  </Link>
                </nav>
              </div>

              <div>
                <h3 className="text-sm font-light mb-8 italic text-white/40">ADDRESS</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  34°41'38"N, 135°30'08"E
                  <br />
                  20.34.06
                </p>
              </div>

              <div>
                <h3 className="text-sm font-light mb-8 italic text-white/40">MAIL</h3>
                <a
                  href="mailto:id@kaitonote.com"
                  className="block text-sm text-white/60 hover:text-white transition-colors mb-2"
                >
                  id@kaitonote.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-light mb-8 italic text-white/40">SNS</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-white/60 hover:text-white transition-colors">
                    X ↗
                  </a>
                  <a href="#" className="block text-sm text-white/60 hover:text-white transition-colors">
                    Instagram ↗
                  </a>
                  <a href="#" className="block text-sm text-white/60 hover:text-white transition-colors">
                    Vimeo ↗
                  </a>
                  <a href="#" className="block text-sm text-white/60 hover:text-white transition-colors">
                    YouTube ↗
                  </a>
                  <a href="#" className="block text-sm text-white/60 hover:text-white transition-colors">
                    Behance ↗
                  </a>
                  <a href="#" className="block text-sm text-white/60 hover:text-white transition-colors">
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
