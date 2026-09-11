export default function BentoBillingPulse() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 lg:col-span-2">
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
            Invoice
          </p>
          <p className="mt-6 font-['DM_Mono',monospace] text-5xl text-[color:var(--text)]">$240</p>
          <p className="mt-2 text-sm text-[color:var(--muted)]">Studio · billed quietly on the 1st.</p>
          <div className="mt-8 h-px bg-gradient-to-r from-[color:var(--green)] to-transparent" />
        </article>
        <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8">
          <p className="font-['DM_Mono',monospace] text-[10px] text-[color:var(--muted)] uppercase">Seats</p>
          <p className="mt-6 text-4xl font-semibold text-[color:var(--text)]">12 / 20</p>
          <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-[color:var(--line)]">
            <div className="h-full w-[60%] bg-[color:var(--green)]" />
          </div>
        </article>
      </div>
    </section>
  )
}
