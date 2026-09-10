const stats = [
  { value: '12ms', label: 'First paint' },
  { value: '99.98%', label: 'Uptime' },
  { value: '140+', label: 'Blocks ready' },
]

export default function HeroStatsBand() {
  return (
    <section className="bg-emerald-950 px-6 py-20 text-emerald-50 sm:px-12 lg:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Infrastructure</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
        Fast enough that the interface disappears.
      </h1>
      <p className="mt-5 max-w-xl text-sm leading-6 text-emerald-100/70">
        Edge-rendered previews, tiny payloads, no runtime theme engine in your customers’ way.
      </p>
      <a href="#" className="mt-8 inline-flex rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-emerald-950">
        See the numbers
      </a>
      <dl className="mt-14 grid gap-8 border-t border-emerald-800/80 pt-10 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label}>
            <dt className="text-xs uppercase tracking-wide text-emerald-300/80">{item.label}</dt>
            <dd className="mt-2 text-4xl font-semibold">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
