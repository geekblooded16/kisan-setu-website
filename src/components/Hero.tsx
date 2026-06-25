import Navbar from './Navbar'
import { ButtonLink } from './ui/Button'

const HERO_BG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260611_133301_d5f2a94a-b22e-4e4a-a6b6-eacdddf1f5b0.png&w=1280&q=85'

const GRASS_OVERLAY =
  'https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781191264/grass_eam204.png'

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <Navbar />

      <div className="flex-1 min-h-2 shrink-0 sm:min-h-8 lg:min-h-12" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <h1 className="font-sans text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-gray-900 min-[400px]:text-[2rem] sm:text-5xl lg:text-6xl">
          <span className="block animate-fade-up">Your farm guide,</span>
          <span className="block animate-fade-up [animation-delay:100ms]">
            always ready.
          </span>
        </h1>

        <p className="animate-fade-up mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-gray-600 [animation-delay:220ms] sm:mt-6 sm:text-base lg:text-lg">
          Supporting farmers in Uttar Pradesh with the latest agtech innovations
          including AI-based advisory, near farm gate procurement, easy eKCC
          loans, and more.
        </p>

        <div className="animate-fade-up mt-5 [animation-delay:340ms] sm:mt-6">
          <ButtonLink href="#features" size="lg">
            Download App
          </ButtonLink>
        </div>
      </div>

      <div className="flex-1 min-h-2 shrink-0 sm:min-h-8 lg:min-h-12" />

      <div className="animate-hero-rise relative z-0 mx-auto flex w-[88%] max-w-md shrink-0 items-start justify-center gap-2.5 [animation-delay:620ms] sm:w-[72%] sm:max-w-xl sm:gap-4 lg:w-[44%] lg:max-w-lg lg:gap-6">
        <img
          src={`${BASE}phone-sahayak.png`}
          alt="Krishi Sahayak voice assistant screen"
          className="animate-float-left w-[46%] max-h-[36vh] -rotate-3 rounded-[1.2rem] object-contain drop-shadow-2xl sm:max-h-[48vh] sm:rounded-[2rem] lg:max-h-[45vh]"
        />
        <img
          src={`${BASE}phone-home.png`}
          alt="Krishi - UPAI home screen with services"
          className="animate-float-right w-[46%] max-h-[36vh] translate-y-4 rotate-3 rounded-[1.2rem] object-contain drop-shadow-2xl sm:max-h-[48vh] sm:translate-y-8 sm:rounded-[2rem] lg:max-h-[45vh]"
        />
      </div>

      <img
        src={GRASS_OVERLAY}
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-full select-none"
      />
    </section>
  )
}
