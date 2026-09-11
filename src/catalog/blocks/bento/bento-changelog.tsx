export default function BentoChangelog() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-4">
        <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6 lg:col-span-1">
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
            Tape
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[color:var(--text)]">What shipped.</h2>
        </article>
        {[
          ['2.4', 'Tokens freeze'],
          ['2.3', 'CTA cohort'],
          ['2.2', 'Hero split'],
        ].map(([v, t]) => (
          <article key={v} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6">
            <p className="font-['DM_Mono',monospace] text-[color:var(--green)]">{v}</p>
            <p className="mt-3 text-sm font-semibold text-[color:var(--text)]">{t}</p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">Merged to main. The edge already knows.</p>
          </article>
        ))}
      </div>
    </section>
  )
}
