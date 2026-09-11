export default function BentoTeamOrbit() {
  const people = [
    ['LO', 'Lina', 'Hero'],
    ['MK', 'Mark', 'TLS'],
    ['AR', 'Aria', 'Copy'],
  ]
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
        <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6 sm:col-span-3">
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
            Presence
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[color:var(--text)]">Three cursors. One canvas.</h2>
        </article>
        {people.map(([ini, name, room]) => (
          <article key={name} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] font-['DM_Mono',monospace] text-[12px] text-[color:var(--green)]">
              {ini}
            </span>
            <p className="mt-4 font-semibold text-[color:var(--text)]">{name}</p>
            <p className="mt-1 font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">{room}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
