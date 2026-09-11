export default function BentoSearchIndex() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)]">
        <div className="grid lg:grid-cols-[1fr_1.2fr]">
          <div className="p-8">
            <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
              Index
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[color:var(--text)]">⌘K from the mosaic.</h2>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">Search is a cell, not a modal you invent later.</p>
          </div>
          <div className="border-t border-[color:var(--line)] p-6 lg:border-t-0 lg:border-l">
            <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)]">
              <p className="border-b border-[color:var(--line)] px-3 py-2.5 font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">
                Search the atelier…
              </p>
              {['Hero — Split', 'CTA — Ribbon', 'Bento — Tokens'].map((row, i) => (
                <p
                  key={row}
                  className={`px-3 py-2.5 text-sm ${i === 0 ? 'bg-[color:var(--panel-2)] text-[color:var(--text)]' : 'text-[color:var(--muted)]'}`}
                >
                  {row}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
