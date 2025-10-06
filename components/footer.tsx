"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
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
            <p className="text-xs tracking-wider mb-4 italic">LOCATION</p>
            <p className="text-sm font-light mb-1">Ho Chi Minh City, Vietnam</p>
            <p className="text-sm font-light">{"10°47'14.0\"N 106°44'23.7\"E"}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <p className="text-xs tracking-wider mb-4 italic">MAIL</p>
            <p className="text-sm font-light">ng.t.thien01@gmail.com</p>
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
              <a href="https://github.com/Panacea2005" target="_blank" rel="noopener noreferrer" className="flex items-center justify-end gap-2 hover:opacity-60 transition-opacity">
                GitHub <span className="text-xs">↗</span>
              </a>
              <a href="https://www.linkedin.com/in/thi%C3%AAn-nguy%E1%BB%85n-l%C3%AA-tr%C6%B0%E1%BB%9Dng-65773b29b/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-end gap-2 hover:opacity-60 transition-opacity">
                LinkedIn <span className="text-xs">↗</span>
              </a>
              <a href="https://x.com/panacea___005" target="_blank" rel="noopener noreferrer" className="flex items-center justify-end gap-2 hover:opacity-60 transition-opacity">
                X <span className="text-xs">↗</span>
              </a>
              <a href="https://www.youtube.com/@Panacea2005" target="_blank" rel="noopener noreferrer" className="flex items-center justify-end gap-2 hover:opacity-60 transition-opacity">
                YouTube <span className="text-xs">↗</span>
              </a>
              <a href="https://www.instagram.com/__tthien/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-end gap-2 hover:opacity-60 transition-opacity">
                Instagram <span className="text-xs">↗</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

