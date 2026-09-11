export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 100% 0%, color-mix(in oklab, var(--green) 16%, transparent), transparent 58%)',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
            Invitation · cohort 04
          </p>
          <h2 className="mt-3 max-w-lg text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
            Make something people remember.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[color:var(--muted)]">
            The catalog is the product. Paste a block, keep the charter, ship before the review ends.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6 shadow-[0_28px_80px_rgba(0,0,0,.4)] sm:p-8">
          <div className="flex items-center justify-between">
            <span className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
              Atelier-024
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--green)] shadow-[0_0_10px_var(--green)]" />
          </div>
          <p className="mt-6 text-sm leading-6 text-[color:var(--muted)]">
            12 seats left this quarter. Work email only — one invite, no drip.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-[color:var(--green)] px-5 py-3 text-sm font-semibold text-[color:var(--bg)]"
            >
              Request access
            </a>
            <a
              href="/blocks"
              className="inline-flex items-center justify-center rounded-xl border border-[color:var(--line)] px-5 py-3 text-sm text-[color:var(--text)]"
            >
              Browse the catalog
            </a>
          </div>
          <p className="mt-6 font-['DM_Mono',monospace] text-[10px] tracking-[0.14em] text-[color:var(--muted)] uppercase">
            Signed · PRISM system
          </p>
        </div>
      </div>
    </section>
  )
}
