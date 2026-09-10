const metrics = [
  { k: '12ms', v: 'Median TTFB', note: 'edge · last 24h', featured: true },
  { k: '4.9', v: 'Support CSAT', note: '90 days' },
  { k: '0', v: 'Lock-in clauses', note: 'in the license' },
  { k: '140+', v: 'Production blocks', note: 'catalog live' },
]

export default function FeaturesMetricCards() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
              Proof
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
              Numbers, not adjectives.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[color:var(--muted)]">The ones we would put on a board, not in a pitch.</p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {metrics.map((item) =>
            item.featured ? (
              <article
                key={item.v}
                className="relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 lg:row-span-3"
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(ellipse at 0% 100%, color-mix(in oklab, var(--green) 18%, transparent), transparent 55%), linear-gradient(135deg, color-mix(in oklab, var(--purple) 8%, transparent), transparent 40%)',
                  }}
                />
                <div className="relative">
                  <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
                    {item.note}
                  </p>
                  <p className="mt-6 bg-gradient-to-br from-[color:var(--text)] to-[color:var(--green)] bg-clip-text font-['DM_Mono',monospace] text-7xl tracking-tight text-transparent sm:text-8xl">
                    {item.k}
                  </p>
                  <p className="mt-4 text-lg font-semibold text-[color:var(--text)]">{item.v}</p>
                  <svg className="mt-10 w-full text-[color:var(--green)]" viewBox="0 0 320 64" fill="none" aria-hidden>
                    <path
                      d="M0 48 C40 48 40 20 80 22 C120 24 120 8 160 12 C200 16 200 36 240 28 C280 20 280 6 320 10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M0 48 C40 48 40 20 80 22 C120 24 120 8 160 12 C200 16 200 36 240 28 C280 20 280 6 320 10 L320 64 L0 64 Z"
                      fill="url(#metricFill)"
                      opacity="0.25"
                    />
                    <defs>
                      <linearGradient id="metricFill" x1="0" y1="0" x2="0" y2="1">
                        <stop stopColor="var(--green)" />
                        <stop offset="1" stopColor="var(--green)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </article>
            ) : (
              <article
                key={item.v}
                className="flex items-end justify-between rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] px-6 py-5"
              >
                <div>
                  <p className="text-sm text-[color:var(--muted)]">{item.v}</p>
                  <p className="mt-1 font-['DM_Mono',monospace] text-[10px] tracking-[0.14em] text-[color:var(--muted)] uppercase">
                    {item.note}
                  </p>
                </div>
                <p className="font-['DM_Mono',monospace] text-3xl text-[color:var(--text)]">{item.k}</p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
