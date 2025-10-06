"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { MenuOverlay } from "@/components/menu-overlay"

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
                <em className="font-serif not-italic">Unforgettable</em> impact and emotion
                <br />
                Touching in the <em className="font-serif not-italic">heart</em>,
                <br />
                Like a <em className="font-serif not-italic">blue flame</em> igniting.
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
                  Kaito Note, Motion Designer and Web Developer. Born in 1997. I began creating videos after discovering
                  motion design while working in web production following university. Now based in Osaka, I specialize
                  in motion design, handling both video production and web development. I work on various digital
                  creative projects, including corporate promotions, branding, campaigns, ads, web content, and music
                  videos, focusing on maximizing the value of brands through unique, sophisticated visuals.
                </p>

                <p className="text-sm leading-relaxed font-light text-white/80">
                  野手
                  顕斗。モーションデザイナー／Webデベロッパー。1997年生まれ。大学卒業後、Web制作に従事する中でモーションデザインの領域に興味を持ち、映像制作を始める。現在、大阪を拠点にモーションデザインを軸とした映像制作やWeb開発を手がける。企業プロダクトのプロモーション、ブランディング、キャンペーン、広告、Web、MVなど、幅広いデジタルクリエイティブに携わり、ビジョンやブランドの価値を最大化するユニークで洗練されたビジュアル表現を追求する。
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                viewport={{ once: true }}
                className="pt-16"
              >
                <h2 className="text-[120px] leading-none font-light text-white/10">gner Web Devel</h2>
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
                  HTML / CSS / Sass / BEM / FLOCSS / Tailwind CSS / JavaScript / Vue.js / PHP / WordPress / MicroCMS / /
                  Vite / Astro / Nuxt.js
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
                <p>Adobe Illustrator / Adobe Photoshop / Adobe Premiere Pro / Adobe After Effects / Adobe XD / Figma</p>
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
                <p>Awwwards | Honorable Mentions × 1</p>
                <p>CSS Design Awards | Website Of The Day × 1</p>
                <p>CSS Design Awards | Best UI Design × 1</p>
                <p>CSS Design Awards | Best UX Design × 1</p>
                <p>CSS Design Awards | Best Innovation × 1</p>
                <p>FWA | FWA Of The Day × 1</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <FooterSection />
      </div>
    </>
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

      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-black" />
        <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-black" />
        <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-black" />
      </div>

      <div className="relative z-10 px-12 flex gap-24">
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
