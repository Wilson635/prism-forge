const phases = [
  { n: '01', t: 'Choose', d: 'Pick a section that already looks like the product.' },
  { n: '02', t: 'Paste', d: 'Drop the TSX. Tokens follow the :root you already have.' },
  { n: '03', t: 'Tune', d: 'Copy, not chrome. Keep the green, change the words.' },
  { n: '04', t: 'Ship', d: 'Same review as any other component.' },
]

export default function FeaturesProcess() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
              Atelier · today
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
              A process you can finish before lunch.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[color:var(--muted)] lg:text-right">
            Four stations. No workshop, no migration, no “enable the design system” quarter.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-[color:var(--line)]">
          <div className="grid lg:grid-cols-4">
            {phases.map((phase, i) => (
              <article
                key={phase.n}
                className={`relative bg-[color:var(--panel)] p-6 sm:p-8 ${i ? 'border-t border-[color:var(--line)] lg:border-t-0 lg:border-l' : ''}`}
              >
                {i === 3 && (
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, color-mix(in oklab, var(--green) 12%, transparent), transparent 70%)',
                    }}
                  />
                )}
                <div className="relative">
                  <p className="font-['DM_Mono',monospace] text-4xl tracking-tight text-[color:var(--line)]">{phase.n}</p>
                  <h3 className="mt-6 text-xl font-semibold text-[color:var(--text)]">{phase.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{phase.d}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-[color:var(--line)] bg-[color:var(--bg)] px-6 py-3 font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
            <span>Elapsed · ~40 min</span>
            <span className="text-[color:var(--green)]">Done when it ships</span>
          </div>
        </div>
      </div>
    </section>
  )
}
