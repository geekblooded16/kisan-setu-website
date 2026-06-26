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

const navEase = 'duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState<(typeof languages)[number]>('EN')
  const { openRegistration } = useRegistrationModal()

  useEffect(() => {
    const onScroll = () => {
      setScrolled((prev) => {
        if (window.scrollY > 80) return true
        if (window.scrollY < 16) return false
        return prev
      })
    }
    onScroll()
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
    <header
      className={`fixed left-0 right-0 z-50 w-full transition-[top,padding] ${navEase} ${
        scrolled
          ? 'top-3 px-4 sm:top-4 sm:px-6 lg:px-8'
          : 'top-0 px-4 py-3.5 sm:px-8 sm:py-5 lg:px-10'
      }`}
    >
      <div
        className={`relative mx-auto flex max-w-6xl items-center justify-between gap-2 transition-[background-color,box-shadow,border-radius,padding,backdrop-filter] ${navEase} ${
          scrolled
            ? 'rounded-full border border-white/35 bg-white/60 px-3.5 py-2.5 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-5 sm:py-3'
            : 'rounded-none border-0 border-transparent bg-transparent px-0 py-0 shadow-none backdrop-blur-none'
        }`}
      >
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

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <div
            className={`hidden items-center rounded-full p-0.5 text-[11px] font-medium transition-colors ${navEase} min-[380px]:flex ${
              scrolled ? 'bg-gray-900/8' : 'bg-gray-900/5'
            }`}
          >
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
            className={`hidden h-9 min-h-0 px-3.5 !py-0 text-[13px] transition-[background-color,border-color,backdrop-filter] ${navEase} sm:inline-flex sm:px-4 ${
              scrolled
                ? 'border-gray-900/10 bg-white/45 backdrop-blur-sm'
                : '!border-0 !bg-gray-900/10'
            }`}
          >
            Register Now
          </Button>

          <ButtonLink
            href="#features"
            className={`hidden px-3.5 text-[13px] transition-[opacity,transform] ${navEase} sm:inline-flex sm:px-4 md:px-5 ${
              scrolled
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-1 opacity-0'
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

        {mobileOpen && (
          <nav
            className={`absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl px-4 py-2 backdrop-blur-xl md:hidden ${
              scrolled
                ? 'border border-white/40 bg-white/80 shadow-[0_16px_48px_rgba(15,23,42,0.12)]'
                : 'border border-gray-200/80 bg-white/95 shadow-lg'
            }`}
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
                className="flex min-h-12 items-center gap-1 border-b border-gray-200/80 py-3 text-[15px] text-gray-700 transition-colors hover:text-gray-900"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
                {link.hasChevron && <ChevronDown className="h-3.5 w-3.5" />}
              </a>
            ))}

            <button
              type="button"
              className="flex min-h-12 w-full items-center border-b border-gray-200/80 py-3 text-left text-[15px] font-semibold text-gray-900"
              onClick={() => {
                setMobileOpen(false)
                openRegistration()
              }}
            >
              Register Now
            </button>

            <div className="py-3">
              <ButtonLink
                href="#features"
                fullWidth
                onClick={() => setMobileOpen(false)}
              >
                Download App
              </ButtonLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
