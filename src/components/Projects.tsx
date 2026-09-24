import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../data'
import { Project } from '../types'

interface ProjectsProps {
  onSectionActive: () => void
  onSelectProject: (p: Project) => void
}

export default function Projects({ onSectionActive, onSelectProject }: ProjectsProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.2 })
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  useEffect(() => {
    if (inView) onSectionActive()
  }, [inView])

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 },
    }),
  }

  return (
    <section
      id="projects"
      ref={ref}
      className="py-28 md:py-36 px-6 md:px-10 lg:px-16 border-t"
      style={{ borderColor: 'var(--border-subtle)' }}
      aria-label="Selected projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          className="mb-14 flex items-center gap-4"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span
            className="font-mono text-[10px] tracking-[0.25em] uppercase"
            style={{ color: 'var(--text-tertiary)' }}
          >
            [ 03 // SELECTED WORK ]
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
        </motion.div>

        {/* Section headline */}
        <motion.h2
          className="font-serif italic mb-2"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            color: 'var(--text-primary)',
          }}
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Project Highlights
        </motion.h2>
        <motion.p
          className="text-sm mb-12"
          style={{ color: 'var(--text-tertiary)' }}
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Click any row to view the full case study.
        </motion.p>

        {/* Project rows */}
        <div className="border-t" style={{ borderColor: 'var(--border-subtle)' }}>
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i + 3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <button
                className="w-full text-left group border-b py-6 md:py-8 transition-all duration-300"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: hoveredId === project.id ? 'var(--bg-surface)' : 'transparent',
                }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectProject(project)}
                aria-label={`View case study for ${project.title}`}
              >
                <div className="flex items-start md:items-center justify-between gap-4 md:gap-8">
                  {/* Left: number + title */}
                  <div className="flex items-start md:items-center gap-5 md:gap-8 flex-1 min-w-0">
                    <span
                      className="font-mono text-xs tracking-wider shrink-0 mt-0.5 md:mt-0"
                      style={{ color: 'var(--accent-amber)' }}
                    >
                      {project.number}
                    </span>
                    <div className="min-w-0">
                      <h3
                        className="font-serif italic text-xl md:text-2xl lg:text-3xl leading-tight mb-1 transition-colors duration-200"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-sm leading-snug line-clamp-1"
                        style={{ color: 'var(--text-tertiary)' }}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right: tags + arrow */}
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="hidden md:flex flex-wrap gap-1.5 justify-end">
                      {project.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 border"
                          style={{
                            color: 'var(--accent-sage)',
                            borderColor: 'var(--accent-sage-subtle)',
                            backgroundColor: 'var(--accent-sage-subtle)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.div
                      animate={{ rotate: hoveredId === project.id ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      style={{ color: hoveredId === project.id ? 'var(--accent-amber)' : 'var(--text-tertiary)' }}
                    >
                      <ArrowUpRight size={20} strokeWidth={1.5} />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded preview on hover */}
                <AnimatePresence>
                  {hoveredId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 ml-11 md:ml-[4.5rem]">
                        <p
                          className="text-sm leading-relaxed max-w-2xl"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {project.description}
                        </p>
                        <p
                          className="font-mono text-[10px] tracking-[0.15em] uppercase mt-3"
                          style={{ color: 'var(--accent-amber)' }}
                        >
                          Click to explore full case study →
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
