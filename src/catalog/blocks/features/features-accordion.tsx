import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const rows = [
  {
    q: 'Observability',
    a: 'Traces, logs and deploys share one timeline so incidents stay short.',
    kicker: 'Live',
    stage: (
      <div className="space-y-2 font-['DM_Mono',monospace] text-[11px]">
        {[
          { t: '14:02:11', e: 'deploy', s: 'ok' },
          { t: '14:02:18', e: 'trace', s: 'p95 84ms' },
          { t: '14:02:21', e: 'alert', s: 'quiet' },
        ].map((row) => (
          <div
            key={row.t}
            className="flex items-center justify-between rounded-lg border border-[color:var(--line)] bg-[color:var(--bg)] px-3 py-2"
          >
            <span className="text-[color:var(--muted)]">{row.t}</span>
            <span className="text-[color:var(--text)]">{row.e}</span>
            <span className="text-[color:var(--green)]">{row.s}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    q: 'Preview apps',
    a: 'Every pull request gets a URL. Stakeholders comment on the real thing.',
    kicker: 'PR · 1842',
    stage: (
      <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] p-4">
        <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
          preview
        </p>
        <p className="mt-2 text-sm font-semibold text-[color:var(--text)]">pr-1842.orbit.dev</p>
        <p className="mt-1 text-xs text-[color:var(--muted)]">Ready · 38s · Lina commented</p>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[color:var(--line)]">
          <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[color:var(--green-deep)] to-[color:var(--green)]" />
        </div>
      </div>
    ),
  },
  {
    q: 'Secrets',
    a: 'Rotated, scoped, never copied into a Slack thread again.',
    kicker: 'Vault',
    stage: (
      <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] p-4 font-['DM_Mono',monospace] text-[11px]">
        {[
          ['STRIPE_KEY', 'prod · rotated'],
          ['GH_APP', 'org · sealed'],
          ['RESEND', 'preview · 12h'],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center justify-between border-b border-[color:var(--line)] py-2 last:border-0">
            <span className="text-[color:var(--text)]">{k}</span>
            <span className="text-[color:var(--muted)]">{v}</span>
          </div>
        ))}
      </div>
    ),
  },
]

export default function FeaturesAccordion() {
  const [open, setOpen] = useState(0)
  const active = rows[open] ?? rows[0]

  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
        <div>
          <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
            Open one
          </p>
          <h2 className="mt-3 max-w-md text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
            Only the room you need.
          </h2>
          <div className="mt-10">
            {rows.map((row, i) => {
              const on = open === i
              return (
                <div key={row.q} className={i ? 'border-t border-[color:var(--line)]' : ''}>
                  <button
                    className="flex w-full items-baseline justify-between gap-4 py-5 text-left"
                    onClick={() => setOpen(i)}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">0{i + 1}</span>
                      <span className={`text-lg font-semibold ${on ? 'text-[color:var(--text)]' : 'text-[color:var(--muted)]'}`}>
                        {row.q}
                      </span>
                    </span>
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${on ? 'bg-[color:var(--green)] shadow-[0_0_10px_var(--green)]' : 'bg-[color:var(--line)]'}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pl-9 text-sm leading-7 text-[color:var(--muted)]">{row.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6 shadow-[0_28px_80px_rgba(0,0,0,.35)]">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(160deg, color-mix(in oklab, var(--green) 10%, transparent), transparent 45%)',
            }}
          />
          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="font-['DM_Mono',monospace] text-[10px] tracking-[0.18em] text-[color:var(--muted)] uppercase">
                Stage
              </span>
              <span className="font-['DM_Mono',monospace] text-[10px] text-[color:var(--green)]">{active.kicker}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-[color:var(--text)]">{active.q}</h3>
            <div className="mt-6">{active.stage}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
