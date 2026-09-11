export default function CtaQuoteClose() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <figure>
          <p
            className="bg-gradient-to-b from-[color:var(--green)]/30 to-transparent bg-clip-text font-semibold text-transparent text-7xl leading-none"
            aria-hidden
          >
            “
          </p>
          <blockquote className="-mt-8 max-w-xl text-2xl font-medium leading-snug tracking-tight text-[color:var(--text)] sm:text-3xl">
            We stopped translating Figma into tickets. The block is the ticket.
          </blockquote>
          <figcaption className="mt-6 font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">
            Lina Ortiz · Product, Harbor
          </figcaption>
        </figure>
        <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">Same page. Same file.</h2>
          <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
            Join the teams who paste Prism and leave the handoff behind.
          </p>
          <a
            href="/signup"
            className="mt-8 inline-flex rounded-xl bg-[color:var(--green)] px-5 py-3 text-sm font-semibold text-[color:var(--bg)]"
          >
            Request access
          </a>
        </div>
      </div>
    </section>
  )
}
