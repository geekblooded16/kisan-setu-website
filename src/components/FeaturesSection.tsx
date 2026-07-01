import { useCallback, useEffect, useRef, useState, type ComponentType } from 'react'
import { type LucideIcon } from 'lucide-react'
import {
  type LanguageCode,
  useLanguage,
} from '../context/LanguageContext'
import {
  SectionBadge,
  SectionHeading,
  SectionLead,
  SectionShell,
} from './ui/SectionHeader'

const VOICE_CALL_MOCKUP_VERSION = '2'
const FARM_LOAN_MOCKUP_VERSION = '1'
const SOIL_HEALTH_MOCKUP_VERSION = '1'
const SELL_CROPS_MOCKUP_VERSION = '1'

const VOICE_CALL_MOCKUPS: Record<LanguageCode, string> = {
  EN: `https://cdn.pixelbin.io/v2/cold-frost-a09fc4/original/Kisaan_Setu/Mockups/Voice_Call_(English).png?v=${VOICE_CALL_MOCKUP_VERSION}`,
  HI: `https://cdn.pixelbin.io/v2/cold-frost-a09fc4/original/Kisaan_Setu/Mockups/Voice_Call_(Hindi).png?v=${VOICE_CALL_MOCKUP_VERSION}`,
}

const FARM_LOAN_MOCKUPS: Record<LanguageCode, string> = {
  EN: `https://cdn.pixelbin.io/v2/cold-frost-a09fc4/original/Kisaan_Setu/Mockups/Farmer_Loans_(English).png?v=${FARM_LOAN_MOCKUP_VERSION}`,
  HI: `https://cdn.pixelbin.io/v2/cold-frost-a09fc4/original/Kisaan_Setu/Mockups/Farmer_Loans_(Hindi).png?v=${FARM_LOAN_MOCKUP_VERSION}`,
}

const SOIL_HEALTH_MOCKUPS: Record<LanguageCode, string> = {
  EN: `https://cdn.pixelbin.io/v2/cold-frost-a09fc4/original/Kisaan_Setu/Mockups/Soil_Health_(English).png?v=${SOIL_HEALTH_MOCKUP_VERSION}`,
  HI: `https://cdn.pixelbin.io/v2/cold-frost-a09fc4/original/Kisaan_Setu/Mockups/Soil_Health_(Hindi).png?v=${SOIL_HEALTH_MOCKUP_VERSION}`,
}

const SELL_CROPS_MOCKUPS: Record<LanguageCode, string> = {
  EN: `https://cdn.pixelbin.io/v2/cold-frost-a09fc4/original/Kisaan_Setu/Mockups/Sell_Crops_(English).png?v=${SELL_CROPS_MOCKUP_VERSION}`,
  HI: `https://cdn.pixelbin.io/v2/cold-frost-a09fc4/original/Kisaan_Setu/Mockups/Sell_Crops_(Hindi).png?v=${SELL_CROPS_MOCKUP_VERSION}`,
}

const STICKY_TOP_REM = 5

