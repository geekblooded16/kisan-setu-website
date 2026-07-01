import { useEffect, useRef } from 'react'

type Dot = {
  x: number
  y: number
  baseOpacity: number
  phase: number
}

type FlickeringBrandProps = {
  text?: string
  className?: string
  tone?: 'neutral' | 'green'
}

export default function FlickeringBrand({
  text = 'Kisan UPAI',
  className = '',
  tone = 'neutral',
}: FlickeringBrandProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let animationId = 0
    let dots: Dot[] = []
    let startTime = 0

    const buildDots = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      if (width === 0 || height === 0) return

      canvas.width = width * dpr
      canvas.height = height * dpr
      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      const offscreen = document.createElement('canvas')
      offscreen.width = width
      offscreen.height = height
      const offContext = offscreen.getContext('2d')
      if (!offContext) return

      const fontSize = Math.min(width / (text.length * 0.52), height * 0.72)
      offContext.fillStyle = tone === 'green' ? '#1a3d2e' : '#000'
      offContext.font = `600 ${fontSize}px Inter, Helvetica Neue, Arial, sans-serif`
      offContext.textAlign = 'center'
      offContext.textBaseline = 'middle'
      offContext.fillText(text, width / 2, height / 2)

      const imageData = offContext.getImageData(0, 0, width, height).data
      const spacing = Math.max(4, Math.round(fontSize / 14))
      const nextDots: Dot[] = []

      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          const alpha = imageData[(y * width + x) * 4 + 3]
          if (alpha > 40) {
            nextDots.push({
              x,
              y,
              baseOpacity: 0.25 + (alpha / 255) * 0.55,
              phase: Math.random() * Math.PI * 2,
            })
          }
        }
      }

      dots = nextDots
    }

    const dotColor = (opacity: number, index: number) => {
      if (tone !== 'green') {
        return `rgba(148, 163, 184, ${opacity})`
      }

      const palette = [
        [26, 61, 46],
        [21, 128, 61],
        [16, 185, 129],
        [5, 150, 105],
      ] as const
      const [r, g, b] = palette[index % palette.length]
      return `rgba(${r}, ${g}, ${b}, ${opacity})`
    }

    const draw = (time: number) => {
      if (!startTime) startTime = time
      const elapsed = (time - startTime) / 1000
      const width = canvas.clientWidth
      const height = canvas.clientHeight

      context.clearRect(0, 0, width, height)

      dots.forEach((dot, index) => {
        const flicker =
          0.55 +
          0.45 *
            Math.sin(elapsed * 3.2 + dot.phase + dot.x * 0.02 + dot.y * 0.015)
        const opacity = Math.min(1, dot.baseOpacity * flicker)

        context.beginPath()
        context.fillStyle = dotColor(opacity, index)
        context.arc(dot.x, dot.y, 1.15, 0, Math.PI * 2)
        context.fill()
      })

      animationId = window.requestAnimationFrame(draw)
    }

    buildDots()
    animationId = window.requestAnimationFrame(draw)

    const observer = new ResizeObserver(buildDots)
    observer.observe(canvas)

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotionChange = () => {
      if (media.matches) {
        window.cancelAnimationFrame(animationId)
        buildDots()
        context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
        for (const [index, dot] of dots.entries()) {
          context.beginPath()
          context.fillStyle = dotColor(dot.baseOpacity, index)
          context.arc(dot.x, dot.y, 1.15, 0, Math.PI * 2)
          context.fill()
        }
      } else {
        startTime = 0
        animationId = window.requestAnimationFrame(draw)
      }
    }

    media.addEventListener('change', onMotionChange)
    if (media.matches) onMotionChange()

    return () => {
      window.cancelAnimationFrame(animationId)
      observer.disconnect()
      media.removeEventListener('change', onMotionChange)
    }
  }, [text, tone])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`h-[6.048rem] w-full sm:h-[7.56rem] lg:h-[9.072rem] ${className}`}
    />
  )
}
