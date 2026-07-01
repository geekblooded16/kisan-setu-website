import { Quote } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import {
  SectionBadge,
  SectionHeading,
  SectionLead,
  SectionShell,
} from './ui/SectionHeader'

const BASE = import.meta.env.BASE_URL

const AVATAR = `${BASE}yogi-adityanath-portrait.png`

const testimonial = {
  name: 'Shri Yogi Adityanath',
  role: 'Chief Minister, Uttar Pradesh',
  quote:
    'Through technology and digital networks, we are eliminating middlemen and putting the power of real-time data, financial credit, and fair market prices directly into the hands of our farmers.',
}

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

export default function TestimonialSection() {
  const { ref, isInView } = useInView()

  return (
    <SectionShell id="testimonial" containerClassName="max-w-6xl">
      <section
        ref={ref}
        className={`grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 ${
          isInView ? 'testimonial-visible' : ''
        }`}
      >
        <div className="testimonial-intro flex flex-col justify-center text-center md:text-left">
          <SectionBadge className="mx-auto md:mx-0">
            Leadership Vision
          </SectionBadge>
          <SectionHeading align="center" className="leading-tight md:text-left sm:leading-[1.2]">
            Initiative for farmers by Uttar Pradesh Government
          </SectionHeading>
          <SectionLead align="center" className="md:text-left">
            A state-backed commitment to fair markets, real-time data, and digital
            tools that reach every farmer in Uttar Pradesh.
          </SectionLead>
        </div>

        <div className="testimonial-card relative min-h-[280px] overflow-visible md:mr-10 md:min-h-[360px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-3 -top-3 z-0 h-24 w-32 rounded-2xl bg-gray-100/80 sm:-right-4 sm:-top-4 sm:h-28 sm:w-36"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-3 -left-3 z-0 h-24 w-32 rounded-2xl bg-emerald-100/70 sm:-bottom-4 sm:-left-4 sm:h-28 sm:w-36"
          />

          <article className="relative z-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-8">
            <Quote
              aria-hidden="true"
              className="mb-4 h-8 w-8 text-[#00c771]"
              strokeWidth={1.5}
            />

            <blockquote className="font-inter-display text-lg italic leading-relaxed text-gray-700 sm:text-xl">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <div
              aria-hidden="true"
              className="my-6 h-px w-full bg-gray-200"
            />

            <div className="flex items-center gap-4">
              <img
                src={AVATAR}
                alt={testimonial.name}
                className="h-12 w-12 shrink-0 rounded-full object-cover object-[center_22%] ring-2 ring-[#1e2d3d]/10 sm:h-14 sm:w-14"
              />
              <div className="min-w-0 text-left">
                <p className="font-sans text-[15px] font-semibold text-gray-900 sm:text-base">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-xs font-medium tracking-[0.12em] text-[#16a34a] sm:text-[13px]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </SectionShell>
  )
}
