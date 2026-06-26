import type { ReactNode } from 'react'
import AnimatedShinyText from './AnimatedShinyText'

type Align = 'left' | 'center'

type SectionShellProps = {
  id?: string
  children: ReactNode
  className?: string
  variant?: 'white' | 'muted' | 'transparent'
  containerClassName?: string
}

export function SectionShell({
  id,
  children,
  className = '',
  variant = 'white',
  containerClassName = '',
}: SectionShellProps) {
  const variantClass =
    variant === 'muted'
      ? ''
      : variant === 'transparent'
        ? ''
        : 'bg-white'

  return (
    <section
      id={id}
      className={`px-5 py-14 sm:px-8 sm:py-18 lg:py-24 ${variantClass} ${className}`}
    >
      <div className={`mx-auto w-full max-w-6xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}

type BadgeVariant = 'light' | 'dark' | 'amber'

const badgeBarStyles: Record<BadgeVariant, string> = {
  light: 'border-black/5 bg-[#e9f8ef]',
  dark: 'border-white/20 bg-black/30 backdrop-blur-sm',
  amber: 'border-amber-500/25 bg-amber-500/10',
}

export function SectionBadge({
  children,
  variant = 'light',
  className = '',
  icon,
}: {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
  icon?: ReactNode
}) {
  const tone = variant === 'dark' ? 'dark' : variant === 'amber' ? 'amber' : 'light'

  return (
    <div
      className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 transition-colors ${badgeBarStyles[variant]} ${className}`}
    >
      {icon}
      <AnimatedShinyText
        tone={tone}
        className="text-[11px] font-semibold normal-case tracking-[0.14em]"
      >
        {children}
      </AnimatedShinyText>
    </div>
  )
}

export function SectionHeading({
  children,
  align = 'left',
  className = '',
  id,
}: {
  children: ReactNode
  align?: Align
  className?: string
  id?: string
}) {
  return (
    <h2
      id={id}
      className={`mt-4 font-sans text-[1.625rem] font-semibold leading-[1.2] tracking-tight text-brand-green sm:text-3xl lg:text-4xl ${
        align === 'center' ? 'text-center' : 'text-left'
      } ${className}`}
    >
      {children}
    </h2>
  )
}

export function SectionLead({
  children,
  align = 'left',
  className = '',
}: {
  children: ReactNode
  align?: Align
  className?: string
}) {
  return (
    <p
      className={`mt-3 text-[15px] leading-relaxed text-gray-600 sm:mt-4 sm:text-base ${
        align === 'center' ? 'text-center' : 'text-left'
      } ${className}`}
    >
      {children}
    </p>
  )
}
