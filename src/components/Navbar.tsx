import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'


const navLinks = [
  { label: 'Features', hasChevron: true },
  { label: 'How It Works', hasChevron: false },
  { label: 'About', hasChevron: false },
]

const languages = ['EN', 'HI'] as const

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState<(typeof languages)[number]>('EN')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="animate-fade-down relative z-20 px-5 sm:px-8 lg:px-10 py-4 sm:py-5">
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-gray-900">
          <Logo className="w-7 h-7 sm:w-8 sm:h-8" />
          <span className="font-display text-sm font-semibold tracking-tight sm:text-base">Krishi - UPAI</span>
        </a>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-1 text-[13px] text-gray-700 transition-colors hover:text-gray-900"
            >
              {link.label}
              {link.hasChevron && <ChevronDown className="h-3.5 w-3.5" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center rounded-full bg-gray-900/5 p-0.5 text-[11px] font-medium">
            {languages.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`rounded-full px-2.5 py-1 transition-all ${
                  lang === l
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="#"
            className={`rounded-full bg-gray-900 px-4 py-2 text-[13px] font-medium text-white transition-all hover:bg-gray-800 sm:px-5 ${
              scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            Download App
          </a>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-900 transition-colors hover:bg-gray-900/10 md:hidden"
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
          className="absolute left-4 right-4 top-full mt-2 animate-fade-up rounded-2xl bg-white/80 px-5 py-3 ring-1 ring-gray-200 backdrop-blur-xl md:hidden"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-1 border-b border-gray-200 py-3 text-[15px] text-gray-700 transition-colors last:border-b-0 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
              {link.hasChevron && <ChevronDown className="h-3.5 w-3.5" />}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
