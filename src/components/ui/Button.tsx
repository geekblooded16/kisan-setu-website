import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline'
type ButtonSize = 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  children: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg active:bg-gray-950',
  secondary:
    'border border-gray-900/15 bg-white text-gray-900 hover:border-gray-900/25 hover:bg-gray-50 active:bg-gray-100',
  outline:
    'border border-gray-900 bg-white/65 text-gray-900 backdrop-blur-md hover:bg-white/80 active:bg-white/90',
  accent:
    'bg-[#1a3d2e] text-white hover:bg-[#153225] active:bg-[#122a1f] shadow-sm',
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'min-h-11 px-5 py-2.5 text-sm font-semibold',
  lg: 'min-h-12 px-6 py-3 text-sm font-semibold sm:text-[15px]',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  const radiusClass = variant === 'accent' ? 'rounded-xl' : 'rounded-full'

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2.5 transition-all ${radiusClass} ${variantClasses[variant]} ${sizeClasses[size]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  children: ReactNode
}

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  const radiusClass = variant === 'accent' ? 'rounded-xl' : 'rounded-full'

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 transition-all ${radiusClass} ${variantClasses[variant]} ${sizeClasses[size]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
