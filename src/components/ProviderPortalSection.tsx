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
}

const topFeatures: PortalFeature[] = [
  {
    title: 'Massive Democratic Reach',
    description:
      'Reach 2.3 Crore farmers in Uttar Pradesh without the burden of rebuilding multi-tenant custom API integrations from scratch.',
    icon: Users,
  },
  {
    title: 'Standardized API Schemas',
    description:
      'Leverage official Open API models and complete modular code toolkits compliant with standard system protocols.',
    icon: Layers,
  },
]

const supportFeature: PortalFeature = {
  title: 'Technical Support from UPDASP Partners Networks for Humanity',
  description:
    'Get premium, white-glove onboarding and developer-first configuration support from our state coordination office.',
  icon: Award,
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
      <div className="flex flex-col items-start gap-3 sm:gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 text-white sm:h-11 sm:w-11">
          <Icon className="h-[18px] w-[18px]" />
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
