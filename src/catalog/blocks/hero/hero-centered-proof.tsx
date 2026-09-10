import { ArrowRight } from 'lucide-react'

const faces = ['https://i.pravatar.cc/80?img=12', 'https://i.pravatar.cc/80?img=32', 'https://i.pravatar.cc/80?img=45', 'https://i.pravatar.cc/80?img=5']

export default function HeroCenteredProof() {
  return (
    <section className="bg-white px-6 py-24 text-center text-zinc-950 sm:px-12 lg:py-32">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Trusted by 2,400 teams</p>
      <h1 className="mx-auto mt-5 max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
        Ship interfaces that feel inevitable.
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-500">
        Copy a block, paste it in your app, and keep moving. No design debt, no extra abstraction.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a href="#" className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white">
          Browse blocks <ArrowRight size={15} />
        </a>
        <a href="#" className="inline-flex rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-700">
          Book a demo
        </a>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <div className="flex -space-x-2">
          {faces.map((src) => (
            <img key={src} src={src} alt="" className="h-9 w-9 rounded-full border-2 border-white object-cover" />
          ))}
        </div>
        <p className="ml-3 text-sm text-zinc-500">Loved by design-led product teams</p>
      </div>
    </section>
  )
}
