import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowDown, Download } from 'lucide-react'
import { Github, Linkedin } from './Icons'
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data'
import MagneticButton from './MagneticButton'
import FaceCard from './FaceCard'

interface HeroProps {
  onSectionActive: () => void
}

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export default function Hero({ onSectionActive }: HeroProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.3 })

  useEffect(() => {
    if (inView) onSectionActive()
  }, [inView])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
  }

  const lineVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: { y: '0%', opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-28 pb-20"
      aria-label="Hero — Guntuka Meghana Reddy"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center z-10">
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
          {/* Top mono label */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <span
          className="font-mono text-[10px] tracking-[0.25em] uppercase"
          style={{ color: 'var(--text-tertiary)' }}
        >
          [ 00 // GUNTUKA MEGHANA REDDY ]
        </span>
      </motion.div>

      {/* Kicker line */}
      <motion.div
        className="overflow-hidden mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="flex items-center gap-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {/* Status dot */}
          <span
            className="animate-pulse-dot inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: 'var(--accent-amber)' }}
            aria-hidden="true"
          />
          <span
            className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase"
            style={{ color: 'var(--accent-amber)' }}
          >
            {PERSONAL_INFO.statusBadge}
          </span>
        </motion.div>
      </motion.div>

      {/* Main hero name */}
      <motion.div
        className="overflow-hidden mb-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Guntuka */}
        <div className="overflow-hidden">
          <motion.h1
            className="font-serif italic leading-[0.92] tracking-tight"
            style={{
              fontSize: 'clamp(3.2rem, 9vw, 9.5rem)',
              color: 'var(--text-primary)',
            }}
            variants={lineVariants}
          >
            Guntuka
          </motion.h1>
        </div>
        {/* Meghana Reddy */}
        <div className="overflow-hidden">
          <motion.span
            className="block font-serif italic leading-[0.92] tracking-tight"
            style={{
              fontSize: 'clamp(3.2rem, 9vw, 9.5rem)',
              color: 'var(--text-primary)',
            }}
            variants={lineVariants}
          >
            Meghana Reddy
          </motion.span>
        </div>
      </motion.div>

      {/* Kicker mono role */}
      <motion.div
        className="overflow-hidden mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
      >
        <p
          className="font-mono text-[11px] md:text-xs tracking-[0.3em] uppercase"
          style={{ color: 'var(--text-tertiary)' }}
        >
          {PERSONAL_INFO.kicker}
        </p>
      </motion.div>

      {/* One-line pitch */}
      <motion.p
        className="max-w-xl text-base md:text-lg leading-relaxed mb-10"
        style={{ color: 'var(--text-secondary)' }}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
      >
        Engineering reliable software systems, intelligent ML pipelines, and multimodal AI interfaces — at the intersection of computer science and cognitive computing.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-wrap items-center gap-3 mb-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.95 }}
      >
        <MagneticButton id="cta-view-projects">
          <button
            onClick={scrollToProjects}
            className="px-5 py-2.5 font-mono text-[11px] tracking-[0.12em] uppercase rounded-sm transition-all duration-200 border"
            style={{
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              borderColor: 'var(--text-primary)',
            }}
          >
            View Selected Work
          </button>
        </MagneticButton>

        <MagneticButton id="cta-download-resume">
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Guntuka_Meghana_Reddy_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2.5 font-mono text-[11px] tracking-[0.12em] uppercase rounded-sm border transition-all duration-200 hover:opacity-70"
            style={{
              color: 'var(--text-secondary)',
              borderColor: 'var(--border-bright)',
            }}
          >
            <Download size={12} />
            Resume
          </a>
        </MagneticButton>

        <MagneticButton id="cta-contact">
          <button
            onClick={scrollToContact}
            className="px-5 py-2.5 font-mono text-[11px] tracking-[0.12em] uppercase rounded-sm transition-all duration-200 hover:opacity-60"
            style={{ color: 'var(--text-tertiary)' }}
          >
            Get in Touch →
          </button>
        </MagneticButton>
      </motion.div>

      {/* Social links */}
      <motion.div
        className="flex items-center gap-5"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.05 }}
      >
        {SOCIAL_LINKS.map(({ label, url, icon }) => {
          const Icon = iconMap[icon] || Mail
          return (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-opacity duration-200 hover:opacity-50"
              style={{ color: 'var(--text-tertiary)' }}
            >
              <Icon size={16} strokeWidth={1.5} />
            </a>
          )
        })}
      </motion.div>
        </div>

        {/* Right Column: Face Card in the starting */}
        <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
          <FaceCard />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span
          className="font-mono text-[9px] tracking-[0.2em] uppercase"
          style={{ color: 'var(--text-tertiary)' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'var(--text-tertiary)' }}
        >
          <ArrowDown size={13} strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* GM Monogram emblem — subtle background depth */}
      <div
        className="absolute top-24 right-8 md:right-16 font-serif italic select-none pointer-events-none opacity-15 hidden 2xl:block"
        style={{
          fontSize: 'clamp(5rem, 12vw, 14rem)',
          color: 'var(--border-subtle)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
        aria-hidden="true"
      >
        GM
      </div>
    </section>
  )
}
