import Logo from './Logo'
import FlickeringBrand from './FlickeringBrand'

const initiativePillars = [
  "Yogi Adityanath's Vision",
  'Beckn Protocol Hub',
  'UP DeDi Register Services',
  'National e-KCC Integrators',
]

const legalLinks = ['Disclaimer', 'Privacy Policy', 'Developer Guidelines']

export default function Footer() {
  return (
    <footer id="about" className="bg-gray-50 text-gray-600">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex flex-col items-start justify-start gap-2.5">
              <Logo className="h-[50px] w-[50px] shrink-0" />
              <div className="flex flex-col gap-0.5">
                <p className="font-sans text-lg font-semibold text-green-600">
                  Kisan UPAI
                </p>
                <p className="text-xs font-semibold tracking-[0.5px] text-gray-500">
                  State NFO Administration Directory
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-gray-600">
              Kisan UPAI is an official initiative of the Department of
              Agriculture, Government of Uttar Pradesh to foster modern digital
              agricultural systems.
            </p>
          </div>

          <div className="mt-16 h-fit">
            <h3 className="text-sm font-semibold tracking-[0.5px] text-gray-900">
              Initiative Pillars
            </h3>
            <ul className="mt-4 space-y-3">
              {initiativePillars.map((pillar) => (
                <li key={pillar}>
                  <a
                    href="#"
                    className="text-[15px] text-gray-600 transition-colors hover:text-emerald-700"
                  >
                    {pillar}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 h-fit sm:col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold tracking-[0.5px] text-gray-900">
              NFO Helpdesk Office
            </h3>
            <address className="mt-3 not-italic text-[15px] leading-relaxed text-gray-600">
              Agriculture Directorate Complex,
              <br />
              Madan Mohan Malviya Marg,
              <br />
              Lucknow, Uttar Pradesh - 226001
            </address>
            <a
              href="mailto:support-kisanup@up.gov.in"
              className="mt-3 inline-block text-[15px] font-medium text-emerald-700 transition-colors hover:text-emerald-800"
            >
              support-kisanup@up.gov.in
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 sm:mt-12">
          <div className="flex flex-col gap-4 text-[13px] text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p className="leading-relaxed">
              © 2026 Department of Agriculture, Uttar Pradesh. Powered by UPDASP
              &amp; Standard Protocol. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {legalLinks.map((link, index) => (
                <span key={link} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true">•</span>}
                  <a
                    href="#"
                    className="min-h-10 py-2 transition-colors hover:text-emerald-700"
                  >
                    {link}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <FlickeringBrand tone="green" />
        </div>
      </div>
    </footer>
  )
}
