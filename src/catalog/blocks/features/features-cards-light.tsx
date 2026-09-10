import { Rocket, Server, ShieldCheck } from 'lucide-react'

const features = [
  {
    name: 'Instant deploys',
    desc: 'Ship straight from your branch with zero-downtime releases.',
    icon: Rocket,
  },
  {
    name: 'Managed TLS',
    desc: 'Certificates renew automatically across every environment.',
    icon: ShieldCheck,
  },
  {
    name: 'Automated backups',
    desc: 'Point-in-time snapshots on a schedule you actually control.',
    icon: Server,
  },
]

export default function FeaturesCardsLight() {
  return (
    <section className="relative overflow-hidden bg-[#f4f1ea] px-6 py-20 font-['Manrope',sans-serif] text-[#161914] sm:px-10 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 80% 0%, color-mix(in oklab, var(--green) 22%, transparent), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green-grap)] uppercase">
            Paper · light
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">A calmer way to run infrastructure</h2>
          <p className="mt-4 text-sm leading-7 text-[#161914]/55">
            Releases, certificates and backups stay handled — you stay on the product.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.name}
              className="rounded-2xl border border-[#161914]/8 bg-white/70 p-7 shadow-[0_20px_50px_rgba(22,25,20,.06)] backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-['DM_Mono',monospace] text-[11px] text-[#161914]/40">0{index + 1}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#090b0a] text-[color:var(--green)]">
                  <feature.icon size={16} />
                </div>
              </div>
              <h3 className="mt-8 text-lg font-semibold">{feature.name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#161914]/55">{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
