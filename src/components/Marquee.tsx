import { ALL_SKILLS_MARQUEE } from '../data'

export default function Marquee() {
  const doubled = [...ALL_SKILLS_MARQUEE, ...ALL_SKILLS_MARQUEE]

  return (
    <div
      className="py-4 border-y overflow-hidden"
      style={{ borderColor: 'var(--border-subtle)' }}
      aria-label="Skills marquee"
    >
      <div className="animate-marquee" aria-hidden="true">
        {doubled.map((skill, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span
              className="font-mono text-[11px] tracking-[0.2em] uppercase px-6"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {skill}
            </span>
            <span
              className="text-[var(--border-bright)]"
              style={{ color: 'var(--border-bright)' }}
            >
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
