export default function HeroDarkGrid() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-zinc-50 sm:px-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="font-mono text-[11px] tracking-widest text-cyan-300">SYS / HERO / 013</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Typed blocks. Predictable output.
          </h1>
          <p className="mt-4 text-sm leading-6 text-zinc-400">
            Every hero is a real React module, not a string of HTML hiding in a CMS.
          </p>
        </div>
        <pre className="overflow-auto rounded-2xl border border-white/10 bg-black/60 p-5 font-mono text-[12px] leading-6 text-cyan-100">
{`export default function Hero() {
  return (
    <section>
      <h1>Typed blocks.</h1>
    </section>
  )
}`}
        </pre>
      </div>
    </section>
  )
}
