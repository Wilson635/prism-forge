export default function CtaMetricClose() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)]">
        <div className="grid lg:grid-cols-[1fr_auto]">
          <div className="p-8 sm:p-12">
            <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
              Proof, then the door
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)]">
              12ms median. Zero lock-in. Then you ship.
            </h2>
            <a
              href="/signup"
              className="mt-8 inline-flex rounded-xl bg-[color:var(--green)] px-5 py-3 text-sm font-semibold text-[color:var(--bg)]"
            >
              Start on the edge
            </a>
          </div>
          <div className="grid grid-cols-3 border-t border-[color:var(--line)] lg:w-80 lg:grid-cols-1 lg:border-t-0 lg:border-l">
            {[
              ['12ms', 'TTFB'],
              ['140+', 'blocks'],
              ['0', 'clauses'],
            ].map(([k, v]) => (
              <div key={v} className="border-[color:var(--line)] px-6 py-5 lg:border-b lg:last:border-b-0">
                <p className="font-['DM_Mono',monospace] text-2xl text-[color:var(--text)]">{k}</p>
                <p className="mt-1 font-['DM_Mono',monospace] text-[10px] tracking-[0.14em] text-[color:var(--muted)] uppercase">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
