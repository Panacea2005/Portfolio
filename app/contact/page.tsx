"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { MenuOverlay } from "@/components/menu-overlay"

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
                <p>現在、2025年11月以降における映像制作の新規ご依頼を受付中です。</p>
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
                <p>Slack / Discord / Zoom / Google Meet / Backlog / Notion</p>
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
                <p>Main: id@kaitonote.com</p>
                <p>Sub: id.kaitonote@gmail.com</p>
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
              <div className="text-sm leading-relaxed font-light">
                <p className="text-white/40">非公開実績の閲覧をご希望の方はお気軽にお問い合わせください。</p>
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
                <div className="flex items-center gap-2 hover:opacity-60 transition-opacity">
                  X <span className="text-xs">↗</span>
                </div>
                <div className="flex items-center gap-2 hover:opacity-60 transition-opacity">
                  Instagram <span className="text-xs">↗</span>
                </div>
                <div className="flex items-center gap-2 hover:opacity-60 transition-opacity">
                  Vimeo <span className="text-xs">↗</span>
                </div>
                <div className="flex items-center gap-2 hover:opacity-60 transition-opacity">
                  YouTube <span className="text-xs">↗</span>
                </div>
                <div className="flex items-center gap-2 hover:opacity-60 transition-opacity">
                  Behance <span className="text-xs">↗</span>
                </div>
                <div className="flex items-center gap-2 hover:opacity-60 transition-opacity">
                  GitHub <span className="text-xs">↗</span>
                </div>
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
