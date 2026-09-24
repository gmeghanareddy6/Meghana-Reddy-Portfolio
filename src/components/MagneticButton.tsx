import { useRef, ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  download?: boolean | string
  'aria-label'?: string
  id?: string
  target?: string
  rel?: string
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  download,
  'aria-label': ariaLabel,
  id,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 350, damping: 28 })
  const springY = useSpring(y, { stiffness: 350, damping: 28 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * 0.35
    const dy = (e.clientY - cy) * 0.35
    x.set(dx)
    y.set(dy)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
      id={id}
    >
      {href ? (
        <a
          href={href}
          download={download}
          aria-label={ariaLabel}
          target={target}
          rel={rel}
          className="block"
        >
          {children}
        </a>
      ) : (
        <button
          onClick={onClick}
          aria-label={ariaLabel}
          className="block"
        >
          {children}
        </button>
      )}
    </motion.div>
  )

  return inner
}
