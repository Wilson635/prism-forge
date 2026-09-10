import { Fingerprint, Lock, RefreshCw, Zap } from 'lucide-react'

const features = [
  {
    name: 'Push to deploy',
    description: 'Automated pipelines ship the moment you merge. No ceremony.',
    icon: Zap,
    meta: 'main → edge',
  },
  {
    name: 'Managed TLS',
    description: 'Every domain encrypted and renewed in the background.',
    icon: Lock,
    meta: 'auto-renew',
  },
  {
    name: 'Simple queues',
    description: 'Jobs with retries and a dead-letter you can actually open.',
    icon: RefreshCw,
    meta: 'at-least-once',
  },
  {
    name: 'Session lock',
    description: 'Fingerprint-level auth. Anomalies die in the first hop.',
    icon: Fingerprint,
    meta: 'device-bound',
  },
]

export default function FeaturesGrid2X2() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div
        className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--green), transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--purple), transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
            Deploy faster
          </p>
          <h2 className="mt-3 bg-gradient-to-r from-[color:var(--text)] via-[color:var(--text)] to-[color:var(--green)] bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
            Everything required to ship. Nothing to decorate.
          </h2>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.name}
              className="group rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)]/80 p-6 backdrop-blur-sm transition hover:border-[color:var(--green)]/35"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] text-[color:var(--green)]">
                  <feature.icon size={18} />
                </div>
                <span className="font-['DM_Mono',monospace] text-[10px] tracking-[0.14em] text-[color:var(--muted)] uppercase">
                  {feature.meta}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-[color:var(--text)]">{feature.name}</h3>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
