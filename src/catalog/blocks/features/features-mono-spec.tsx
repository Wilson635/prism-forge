const spec = [
  ['Accent', '--green', '#79f2b0', 'signal only'],
  ['Surface', '--panel', '#101311', 'frames'],
  ['Hairline', '--line', '#252c28', '1px'],
  ['Type', 'Manrope / DM Mono', 'display / spec', 'two voices'],
  ['Radius', '16–24px', 'frames', 'never pills'],
  ['Motion', 'Framer', 'earned', 'optional'],
]

export default function FeaturesMonoSpec() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
              Drawing · A4
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
              The system, as a sheet.
            </h2>
          </div>
          <p className="font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">PRISM-SYS-01 · rev 2.4</p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'linear-gradient(180deg, black, transparent)',
            }}
          />
          <header className="relative flex items-center justify-between border-b border-[color:var(--line)] px-5 py-3 sm:px-6">
            <span className="font-['DM_Mono',monospace] text-[10px] tracking-[0.18em] text-[color:var(--muted)] uppercase">
              Specification
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--green)]" />
          </header>
          <div className="relative">
            {spec.map(([k, a, b, c], i) => (
              <div
                key={k}
                className={`grid grid-cols-2 gap-2 px-5 py-4 font-['DM_Mono',monospace] text-[12px] sm:grid-cols-4 sm:px-6 ${i ? 'border-t border-[color:var(--line)]' : ''}`}
              >
                <span className="text-[color:var(--muted)]">{k}</span>
                <span className="text-[color:var(--text)]">{a}</span>
                <span className={i === 0 ? 'text-[color:var(--green)]' : 'text-[color:var(--muted)]'}>{b}</span>
                <span className="hidden text-right text-[color:var(--muted)] sm:block">{c}</span>
              </div>
            ))}
          </div>
          <footer className="relative flex justify-between border-t border-[color:var(--line)] px-5 py-3 font-['DM_Mono',monospace] text-[10px] tracking-[0.14em] text-[color:var(--muted)] uppercase sm:px-6">
            <span>Do not scale</span>
            <span>Sheet 1 / 1</span>
          </footer>
        </div>
      </div>
    </section>
  )
}
