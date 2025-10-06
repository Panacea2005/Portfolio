"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface MenuOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 bottom-0 w-1/2 z-[100] bg-black/95 backdrop-blur-2xl"
          >
            {/* Glowing sphere effect */}
            <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[600px] h-[600px]">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/30 to-purple-600/40 blur-3xl" />
                <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-cyan-300/30 via-blue-400/40 to-purple-500/50 blur-2xl" />
              </div>
            </div>

            {/* Header */}
            <header className="relative z-20 flex items-center justify-between px-12 py-8">
              <div className="text-sm tracking-wider font-light text-white">Panacea</div>
              <button
                onClick={onClose}
                className="text-sm tracking-wider font-light text-white hover:opacity-60 transition-opacity"
              >
                [CLOSE]
              </button>
            </header>

            {/* Menu Content */}
            <div className="relative z-20 flex items-center justify-center min-h-[calc(100vh-100px)] px-12">
              <div className="max-w-6xl w-full">
                <motion.nav
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="space-y-8 mb-24"
                >
                  <Link
                    href="/"
                    onClick={onClose}
                    className="block text-7xl font-light tracking-tight text-white hover:opacity-60 transition-opacity"
                  >
                    INDEX
                  </Link>
                  <Link
                    href="/profile"
                    onClick={onClose}
                    className="block text-7xl font-light tracking-tight text-white hover:opacity-60 transition-opacity"
                  >
                    PROFILE
                  </Link>
                  <Link
                    href="/works"
                    onClick={onClose}
                    className="block text-7xl font-light tracking-tight text-white hover:opacity-60 transition-opacity"
                  >
                    WORKS
                  </Link>
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="block text-7xl font-light tracking-tight text-white hover:opacity-60 transition-opacity"
                  >
                    CONTACT
                  </Link>
                </motion.nav>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="grid grid-cols-2 gap-x-32 gap-y-4 text-lg font-light text-white"
                >
                  <a href="https://github.com/Panacea2005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity cursor-pointer">
                    GitHub <span className="text-sm">↗</span>
                  </a>
                  <a href="https://www.linkedin.com/in/thi%C3%AAn-nguy%E1%BB%85n-l%C3%AA-tr%C6%B0%E1%BB%9Dng-65773b29b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity cursor-pointer">
                    LinkedIn <span className="text-sm">↗</span>
                  </a>
                  <a href="https://x.com/panacea___005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity cursor-pointer">
                    X <span className="text-sm">↗</span>
                  </a>
                  <a href="https://www.youtube.com/@Panacea2005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity cursor-pointer">
                    YouTube <span className="text-sm">↗</span>
                  </a>
                  <a href="https://www.instagram.com/__tthien/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity cursor-pointer">
                    Instagram <span className="text-sm">↗</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
