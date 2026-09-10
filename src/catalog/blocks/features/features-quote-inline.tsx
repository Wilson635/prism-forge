export default function FeaturesQuoteInline() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--bg)] font-['Manrope',sans-serif]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 100% 50%, color-mix(in oklab, var(--green) 12%, transparent), transparent 55%)',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl lg:grid-cols-[1fr_1.05fr]">
        <div className="flex flex-col justify-end px-6 py-16 sm:px-10 lg:py-24">
          <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
            Voice
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
            Features with a pulse.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[color:var(--muted)]">
            Each capability is written like product copy, not a spec dump — so marketing and engineering share a page.
          </p>
        </div>
        <aside className="relative border-t border-[color:var(--line)] px-6 py-16 sm:px-10 lg:border-t-0 lg:border-l lg:py-24">
          <p
            className="pointer-events-none absolute top-6 left-4 bg-gradient-to-b from-[color:var(--green)]/25 to-transparent bg-clip-text font-['Manrope',sans-serif] text-[8rem] leading-none font-semibold text-transparent select-none"
            aria-hidden
          >
            “
          </p>
          <figure className="relative">
            <blockquote className="max-w-md text-2xl font-medium leading-snug tracking-tight text-[color:var(--text)] sm:text-3xl">
              We stopped translating Figma into tickets. The block is the ticket.
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] font-['DM_Mono',monospace] text-[11px] text-[color:var(--green)]">
                LO
              </span>
              <div>
                <p className="text-sm font-semibold text-[color:var(--text)]">Lina Ortiz</p>
                <p className="font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">Product · Harbor</p>
              </div>
            </figcaption>
          </figure>
        </aside>
      </div>
    </section>
  )
}
