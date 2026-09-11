export default function CtaCountdownSoft() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--orange)] uppercase">
          Closes 19 Sep
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
          The quiet kind of urgency.
        </h2>
        <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
          Not a flashing timer. A date on the charter. After the 19th, the next cohort is Q4.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-3">
          {[
            ['08', 'days'],
            ['12', 'seats'],
            ['01', 'invite'],
          ].map(([n, l]) => (
            <div key={l} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] py-5">
              <p className="font-['DM_Mono',monospace] text-3xl text-[color:var(--text)]">{n}</p>
              <p className="mt-1 font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
                {l}
              </p>
            </div>
          ))}
        </div>
        <a
          href="/signup"
          className="mt-8 inline-flex rounded-xl bg-[color:var(--green)] px-5 py-3 text-sm font-semibold text-[color:var(--bg)]"
        >
          Hold a seat
        </a>
      </div>
    </section>
  )
}
