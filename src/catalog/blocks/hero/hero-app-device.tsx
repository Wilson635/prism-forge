import { ArrowUpRight } from 'lucide-react'

export default function HeroAppDevice() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-sky-50 to-white px-6 py-20 sm:px-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-20 lg:py-24">
      <div>
        <p className="text-sm font-medium text-sky-700">Prism for iOS</p>
        <h1 className="mt-4 max-w-md text-5xl font-semibold tracking-tight text-zinc-950">
          Carry the system in your pocket.
        </h1>
        <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500">
          Inspect tokens, copy snippets and preview blocks on device. Built for reviews in the hallway.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded-2xl bg-zinc-950 px-4 py-3 text-sm text-white">
            App Store
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 px-4 py-3 text-sm text-zinc-700">
            See the Android build <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <div className="relative mx-auto mt-14 h-[420px] w-[230px] rounded-[2.2rem] border-[10px] border-zinc-950 bg-zinc-900 shadow-2xl lg:mt-0">
        <div className="mx-auto mt-2 h-4 w-20 rounded-full bg-zinc-800" />
        <div className="mt-6 space-y-3 px-4">
          <div className="h-24 rounded-2xl bg-sky-400/90" />
          <div className="h-10 rounded-xl bg-white/10" />
          <div className="h-10 rounded-xl bg-white/10" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-20 rounded-xl bg-white/10" />
            <div className="h-20 rounded-xl bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
