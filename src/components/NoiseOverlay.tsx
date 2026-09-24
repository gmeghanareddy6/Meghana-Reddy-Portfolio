import { useEffect, useRef } from 'react'

export default function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let animId: number
    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() > 0.5 ? 255 : 0
        data[i] = value
        data[i + 1] = value
        data[i + 2] = value
        data[i + 3] = 255
      }
      ctx.putImageData(imageData, 0, 0)
      animId = requestAnimationFrame(drawNoise)
    }

    // Only animate at ~10fps for performance
    let lastTime = 0
    const throttledNoise = (time: number) => {
      if (time - lastTime > 100) {
        lastTime = time
        const imageData = ctx.createImageData(canvas.width, canvas.height)
        const data = imageData.data
        for (let i = 0; i < data.length; i += 4) {
          const value = Math.random() > 0.5 ? 255 : 0
          data[i] = value
          data[i + 1] = value
          data[i + 2] = value
          data[i + 3] = 255
        }
        ctx.putImageData(imageData, 0, 0)
      }
      animId = requestAnimationFrame(throttledNoise)
    }
    animId = requestAnimationFrame(throttledNoise)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="noise-overlay"
      aria-hidden="true"
      style={{ opacity: 0.032, mixBlendMode: 'overlay' }}
    />
  )
}
