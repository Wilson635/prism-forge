import { Grid2X2 } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "features",
  name: "Bento feature grid",
  category: "Features",
  tone: "mint",
  icon: Grid2X2,
  code: `const features = [
  {
    name: "Instant deploys",
    desc: "Ship straight from your branch with zero-downtime releases.",
    icon: Cloud
  },
  {
    name: "Managed TLS",
    desc: "Certificates renew automatically across every environment.",
    icon: Lock
  },
  {
    name: "Automated backups",
    desc: "Point-in-time snapshots run on a schedule you control.",
    icon: Server
  }
];

<section className="rounded-3xl bg-[#090b0a] px-6 py-20 sm:px-10">
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
    <div>
      <span className="text-sm font-semibold text-[#79f2b0]">Ship faster</span>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#f1f5f2] sm:text-5xl">
        A calmer way to run infrastructure
      </h2>
      <p className="mt-5 text-base leading-relaxed text-[#8b958f]">
        Every release, certificate and backup is handled for you, so the team can spend its time on the product instead of the plumbing underneath it.
      </p>
      <dl className="mt-10 space-y-6">
        {features.map((feature) => (
          <div key={feature.name} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#252c28] bg-gradient-to-br from-[#3ecf8e]/20 to-transparent">
              <feature.icon size={18} className="text-[#79f2b0]" />
            </div>
            <div>
              <dt className="text-sm font-semibold text-[#f1f5f2]">{feature.name}</dt>
              <dd className="mt-1 text-sm text-[#8b958f]">{feature.desc}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>

    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#79f2b0]/20 via-[#7fc8ff]/10 to-transparent blur-2xl" />
      <div className="relative rounded-2xl border border-[#252c28] bg-[#101311]/80 p-2 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-1.5 border-b border-[#252c28] px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f7a77a]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#79f2b0]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#7fc8ff]/60" />
        </div>
        <div className="space-y-3 p-6">
          <div className="h-3 w-2/3 rounded-full bg-gradient-to-r from-[#79f2b0]/40 to-transparent" />
          <div className="h-3 w-1/2 rounded-full bg-[#151a17]" />
          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-[#79f2b0]/20 to-transparent" />
            <div className="aspect-square rounded-xl bg-gradient-to-br from-[#7fc8ff]/20 to-transparent" />
            <div className="aspect-square rounded-xl bg-gradient-to-br from-[#b99cff]/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        `,
} satisfies Block
