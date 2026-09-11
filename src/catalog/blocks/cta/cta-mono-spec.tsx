export default function CtaMonoSpec() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[color:var(--line)]">
        <div className="flex items-center justify-between border-b border-[color:var(--line)] bg-[color:var(--panel)] px-5 py-3 font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
          <span>PRISM-CTA-20</span>
          <span>Rev 2.4</span>
        </div>
        <div className="px-6 py-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--text)]">Approve and ship.</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[color:var(--muted)]">
            This sheet is the close. Tokens, type, radius — already signed. You add the work email.
          </p>
          <a
            href="/signup"
            className="mt-8 inline-flex rounded-xl bg-[color:var(--green)] px-5 py-3 text-sm font-semibold text-[color:var(--bg)]"
          >
            Approve access
          </a>
        </div>
        <div className="flex justify-between border-t border-[color:var(--line)] px-5 py-3 font-['DM_Mono',monospace] text-[10px] text-[color:var(--muted)] uppercase">
          <span>Do not scale</span>
          <span>Sheet 1 / 1</span>
        </div>
      </div>
    </section>
  )
}
