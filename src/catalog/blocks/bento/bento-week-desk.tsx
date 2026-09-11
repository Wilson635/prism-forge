export default function BentoWeekDesk() {
  const days = ['M', 'T', 'W', 'T', 'F']
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-5">
        <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6 lg:col-span-2">
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
            Desk
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--text)]">The week, as a mosaic.</h2>
          <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">Wednesday is the only loud cell. The rest stay quiet.</p>
        </article>
        {days.map((d, i) => (
          <article
            key={`${d}-${i}`}
            className={`rounded-2xl border p-5 ${i === 2 ? 'border-[color:var(--green)]/40 bg-[color:var(--panel)]' : 'border-[color:var(--line)] bg-[color:var(--bg)]'}`}
          >
            <p className="font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">{d}</p>
            <p className="mt-6 text-2xl font-semibold text-[color:var(--text)]">{15 + i}</p>
            <p className="mt-2 text-[11px] text-[color:var(--muted)]">{i === 2 ? 'Review' : '—'}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
