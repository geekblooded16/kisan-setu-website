import { X } from 'lucide-react'
import RegistrationForm from './RegistrationForm'

const BASE = import.meta.env.BASE_URL

const REGISTRATION_BG = `${BASE}registration-farmer.png`

type RegistrationPanelProps = {
  formId: string
  onSubmit?: () => void
  onClose?: () => void
  showClose?: boolean
  titleId?: string
}

export default function RegistrationPanel({
  formId,
  onSubmit,
  onClose,
  showClose = false,
  titleId,
}: RegistrationPanelProps) {
  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl md:min-h-[36rem] md:flex-row">
      <div className="relative min-h-[22rem] overflow-hidden md:min-h-[36rem] md:w-1/2">
        <img
          src={REGISTRATION_BG}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.1) 36%, rgba(0, 0, 0, 0.75) 68%, rgba(0, 0, 0, 1) 100%)',
          }}
        />

        <div className="relative z-10 flex h-full min-h-[22rem] flex-col items-start justify-start p-8 text-white md:min-h-[36rem] md:p-10 lg:p-12">
          <div className="space-y-4">
            <h2 className="font-sans text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl lg:text-[2rem]">
              Join the UP State Public Directory registry.
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-white/90 sm:text-base">
              Accelerate your access to India&apos;s largest farming pipeline
              with standardized protocols and state-backed onboarding support.
            </p>
          </div>
        </div>

        <p className="absolute bottom-0 left-0 right-0 z-10 m-4 rounded-lg bg-black/50 p-3 text-sm leading-relaxed text-white/75">
          Reach 2.3 Crore farmers across Uttar Pradesh through one official
          integration gateway — no custom multi-tenant rebuilds required.
        </p>
      </div>

      <div className="relative flex flex-col bg-gray-50 md:w-1/2">
        {showClose && onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-200/80 hover:text-gray-900 sm:right-4 sm:top-4"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="mb-6 flex flex-col gap-1 sm:mb-8">
            <h3
              id={titleId}
              className="pr-10 font-sans text-2xl font-semibold leading-tight tracking-tight text-brand-green sm:text-[1.75rem]"
            >
              Start Your Network Onboarding
            </h3>
            <p className="text-[15px] leading-relaxed text-gray-600">
              For labs, agencies, and companies that serve farmers — register to
              onboard and offer your services on Kisan UPAI.
            </p>
          </div>

          <RegistrationForm id={formId} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  )
}
