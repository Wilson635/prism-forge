const days = ['M', 'T', 'W', 'T', 'F']

export default function CtaInlineBook() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
            Calendar
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
            Forty quiet minutes. No deck.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[color:var(--muted)]">
            We look at your current page, pick two blocks, and leave you with a file — not a proposal.
          </p>
        </div>
        <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6">
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
            Week of 15 Sep
          </p>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {days.map((d, i) => (
              <div key={`${d}-${i}`} className="text-center">
                <p className="font-['DM_Mono',monospace] text-[10px] text-[color:var(--muted)]">{d}</p>
                <button
                  className={`mt-2 w-full rounded-xl border py-3 text-sm ${
                    i === 2
                      ? 'border-[color:var(--green)]/50 bg-[color:var(--green)]/10 text-[color:var(--green)]'
                      : 'border-[color:var(--line)] text-[color:var(--text)]'
                  }`}
                >
                  {15 + i}
                </button>
              </div>
            ))}
          </div>
          <a
            href="/kits"
            className="mt-6 flex items-center justify-center rounded-xl bg-[color:var(--green)] py-3 text-sm font-semibold text-[color:var(--bg)]"
          >
            Book Wednesday
          </a>
        </div>
      </div>
    </section>
  )
}