function VoiceCallIcon({ className }: { className?: string }) {
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
        d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.3501 9.6499V11.3499C4.3501 15.5699 7.7801 18.9999 12.0001 18.9999C16.2201 18.9999 19.6501 15.5699 19.6501 11.3499V9.6499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6101 6.43012C11.5101 6.10012 12.4901 6.10012 13.3901 6.43012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2 8.55007C11.73 8.41007 12.28 8.41007 12.81 8.55007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FarmLoanIcon({ className }: { className?: string }) {
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
        d="M12.37 2.15009L21.37 5.75006C21.72 5.89006 22 6.31006 22 6.68006V10.0001C22 10.5501 21.55 11.0001 21 11.0001H3C2.45 11.0001 2 10.5501 2 10.0001V6.68006C2 6.31006 2.28 5.89006 2.63 5.75006L11.63 2.15009C11.83 2.07009 12.17 2.07009 12.37 2.15009Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19V22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 18V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 18V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 18V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 18V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 22H23"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SoilHealthIcon({ className }: { className?: string }) {
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
        d="M3.75 10.5C4.16421 10.5 4.5 10.1642 4.5 9.75C4.5 9.33579 4.16421 9 3.75 9C3.33579 9 3 9.33579 3 9.75C3 10.1642 3.33579 10.5 3.75 10.5Z"
        fill="currentColor"
      />
      <path
        d="M8.25 15C8.66421 15 9 14.6642 9 14.25C9 13.8358 8.66421 13.5 8.25 13.5C7.83579 13.5 7.5 13.8358 7.5 14.25C7.5 14.6642 7.83579 15 8.25 15Z"
        fill="currentColor"
      />
      <path
        d="M11.25 19.5C11.6642 19.5 12 19.1642 12 18.75C12 18.3358 11.6642 18 11.25 18C10.8358 18 10.5 18.3358 10.5 18.75C10.5 19.1642 10.8358 19.5 11.25 19.5Z"
        fill="currentColor"
      />
      <path
        d="M12.75 12C13.1642 12 13.5 11.6642 13.5 11.25C13.5 10.8358 13.1642 10.5 12.75 10.5C12.3358 10.5 12 10.8358 12 11.25C12 11.6642 12.3358 12 12.75 12Z"
        fill="currentColor"
      />
      <path
        d="M9.75 9C10.1642 9 10.5 8.66421 10.5 8.25C10.5 7.83579 10.1642 7.5 9.75 7.5C9.33579 7.5 9 7.83579 9 8.25C9 8.66421 9.33579 9 9.75 9Z"
        fill="currentColor"
      />
      <path
        d="M6.75 21C7.16421 21 7.5 20.6642 7.5 20.25C7.5 19.8358 7.16421 19.5 6.75 19.5C6.33579 19.5 6 19.8358 6 20.25C6 20.6642 6.33579 21 6.75 21Z"
        fill="currentColor"
      />
      <path
        d="M2.25 16.5C2.66421 16.5 3 16.1642 3 15.75C3 15.3358 2.66421 15 2.25 15C1.83579 15 1.5 15.3358 1.5 15.75C1.5 16.1642 1.83579 16.5 2.25 16.5Z"
        fill="currentColor"
      />
      <path
        d="M18.75 22.5C17.9636 22.5024 17.1965 22.2569 16.5576 21.7983C15.9188 21.3396 15.4408 20.6913 15.1917 19.9454C14.9425 19.1995 14.9348 18.3941 15.1697 17.6436C15.4045 16.8931 15.8701 16.2357 16.5 15.765V11.25C16.5 10.6533 16.7371 10.081 17.159 9.65901C17.581 9.23705 18.1533 9 18.75 9C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V15.765C21.6299 16.2357 22.0954 16.8931 22.3303 17.6436C22.5652 18.3941 22.5575 19.1995 22.3083 19.9454C22.0592 20.6913 21.5812 21.3396 20.9424 21.7983C20.3035 22.2569 19.5364 22.5024 18.75 22.5ZM18.75 10.5C18.5511 10.5 18.3603 10.579 18.2197 10.7197C18.079 10.8603 18 11.0511 18 11.25V16.5975L17.6273 16.815C17.2852 17.0093 17.0008 17.2907 16.8028 17.6305C16.6048 17.9704 16.5003 18.3567 16.5 18.75C16.5 19.3467 16.7371 19.919 17.159 20.341C17.581 20.7629 18.1533 21 18.75 21C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75C20.9998 18.3565 20.8954 17.9701 20.6974 17.6301C20.4994 17.2901 20.2149 17.0086 19.8727 16.8143L19.5 16.5975V11.25C19.5 11.0511 19.421 10.8603 19.2803 10.7197C19.1397 10.579 18.9489 10.5 18.75 10.5ZM1.5 4.5H22.5V6H1.5V4.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function SellCropIcon({ className }: { className?: string }) {
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
        d="M22.4288 5.22756C22.83 4.93506 22.92 4.37256 22.6275 3.97131C22.335 3.57006 21.7725 3.48006 21.3713 3.77256L18.5775 5.80506L18.2063 5.55756C17.4675 5.06256 16.5975 4.80006 15.7088 4.80006H8.08879C7.08754 4.80006 6.12004 5.13381 5.33629 5.74131L2.62879 3.77256C2.22754 3.48006 1.66504 3.57006 1.37254 3.97131C1.08004 4.37256 1.17004 4.93506 1.57129 5.22756L4.87129 7.62756C5.23129 7.88631 5.72254 7.84881 6.03754 7.53756L6.18379 7.39131C6.69004 6.88506 7.37629 6.60006 8.09254 6.60006H9.82879L6.39004 10.0388C5.80504 10.6238 5.80504 11.5726 6.39004 12.1613L6.42004 12.1913C8.17504 13.9501 11.025 13.9501 12.7838 12.1913L13.8 11.1751L17.4675 14.8426C18.0525 15.4276 18.0525 16.3763 17.4675 16.9651L17.1 17.3326L15.9375 16.1701C15.585 15.8176 15.015 15.8176 14.6663 16.1701C14.3175 16.5226 14.3138 17.0926 14.6663 17.4413L15.7163 18.4913C15.06 18.8813 14.3213 19.1176 13.5563 19.1851L11.7375 17.3626C11.385 17.0101 10.815 17.0101 10.4663 17.3626C10.1175 17.7151 10.1138 18.2851 10.4663 18.6338L11.0288 19.1963H10.8863C9.53254 19.1963 8.23504 18.6601 7.27879 17.7038L2.43754 12.8626C2.08504 12.5101 1.51504 12.5101 1.16629 12.8626C0.817541 13.2151 0.813791 13.7851 1.16629 14.1338L6.00754 18.9788C7.30129 20.2726 9.05629 21.0001 10.8863 21.0001H12.8288L12.8663 21.0376L12.9038 21.0001H13.1175C14.9475 21.0001 16.7025 20.2726 17.9963 18.9788L18.7425 18.2326C18.7875 18.1876 18.8288 18.1463 18.87 18.1013C18.8963 18.0826 18.9188 18.0601 18.9413 18.0376L22.8375 14.1376C23.19 13.7851 23.19 13.2151 22.8375 12.8663C22.485 12.5176 21.915 12.5138 21.5663 12.8663L19.5488 14.8838C19.3913 14.4038 19.125 13.9501 18.7425 13.5676L14.4375 9.26256C14.085 8.91006 13.515 8.91006 13.1663 9.26256L11.5125 10.9163C10.5188 11.9101 8.94379 11.9663 7.88629 11.0888L11.5875 7.38756C12.09 6.88506 12.7725 6.60006 13.485 6.59631H15.7163C16.2488 6.59631 16.77 6.75381 17.2125 7.05006L18.1013 7.65006C18.4163 7.86006 18.825 7.84881 19.1288 7.62756L22.4288 5.22756Z"
        fill="currentColor"
      />
    </svg>
  )
}

type FeatureIcon = LucideIcon | ComponentType<{ className?: string }>

type Feature = {
  id: number
  title: string
  description: string
  image: string
  imagesByLang?: Record<LanguageCode, string>
  imageAlt: string
  icon: FeatureIcon
}

function getFeatureImage(feature: Feature, language: LanguageCode) {
  return feature.imagesByLang?.[language] ?? feature.image
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Ask Krishi Sahayak - Get Instant Answers',
    description:
      'Tap, speak in Hindi or your dialect, and get answers on pests, weather, schemes, and irrigation - no typing needed.',
    image: VOICE_CALL_MOCKUPS.EN,
    imagesByLang: VOICE_CALL_MOCKUPS,
    imageAlt: 'Krishi Sahayak voice assistant helping a farmer in the field',
    icon: VoiceCallIcon,
  },
  {
    id: 2,
    title: 'Frictionless eKCC Digital Loans',
    description:
      'Check eKCC limits, compare rates, and apply at home. Upload documents and track approval without branch visits.',
    image: FARM_LOAN_MOCKUPS.EN,
    imagesByLang: FARM_LOAN_MOCKUPS,
    imageAlt: 'Kisan UPAI digital farm loan and eKCC application screen',
    icon: FarmLoanIcon,
  },
  {
    id: 3,
    title: 'Keep Track of Your Soil Health',
    description:
      'See test results in plain language with clear advice on what your soil needs - plan each season with confidence.',
    image: SOIL_HEALTH_MOCKUPS.EN,
    imagesByLang: SOIL_HEALTH_MOCKUPS,
    imageAlt: 'Kisan UPAI soil health insights and recommendations screen',
    icon: SoilHealthIcon,
  },
  {
    id: 4,
    title: 'List Your Crop & Find Buyers Nearby',
    description:
      'List your crop, check mandi-linked rates, and connect with verified buyers near your village - no middlemen.',
    image: SELL_CROPS_MOCKUPS.EN,
    imagesByLang: SELL_CROPS_MOCKUPS,
    imageAlt: 'Kisan UPAI crop selling and nearby buyer matching screen',
    icon: SellCropIcon,
  },
]

