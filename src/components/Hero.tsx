import { ArrowUp, Sparkles } from 'lucide-react'
import Navbar from './Navbar'
import DashboardMockup, { ScaledDashboard } from './DashboardMockup'

const HERO_BG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260611_133301_d5f2a94a-b22e-4e4a-a6b6-eacdddf1f5b0.png&w=1280&q=85'

const GRASS_OVERLAY =
  'https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781191264/grass_eam204.png'

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <Navbar />

      <div className="flex-1 min-h-8 shrink-0 sm:min-h-12 lg:min-h-16" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <h1 className="text-[40px] font-normal leading-[1.05] tracking-tight text-gray-900 min-[400px]:text-[44px] sm:text-6xl lg:text-7xl xl:text-[80px]">
          <span className="block animate-fade-up">Get cited.</span>
          <span className="block animate-fade-up [animation-delay:100ms]">
            Effortlessly.
          </span>
        </h1>

        <form
          className="animate-fade-up mx-auto mt-5 w-full max-w-xl [animation-delay:220ms] sm:mt-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex items-center gap-3 rounded-full bg-white/60 py-1.5 pl-5 pr-1.5 ring-1 ring-gray-200 backdrop-blur-md">
            <input
              type="text"
              placeholder="What makes content rank in AI search?"
              className="flex-1 bg-transparent py-2 text-sm text-gray-900 outline-none placeholder:text-gray-500 sm:text-base"
            />
            <button
              type="submit"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white transition-transform hover:scale-105 active:scale-95 sm:h-10 sm:w-10"
              aria-label="Submit search"
            >
              <ArrowUp className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
            </button>
          </div>
        </form>

        <p className="animate-fade-up mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-600 [animation-delay:340ms] sm:mt-5 sm:text-base lg:text-lg">
          Ship articles that answer actual customer questions
          <br />
          -- and be seen on{' '}
          <Sparkles className="-mt-1 inline h-4 w-4" /> ChatGPT
        </p>

        <div className="animate-fade-up mt-4 flex flex-wrap items-center justify-center gap-3 [animation-delay:460ms] sm:mt-5">
          <a
            href="#"
            className="rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg"
          >
            Try It Free
          </a>
          <a
            href="#"
            className="rounded-full px-6 py-2.5 text-sm font-medium text-gray-700 ring-1 ring-gray-300 transition-colors hover:bg-gray-100"
          >
            Talk to sales
          </a>
        </div>
      </div>

      <div className="flex-1 min-h-10 shrink-0 sm:min-h-12 lg:min-h-16" />

      <div className="animate-hero-rise relative z-0 mx-auto w-[92%] max-w-4xl shrink-0 [animation-delay:620ms] sm:w-[84%] sm:-mb-20 lg:w-[72%] lg:-mb-32 -mb-10">
        <ScaledDashboard>
          <DashboardMockup />
        </ScaledDashboard>
      </div>

      <img
        src={GRASS_OVERLAY}
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-full select-none"
      />
    </section>
  )
}
