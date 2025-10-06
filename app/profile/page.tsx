"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { MenuOverlay } from "@/components/menu-overlay"
import { Footer } from "@/components/footer"

export default function ProfilePage() {
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

      <div className="bg-gradient-to-b from-blue-950 via-blue-900 to-cyan-800 text-white">
        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-12 z-50 text-xs tracking-wider font-light text-white/60 hover:text-white transition-colors"
        >
          BACK TO TOP
        </button>

        <Header onMenuClick={() => setIsMenuOpen(true)} />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden py-32">
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

          <div className="relative z-10 px-12 max-w-7xl mx-auto w-full grid grid-cols-2 gap-16 items-center">
            {/* Left - Silhouette Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-06%20210232-JkSs2FR45nOKnzkrRIzMrYETsECIha.png"
                  alt="Profile silhouette"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-12"
            >
              <h1 className="text-6xl leading-tight font-light text-balance">
                <em className="font-serif not-italic">Intelligent</em> systems and
                <br />
                decentralized <em className="font-serif not-italic">solutions</em>,
                <br />
                Transforming the <em className="font-serif not-italic">future</em> of technology.
              </h1>

              <Link
                href="/profile"
                className="inline-flex items-center gap-2 text-2xl font-light hover:opacity-60 transition-opacity"
              >
                Profile <span className="text-lg">↗</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden py-32 bg-gradient-to-b from-transparent to-black/40">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-bio" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-bio)" />
            </svg>
          </div>

          <div className="relative z-10 px-12 max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-8">
                <p className="text-lg leading-relaxed font-light">
                  Panacea, AI Engineer and Web Developer. Born in 2005. I'm a Computer Science student at Swinburne University of Technology majoring in Artificial Intelligence, with hands-on experience across AI systems, Web3 platforms, and full-stack development. My journey began with a deep curiosity for how intelligent systems can shape user experiences — leading me to build projects that merge AI with blockchain, data visualization, and creative media.
                </p>

                <p className="text-sm leading-relaxed font-light text-white/80">
                  I've developed and led several innovative applications, including VOID, an award-winning AI-powered NFT platform (Best AI App – Solana Swinburne Hackathon 2025), and N.OVA, an AI-native Web3 identity platform showcased at the Solana Colosseum Breakout Hackathon 2025. My recent work explores agentic AI systems and Retrieval-Augmented Generation (RAG) pipelines for mental health and personal identity applications.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                viewport={{ once: true }}
                className="pt-16"
              >
                <h2 className="text-[120px] leading-none font-light text-white/10">AI Engineer Web Dev</h2>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="relative min-h-screen py-32 bg-gradient-to-b from-black/40 via-blue-950/60 to-blue-950/80">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-skills" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-skills)" />
            </svg>
          </div>

          <div className="relative z-10 px-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="border-t border-white/10 py-16 grid grid-cols-3 gap-16"
            >
              <div>
                <h3 className="text-4xl font-light mb-8">Skills</h3>
              </div>
              <div className="col-span-2 text-lg leading-relaxed font-light">
                <p>
                  Python / JavaScript / TypeScript / Kotlin / C++ / C# / PHP / SQL / React.js / Next.js / Node.js / Tailwind CSS / LangChain / PyTorch / Hugging Face / Solana / Ethereum / Web3.js / Solidity
                </p>
              </div>
            </motion.div>

            {/* Tools Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              viewport={{ once: true }}
              className="border-t border-white/10 py-16 grid grid-cols-3 gap-16"
            >
              <div>
                <h3 className="text-4xl font-light mb-8">Tools</h3>
              </div>
              <div className="col-span-2 text-lg leading-relaxed font-light">
                <p>Git / GitHub Actions / Docker / VS Code / Supabase / Pinata / IPFS / GroqCloud / Replicate / D3.js / Three.js</p>
              </div>
            </motion.div>

            {/* Awards Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              viewport={{ once: true }}
              className="border-t border-white/10 py-16 grid grid-cols-3 gap-16"
            >
              <div>
                <h3 className="text-4xl font-light mb-8">Awards</h3>
              </div>
              <div className="col-span-2 text-lg leading-relaxed font-light space-y-2">
                <p>🏆 Best AI App – Solana Swinburne Hackathon 2025 (VOID)</p>
                <p>🎯 Participant – Solana Colosseum Breakout Hackathon 2025 (N.OVA)</p>
                <p>💡 Best Performance – Computing Technology Innovative Project (Flipside)</p>
                <p>🌍 Top Global Participant – Colosseum Breakout Hackathon 2025</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