function FeaturePhone({ activeId }: { activeId: number }) {
  const { language } = useLanguage()

  return (
    <div className="order-2 flex justify-center overflow-hidden lg:order-1">
      <div className="relative w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px]">
        <div className="relative aspect-[9/19.5] w-full">
          {features.map((feature) => {
            const imageSrc = getFeatureImage(feature, language)
            const imageKey = feature.imagesByLang
              ? `${feature.id}-${language}`
              : feature.id

            return (
            <img
              key={imageKey}
              src={imageSrc}
              alt={feature.imageAlt}
              className={`absolute inset-0 h-full w-full rounded-[1.75rem] object-contain drop-shadow-2xl transition-opacity duration-500 ease-out sm:rounded-[2rem] ${
                feature.id === activeId
                  ? 'opacity-100'
                  : 'pointer-events-none opacity-0'
              }`}
            />
            )
          })}
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  feature,
  isActive,
  onSelect,
  reducedMotion = false,
}: {
  feature: Feature
  isActive: boolean
  onSelect: () => void
  reducedMotion?: boolean
}) {
  const Icon = feature.icon

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-expanded={isActive}
      className={`w-full rounded-[20px] px-4 py-0 text-left transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
        isActive
          ? 'border border-emerald-600/70 bg-white shadow-[0_4px_24px_rgba(26,61,46,0.14)]'
          : 'border border-transparent bg-transparent hover:bg-white'
      }`}
    >
      <div
        className={`flex gap-3 py-4 sm:gap-4 ${
          isActive ? 'items-start' : 'items-center'
        }`}
      >
        <span
          className={`flex h-fit w-fit shrink-0 items-center justify-center rounded-full p-[10px] transition-colors duration-300 ${
            isActive ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-500'
          }`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex h-fit min-w-0 flex-1 flex-col gap-0.5">
          <h3
            className={`text-[15px] font-semibold transition-colors duration-300 sm:text-base ${
              isActive ? 'text-brand-green' : 'text-gray-800'
            }`}
          >
            {feature.title}
          </h3>
          {reducedMotion ? (
            isActive && (
              <p className="text-pretty text-[15px] leading-relaxed text-gray-600">
                {feature.description}
              </p>
            )
          ) : (
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                isActive
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-pretty text-[15px] leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </button>
  )
}

function FeaturesContent({
  activeId,
  onSelectFeature,
  reducedMotion = false,
}: {
  activeId: number
  onSelectFeature: (index: number) => void
  reducedMotion?: boolean
}) {
  return (
    <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
      <FeaturePhone activeId={activeId} />

      <div className="order-1 lg:order-2">
        <SectionBadge>Built for daily farmer needs</SectionBadge>

        <SectionHeading className="leading-tight sm:leading-[1.2]">
          Kisan UPAI - Smarter tools for every farmer
        </SectionHeading>

        <SectionLead>
          From morning weather checks to evening mandi rates, loans, soil advice,
          and selling your harvest - everything a farmer needs in one simple app,
          in your language, on your phone.
        </SectionLead>

        <div className="mt-6 flex flex-col gap-4 sm:mt-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              isActive={feature.id === activeId}
              onSelect={() => onSelectFeature(index)}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function FeaturesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeId, setActiveId] = useState(features[0].id)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [useStickyScroll, setUseStickyScroll] = useState(false)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const desktop = window.matchMedia('(min-width: 1024px)')
    const sync = () => {
      setReducedMotion(motion.matches)
      setUseStickyScroll(!motion.matches && desktop.matches)
    }
    sync()
    motion.addEventListener('change', sync)
    desktop.addEventListener('change', sync)
    return () => {
      motion.removeEventListener('change', sync)
      desktop.removeEventListener('change', sync)
    }
  }, [])

  const scrollToFeature = useCallback((index: number) => {
    const container = scrollRef.current
    if (!container || reducedMotion) {
      setActiveId(features[index].id)
      return
    }

    const scrollRange = container.offsetHeight - window.innerHeight
    if (scrollRange <= 0) {
      setActiveId(features[index].id)
      return
    }

    const containerTop = container.getBoundingClientRect().top + window.scrollY
    const step = scrollRange / features.length
    const target = containerTop + step * index + 1

    window.scrollTo({ top: target, behavior: 'smooth' })
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) return

    const updateFromScroll = () => {
      const container = scrollRef.current
      if (!container) return

      const scrollRange = container.offsetHeight - window.innerHeight
      if (scrollRange <= 0) return

      const progress = Math.min(
        1,
        Math.max(0, -container.getBoundingClientRect().top / scrollRange),
      )
      const index = Math.min(
        features.length - 1,
        Math.max(0, Math.floor(progress * features.length)),
      )

      setActiveId(features[index].id)
    }

    updateFromScroll()
    window.addEventListener('scroll', updateFromScroll, { passive: true })
    window.addEventListener('resize', updateFromScroll)

    return () => {
      window.removeEventListener('scroll', updateFromScroll)
      window.removeEventListener('resize', updateFromScroll)
    }
  }, [reducedMotion])

  if (!useStickyScroll) {
    return (
      <SectionShell id="features" containerClassName="max-w-6xl" className="bg-white">
        <FeaturesContent
          activeId={activeId}
          onSelectFeature={(index) => setActiveId(features[index].id)}
          reducedMotion={reducedMotion}
        />
      </SectionShell>
    )
  }

  return (
    <SectionShell
      id="features"
      containerClassName="max-w-6xl"
      className="bg-white !pb-0 sm:!pb-0 lg:!pb-0"
    >
      <div
        ref={scrollRef}
        className="relative"
        style={{ height: `${features.length * 100}dvh` }}
      >
        <div
          className="sticky z-10 flex items-center bg-white"
          style={{
            top: `${STICKY_TOP_REM}rem`,
            height: `calc(100dvh - ${STICKY_TOP_REM}rem)`,
          }}
        >
          <div className="w-full py-6 sm:py-8">
            <FeaturesContent
              activeId={activeId}
              onSelectFeature={scrollToFeature}
            />
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
