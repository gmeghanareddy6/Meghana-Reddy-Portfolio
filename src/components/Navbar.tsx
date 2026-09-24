import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Download } from 'lucide-react'
import { PERSONAL_INFO } from '../data'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

interface NavbarProps {
  activeSection: string
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function Navbar({ activeSection, theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[9000] transition-colors duration-500"
        style={{
          backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
      >
        <nav
          className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between"
          aria-label="Primary navigation"
        >
          {/* Monogram Logo */}
          <button
            onClick={() => scrollTo('hero')}
            aria-label="Back to top — Guntuka Meghana Reddy"
            className="font-serif italic text-lg tracking-wide transition-opacity duration-200 hover:opacity-60"
            style={{ color: 'var(--text-primary)' }}
          >
            GM
          </button>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-7" role="list">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="relative font-mono text-[11px] tracking-[0.15em] uppercase transition-colors duration-200"
                  style={{ color: activeSection === id ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                  aria-current={activeSection === id ? 'page' : undefined}
                >
                  {label}
                  {activeSection === id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ backgroundColor: 'var(--accent-amber)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="w-8 h-8 flex items-center justify-center rounded-sm transition-colors duration-200 hover:opacity-60"
              style={{ color: 'var(--text-secondary)' }}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </motion.div>
            </button>

            {/* Resume download */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Guntuka_Meghana_Reddy_Resume.pdf"
              aria-label="Download resume PDF"
              className="hidden md:flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-sm border transition-all duration-200 hover:opacity-70"
              style={{
                color: 'var(--text-secondary)',
                borderColor: 'var(--border-bright)',
              }}
            >
              <Download size={11} />
              Resume
            </a>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center"
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              style={{ color: 'var(--text-secondary)' }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[8999] flex flex-col justify-center px-8"
            style={{ backgroundColor: 'var(--bg-primary)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <ul className="space-y-8" role="list">
              {NAV_LINKS.map(({ id, label }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => scrollTo(id)}
                    className="font-serif italic text-4xl transition-opacity hover:opacity-50"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              className="mt-12 font-mono text-xs tracking-widest uppercase"
              style={{ color: 'var(--text-tertiary)' }}
              onClick={() => setMobileOpen(false)}
            >
              Download Resume →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
