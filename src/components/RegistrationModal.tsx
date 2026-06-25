import { useEffect } from 'react'
import { useRegistrationModal } from '../context/RegistrationModalContext'
import RegistrationPanel from './RegistrationPanel'

export default function RegistrationModal() {
  const { isOpen, closeRegistration } = useRegistrationModal()

  useEffect(() => {
    if (!isOpen) return

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
  }, [isOpen, closeRegistration])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4 md:p-6">
      <button
        type="button"
        aria-label="Close registration form"
        className="absolute inset-0 bg-gray-900/50 backdrop-blur-md"
        onClick={closeRegistration}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="registration-modal-title"
        className="relative z-10 flex max-h-[100dvh] w-full max-w-5xl flex-col overflow-y-auto sm:max-h-[92dvh] sm:rounded-3xl"
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
