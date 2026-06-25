import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type RegistrationModalContextValue = {
  isOpen: boolean
  openRegistration: () => void
  closeRegistration: () => void
}

const RegistrationModalContext =
  createContext<RegistrationModalContextValue | null>(null)

export function RegistrationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openRegistration = useCallback(() => setIsOpen(true), [])
  const closeRegistration = useCallback(() => setIsOpen(false), [])

  const value = useMemo(
    () => ({ isOpen, openRegistration, closeRegistration }),
    [isOpen, openRegistration, closeRegistration],
  )

  return (
    <RegistrationModalContext.Provider value={value}>
      {children}
    </RegistrationModalContext.Provider>
  )
}

export function useRegistrationModal() {
  const context = useContext(RegistrationModalContext)
  if (!context) {
    throw new Error(
      'useRegistrationModal must be used within RegistrationModalProvider',
    )
  }
  return context
}
