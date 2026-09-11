export default function CtaHairlineBand() {
  return (
    <section className="border-y border-[color:var(--line)] bg-[color:var(--panel)] font-['Manrope',sans-serif]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-6 py-6 sm:flex-row sm:items-center sm:px-10">
        <div>
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.18em] text-[color:var(--green)] uppercase">
            Ready
          </p>
          <p className="mt-1 text-lg font-semibold tracking-tight text-[color:var(--text)]">
            Ship the next section before standup.
          </p>
        </div>
        <a
          href="/signup"
          className="inline-flex shrink-0 rounded-xl bg-[color:var(--green)] px-4 py-2.5 text-sm font-semibold text-[color:var(--bg)]"
        >
          Start free
        </a>
      </div>
    </section>
  )
}
