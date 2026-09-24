import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { MapPin, Sparkles, CheckCircle2, Cpu, Code2, Terminal } from 'lucide-react'

export default function FaceCard() {
  const cardRef = useRef<HTMLDivElement>(null)

  // 3D tilt interaction with spring physics
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 220 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig)
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%'])
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 }}
      className="relative perspective-[1000px] w-full max-w-[340px] sm:max-w-[370px] lg:max-w-[390px] mx-auto select-none"
    >
      {/* Ambient background glow behind the card */}
      <div
        className="absolute -inset-2 rounded-3xl opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-75 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, var(--accent-amber-glow), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-subtle)',
        }}
        className="relative group rounded-2xl border p-4 sm:p-5 shadow-2xl transition-all duration-300 hover:border-[var(--accent-amber)]/60"
      >
        {/* Subtle holographic glare reflection */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500 overflow-hidden z-20"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.4) 0%, transparent 60%)`,
          }}
          aria-hidden="true"
        />

        {/* Card Header Strip */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full animate-pulse-dot"
              style={{ backgroundColor: 'var(--accent-amber)' }}
            />
            <span
              className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              FACE CARD // GMR-2026
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.15em] uppercase" style={{ color: 'var(--text-tertiary)' }}>
            <MapPin size={11} className="text-[var(--accent-amber)]" />
            <span>HYD, IN</span>
          </div>
        </div>

        {/* Card Photo Frame with Meghana's Real Photo */}
        <div
          className="relative aspect-[3/3.8] w-full rounded-xl overflow-hidden border bg-neutral-900 shadow-inner"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <img
            src="/meghana.jpg"
            alt="Guntuka Meghana Reddy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            loading="eager"
          />

          {/* Vignette bottom gradient for text readability */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.3) 45%, transparent 75%)',
            }}
          />

          {/* Floating Top Left Badge on Image */}
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-md border text-[10px] font-mono tracking-wider z-10"
            style={{
              backgroundColor: 'rgba(10, 10, 10, 0.7)',
              borderColor: 'rgba(255, 255, 255, 0.18)',
              color: 'var(--text-primary)',
            }}
          >
            <Sparkles size={11} style={{ color: 'var(--accent-amber)' }} />
            <span>AI & ML Engineer</span>
          </div>

          {/* Floating Top Right Verified Badge */}
          <div
            className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full backdrop-blur-md border text-[9px] font-mono tracking-wider z-10"
            style={{
              backgroundColor: 'rgba(10, 10, 10, 0.7)',
              borderColor: 'rgba(255, 255, 255, 0.18)',
              color: 'var(--accent-sage)',
            }}
          >
            <CheckCircle2 size={10} />
            <span>OFFICIAL ID</span>
          </div>

          {/* Overlaid Bottom Persona on Image */}
          <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left z-10">
            <p className="font-serif italic text-2xl sm:text-[1.7rem] text-white drop-shadow-md leading-tight">
              Guntuka Meghana Reddy
            </p>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-300 mt-1">
              B.Tech CSE (AI & ML) • DRK IST / JNTUH
            </p>
          </div>
        </div>

        {/* Card Footer Technical Meta */}
        <div className="mt-3.5 space-y-2.5">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span style={{ color: 'var(--text-tertiary)' }} className="tracking-wider uppercase text-[10px]">
              Academic Metric
            </span>
            <span
              className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded border"
              style={{
                backgroundColor: 'var(--accent-amber-subtle)',
                borderColor: 'var(--accent-amber)',
                color: 'var(--accent-amber)',
              }}
            >
              7.2 CGPA
            </span>
          </div>

          {/* Core tech skill tags */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { label: 'PyTorch', icon: Code2 },
              { label: 'TensorFlow', icon: Cpu },
              { label: 'Python', icon: Terminal },
              { label: 'React', icon: Code2 },
            ].map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="flex items-center gap-1 font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-sm border"
                style={{
                  backgroundColor: 'var(--bg-surface-elevated)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-secondary)',
                }}
              >
                <Icon size={9} style={{ color: 'var(--accent-amber)' }} />
                {label}
              </span>
            ))}
          </div>

          {/* Barcode & Availability Status */}
          <div
            className="pt-2.5 border-t flex items-center justify-between"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            {/* SVG Laser Barcode */}
            <div className="flex flex-col gap-0.5">
              <svg
                width="130"
                height="18"
                viewBox="0 0 130 18"
                fill="currentColor"
                style={{ color: 'var(--text-secondary)' }}
                className="opacity-75"
                aria-label="Student ID Barcode"
              >
                <rect x="0" y="0" width="2" height="18" />
                <rect x="4" y="0" width="1" height="18" />
                <rect x="7" y="0" width="3" height="18" />
                <rect x="12" y="0" width="2" height="18" />
                <rect x="16" y="0" width="4" height="18" />
                <rect x="22" y="0" width="1" height="18" />
                <rect x="25" y="0" width="3" height="18" />
                <rect x="30" y="0" width="2" height="18" />
                <rect x="34" y="0" width="1" height="18" />
                <rect x="37" y="0" width="4" height="18" />
                <rect x="43" y="0" width="2" height="18" />
                <rect x="47" y="0" width="1" height="18" />
                <rect x="50" y="0" width="3" height="18" />
                <rect x="55" y="0" width="2" height="18" />
                <rect x="59" y="0" width="1" height="18" />
                <rect x="62" y="0" width="3" height="18" />
                <rect x="67" y="0" width="4" height="18" />
                <rect x="73" y="0" width="2" height="18" />
                <rect x="77" y="0" width="1" height="18" />
                <rect x="80" y="0" width="3" height="18" />
                <rect x="85" y="0" width="2" height="18" />
                <rect x="89" y="0" width="4" height="18" />
                <rect x="95" y="0" width="1" height="18" />
                <rect x="98" y="0" width="3" height="18" />
                <rect x="103" y="0" width="2" height="18" />
                <rect x="107" y="0" width="1" height="18" />
                <rect x="110" y="0" width="4" height="18" />
                <rect x="116" y="0" width="2" height="18" />
                <rect x="120" y="0" width="1" height="18" />
                <rect x="124" y="0" width="3" height="18" />
              </svg>
              <span className="font-mono text-[7px] tracking-[0.2em]" style={{ color: 'var(--text-tertiary)' }}>
                * GMR-AI-2026-HYD *
              </span>
            </div>

            <div className="text-right">
              <span
                className="font-mono text-[9px] tracking-[0.14em] uppercase font-semibold block"
                style={{ color: 'var(--accent-amber)' }}
              >
                OPEN FOR ROLES
              </span>
              <span className="font-mono text-[8px] tracking-[0.1em]" style={{ color: 'var(--text-tertiary)' }}>
                CLASS OF 2027
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
