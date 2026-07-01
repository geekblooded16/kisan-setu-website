import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export const languages = [
  { code: 'EN', label: 'EN' },
  { code: 'HI', label: 'हिं' },
] as const

export type LanguageCode = (typeof languages)[number]['code']

type LanguageContextValue = {
  language: LanguageCode
  setLanguage: (language: LanguageCode) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>('EN')

  const setLanguage = useCallback((next: LanguageCode) => {
    setLanguageState(next)
  }, [])

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
