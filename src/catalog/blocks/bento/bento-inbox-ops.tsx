export default function BentoInboxOps() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6 lg:col-span-2">
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
            Inbox
          </p>
          <ul className="mt-5 divide-y divide-[color:var(--line)]">
            {[
              ['PR 1842 ready', 'preview · 38s'],
              ['TLS renewed', 'orbit-web'],
              ['Seat requested', 'harbor.studio'],
            ].map(([t, s]) => (
              <li key={t} className="flex items-center justify-between py-4">
                <span className="text-sm text-[color:var(--text)]">{t}</span>
                <span className="font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">{s}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="flex flex-col rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6">
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
            Compose
          </p>
          <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">Ship notes stay in the product, not Slack.</p>
          <div className="mt-auto rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] px-3 py-3 text-sm text-[color:var(--muted)]">
            Write a note…
          </div>
        </article>
      </div>
    </section>
  )
}
