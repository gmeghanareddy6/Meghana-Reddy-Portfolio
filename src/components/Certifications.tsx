import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CERTIFICATIONS } from '../data'

interface CertificationsProps {
  onSectionActive: () => void
}

export default function Certifications({ onSectionActive }: CertificationsProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.3 })

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
      id="certifications"
      ref={ref}
      className="py-28 md:py-36 px-6 md:px-10 lg:px-16 border-t"
      style={{ borderColor: 'var(--border-subtle)' }}
      aria-label="Certifications"
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
            [ 05 // CREDENTIALS ]
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
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border"
          style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--border-subtle)' }}
        >
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="p-8 md:p-10 transition-colors duration-200"
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
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p
                    className="font-mono text-[10px] tracking-[0.2em] uppercase mb-2"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {cert.issuer} · {cert.year}
                  </p>
                  <h3
                    className="font-serif italic text-xl md:text-2xl"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {cert.title}
                  </h3>
                </div>
                <span
                  className="font-mono text-[10px] tracking-[0.1em] uppercase px-2 py-0.5 border shrink-0 ml-4 mt-1"
                  style={{
                    color: 'var(--accent-amber)',
                    borderColor: 'var(--accent-amber-subtle)',
                    backgroundColor: 'var(--accent-amber-subtle)',
                  }}
                >
                  Certified
                </span>
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cert.tags.map(tag => (
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
