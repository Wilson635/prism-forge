export default function BentoQuoteCell() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-3">
        <article className="relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 lg:col-span-2">
          <p className="absolute top-4 left-6 bg-gradient-to-b from-[color:var(--green)]/30 to-transparent bg-clip-text text-7xl font-semibold text-transparent">
            “
          </p>
          <blockquote className="relative mt-10 text-2xl font-medium leading-snug text-[color:var(--text)]">
            The block is the ticket.
          </blockquote>
          <p className="mt-6 font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">Lina Ortiz · Harbor</p>
        </article>
        <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8">
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
            Voice
          </p>
          <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
            A quote earns a cell when it replaces a feature list.
          </p>
        </article>
      </div>
    </section>
  )
}
