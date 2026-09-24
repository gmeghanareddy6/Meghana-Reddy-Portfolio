import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EDUCATION } from '../data'

interface EducationProps {
  onSectionActive: () => void
}

export default function Education({ onSectionActive }: EducationProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.2 })

  useEffect(() => {
    if (inView) onSectionActive()
  }, [inView])

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.1 },
    }),
  }

  return (
    <section
      id="education"
      ref={ref}
      className="py-28 md:py-36 px-6 md:px-10 lg:px-16 border-t"
      style={{ borderColor: 'var(--border-subtle)' }}
      aria-label="Education"
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
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: 'var(--text-tertiary)' }}>
            [ 06 // ACADEMIC FOUNDATION ]
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
        </motion.div>

        <motion.h2
          className="font-serif italic mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text-primary)' }}
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Academic Background
        </motion.h2>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Timeline vertical axis */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px hidden md:block"
            style={{ backgroundColor: 'var(--border-subtle)' }}
          />

          <div className="space-y-0 md:pl-10">
            {EDUCATION.map((item, i) => (
              <motion.div
                key={i}
                className="relative flex flex-col md:flex-row md:gap-16 pb-14"
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-2 w-2 h-2 rounded-full border-2 -translate-x-[calc(50%-0.5px)] hidden md:block"
                  style={{
                    borderColor: i === 0 ? 'var(--accent-amber)' : 'var(--border-bright)',
                    backgroundColor: i === 0 ? 'var(--accent-amber)' : 'var(--bg-primary)',
                  }}
                />

                {/* Period */}
                <div className="md:w-40 shrink-0 mb-3 md:mb-0">
                  <span
                    className="font-mono text-[11px] tracking-widest uppercase"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {item.period}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="font-serif italic text-xl md:text-2xl mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.degree}
                  </h3>
                  <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    {item.institution}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--text-tertiary)' }}>
                    {item.location}
                  </p>

                  {/* Grade badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="font-mono text-sm font-medium"
                      style={{ color: i === 0 ? 'var(--accent-amber)' : 'var(--text-primary)' }}
                    >
                      {item.grade}
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase" style={{ color: 'var(--text-tertiary)' }}>
                      {item.gradeLabel}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {item.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 text-xs leading-snug"
                        style={{ color: 'var(--text-tertiary)' }}
                      >
                        <span style={{ color: 'var(--border-bright)' }} className="mt-0.5 shrink-0">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
