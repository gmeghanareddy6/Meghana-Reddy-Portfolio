import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import { Github } from './Icons'
import { Project } from '../types'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Keyboard escape to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-end md:items-center justify-center p-0 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 cursor-pointer"
        style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Panel */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full md:max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-2xl md:rounded-xl border"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-subtle)',
        }}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
      >
        {/* Header */}
        <div
          className="sticky top-0 flex items-center justify-between px-6 md:px-8 py-4 border-b"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-subtle)',
            zIndex: 10,
          }}
        >
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs tracking-wider"
              style={{ color: 'var(--accent-amber)' }}
            >
              {project.number}
            </span>
            <span
              className="font-mono text-[10px] tracking-[0.15em] uppercase"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Case Study
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close case study"
            className="w-8 h-8 flex items-center justify-center rounded-sm transition-opacity hover:opacity-50"
            style={{ color: 'var(--text-secondary)' }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 md:px-8 py-8 space-y-8">
          {/* Title */}
          <div>
            <h2
              id="modal-title"
              className="font-serif italic leading-tight mb-2"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', color: 'var(--text-primary)' }}
            >
              {project.title}
            </h2>
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              {project.category}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="font-mono text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 border"
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

          {/* Case study sections */}
          {[
            { label: 'Problem', content: project.problem },
            { label: 'Approach', content: project.approach },
          ].map(({ label, content }) => (
            <div key={label}>
              <h3
                className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {label}
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {content}
              </p>
            </div>
          ))}

          {/* Stack */}
          <div>
            <h3
              className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span
                  key={tech}
                  className="font-mono text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 border"
                  style={{
                    color: 'var(--text-secondary)',
                    borderColor: 'var(--border-bright)',
                    backgroundColor: 'var(--bg-surface-elevated)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div>
            <h3
              className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Key Outcomes
            </h3>
            <ul className="space-y-2">
              {project.outcomes.map((outcome, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent-amber)' }} className="mt-0.5 shrink-0">→</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div
              className="grid grid-cols-3 gap-px border"
              style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--border-subtle)' }}
            >
              {project.metrics.map(m => (
                <div
                  key={m.label}
                  className="p-4 text-center"
                  style={{ backgroundColor: 'var(--bg-surface-elevated)' }}
                >
                  <p className="font-mono text-xs font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                    {m.value}
                  </p>
                  <p className="font-mono text-[9px] tracking-[0.12em] uppercase" style={{ color: 'var(--text-tertiary)' }}>
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub"
              className="flex items-center gap-2 px-4 py-2.5 border rounded-sm font-mono text-[10px] tracking-[0.12em] uppercase transition-opacity hover:opacity-60"
              style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-bright)' }}
            >
              <Github size={13} />
              Source Code
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo"
              className="flex items-center gap-2 px-4 py-2.5 rounded-sm font-mono text-[10px] tracking-[0.12em] uppercase transition-opacity hover:opacity-80"
              style={{
                backgroundColor: 'var(--text-primary)',
                color: 'var(--bg-primary)',
              }}
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
