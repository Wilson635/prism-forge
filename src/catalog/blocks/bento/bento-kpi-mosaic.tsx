export default function BentoKpiMosaic() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 sm:col-span-2 lg:row-span-2">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 0% 100%, color-mix(in oklab, var(--green) 18%, transparent), transparent)',
            }}
          />
          <p className="relative font-['DM_Mono',monospace] text-[10px] text-[color:var(--muted)] uppercase">TTFB</p>
          <p className="relative mt-6 font-['DM_Mono',monospace] text-7xl text-[color:var(--text)]">12ms</p>
          <p className="relative mt-3 text-sm text-[color:var(--muted)]">Median, last 24h, all regions.</p>
        </article>
        {[
          ['4.9', 'CSAT'],
          ['0', 'lock-in'],
          ['140+', 'blocks'],
          ['99.98', 'uptime'],
        ].map(([k, v]) => (
          <article key={v} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6">
            <p className="font-['DM_Mono',monospace] text-3xl text-[color:var(--text)]">{k}</p>
            <p className="mt-2 font-['DM_Mono',monospace] text-[10px] tracking-[0.14em] text-[color:var(--muted)] uppercase">
              {v}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
