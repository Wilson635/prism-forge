export default function CtaDualRooms() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
          Two doors
        </p>
        <h2 className="mt-3 max-w-lg text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
          Start building, or talk to the atelier.
        </h2>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at 0% 100%, color-mix(in oklab, var(--green) 16%, transparent), transparent 55%)',
              }}
            />
            <p className="relative font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
              01 · Product
            </p>
            <h3 className="relative mt-4 text-2xl font-semibold text-[color:var(--text)]">Open the catalog</h3>
            <p className="relative mt-3 max-w-sm text-sm leading-6 text-[color:var(--muted)]">
              Copy a block. Tokens follow. No sales call required.
            </p>
            <a
              href="/blocks"
              className="relative mt-8 inline-flex rounded-xl bg-[color:var(--green)] px-5 py-3 text-sm font-semibold text-[color:var(--bg)]"
            >
              Browse blocks
            </a>
          </article>
          <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg)] p-8">
            <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
              02 · Studio
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-[color:var(--text)]">Book a quiet hour</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[color:var(--muted)]">
              For teams migrating a live product, not a landing page.
            </p>
            <a
              href="/kits"
              className="mt-8 inline-flex rounded-xl border border-[color:var(--line)] px-5 py-3 text-sm text-[color:var(--text)]"
            >
              Talk to Prism
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
