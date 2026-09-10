export default function HeroCinematic() {
  return (
    <section className="relative isolate min-h-[540px] overflow-hidden bg-zinc-950 text-white">
      <img
        src="https://images.unsplash.com/photo-1492684223066-81342eea348d?w=1600&auto=format&fit=crop&q=70"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
      <div className="relative flex min-h-[540px] flex-col justify-end px-8 py-16 sm:px-14">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Festival 2026</p>
        <h1 className="mt-3 max-w-2xl text-5xl font-semibold tracking-tight sm:text-6xl">
          Nights built for the big screen.
        </h1>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950">
            Get tickets
          </a>
          <a href="#" className="rounded-full border border-white/30 px-6 py-3 text-sm text-white">
            Watch the trailer
          </a>
        </div>
      </div>
    </section>
  )
}
