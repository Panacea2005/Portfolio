"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface MenuOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { name: "INDEX", href: "/", number: "01" },
  { name: "PROFILE", href: "/profile", number: "02" },
  { name: "WORKS", href: "/works", number: "03" },
  { name: "CONTACT", href: "/contact", number: "04" },
]

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Panacea2005" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/thi%C3%AAn-nguy%E1%BB%85n-l%C3%AA-tr%C6%B0%E1%BB%9Dng-65773b29b/" },
  { name: "X", url: "https://x.com/panacea___005" },
  { name: "YouTube", url: "https://www.youtube.com/@Panacea2005" },
  { name: "Instagram", url: "https://www.instagram.com/__tthien/" },
]

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] backdrop-blur-sm bg-black/20"
            onClick={onClose}
          />

          {/* Menu panel sliding from right */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 bottom-0 w-1/2 z-[100] backdrop-blur-2xl bg-white/5 border-l border-white/10"
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={onClose}
              className="absolute top-12 right-12 text-xs tracking-wider font-light text-white hover:opacity-60 transition-opacity"
              data-cursor-text="CLOSE"
            >
              [CLOSE]
            </motion.button>

            {/* Menu Content */}
            <div className="flex flex-col justify-between h-full py-24 px-16">
              {/* Navigation */}
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-6"
              >
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-baseline gap-6 hover:opacity-60 transition-opacity"
                      data-cursor-text={item.name}
                    >
                      <span className="text-xs tracking-wider font-light text-white/40 group-hover:text-white/60 transition-colors">
                        {item.number}
                      </span>
                      <span className="text-5xl font-light tracking-tight text-white" data-cursor-text={item.name}>
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-3"
              >
                <p className="text-xs tracking-wider font-light text-white/40 mb-4">CONNECT</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-light text-white/80 hover:text-white transition-colors"
                      data-cursor-text={link.name.toUpperCase()}
                    >
                      {link.name}
                      <span className="text-xs opacity-60">↗</span>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Footer info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xs font-light text-white/30 tracking-wider"
              >
                <p>© 2025 PANACEA</p>
                <p className="mt-1">HO CHI MINH CITY, VIETNAM</p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
