import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ACHIEVEMENTS } from '../data'

interface AchievementsProps {
  onSectionActive: () => void
}

export default function Achievements({ onSectionActive }: AchievementsProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.3 })

  useEffect(() => {
    if (inView) onSectionActive()
  }, [inView])

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.1 },
    }),
  }

  return (
    <section
      id="achievements"
      ref={ref}
      className="py-28 md:py-36 px-6 md:px-10 lg:px-16 border-t"
      style={{ borderColor: 'var(--border-subtle)' }}
      aria-label="Achievements and honors"
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
            [ 04 // RECOGNITION ]
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
        </motion.div>

        <motion.h2
          className="font-serif italic mb-14"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text-primary)' }}
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Honors & Recognition
        </motion.h2>

        <div className="border-t" style={{ borderColor: 'var(--border-subtle)' }}>
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b gap-4"
              style={{ borderColor: 'var(--border-subtle)' }}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                <span
                  className="font-mono text-sm tracking-widest shrink-0 w-12"
                  style={{ color: item.isHighlight ? 'var(--accent-amber)' : 'var(--text-tertiary)' }}
                >
                  {item.year}
                </span>
                <div>
                  <h3
                    className="font-sans text-base font-medium"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-tertiary)' }}>
                    {item.organization}
                  </p>
                  <p className="text-sm mt-1 leading-snug" style={{ color: 'var(--text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              </div>

              {item.badge && (
                <span
                  className="font-mono text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 border shrink-0 self-start sm:self-center"
                  style={
                    item.isHighlight
                      ? {
                          color: 'var(--accent-amber)',
                          borderColor: 'var(--accent-amber-glow)',
                          backgroundColor: 'var(--accent-amber-subtle)',
                        }
                      : {
                          color: 'var(--text-tertiary)',
                          borderColor: 'var(--border-subtle)',
                        }
                  }
                >
                  {item.badge}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
