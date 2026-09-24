import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILL_CATEGORIES } from '../data'

interface SkillsProps {
  onSectionActive: () => void
}

export default function Skills({ onSectionActive }: SkillsProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.25 })

  useEffect(() => {
    if (inView) onSectionActive()
  }, [inView])

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 },
    }),
  }

  return (
    <section
      id="skills"
      ref={ref}
      className="py-28 md:py-36 px-6 md:px-10 lg:px-16 border-t"
      style={{ borderColor: 'var(--border-subtle)' }}
      aria-label="Technical skills"
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
            [ 02 // TECHNICAL MATRIX ]
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
        </motion.div>

        {/* Section headline */}
        <motion.h2
          className="font-serif italic mb-14"
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
          Languages, Tools & Frameworks
        </motion.h2>

        {/* Skills grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-px border"
          style={{
            borderColor: 'var(--border-subtle)',
            backgroundColor: 'var(--border-subtle)',
          }}
        >
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.title}
              className="p-7 md:p-9 transition-colors duration-200 group"
              style={{ backgroundColor: 'var(--bg-surface)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-surface-elevated)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-surface)'
              }}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Category title */}
              <div className="mb-5">
                <p
                  className="font-mono text-[10px] tracking-[0.2em] uppercase mb-1"
                  style={{ color: 'var(--accent-amber)' }}
                >
                  0{i + 1}
                </p>
                <h3
                  className="font-sans text-base font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {category.title}
                </h3>
                <p
                  className="text-xs mt-1 leading-snug"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {category.description}
                </p>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill.name}
                    className="font-mono text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 border transition-colors duration-200"
                    style={{
                      color: skill.highlight ? 'var(--text-primary)' : 'var(--text-tertiary)',
                      borderColor: skill.highlight ? 'var(--border-bright)' : 'var(--border-subtle)',
                      backgroundColor: skill.highlight ? 'var(--bg-surface-elevated)' : 'transparent',
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
