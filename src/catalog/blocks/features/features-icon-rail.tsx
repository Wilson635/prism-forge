import { ArrowUpRight, Cpu, Globe, Shield } from 'lucide-react'

const items = [
  {
    n: '01',
    name: 'Edge cache',
    desc: 'Pages land close to whoever opens them — PoPs already warmed.',
    stat: '12ms',
    label: 'p50 TTFB',
    icon: Globe,
  },
  {
    n: '02',
    name: 'Typed APIs',
    desc: 'Contracts that fail in CI, not in a Friday incident channel.',
    stat: '100%',
    label: 'typed routes',
    icon: Cpu,
  },
  {
    n: '03',
    name: 'Access control',
    desc: 'Roles down to environment and token. No shared passwords.',
    stat: 'SSO',
    label: 'native',
    icon: Shield,
  },
]

export default function FeaturesIconRail() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 100% 0%, color-mix(in oklab, var(--green) 14%, transparent), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
              Platform rail
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
              The boring parts, done once.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[color:var(--muted)] lg:justify-self-end lg:text-right">
            An index, not a feature wall. Each row is a capability you stop thinking about after the first week.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)]">
          {items.map((item, i) => (
            <a
              key={item.name}
              href="#"
              className={`group grid items-center gap-5 px-5 py-7 sm:grid-cols-[88px_1fr_auto] sm:px-8 ${i ? 'border-t border-[color:var(--line)]' : ''}`}
            >
              <span className="font-['DM_Mono',monospace] text-3xl font-medium tracking-tight text-[color:var(--line)] transition group-hover:text-[color:var(--green)]">
                {item.n}
              </span>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] text-[color:var(--green)]">
                  <item.icon size={16} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[color:var(--text)]">{item.name}</h3>
                  <p className="mt-1 max-w-md text-sm leading-6 text-[color:var(--muted)]">{item.desc}</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-8 sm:justify-end">
                <div className="text-right">
                  <p className="font-['DM_Mono',monospace] text-lg text-[color:var(--text)]">{item.stat}</p>
                  <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.14em] text-[color:var(--muted)] uppercase">
                    {item.label}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[color:var(--muted)] transition group-hover:text-[color:var(--green)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
