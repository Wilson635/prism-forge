import { Fingerprint, Lock, RefreshCw, Zap } from 'lucide-react'

export default function FeaturesGrid2X2() {
  const features = [
    {
      name: 'Push to deploy',
      description: 'Automated pipelines ship your code the moment you merge, no manual steps required.',
      icon: Zap
    },
    {
      name: 'SSL certificates',
      description: 'Every domain is encrypted automatically and renewed silently in the background.',
      icon: Lock
    },
    {
      name: 'Simple queues',
      description: 'Background jobs run reliably with built-in retries and dead-letter handling.',
      icon: RefreshCw
    },
    {
      name: 'Advanced security',
      description: 'Fingerprint-level auth and anomaly detection keep every session locked down.',
      icon: Fingerprint
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--bg)] px-8 py-16 sm:px-12">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--green)] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[color:var(--purple)] opacity-20 blur-3xl" />
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-wide text-[color:var(--green)]">Deploy faster</p>
        <h2 className="mt-2 bg-gradient-to-r from-[color:var(--text)] to-[color:var(--muted)] bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
          Everything you need to ship
        </h2>
      </div>
      <div className="relative mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="group rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)]/60 p-6 backdrop-blur-xl transition hover:border-[color:var(--green-deep)]/50">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--green)] to-[color:var(--green-deep)] shadow-lg shadow-[color:var(--green)]/20">
              <feature.icon size={20} className="text-[color:var(--bg)]" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-[color:var(--text)]">{feature.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
