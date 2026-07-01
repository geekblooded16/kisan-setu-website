import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { languages, useLanguage } from '../context/LanguageContext'
import { useRegistrationModal } from '../context/RegistrationModalContext'
import Button from './ui/Button'
import { ShinyButtonLink } from './ui/shiny-button'
import Logo from './Logo'

const navEase = 'duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'

const navButtonSizeClass =
  'h-9 !min-h-9 !max-h-9 shrink-0 px-3.5 !py-0 text-[13px] font-semibold leading-none sm:px-4'

const navShinyButtonClass =
  '!h-9 !min-h-9 !max-h-9 shrink-0 !px-3.5 !py-0 !text-[13px] !font-semibold !leading-none sm:!px-4'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { openRegistration } = useRegistrationModal()

  const langToggleShell = scrolled
    ? 'border border-gray-900/10 bg-white/45 backdrop-blur-sm'
    : 'bg-gray-900/5'

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
      className={`fixed left-0 right-0 z-50 w-full max-w-[100vw] overflow-x-clip transition-[top,padding] sm:px-8 ${navEase} ${
        scrolled ? 'top-3 px-5 sm:top-4' : 'top-0 px-1 py-3.5 sm:py-5'
      }`}
    >
      <div
        className={`relative mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 transition-[background-color,box-shadow,border-radius,padding,backdrop-filter] ${navEase} ${
          scrolled
            ? 'rounded-full border border-white/35 bg-white/60 py-2.5 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:py-3'
            : 'rounded-none border-0 border-transparent bg-transparent py-0 shadow-none backdrop-blur-none'
        }`}
      >
        <a href="#top" className="flex min-w-0 items-center gap-2 text-gray-900">
          <Logo className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
          <span className="truncate font-sans text-sm font-semibold tracking-tight sm:text-base">
            Krishi - UPAI
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <div
            className={`hidden h-9 w-fit shrink-0 items-center rounded-full p-0.5 text-[11px] font-medium transition-[background-color,border-color,backdrop-filter] ${navEase} min-[380px]:flex ${langToggleShell}`}
          >
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLanguage(l.code)}
                className={`flex h-8 min-h-8 w-8 shrink-0 items-center justify-center rounded-full px-2 transition-all ${
                  language === l.code
                    ? 'bg-gray-900/10 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={openRegistration}
            className={`hidden ${navButtonSizeClass} transition-[background-color,border-color,backdrop-filter] ${navEase} md:inline-flex ${
              scrolled
                ? 'border-gray-900/10 bg-white/45 backdrop-blur-sm'
                : '!border-0 !bg-gray-900/10'
            }`}
          >
            Register Now
          </Button>

          {scrolled && (
            <ShinyButtonLink
              href="#features"
              size="sm"
              className={`${navShinyButtonClass} max-md:!hidden md:inline-flex transition-[opacity,transform] ${navEase}`}
            >
              Download App
            </ShinyButtonLink>
          )}

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
            <div
              className={`mb-2 flex h-9 shrink-0 items-center rounded-full text-[11px] font-medium min-[380px]:hidden ${
                scrolled
                  ? 'border border-gray-900/10 bg-white/45'
                  : 'bg-gray-900/5'
              }`}
            >
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLanguage(l.code)}
                  className={`flex h-9 min-h-9 flex-1 items-center justify-center rounded-full px-2.5 transition-all ${
                    language === l.code
                      ? 'bg-gray-900/10 text-gray-900'
                      : 'text-gray-600'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <div className="mt-2 flex flex-col gap-3 py-3">
              <Button
                variant="outline"
                fullWidth
                onClick={() => {
                  setMobileOpen(false)
                  openRegistration()
                }}
                className={`${navButtonSizeClass} ${
                  scrolled
                    ? 'border-gray-900/10 bg-white/45 backdrop-blur-sm'
                    : '!border-0 !bg-gray-900/10'
                }`}
              >
                Register Now
              </Button>

              <ShinyButtonLink
                href="#features"
                size="sm"
                fullWidth
                className={`${navShinyButtonClass} !w-full justify-center`}
                onClick={() => setMobileOpen(false)}
              >
                Download App
              </ShinyButtonLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
