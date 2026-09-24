import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    // Only show on non-touch devices
    if ('ontouchstart' in window) {
      setIsHidden(true)
      return
    }

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isLink =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer'
      setIsPointer(isLink)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', checkPointer)
    document.addEventListener('mouseleave', () => setIsVisible(false))
    document.addEventListener('mouseenter', () => setIsVisible(true))

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', checkPointer)
    }
  }, [])

  if (isHidden) return null

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full"
        style={{ backgroundColor: 'var(--accent-amber)' }}
        animate={{
          x: position.x - (isPointer ? 4 : 2.5),
          y: position.y - (isPointer ? 4 : 2.5),
          width: isPointer ? 8 : 5,
          height: isPointer ? 8 : 5,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 50, mass: 0.2 }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99997] rounded-full border"
        style={{ borderColor: isPointer ? 'var(--accent-amber)' : 'var(--text-tertiary)' }}
        animate={{
          x: position.x - (isPointer ? 18 : 14),
          y: position.y - (isPointer ? 18 : 14),
          width: isPointer ? 36 : 28,
          height: isPointer ? 36 : 28,
          opacity: isVisible ? (isPointer ? 0.8 : 0.4) : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 35, mass: 0.5 }}
      />
    </>
  )
}
