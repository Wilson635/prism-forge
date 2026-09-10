import { Rocket, Server, ShieldCheck } from 'lucide-react'

export default function FeaturesCardsLight() {
  const features = [
    {
      name: 'Instant deploys',
      desc: 'Ship straight from your branch with zero-downtime releases.',
      icon: Rocket
    },
    {
      name: 'Managed TLS',
      desc: 'Certificates renew automatically across every environment.',
      icon: ShieldCheck
    },
    {
      name: 'Automated backups',
      desc: 'Point-in-time snapshots run on a schedule you control.',
      icon: Server
    }
  ];

  return (
    <section className="bg-white px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-600">
          Ship faster
        </span>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          A calmer way to run infrastructure
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-500">
          Every release, certificate and backup is handled for you, so the team can spend its time on the product instead of the plumbing underneath it.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={feature.name}
            className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100"
          >
            <span className="text-xs font-semibold text-slate-300">0{index + 1}</span>
            <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
              <feature.icon size={20} />
            </div>
            <h3 className="mt-5 text-base font-semibold text-slate-950">{feature.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
