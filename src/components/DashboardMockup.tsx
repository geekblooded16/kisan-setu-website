import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Grid,
  Layers,
  ListTodo,
  Monitor,
  PanelLeft,
  Plus,
  RotateCw,
  Share,
  Mic,
} from 'lucide-react'
import Logo from './Logo'

const DESIGN_WIDTH = 896

export function ScaledDashboard({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState<number | undefined>(undefined)

  useEffect(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    const update = () => {
      const containerWidth = container.offsetWidth
      const newScale = containerWidth / DESIGN_WIDTH
      setScale(newScale)
      setHeight(inner.offsetHeight * newScale)
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(container)
    observer.observe(inner)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ height: height !== undefined ? `${height}px` : undefined }}
    >
      <div
        ref={innerRef}
        style={{
          width: DESIGN_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  )
}

const recentQueries = [
  'What is the weather forecast for next week?',
  'Show PM-KISAN scheme eligibility',
  'Wheat mandi price in Indore today',
  'How to treat yellow rust in wheat?',
]

const serviceCards = [
  { title: 'Weather & Advisory', count: 5 },
  { title: 'Mandi Prices', count: 12 },
  { title: 'Govt Schemes', count: 8 },
]

const inboxRows = [
  {
    query: 'PM-KISAN 17th installment status check',
    category: 'Schemes',
    language: 'Hindi',
    status: 'Answered',
  },
  {
    query: 'Soybean rate at Latur mandi today',
    category: 'Mandi',
    language: 'Marathi',
    status: 'Live',
  },
  {
    query: 'Soil testing centre near Nagpur',
    category: 'Soil',
    language: 'Hindi',
    status: 'Answered',
  },
  {
    query: 'KCC loan apply kaise kare?',
    category: 'Loans',
    language: 'Hindi',
    status: 'Live',
  },
  {
    query: 'Cotton pest identification from photo',
    category: 'Diagnosis',
    language: 'Telugu',
    status: 'Answered',
  },
]

export default function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-t-2xl bg-[#1a1a1c] text-left shadow-[0_-20px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-white/5 bg-[#242427] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: '#ff5f57' }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: '#febc2e' }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: '#28c840' }}
          />
        </div>

        <div className="flex items-center gap-2">
          <PanelLeft className="h-3.5 w-3.5 text-white/40" />
          <ChevronLeft className="h-3.5 w-3.5 text-white/40" />
          <ChevronRight className="h-3.5 w-3.5 text-white/25" />
        </div>

        <div className="mx-auto flex items-center gap-1.5 rounded-md bg-[#1a1a1c] px-6 py-1">
          <Monitor className="h-3.5 w-3.5 text-white/40" />
          <span className="text-[10px] text-white/60">krishi-upai.in</span>
        </div>

        <div className="flex items-center gap-2.5">
          <RotateCw className="h-3.5 w-3.5 text-white/40" />
          <Share className="h-3.5 w-3.5 text-white/40" />
          <Plus className="h-3.5 w-3.5 text-white/40" />
          <Copy className="h-3.5 w-3.5 text-white/40" />
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-[22%] shrink-0 border-r border-white/5 bg-[#1e1e21] px-3 py-3.5">
          <div className="mb-4 flex items-center justify-between">
            <Logo className="h-4 w-4 text-white/70" />
            <Grid className="h-3.5 w-3.5 text-white/30" />
          </div>

          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-4 w-4 items-center justify-center rounded bg-[#16a34a] text-[8px] font-medium text-white">
              K
            </span>
            <span className="text-[10px] text-white/80">Krishi - UPAI</span>
          </div>

          <nav className="mb-4 space-y-2">
            <a
              href="#"
              className="flex items-center gap-2 text-[10px] text-white/60"
            >
              <Mic className="h-3 w-3" />
              Sahayak
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[10px] text-white/60"
            >
              <Layers className="h-3 w-3" />
              Services
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[10px] text-white/60"
            >
              <ListTodo className="h-3 w-3" />
              Queries
            </a>
          </nav>

          <div>
            <p className="mb-2 text-[8px] tracking-wider text-white/35">
              RECENT
            </p>
            <ul className="space-y-1.5">
              {recentQueries.map((query) => (
                <li
                  key={query}
                  className="flex items-start gap-1.5 text-[9px] leading-snug text-white/50"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16a34a]/70" />
                  {query}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#16a34a] text-sm font-medium text-white">
                K
              </span>
              <div>
                <p className="text-sm font-medium text-white">Krishi - UPAI</p>
                <p className="text-[10px] text-white/45">
                  Agriculture portal for Indian farmers
                </p>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-[10px] font-medium text-white"
            >
              <Mic className="h-3 w-3" />
              Ask Sahayak
            </button>
          </div>

          {/* Stats grid */}
          <div className="mb-4 grid grid-cols-4 divide-x divide-white/5 rounded-xl bg-white/[0.03] ring-1 ring-white/5">
            {[
              { label: 'FARMERS', value: '1.2L', sub: 'Active users' },
              { label: 'LANGUAGES', value: '11', sub: 'Supported' },
              { label: 'MANDIS', value: '2,500+', sub: 'Live prices' },
              {
                label: 'SCHEMES',
                value: '120+',
                sub: 'Central & state',
              },
            ].map((stat) => (
              <div key={stat.label} className="px-3 py-3">
                <p className="text-[8px] tracking-wider text-white/35">
                  {stat.label}
                </p>
                <p className="text-xl font-medium text-white">{stat.value}</p>
                <p className="text-[8px] text-white/35">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Service cards */}
          <div className="mb-4 grid grid-cols-3 gap-2">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg bg-white/[0.03] p-3 ring-1 ring-white/5"
              >
                <p className="text-[10px] font-medium text-white">
                  {card.title}
                </p>
                <p className="mt-1 text-[9px] text-white/40">
                  {card.count} updates today
                </p>
              </div>
            ))}
          </div>

          {/* Queries inbox */}
          <div className="rounded-lg bg-white/[0.03] ring-1 ring-white/5">
            <div className="border-b border-white/5 px-3 py-2">
              <p className="text-[10px] font-medium text-white/70">
                Farmer queries
              </p>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5 text-left">
                  <th className="px-3 py-2 text-[8px] tracking-wider text-white/35">
                    QUERY
                  </th>
                  <th className="px-3 py-2 text-[8px] tracking-wider text-white/35">
                    CATEGORY
                  </th>
                  <th className="px-3 py-2 text-[8px] tracking-wider text-white/35">
                    LANGUAGE
                  </th>
                  <th className="px-3 py-2 text-[8px] tracking-wider text-white/35">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                {inboxRows.map((row) => (
                  <tr key={row.query} className="border-b border-white/5 last:border-b-0">
                    <td className="max-w-[200px] truncate px-3 py-2 text-[9px] text-white/60">
                      {row.query}
                    </td>
                    <td className="px-3 py-2 text-[9px] text-white/50">
                      {row.category}
                    </td>
                    <td className="px-3 py-2 text-[9px] text-white/50">
                      {row.language}
                    </td>
                    <td
                      className={`px-3 py-2 text-[9px] ${
                        row.status === 'Live'
                          ? 'text-[#16a34a]/80'
                          : 'text-[#febc2e]/70'
                      }`}
                    >
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
