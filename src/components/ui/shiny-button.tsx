import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import './shiny-button.css'

type ShinyButtonSize = 'sm' | 'lg'

type ShinyButtonBaseProps = {
  children: ReactNode
  size?: ShinyButtonSize
  fullWidth?: boolean
  className?: string
}

const sizeClasses: Record<ShinyButtonSize, string> = {
  sm: 'shiny-cta--sm',
  lg: 'shiny-cta--lg',
}

function shinyClassName(
  size: ShinyButtonSize,
  fullWidth: boolean,
  className: string,
) {
  return `shiny-cta ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`.trim()
}

export function ShinyButton({
  children,
  size = 'lg',
  fullWidth = false,
  className = '',
  type = 'button',
  ...props
}: ShinyButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={shinyClassName(size, fullWidth, className)}
      {...props}
    >
      <span>{children}</span>
    </button>
  )
}

export function ShinyButtonLink({
  children,
  size = 'lg',
  fullWidth = false,
  className = '',
  href,
  ...props
}: ShinyButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className={shinyClassName(size, fullWidth, className)} {...props}>
      <span>{children}</span>
    </a>
  )
}
