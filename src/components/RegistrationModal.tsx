import { useEffect, useState } from 'react'
import { useRegistrationModal } from '../context/RegistrationModalContext'
import RegistrationPanel from './RegistrationPanel'

const TRANSITION_MS = 320

export default function RegistrationModal() {
  const { isOpen, closeRegistration } = useRegistrationModal()
  const [isMounted, setIsMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsVisible(true))
      })
      return () => cancelAnimationFrame(frame)
    }

    setIsVisible(false)
    const timer = window.setTimeout(() => setIsMounted(false), TRANSITION_MS)
    return () => window.clearTimeout(timer)
  }, [isOpen])

  useEffect(() => {
    if (!isMounted) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeRegistration()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isMounted, closeRegistration])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4 md:p-6">
      <button
        type="button"
        aria-label="Close registration form"
        className={`absolute inset-0 bg-gray-900/50 backdrop-blur-md transition-opacity duration-300 ease-out motion-reduce:transition-none ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeRegistration}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="registration-modal-title"
        className={`relative z-10 flex max-h-[100dvh] w-full max-w-5xl flex-col overflow-y-auto transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:max-h-[92dvh] sm:rounded-3xl ${
          isVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-full scale-100 opacity-0 sm:translate-y-8 sm:scale-[0.94]'
        }`}
        style={{ transformOrigin: 'center bottom' }}
      >
        <RegistrationPanel
          formId="registration-modal"
          titleId="registration-modal-title"
          showClose
          onClose={closeRegistration}
          onSubmit={closeRegistration}
        />
      </div>
    </div>
  )
}
