import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, Copy, Check } from 'lucide-react'
import { Github, Linkedin } from './Icons'
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data'

interface ContactProps {
  onSectionActive: () => void
}

export default function Contact({ onSectionActive }: ContactProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.2 })
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (inView) onSectionActive()
  }, [inView])

  const copyEmail = async () => {
    await navigator.clipboard.writeText(PERSONAL_INFO.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, message } = formState
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.1 },
    }),
  }

  const inputStyle = {
    backgroundColor: 'var(--bg-surface)',
    color: 'var(--text-primary)',
    borderColor: 'var(--border-subtle)',
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 md:py-36 px-6 md:px-10 lg:px-16 border-t"
      style={{ borderColor: 'var(--border-subtle)' }}
      aria-label="Contact"
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
            [ 07 // INITIATE DIALOGUE ]
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Headline + contact info */}
          <div>
            <motion.h2
              className="font-serif italic leading-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--text-primary)' }}
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Let's build something enduring.
            </motion.h2>

            <motion.p
              className="text-base leading-relaxed mb-10"
              style={{ color: 'var(--text-secondary)' }}
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Open to software engineering internships, AI/ML research collaborations, and data science opportunities. I'm fastest via email but respond across all channels.
            </motion.p>

            {/* Click-to-copy email */}
            <motion.div className="mb-8" custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--text-tertiary)' }}>
                Email
              </p>
              <button
                onClick={copyEmail}
                aria-label="Copy email address to clipboard"
                className="flex items-center gap-3 group transition-opacity hover:opacity-70"
                id="copy-email-btn"
              >
                <span className="font-sans text-base" style={{ color: 'var(--text-primary)' }}>
                  {PERSONAL_INFO.email}
                </span>
                <span style={{ color: copied ? 'var(--accent-amber)' : 'var(--text-tertiary)' }}>
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </span>
                {copied && (
                  <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--accent-amber)' }}>
                    Copied!
                  </span>
                )}
              </button>
            </motion.div>

            {/* Phone */}
            <motion.div className="mb-10" custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--text-tertiary)' }}>
                Phone
              </p>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-2 transition-opacity hover:opacity-70"
                aria-label="Call Meghana"
              >
                <Phone size={14} style={{ color: 'var(--text-tertiary)' }} />
                <span className="font-sans text-base" style={{ color: 'var(--text-primary)' }}>
                  {PERSONAL_INFO.displayPhone}
                </span>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--text-tertiary)' }}>
                Find me online
              </p>
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map(({ label, url, icon }) => {
                  const Icon = iconMap[icon] || Mail
                  return (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${label} profile`}
                      className="flex items-center gap-3 w-fit transition-opacity hover:opacity-60"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <Icon size={14} strokeWidth={1.5} />
                      <span className="font-mono text-xs tracking-wide">{label}</span>
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
              aria-label="Send a message to Meghana"
            >
              <div>
                <label htmlFor="contact-name" className="block font-mono text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formState.name}
                  onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                  className="w-full px-4 py-3 text-sm border rounded-sm outline-none transition-colors duration-200 focus:ring-1"
                  style={{
                    ...inputStyle,
                    '--tw-ring-color': 'var(--accent-amber)',
                  } as React.CSSProperties}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block font-mono text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formState.email}
                  onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                  className="w-full px-4 py-3 text-sm border rounded-sm outline-none transition-colors duration-200 focus:ring-1"
                  style={inputStyle}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block font-mono text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                  className="w-full px-4 py-3 text-sm border rounded-sm outline-none transition-colors duration-200 resize-none focus:ring-1"
                  style={inputStyle}
                  placeholder="Tell me about the project or opportunity..."
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="w-full py-3 font-mono text-[11px] tracking-[0.15em] uppercase rounded-sm transition-all duration-200 hover:opacity-80"
                style={{
                  backgroundColor: submitted ? 'var(--accent-amber-subtle)' : 'var(--text-primary)',
                  color: submitted ? 'var(--accent-amber)' : 'var(--bg-primary)',
                  borderWidth: submitted ? 1 : 0,
                  borderStyle: 'solid',
                  borderColor: submitted ? 'var(--accent-amber-glow)' : 'transparent',
                }}
              >
                {submitted ? '✓ Message sent via email client' : 'Send Message →'}
              </button>

              <p className="text-xs text-center" style={{ color: 'var(--text-tertiary)' }}>
                Opens your email client with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
