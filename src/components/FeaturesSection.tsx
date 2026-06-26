import { useState } from 'react'
import { Mic, Shield, TrendingUp, type LucideIcon } from 'lucide-react'
import {
  SectionBadge,
  SectionHeading,
  SectionLead,
  SectionShell,
} from './ui/SectionHeader'

const BASE = import.meta.env.BASE_URL

type Feature = {
  id: number
  title: string
  description: string
  image: string
  imageAlt: string
  icon: LucideIcon
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Multilingual AI Advisory',
    description:
      'Speak or type in Hindi and local dialects to receive instant expert diagnostic reports and real-time personalized weather alerts powered by state database integration.',
    image: `${BASE}phone-sahayak.png`,
    imageAlt: 'Kisan UPAI AI chat with Dr. Krishi advisor',
    icon: Mic,
  },
  {
    id: 2,
    title: 'Near Farm Gate Procurement',
    description:
      'Check real-time APMC mandi price indices transparently and schedule physical procurement pickups near your farm gate directly from our certified buyer network.',
    image: `${BASE}phone-home.png`,
    imageAlt: 'Kisan UPAI mandi prices and services screen',
    icon: TrendingUp,
  },
  {
    id: 3,
    title: 'Frictionless eKCC Digital Loans',
    description:
      'Apply for or renew your Kisan Credit Card in minutes. Upload minimal credentials with automated land registry validation and get access to fast credit lines.',
    image: `${BASE}phone-home.png`,
    imageAlt: 'Kisan UPAI eKCC loan services screen',
    icon: Shield,
  },
]

export default function FeaturesSection() {
  const [activeId, setActiveId] = useState(features[0].id)

  return (
    <SectionShell id="features" containerClassName="max-w-6xl">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <div className="order-2 flex justify-center lg:order-1">
          <div className="relative w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px]">
            {features.map((feature) => (
              <img
                key={feature.id}
                src={feature.image}
                alt={feature.imageAlt}
                className={`w-full rounded-[1.75rem] object-contain drop-shadow-2xl transition-opacity duration-200 sm:rounded-[2rem] ${
                  feature.id === activeId
                    ? 'relative opacity-100'
                    : 'pointer-events-none absolute inset-0 m-auto opacity-0'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionBadge>Mobile AgTech Platform</SectionBadge>

          <SectionHeading className="leading-[48px]">
            Kisan UPAI App - Smart AI + Everything farmers need
          </SectionHeading>

          <SectionLead>
            The official Kisan UPAI mobile application brings advanced
            agricultural technology, instant financial services, and licensed
            market connectivity directly to your Android device. Engineered for
            high performance, ease of use, and local language accessibility.
          </SectionLead>

          <div className="mt-6 flex flex-col gap-4 sm:mt-8">
            {features.map((feature) => {
              const isActive = feature.id === activeId
              const Icon = feature.icon

              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveId(feature.id)}
                  aria-expanded={isActive}
                  className={`w-full rounded-[20px] p-4 text-left transition-all duration-200 ${
                    isActive
                      ? 'border border-emerald-600/70 bg-white shadow-[0_4px_24px_rgba(26,61,46,0.14)]'
                      : 'border-0 bg-transparent hover:bg-white'
                  }`}
                >
                  <div
                    className={`flex gap-3 sm:gap-4 ${
                      isActive ? 'items-start' : 'items-center'
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11 ${
                        isActive
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <div className="min-w-0 flex-1 flex flex-col gap-1">
                      <h3
                        className={`text-[15px] font-semibold sm:text-base ${
                          isActive ? 'text-brand-green' : 'text-gray-800'
                        }`}
                      >
                        {feature.title}
                      </h3>
                      {isActive && (
                        <p className="text-[15px] leading-relaxed text-gray-600">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
