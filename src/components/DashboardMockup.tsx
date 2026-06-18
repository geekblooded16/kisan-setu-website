import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Compass,
  Copy,
  Grid,
  Layers,
  ListTodo,
  Monitor,
  PanelLeft,
  Plus,
  RotateCw,
  Share,
  Sparkles,
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

const recentArticles = [
  'Signs a parent needs more help at home',
  'How to choose an in-home caregiver',
  'Medication reminders for seniors',
  'Fall prevention checklist for families',
]

const subjectCards = [
  { title: 'Elder Care', count: 24 },
  { title: 'Mobility', count: 18 },
  { title: 'Home Safety', count: 15 },
]

const inboxRows = [
  {
    question: 'What are early signs of dementia in elderly parents?',
    volume: '18.2K',
    difficulty: 'Medium',
    status: 'Drafting',
  },
  {
    question: 'How much does in-home care cost per month?',
    volume: '12.4K',
    difficulty: 'Low',
    status: 'Ready',
  },
  {
    question: 'Best mobility aids for seniors with arthritis',
    volume: '9.8K',
    difficulty: 'Medium',
    status: 'Drafting',
  },
  {
    question: 'How to prevent falls in the bathroom?',
    volume: '7.1K',
    difficulty: 'Low',
    status: 'Ready',
  },
  {
    question: 'When should families consider assisted living?',
    volume: '6.3K',
    difficulty: 'High',
    status: 'Drafting',
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
          <span className="text-[10px] text-white/60">questly.ai</span>
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
            <span className="flex h-4 w-4 items-center justify-center rounded bg-[#e8553f] text-[8px] font-medium text-white">
              C
            </span>
            <span className="text-[10px] text-white/80">CareNest</span>
          </div>

          <nav className="mb-4 space-y-2">
            <a
              href="#"
              className="flex items-center gap-2 text-[10px] text-white/60"
            >
              <Compass className="h-3 w-3" />
              Uncover
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[10px] text-white/60"
            >
              <Layers className="h-3 w-3" />
              Subjects
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[10px] text-white/60"
            >
              <ListTodo className="h-3 w-3" />
              Inbox
            </a>
          </nav>

          <div>
            <p className="mb-2 text-[8px] tracking-wider text-white/35">
              RECENT
            </p>
            <ul className="space-y-1.5">
              {recentArticles.map((article) => (
                <li
                  key={article}
                  className="flex items-start gap-1.5 text-[9px] leading-snug text-white/50"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#28c840]/70" />
                  {article}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8553f] text-sm font-medium text-white">
                C
              </span>
              <div>
                <p className="text-sm font-medium text-white">CareNest</p>
                <p className="text-[10px] text-white/45">
                  Senior care content workspace
                </p>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-[10px] font-medium text-white"
            >
              <Sparkles className="h-3 w-3" />
              Generate
            </button>
          </div>

          {/* Stats grid */}
          <div className="mb-4 grid grid-cols-4 divide-x divide-white/5 rounded-xl bg-white/[0.03] ring-1 ring-white/5">
            {[
              { label: 'RELEASED', value: '62', sub: 'Posts indexed' },
              { label: 'BREADTH', value: '12', sub: 'Subject groups' },
              { label: 'REMAINING', value: '412', sub: 'Ready to draft' },
              {
                label: 'MAX REACH',
                value: '3,156,200',
                sub: 'Searches a month',
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

          {/* Subject cards */}
          <div className="mb-4 grid grid-cols-3 gap-2">
            {subjectCards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg bg-white/[0.03] p-3 ring-1 ring-white/5"
              >
                <p className="text-[10px] font-medium text-white">
                  {card.title}
                </p>
                <p className="mt-1 text-[9px] text-white/40">
                  {card.count} articles
                </p>
              </div>
            ))}
          </div>

          {/* Drafting inbox */}
          <div className="rounded-lg bg-white/[0.03] ring-1 ring-white/5">
            <div className="border-b border-white/5 px-3 py-2">
              <p className="text-[10px] font-medium text-white/70">
                Drafting inbox
              </p>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5 text-left">
                  <th className="px-3 py-2 text-[8px] tracking-wider text-white/35">
                    QUESTION
                  </th>
                  <th className="px-3 py-2 text-[8px] tracking-wider text-white/35">
                    VOLUME
                  </th>
                  <th className="px-3 py-2 text-[8px] tracking-wider text-white/35">
                    DIFFICULTY
                  </th>
                  <th className="px-3 py-2 text-[8px] tracking-wider text-white/35">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                {inboxRows.map((row) => (
                  <tr key={row.question} className="border-b border-white/5 last:border-b-0">
                    <td className="max-w-[200px] truncate px-3 py-2 text-[9px] text-white/60">
                      {row.question}
                    </td>
                    <td className="px-3 py-2 text-[9px] text-white/50">
                      {row.volume}
                    </td>
                    <td className="px-3 py-2 text-[9px] text-white/50">
                      {row.difficulty}
                    </td>
                    <td
                      className={`px-3 py-2 text-[9px] ${
                        row.status === 'Drafting'
                          ? 'text-[#febc2e]/80'
                          : 'text-[#28c840]/70'
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
