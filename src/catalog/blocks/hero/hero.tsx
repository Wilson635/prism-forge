import { ArrowUpRight, Play } from 'lucide-react'

export default function OrbitHero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 py-20 text-white sm:px-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-16 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div>
        <span className="text-sm font-medium tracking-wide text-violet-300">Introducing Orbit</span>
        <h1 className="mt-5 max-w-xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          Your work, in focus.
        </h1>
        <p className="mt-5 max-w-md text-base leading-7 text-zinc-400">
          A calmer workspace for teams who ship. Plans, reviews and releases in one quiet surface.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-100"
          >
            Start building <ArrowUpRight size={16} />
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-zinc-300 hover:text-white">
            <Play size={14} /> Watch a 90s tour
          </a>
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-4 shadow-2xl lg:mt-0">
        <div className="flex items-center gap-1.5 px-2 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {['Design', 'Review', 'Ship'].map((label, i) => (
            <div key={label} className="rounded-2xl bg-zinc-950 p-4">
              <p className="text-[11px] uppercase tracking-wide text-zinc-500">{label}</p>
              <p className="mt-3 text-2xl font-semibold">{[12, 4, 28][i]}</p>
              <div className="mt-4 flex h-12 items-end gap-1">
                {[40, 55, 35, 70, 48, 82, 60].map((h, j) => (
                  <div
                    key={j}
                    className="flex-1 rounded-sm bg-violet-400/80"
                    style={{ height: `${h * (0.6 + i * 0.15)}%` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
