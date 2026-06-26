import type { CSSProperties, ReactNode } from 'react'

type ShimmerTone = 'light' | 'dark' | 'amber'

type AnimatedShinyTextProps = {
  children: ReactNode
  className?: string
  shimmerWidth?: number
  tone?: ShimmerTone
}

const shimmerClasses =
  'animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%]'

const toneClasses: Record<ShimmerTone, string> = {
  light:
    'text-green-600 bg-gradient-to-r from-transparent via-green-400/80 via-50% to-transparent',
  dark: 'text-white/90 bg-gradient-to-r from-transparent via-white/85 via-50% to-transparent',
  amber:
    'text-amber-500/90 bg-gradient-to-r from-transparent via-amber-300/90 via-50% to-transparent',
}

export default function AnimatedShinyText({
  children,
  className = '',
  shimmerWidth = 120,
  tone = 'light',
}: AnimatedShinyTextProps) {
  return (
    <span
      style={{ '--shiny-width': `${shimmerWidth}px` } as CSSProperties}
      className={`${shimmerClasses} ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
