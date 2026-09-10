import { Cloud, Lock, Server } from 'lucide-react'

const features = [
  {
    name: 'Instant deploys',
    desc: 'Ship from main with zero-downtime releases and one-click rollbacks.',
    icon: Cloud,
  },
  {
    name: 'Managed TLS',
    desc: 'Certificates issue and renew quietly across every custom domain.',
    icon: Lock,
  },
  {
    name: 'Automated backups',
    desc: 'Point-in-time snapshots on a schedule you actually control.',
    icon: Server,
  },
]

const log = [
  { time: '09:41:02', label: 'build', status: 'ok' },
  { time: '09:41:18', label: 'tls', status: 'ok' },
  { time: '09:41:19', label: 'edge', status: 'ok' },
  { time: '09:41:22', label: 'health', status: 'live' },
]

export default function Features() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
            Ship faster
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
            A calmer way to run infrastructure.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[color:var(--muted)]">
            Releases, certificates and backups stay out of the way — so the team spends time on the product, not the plumbing.
          </p>
          <dl className="mt-10 space-y-5">
            {features.map((feature) => (
              <div key={feature.name} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--panel)]">
                  <feature.icon size={16} className="text-[color:var(--green)]" />
                </div>
                <div>
                  <dt className="text-sm font-semibold text-[color:var(--text)]">{feature.name}</dt>
                  <dd className="mt-1 text-sm leading-6 text-[color:var(--muted)]">{feature.desc}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[color:var(--green)]/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] shadow-[0_24px_80px_rgba(0,0,0,.35)]">
            <div className="flex items-center justify-between border-b border-[color:var(--line)] px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--orange)]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--green)]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--blue)]/70" />
              </div>
              <span className="font-['DM_Mono',monospace] text-[10px] tracking-wide text-[color:var(--muted)]">
                prod · orbit-web
              </span>
            </div>
            <div className="space-y-2 p-4 font-['DM_Mono',monospace] text-[12px]">
              {log.map((row) => (
                <div
                  key={row.time}
                  className="flex items-center justify-between rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] px-3 py-2.5"
                >
                  <span className="text-[color:var(--muted)]">{row.time}</span>
                  <span className="text-[color:var(--text)]">{row.label}</span>
                  <span
                    className={
                      row.status === 'live'
                        ? 'text-[color:var(--green)]'
                        : 'text-[color:var(--blue)]'
                    }
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
