const logos = ['Northwind', 'Lumen', 'Kite', 'Harbor', 'Sable', 'Vellum', 'Orbit', 'Nimbus']

export default function HeroLogoMarquee() {
  const strip = [...logos, ...logos]

  return (
    <section className="overflow-hidden bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          The system behind the brands you already know.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-zinc-400">
          From seed studios to public companies — same blocks, different voice.
        </p>
        <a href="#" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950">
          Start with a kit
        </a>
      </div>
      <div className="mt-16 flex w-max animate-[marquee_28s_linear_infinite] gap-12 px-6 text-sm font-semibold tracking-[0.2em] text-zinc-600 uppercase">
        {strip.map((name, i) => (
          <span key={`${name}-${i}`}>{name}</span>
        ))}
      </div>
    </section>
  )
}
