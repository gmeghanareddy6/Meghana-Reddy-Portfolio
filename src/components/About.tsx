import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PERSONAL_INFO, STATS } from '../data'

interface AboutProps {
  onSectionActive: () => void
}

export default function About({ onSectionActive }: AboutProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.3 })

  useEffect(() => {
    if (inView) onSectionActive()
  }, [inView])

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.1 },
    }),
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 md:py-36 px-6 md:px-10 lg:px-16 border-t"
      style={{ borderColor: 'var(--border-subtle)' }}
      aria-label="About Guntuka Meghana Reddy"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          className="mb-12 flex items-center gap-4"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span
            className="font-mono text-[10px] tracking-[0.25em] uppercase"
            style={{ color: 'var(--text-tertiary)' }}
          >
            [ 01 // ABOUT ]
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Bio text — 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            <motion.h2
              className="font-serif italic leading-tight"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'var(--text-primary)',
              }}
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {PERSONAL_INFO.bioHeadline}
            </motion.h2>

            {PERSONAL_INFO.bioParagraphs.map((para, i) => (
              <motion.p
                key={i}
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Stats grid — 2 cols */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-px border"
            style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--border-subtle)' }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="p-6 flex flex-col justify-between"
                style={{ backgroundColor: 'var(--bg-surface)' }}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <span
                  className="font-serif italic text-3xl md:text-4xl leading-none mb-2"
                  style={{
                    color: i === 1 ? 'var(--accent-amber)' : 'var(--text-primary)',
                  }}
                >
                  {stat.value}
                </span>
                <div>
                  <p
                    className="font-mono text-[10px] tracking-[0.15em] uppercase mb-0.5"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="font-sans text-xs leading-snug"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {stat.descriptor}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
