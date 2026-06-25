import Navbar from './Navbar'

const HERO_BG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260611_133301_d5f2a94a-b22e-4e4a-a6b6-eacdddf1f5b0.png&w=1280&q=85'

const GRASS_OVERLAY =
  'https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781191264/grass_eam204.png'

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <Navbar />

      <div className="flex-1 min-h-4 shrink-0 sm:min-h-12 lg:min-h-16" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <h1 className="font-display text-3xl font-normal leading-[1.1] tracking-tight text-gray-900 min-[400px]:text-4xl sm:text-6xl lg:text-7xl xl:text-[80px]">
          <span className="block animate-fade-up">Your farm guide,</span>
          <span className="block animate-fade-up [animation-delay:100ms]">
            always ready.
          </span>
        </h1>

        <p className="animate-fade-up mx-auto mt-3 max-w-sm text-xs leading-relaxed text-gray-600 [animation-delay:220ms] sm:mt-6 sm:max-w-md sm:text-base lg:text-lg">
          The bridge between farmers and everything they need — weather, mandi rates, govt schemes, loans, soil tests, and Krishi Sahayak to answer anything, in your language.
        </p>

        <div className="animate-fade-up mt-4 [animation-delay:340ms] sm:mt-6">
          <a
            href="#"
            className="inline-block rounded-full bg-gray-900 px-5 py-2 text-xs font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Download App
          </a>
        </div>
      </div>

      <div className="flex-1 min-h-4 shrink-0 sm:min-h-12 lg:min-h-16" />

      <div className="animate-hero-rise relative z-0 mx-auto flex w-[80%] max-w-xl shrink-0 items-start justify-center gap-3 [animation-delay:620ms] sm:w-[65%] sm:gap-5 lg:w-[44%] lg:max-w-lg lg:gap-6">
        <img
          src={`${BASE}phone-sahayak.png`}
          alt="Krishi Sahayak voice assistant screen"
          className="animate-float-left w-[46%] max-h-[42vh] -rotate-3 rounded-[1.2rem] object-contain drop-shadow-2xl sm:max-h-[52vh] sm:rounded-[2rem] lg:max-h-[45vh]"
        />
        <img
          src={`${BASE}phone-home.png`}
          alt="Krishi - UPAI home screen with services"
          className="animate-float-right w-[46%] max-h-[42vh] translate-y-6 rotate-3 rounded-[1.2rem] object-contain drop-shadow-2xl sm:max-h-[52vh] sm:translate-y-10 sm:rounded-[2rem] lg:max-h-[45vh]"
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
