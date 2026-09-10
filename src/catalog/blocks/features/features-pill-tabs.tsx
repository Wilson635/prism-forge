import { useState } from 'react'
import { Database, LockKeyhole, Workflow } from 'lucide-react'

const tabs = [
  {
    id: 'data',
    label: 'Data',
    icon: Database,
    title: 'Your warehouse, already wired',
    copy: 'Connect once. Blocks read typed records, not CSVs taped to a page.',
    stage: (
      <div className="overflow-hidden rounded-xl border border-[color:var(--line)] font-['DM_Mono',monospace] text-[11px]">
        <div className="grid grid-cols-3 border-b border-[color:var(--line)] bg-[color:var(--bg)] px-3 py-2 text-[color:var(--muted)]">
          <span>table</span>
          <span>rows</span>
          <span>fresh</span>
        </div>
        {[
          ['customers', '12.4k', '2m'],
          ['invoices', '88.1k', 'live'],
          ['events', '4.2M', 'stream'],
        ].map((r) => (
          <div key={r[0]} className="grid grid-cols-3 border-b border-[color:var(--line)] px-3 py-2.5 last:border-0">
            <span className="text-[color:var(--text)]">{r[0]}</span>
            <span className="text-[color:var(--muted)]">{r[1]}</span>
            <span className="text-[color:var(--green)]">{r[2]}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'auth',
    label: 'Auth',
    icon: LockKeyhole,
    title: 'Sessions that respect the org chart',
    copy: 'SSO, invites and environment roles without a weekend of glue.',
    stage: (
      <div className="space-y-2">
        {[
          ['Lina Ortiz', 'Owner', 'SSO'],
          ['Mark Keene', 'Editor', 'invite'],
          ['Aria Bell', 'Viewer', 'link'],
        ].map(([n, r, m]) => (
          <div
            key={n}
            className="flex items-center justify-between rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] px-3 py-2.5"
          >
            <span className="text-sm text-[color:var(--text)]">{n}</span>
            <span className="font-['DM_Mono',monospace] text-[10px] text-[color:var(--muted)]">{r}</span>
            <span className="font-['DM_Mono',monospace] text-[10px] text-[color:var(--green)]">{m}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'flow',
    label: 'Flows',
    icon: Workflow,
    title: 'Automations you can still read',
    copy: 'Human-readable steps. Replayable. No mystery boxes.',
    stage: (
      <ol className="space-y-3">
        {['Push to main', 'Run checks', 'Promote edge'].map((s, i) => (
          <li key={s} className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--green)]/40 font-['DM_Mono',monospace] text-[10px] text-[color:var(--green)]">
              {i + 1}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-[color:var(--line)] to-transparent" />
            <span className="text-sm text-[color:var(--text)]">{s}</span>
          </li>
        ))}
      </ol>
    ),
  },
]

export default function FeaturesPillTabs() {
  const [id, setId] = useState(tabs[0].id)
  const active = tabs.find((tab) => tab.id === id)!

  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
              Rooms
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
              One product, three rooms.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[color:var(--muted)]">
            Switch the floor. The stage follows — data, identity, or the path to production.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] lg:grid-cols-[220px_1fr]">
          <div className="flex gap-2 overflow-x-auto border-b border-[color:var(--line)] p-3 lg:flex-col lg:border-r lg:border-b-0">
            {tabs.map((tab) => {
              const on = id === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setId(tab.id)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
                    on
                      ? 'bg-[color:var(--bg)] text-[color:var(--text)] shadow-[inset_0_0_0_1px_var(--line)]'
                      : 'text-[color:var(--muted)] hover:text-[color:var(--text)]'
                  }`}
                >
                  <tab.icon size={15} className={on ? 'text-[color:var(--green)]' : ''} />
                  {tab.label}
                </button>
              )
            })}
          </div>
          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:items-center">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at 90% 10%, color-mix(in oklab, var(--green) 12%, transparent), transparent 50%)',
              }}
            />
            <div className="relative">
              <active.icon size={18} className="text-[color:var(--green)]" />
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[color:var(--text)]">{active.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{active.copy}</p>
            </div>
            <div className="relative">{active.stage}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
