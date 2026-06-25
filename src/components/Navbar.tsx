import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useRegistrationModal } from '../context/RegistrationModalContext'
import Button, { ButtonLink } from './ui/Button'
import Logo from './Logo'

const navLinks = [
  { label: 'Features', href: '#features', hasChevron: true },
  { label: 'How It Works', href: '#provider-portal', hasChevron: false },
  { label: 'About', href: '#about', hasChevron: false },
]

const languages = ['EN', 'HI'] as const

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState<(typeof languages)[number]>('EN')
  const { openRegistration } = useRegistrationModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="animate-fade-down relative z-20 px-4 py-3.5 sm:px-8 sm:py-5 lg:px-10">
      <div className="flex items-center justify-between gap-2">
        <a href="#top" className="flex min-w-0 items-center gap-2 text-gray-900">
          <Logo className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
          <span className="truncate font-sans text-sm font-semibold tracking-tight sm:text-base">
            Krishi - UPAI
          </span>
        </a>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-sm text-gray-700 transition-colors hover:text-gray-900"
            >
              {link.label}
              {link.hasChevron && <ChevronDown className="h-3.5 w-3.5" />}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <div className="hidden items-center rounded-full bg-gray-900/10 p-0.5 text-[11px] font-medium min-[380px]:flex">
            {languages.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`min-h-8 min-w-8 rounded-full px-2.5 py-1 transition-all ${
                  lang === l
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={openRegistration}
            className="hidden h-9 min-h-0 !border-0 !bg-gray-900/10 px-3.5 !py-0 text-[13px] sm:inline-flex sm:px-4"
          >
            Register Now
          </Button>

          <ButtonLink
            href="#features"
            className={`hidden px-3.5 text-[13px] sm:inline-flex sm:px-4 md:px-5 ${
              scrolled
                ? 'opacity-100 translate-y-0'
                : 'pointer-events-none opacity-0 -translate-y-2'
            }`}
          >
            Download App
          </ButtonLink>

          <ButtonLink
            href="#features"
            size="md"
            className="px-3.5 text-[13px] sm:hidden"
          >
            Download
          </ButtonLink>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-900 transition-colors hover:bg-gray-900/10 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="absolute left-4 right-4 top-full z-30 mt-2 max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-2xl bg-white/95 px-4 py-2 ring-1 ring-gray-200 backdrop-blur-xl md:hidden"
          aria-label="Mobile"
        >
          <div className="mb-2 flex items-center rounded-full bg-gray-900/5 p-0.5 text-[11px] font-medium min-[380px]:hidden">
            {languages.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`min-h-9 flex-1 rounded-full px-2.5 py-1.5 transition-all ${
                  lang === l
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex min-h-12 items-center gap-1 border-b border-gray-200 py-3 text-[15px] text-gray-700 transition-colors hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
              {link.hasChevron && <ChevronDown className="h-3.5 w-3.5" />}
            </a>
          ))}

          <button
            type="button"
            className="flex min-h-12 w-full items-center border-b border-gray-200 py-3 text-left text-[15px] font-semibold text-gray-900"
            onClick={() => {
              setMobileOpen(false)
              openRegistration()
            }}
          >
            Register Now
          </button>

          <div className="py-3">
            <ButtonLink href="#features" fullWidth onClick={() => setMobileOpen(false)}>
              Download App
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  )
}
