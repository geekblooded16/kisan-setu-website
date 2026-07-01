import { type ComponentType } from 'react'
import {
  SectionBadge,
  SectionHeading,
  SectionLead,
  SectionShell,
} from './ui/SectionHeader'

type PortalIcon = ComponentType<{ className?: string }>

function MassReachIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2C11.4501 2 13.4401 3.99 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3401 20C19.0601 19.85 19.7401 19.56 20.3001 19.13C21.8601 17.96 21.8601 16.03 20.3001 14.86C19.7501 14.44 19.0801 14.16 18.3701 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ApiSchemaIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M13.01 2.92007L18.91 5.54007C20.61 6.29007 20.61 7.53007 18.91 8.28007L13.01 10.9001C12.34 11.2001 11.24 11.2001 10.57 10.9001L4.67 8.28007C2.97 7.53007 2.97 6.29007 4.67 5.54007L10.57 2.92007C11.24 2.62007 12.34 2.62007 13.01 2.92007Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TechnicalSupportIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M10.49 2.23006L5.50003 4.10005C4.35003 4.53005 3.41003 5.89004 3.41003 7.12004V14.55C3.41003 15.73 4.19005 17.28 5.14005 17.99L9.44003 21.2001C10.85 22.2601 13.17 22.2601 14.58 21.2001L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V7.12004C20.61 5.89004 19.67 4.53005 18.52 4.10005L13.53 2.23006C12.68 1.92006 11.32 1.92006 10.49 2.23006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0001 10.92C11.9601 10.92 11.9101 10.92 11.8701 10.92C10.9301 10.89 10.1801 10.11 10.1801 9.16003C10.1801 8.19003 10.9701 7.40002 11.9401 7.40002C12.9101 7.40002 13.7001 8.19003 13.7001 9.16003C13.6901 10.12 12.9401 10.89 12.0001 10.92Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.01 13.72C9.05004 14.36 9.05004 15.41 10.01 16.05C11.1 16.78 12.89 16.78 13.98 16.05C14.94 15.41 14.94 14.36 13.98 13.72C12.9 12.99 11.11 12.99 10.01 13.72Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type PortalFeature = {
  title: string
  description: string
  icon: PortalIcon
}

const portalFeatures: PortalFeature[] = [
  {
    title: 'Massive Democratic Reach',
    description:
      'Reach 2.3 Crore farmers in Uttar Pradesh without the burden of rebuilding multi-tenant custom API integrations from scratch.',
    icon: MassReachIcon,
  },
  {
    title: 'Standardized API Schemas',
    description:
      'Leverage official Open API models and complete modular code toolkits compliant with standard system protocols.',
    icon: ApiSchemaIcon,
  },
  {
    title: 'Technical Support from UPDASP Partners Networks for Humanity',
    description:
      'Get premium, white-glove onboarding and developer-first configuration support from our state coordination office.',
    icon: TechnicalSupportIcon,
  },
]

function FeatureCard({
  feature,
  className = '',
}: {
  feature: PortalFeature
  className?: string
}) {
  const Icon = feature.icon

  return (
    <article
      className={`flex h-full w-full flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-colors hover:border-gray-300 sm:p-6 ${className}`}
    >
      <div className="flex flex-1 flex-col items-start gap-3 sm:gap-4">
        <span className="flex h-fit w-fit shrink-0 items-center justify-center rounded-full bg-green-600 p-[10px] text-white transition-colors duration-300">
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1 flex flex-col gap-1">
          <h3 className="text-[15px] font-semibold leading-snug text-brand-green sm:text-base">
            {feature.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-gray-600">
            {feature.description}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function ProviderPortalSection() {
  return (
    <SectionShell id="provider-portal" containerClassName="max-w-6xl">
      <div className="flex flex-col items-center justify-start text-center">
        <SectionBadge>Beckn Provider Portal</SectionBadge>
        <SectionHeading align="center">
          Join the UP Agriculture Digital Platform
        </SectionHeading>
        <SectionLead align="center">
          Accelerate your access to India&apos;s largest farming pipeline
        </SectionLead>
      </div>

      <div className="mt-8 grid items-stretch gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
        {portalFeatures.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </SectionShell>
  )
}
