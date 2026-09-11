export default function BentoTypeFoundry() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 lg:col-span-2">
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
            Foundry
          </p>
          <p className="mt-6 text-[clamp(4rem,10vw,7rem)] leading-none font-semibold tracking-tight text-[color:var(--text)]">
            Aa
          </p>
          <p className="mt-4 text-lg text-[color:var(--text)]">A calmer way to run infrastructure.</p>
        </article>
        <article className="flex flex-col justify-between rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8">
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
            Spec
          </p>
          <p className="mt-8 font-['DM_Mono',monospace] text-[13px] leading-7 text-[color:var(--green)]">
            DEPLOY · TLS · EDGE
          </p>
          <p className="mt-2 text-sm text-[color:var(--muted)]">Manrope display. DM Mono for the receipt.</p>
        </article>
        {['8', '16', '24'].map((r) => (
          <article key={r} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6">
            <div className="h-16 border border-[color:var(--line)] bg-[color:var(--bg)]" style={{ borderRadius: `${r}px` }} />
            <p className="mt-4 font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">{r}px radius</p>
          </article>
        ))}
      </div>
    </section>
  )
}
