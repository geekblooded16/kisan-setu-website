import Navbar from './Navbar'
import { type LanguageCode, useLanguage } from '../context/LanguageContext'
import { ShinyButtonLink } from './ui/shiny-button'
import { SectionBadge } from './ui/SectionHeader'

const HERO_BG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260611_133301_d5f2a94a-b22e-4e4a-a6b6-eacdddf1f5b0.png&w=1280&q=85'

const GRASS_OVERLAY =
  'https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781191264/grass_eam204.png'

const HOME_MOCKUP_VERSION = '1'
const VOICE_CHAT_MOCKUP_VERSION = '1'

const HOME_MOCKUPS: Record<LanguageCode, string> = {
  EN: `https://cdn.pixelbin.io/v2/cold-frost-a09fc4/original/Kisaan_Setu/Mockups/Home_(English).png?v=${HOME_MOCKUP_VERSION}`,
  HI: `https://cdn.pixelbin.io/v2/cold-frost-a09fc4/original/Kisaan_Setu/Mockups/Home_(Hindi).png?v=${HOME_MOCKUP_VERSION}`,
}

const VOICE_CHAT_MOCKUPS: Record<LanguageCode, string> = {
  EN: `https://cdn.pixelbin.io/v2/cold-frost-a09fc4/original/Kisaan_Setu/Mockups/Voice_Chat_(English).png?v=${VOICE_CHAT_MOCKUP_VERSION}`,
  HI: `https://cdn.pixelbin.io/v2/cold-frost-a09fc4/original/Kisaan_Setu/Mockups/Voice_Chat_(Hindi).png?v=${VOICE_CHAT_MOCKUP_VERSION}`,
}

export default function Hero() {
  const { language } = useLanguage()

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <Navbar />

      <div className="h-14 shrink-0 sm:h-16" aria-hidden="true" />

      <div className="flex-1 min-h-2 shrink-0 sm:min-h-8 lg:min-h-12" />

      <div className="relative z-10 mx-auto w-full max-w-[70rem] px-5 text-center sm:px-8">
        <SectionBadge
          variant="glass"
          textClassName="text-xs"
          className="mx-auto mb-5 animate-fade-up sm:mb-6"
        >
          Digital Initiative by UP Government
        </SectionBadge>

        <h1 className="font-sans text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-gray-900 min-[400px]:text-[2rem] sm:text-5xl lg:text-6xl">
          <span className="block animate-fade-up">Your farm guide,</span>
          <span className="block animate-fade-up [animation-delay:100ms]">
            one tap away.
          </span>
        </h1>

        <p className="animate-fade-up mx-auto mt-4 max-w-[35rem] text-[15px] leading-relaxed text-gray-600 [animation-delay:220ms] sm:mt-6 sm:text-base lg:text-lg">
          Supporting farmers in Uttar Pradesh with the latest agtech innovations
          including AI-based advisory, near farm gate procurement, easy eKCC
          loans, and more.
        </p>

        <div className="animate-fade-up mt-5 [animation-delay:340ms] sm:mt-6">
          <ShinyButtonLink href="#features" size="lg">
            Download App
          </ShinyButtonLink>
        </div>
      </div>

      <div className="flex-1 min-h-3 shrink-0 sm:min-h-8 lg:min-h-12" />

      <div className="animate-hero-rise relative z-0 mx-auto mt-2 flex w-[92%] max-w-md shrink-0 items-end justify-center gap-2.5 pt-3 [animation-delay:620ms] sm:mt-0 sm:w-full sm:max-w-xl sm:gap-4 sm:pt-0 lg:max-w-lg lg:gap-6">
        <img
          key={`voice-chat-${language}`}
          src={VOICE_CHAT_MOCKUPS[language]}
          alt="Krishi Sahayak voice assistant screen"
          className="animate-float-left w-[46%] max-h-[36vh] -rotate-3 rounded-[1.2rem] object-contain drop-shadow-2xl sm:max-h-[48vh] sm:rounded-[2rem] lg:max-h-[45vh]"
        />
        <img
          key={`home-${language}`}
          src={HOME_MOCKUPS[language]}
          alt="Krishi - UPAI home screen with services"
          className="animate-float-right w-[46%] max-h-[36vh] translate-y-4 rotate-3 rounded-[1.2rem] object-contain drop-shadow-2xl sm:max-h-[48vh] sm:translate-y-8 sm:rounded-[2rem] lg:max-h-[45vh]"
        />
      </div>

      <img
        src={GRASS_OVERLAY}
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 w-full select-none"
      />
    </section>
  )
}
