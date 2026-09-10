const rows = [
  { t: 'Live React preview', prism: 'The file is the preview', other: 'Screenshot or iframe' },
  { t: 'Charter tokens', prism: 'Named --green, --panel', other: 'Random Tailwind blues' },
  { t: 'Source you ship', prism: 'Copy the TSX', other: 'String-evaled JSX' },
  { t: 'Motion', prism: 'Earned, optional', other: 'Default bounce' },
]

export default function FeaturesCompareTable() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
          Side by side
        </p>
        <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
          Prism versus the usual kit.
        </h2>

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-[color:var(--line)] lg:grid-cols-[1.1fr_1fr_1fr]">
          <div className="hidden bg-[color:var(--panel)] lg:block" />
          <div className="border-b border-[color:var(--line)] bg-[color:var(--panel)] px-6 py-5 lg:border-b-0 lg:border-l">
            <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
              Prism
            </p>
            <p className="mt-1 text-lg font-semibold text-[color:var(--text)]">The atelier</p>
          </div>
          <div className="border-b border-[color:var(--line)] bg-[color:var(--bg)] px-6 py-5 lg:border-b-0 lg:border-l">
            <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
              Generic pack
            </p>
            <p className="mt-1 text-lg font-semibold text-[color:var(--muted)]">The usual kit</p>
          </div>

          {rows.map((row) => (
            <div key={row.t} className="contents">
              <div className="border-t border-[color:var(--line)] px-6 py-5 text-sm font-medium text-[color:var(--text)]">
                {row.t}
              </div>
              <div className="border-t border-[color:var(--line)] bg-[color:var(--panel)]/40 px-6 py-5 text-sm text-[color:var(--text)] lg:border-l">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--green)]" />
                {row.prism}
              </div>
              <div className="border-t border-[color:var(--line)] px-6 py-5 text-sm text-[color:var(--muted)] lg:border-l">
                {row.other}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
