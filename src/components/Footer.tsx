import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { PERSONAL_INFO } from '../data'

export default function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          timeZone: PERSONAL_INFO.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="border-t px-6 md:px-10 lg:px-16 py-8"
      style={{ borderColor: 'var(--border-subtle)' }}
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: time */}
        <div className="flex items-center gap-2">
          <span
            className="animate-pulse-dot inline-block w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: 'var(--accent-amber)' }}
            aria-hidden="true"
          />
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: 'var(--text-tertiary)' }}>
            Hyderabad, IST — {time}
          </span>
        </div>

        {/* Center: signature */}
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: 'var(--text-tertiary)' }}>
          Designed & built by Meghana · {new Date().getFullYear()}
        </p>

        {/* Right: back to top */}
        <button
          onClick={scrollTop}
          aria-label="Back to top"
          id="back-to-top-btn"
          className="flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase transition-opacity hover:opacity-50"
          style={{ color: 'var(--text-tertiary)' }}
        >
          Back to top
          <ArrowUp size={12} />
        </button>
      </div>
    </footer>
  )
}
