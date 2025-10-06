"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { MenuOverlay } from "@/components/menu-overlay"
import { Footer } from "@/components/footer"

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

        <Header onMenuClick={() => setIsMenuOpen(true)} />

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
      </div>

      <Footer />
    </>
  )
}
