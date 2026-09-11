const chips = [
  ['bg', '#090b0a'],
  ['panel', '#101311'],
  ['line', '#252c28'],
  ['green', '#79f2b0'],
  ['purple', '#b99cff'],
  ['orange', '#f7a77a'],
]

export default function BentoTokenBoard() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--purple)] uppercase">
          Tokens
        </p>
        <h2 className="mt-3 text-4xl font-semibold text-[color:var(--text)]">The palette, as tiles.</h2>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {chips.map(([name, hex], i) => (
            <article
              key={name}
              className={`overflow-hidden rounded-2xl border border-[color:var(--line)] ${i === 3 ? 'sm:col-span-2' : ''}`}
            >
              <div className="h-24 sm:h-28" style={{ background: hex }} />
              <div className="bg-[color:var(--panel)] px-4 py-3">
                <p className="text-sm font-semibold text-[color:var(--text)]">--{name}</p>
                <p className="font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">{hex}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
