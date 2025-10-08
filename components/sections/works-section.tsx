"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const projects = [
  {
    title: "VOID",
    tags: "AI, WEB3",
    gradient: "from-purple-600 to-blue-500",
    align: "left", // 10% to 50%
  },
  {
    title: "N.OVA",
    tags: "AI, WEB3, IDENTITY",
    gradient: "from-cyan-400 to-teal-600",
    align: "right", // 50% to 90%
  },
  {
    title: "Genie",
    tags: "AI, HEALTHTECH",
    gradient: "from-green-500 to-emerald-600",
    align: "center", // 30% to 70%
  },
  {
    title: "Flipside",
    tags: "BLOCKCHAIN, ANALYTICS",
    gradient: "from-orange-500 to-red-600",
    align: "left", // 10% to 50%
  },
]

export function WorksSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const hoveredProjectData = projects.find(p => p.title === hoveredProject)

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Blurred background image on hover */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            key={hoveredProject}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-0"
          >
            <div 
              className="absolute inset-0 bg-black"
              style={{ 
                backgroundImage: "url('/gradient-sphere-background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(60px)",
                opacity: 0.4
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vertical lines pattern - continuing from service */}
      <div className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden z-0">
        <div className="absolute left-[10%] top-0 bottom-0 w-[0.5px] bg-white" />
        <div className="absolute left-[30%] top-0 bottom-0 w-[0.5px] bg-white" />
        <div className="absolute left-[50%] top-0 bottom-0 w-[0.5px] bg-white" />
        <div className="absolute left-[70%] top-0 bottom-0 w-[0.5px] bg-white" />
        <div className="absolute left-[90%] top-0 bottom-0 w-[0.5px] bg-white" />
      </div>
      
      {/* Scrolling text background - show only when not hovering */}
      <AnimatePresence>
        {!hoveredProject && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-5 z-0"
          >
            <motion.div
              animate={{ x: [0, -2000] }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="whitespace-nowrap text-[200px] font-light"
            >
              WORKS • PORTFOLIO • PROJECTS • WORKS • PORTFOLIO • PROJECTS •
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrolling project title on hover - always centered in viewport */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            key={`title-${hoveredProject}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0"
          >
            <motion.div
              animate={{ x: [1200, -1200] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="whitespace-nowrap text-[240px] font-light tracking-tight"
              style={{
                WebkitTextStroke: "2px rgba(255, 255, 255, 0.6)",
                color: "transparent",
                textShadow: "0 0 40px rgba(255, 255, 255, 0.3)",
              }}
            >
              {hoveredProject} • {hoveredProject} • {hoveredProject} • {hoveredProject}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24 px-12"
        >
          <p className="text-xs tracking-wider font-light">[WORKS]</p>
        </motion.div>

        {/* Vertical stacked projects */}
        <div className="space-y-32">
          {projects.map((project, i) => {
            // Calculate position based on alignment
            const getPosition = () => {
              if (project.align === "left") {
                return { left: "10%" } // 10% to 50% (2 sections: 10-30-50)
              } else if (project.align === "right") {
                return { left: "50%" } // 50% to 90% (2 sections: 50-70-90)
              } else {
                return { left: "30%" } // 30% to 70% (2 sections: 30-50-70)
              }
            }

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Image container - 40% width (2 sections of 20%) */}
                <div 
                  className="absolute w-[40%] group cursor-pointer"
                  style={getPosition()}
                  onMouseEnter={() => setHoveredProject(project.title)}
                  onMouseLeave={() => setHoveredProject(null)}
                  data-cursor-text={`VIEW ${project.title.toUpperCase()}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full aspect-[16/9] overflow-hidden shadow-2xl bg-black"
                  >
                    <img
                      src="/gradient-sphere-background.png"
                      alt={`${project.title} project`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </motion.div>
                  
                  {/* Title and tags below image */}
                  <div className={`mt-6 ${project.align === "right" ? "text-right" : project.align === "center" ? "text-center" : ""}`}>
                    <h4 className="text-4xl font-light mb-2 group-hover:opacity-60 transition-opacity">
                      {project.title}
                    </h4>
                    <p className="text-sm text-white/60 tracking-wider">{project.tags}</p>
                  </div>
                </div>
                
                {/* Spacer for layout */}
                <div className="aspect-[16/9]" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
