import { ChevronDown } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import Button from './ui/Button'

const serviceCategories = [
  'AI & Advisory Services',
  'Mandi & Procurement',
  'eKCC & Financial Services',
  'Weather & Soil Health',
  'Government Schemes',
  'Other AgTech Services',
]

const inputClassName =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20'

type RegistrationFormProps = {
  id?: string
  onSubmit?: () => void
}

export default function RegistrationForm({ id, onSubmit }: RegistrationFormProps) {
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit?.()
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div>
        <label
          htmlFor={`${id ?? 'registration'}-org`}
          className="mb-2 block text-[15px] font-medium text-gray-800"
        >
          Organization / Startup Name
        </label>
        <input
          id={`${id ?? 'registration'}-org`}
          name="organization"
          type="text"
          required
          placeholder="e.g., Harit Krishi Solutions Private Limited"
          className={inputClassName}
        />
      </div>

      <div>
        <label
          htmlFor={`${id ?? 'registration'}-email`}
          className="mb-2 block text-[15px] font-medium text-gray-800"
        >
          Point of Contact Email
        </label>
        <input
          id={`${id ?? 'registration'}-email`}
          name="email"
          type="email"
          required
          placeholder="e.g., integration@haritkrishi.in"
          className={inputClassName}
        />
      </div>

      <div>
        <label
          htmlFor={`${id ?? 'registration'}-phone`}
          className="mb-2 block text-[15px] font-medium text-gray-800"
        >
          POC Mobile Number
        </label>
        <input
          id={`${id ?? 'registration'}-phone`}
          name="phone"
          type="tel"
          inputMode="tel"
          required
          placeholder="e.g., 9988776655"
          className={inputClassName}
        />
      </div>

      <div>
        <label
          htmlFor={`${id ?? 'registration'}-category`}
          className="mb-2 block text-[15px] font-medium text-gray-800"
        >
          Service Category
        </label>
        <div className="relative">
          <select
            id={`${id ?? 'registration'}-category`}
            name="category"
            required
            defaultValue=""
            className={`${inputClassName} appearance-none pr-10`}
          >
            <option value="" disabled>
              Select Service Category
            </option>
            {serviceCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <label className="mt-5 flex w-full cursor-pointer items-center justify-center gap-3">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(event) => setAgreed(event.target.checked)}
          required
          className="h-5 w-5 shrink-0 rounded border-gray-300 text-emerald-700 focus:ring-emerald-600/30"
        />
        <span className="text-[15px] leading-relaxed text-gray-600">
          We want to scale using standardized protocols.
        </span>
      </label>

      <Button type="submit" variant="primary" size="lg" fullWidth>
        Apply to Join the Registry
      </Button>
    </form>
  )
}
