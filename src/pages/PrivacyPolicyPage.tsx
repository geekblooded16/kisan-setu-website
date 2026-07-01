import Logo from '../components/Logo'

const sections = [
  {
    title: 'Introduction',
    body: `Kisan UPAI ("we", "our", or "us") is an initiative of the Department of Agriculture, Government of Uttar Pradesh. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Kisan UPAI mobile application, website, and related services (collectively, the "Services").

By accessing or using our Services, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use the Services.`,
  },
  {
    title: 'Information We Collect',
    body: `We may collect information that you provide directly to us, including but not limited to:

• Personal identification information (name, phone number, address, and farmer identification details)
• Agricultural and land-related information (crop details, land records, soil test data)
• Location data when you enable location services for weather, mandi rates, or nearby services
• Voice and chat inputs when you interact with Krishi Sahayak
• Device information, app usage data, and log files

We collect only information that is reasonably necessary to provide and improve the Services.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use the information we collect to:

• Provide agricultural advisory, weather updates, mandi rates, and government scheme information
• Process loan applications, registrations, and related government service requests
• Personalize your experience and deliver content in your preferred language
• Communicate with you about updates, support, and service-related notices
• Monitor, analyze, and improve the performance and security of our Services
• Comply with applicable laws, regulations, and government directives`,
  },
  {
    title: 'Information Sharing and Disclosure',
    body: `We do not sell your personal information. We may share your information with:

• Authorized government departments and agencies involved in delivering agricultural services
• Banking and financial institutions when you apply for loans or related financial products
• Technology partners and service providers who assist in operating the Services, subject to confidentiality obligations
• Law enforcement or regulatory authorities when required by applicable law

Any sharing is limited to what is necessary for the stated purpose and conducted in accordance with applicable data protection requirements.`,
  },
  {
    title: 'Data Security',
    body: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: 'Data Retention',
    body: `We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When information is no longer needed, we will securely delete or anonymize it.`,
  },
  {
    title: 'Your Rights',
    body: `Subject to applicable law, you may have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate or incomplete information
• Request deletion of your personal information, where applicable
• Withdraw consent for certain processing activities
• Lodge a complaint with a relevant data protection authority

To exercise these rights, please contact us using the details below.`,
  },
  {
    title: 'Children\'s Privacy',
    body: `Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us so we can take appropriate action.`,
  },
  {
    title: 'Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date. Your continued use of the Services after changes are posted constitutes acceptance of the revised policy.`,
  },
  {
    title: 'Contact Us',
    body: `If you have questions or concerns about this Privacy Policy or our data practices, please contact:

Department of Agriculture, Government of Uttar Pradesh
Agriculture Directorate Complex, Madan Mohan Malviya Marg
Lucknow, Uttar Pradesh — 226001
Email: support-kisanup@up.gov.in`,
  },
]

export default function PrivacyPolicyPage() {
  const homeHref = import.meta.env.BASE_URL

  return (
    <div className="min-h-dvh bg-gray-50 text-gray-900">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <a href={homeHref} className="flex items-center gap-2.5 text-gray-900">
            <Logo className="h-9 w-9 shrink-0" />
            <span className="font-sans text-sm font-semibold sm:text-base">
              Kisan UPAI
            </span>
          </a>
          <a
            href={homeHref}
            className="text-sm font-medium text-green-600 transition-colors hover:text-green-700"
          >
            Back to home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
        <p className="text-sm font-medium text-green-600">Legal</p>
        <h1 className="mt-2 text-balance font-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-gray-500">Last updated: June 29, 2026</p>
        <p className="mt-6 text-pretty text-[15px] leading-relaxed text-gray-600">
          This is placeholder content for review purposes. The final privacy
          policy will be updated before public release.
        </p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-gray-900">
                {section.title}
              </h2>
              <div className="mt-3 whitespace-pre-line text-pretty text-[15px] leading-relaxed text-gray-600">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-6 text-center text-sm text-gray-500 sm:px-8">
          © 2026 Department of Agriculture, Uttar Pradesh. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
