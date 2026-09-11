export default function BentoVaultKeys() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2">
        <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 sm:row-span-2">
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--orange)] uppercase">
            Vault
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--text)]">Secrets stay in the frame.</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[color:var(--muted)]">
            Rotated, scoped, never pasted into a thread. The cell is the policy.
          </p>
        </article>
        {['STRIPE_KEY', 'GH_APP', 'RESEND'].map((k) => (
          <article key={k} className="flex items-center justify-between rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] px-6 py-5">
            <span className="font-['DM_Mono',monospace] text-sm text-[color:var(--text)]">{k}</span>
            <span className="font-['DM_Mono',monospace] text-[10px] text-[color:var(--green)]">sealed</span>
          </article>
        ))}
      </div>
    </section>
  )
}
