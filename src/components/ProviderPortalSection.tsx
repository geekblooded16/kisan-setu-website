import { Award, Layers, Users, type LucideIcon } from 'lucide-react'
import {
  SectionBadge,
  SectionHeading,
  SectionLead,
  SectionShell,
} from './ui/SectionHeader'

type PortalFeature = {
  title: string
  description: string
  icon: LucideIcon
  iconClassName: string
  accent?: 'dot'
}

const topFeatures: PortalFeature[] = [
  {
    title: 'Massive Democratic Reach',
    description:
      'Reach 2.3 Crore farmers in Uttar Pradesh without the burden of rebuilding multi-tenant custom API integrations from scratch.',
    icon: Users,
    iconClassName: 'border-emerald-600/60 text-emerald-700',
  },
  {
    title: 'Standardized API Schemas',
    description:
      'Leverage official Open API models and complete modular code toolkits compliant with standard system protocols.',
    icon: Layers,
    iconClassName: 'border-amber-500/70 text-amber-600',
  },
]

const supportFeature: PortalFeature = {
  title: 'Technical Support from UPDASP Partners Networks for Humanity',
  description:
    'Get premium, white-glove onboarding and developer-first configuration support from our state coordination office.',
  icon: Award,
  iconClassName: 'border-gray-300 text-gray-700',
  accent: 'dot',
}

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
      className={`w-full rounded-2xl border border-gray-200 bg-white p-5 transition-colors hover:border-gray-300 sm:p-6 ${className}`}
    >
      <div className="flex flex-col items-start gap-3">
        <span
          className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-white sm:h-12 sm:w-12 ${feature.iconClassName}`}
        >
          <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" strokeWidth={1.75} />
          {feature.accent === 'dot' && (
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          )}
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
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
    <SectionShell id="provider-portal" containerClassName="max-w-5xl">
      <div className="flex flex-col items-center justify-start text-center">
        <SectionBadge>Beckn Provider Portal</SectionBadge>
        <SectionHeading align="center">
          Join the UP Agriculture Digital Platform
        </SectionHeading>
        <SectionLead align="center">
          Accelerate your access to India&apos;s largest farming pipeline
        </SectionLead>
      </div>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
        {topFeatures.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>

      <div className="mt-4 sm:mt-5">
        <FeatureCard feature={supportFeature} />
      </div>
    </SectionShell>
  )
}
