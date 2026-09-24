import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import ProjectModal from './components/ProjectModal'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import NoiseOverlay from './components/NoiseOverlay'
import { Project } from './types'

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Lenis smooth scroll
  const lenisRef = useRef<any>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null
    if (stored) setTheme(stored)
    setTimeout(() => setIsLoaded(true), 100)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    let lenis: any
    const initLenis = async () => {
      const { default: Lenis } = await import('lenis')
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
      })
      lenisRef.current = lenis

      function raf(time: number) {
        lenis.raf(time)
        rafRef.current = requestAnimationFrame(raf)
      }
      rafRef.current = requestAnimationFrame(raf)
    }

    initLenis()
    return () => {
      if (lenisRef.current) lenisRef.current.destroy()
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Modal lock scroll
  useEffect(() => {
    if (selectedProject) {
      lenisRef.current?.stop()
    } else {
      lenisRef.current?.start()
    }
  }, [selectedProject])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <>
      <CustomCursor />
      <NoiseOverlay />

      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ background: 'var(--bg-primary)' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <motion.span
              className="font-mono text-xs tracking-[0.3em] uppercase"
              style={{ color: 'var(--text-tertiary)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              Loading
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero onSectionActive={() => setActiveSection('hero')} />
        <About onSectionActive={() => setActiveSection('about')} />
        <Marquee />
        <Skills onSectionActive={() => setActiveSection('skills')} />
        <Projects
          onSectionActive={() => setActiveSection('projects')}
          onSelectProject={setSelectedProject}
        />
        <Achievements onSectionActive={() => setActiveSection('achievements')} />
        <Certifications onSectionActive={() => setActiveSection('certifications')} />
        <Education onSectionActive={() => setActiveSection('education')} />
        <Contact onSectionActive={() => setActiveSection('contact')} />
      </main>

      <Footer />

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default App
