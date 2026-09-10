const included = [
  { n: '01', t: 'Semantic tokens', d: 'Color, type and radius as named decisions — not one-off hex.' },
  { n: '02', t: 'Responsive by default', d: 'Breakpoints already argued over. You only compose.' },
  { n: '03', t: 'Copy-paste TSX', d: 'The preview is the source. No hidden runtime.' },
  { n: '04', t: 'Motion with manners', d: 'Framer where it earns the frame. Stillness everywhere else.' },
]

const refused = [
  { t: 'Runtime CSS-in-JS', d: 'No styled-runtime tax on first paint.' },
  { t: 'Locked Figma source', d: 'The file is not a hostage.' },
  { t: '“Coming soon” slots', d: 'If it is in the catalog, it ships.' },
  { t: 'Accent as wallpaper', d: 'Green is a signal. Surfaces stay dark.' },
]

export default function FeaturesChecklist() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
              Scope · v2.4
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
              What’s in the crate.
              <span className="mt-2 block text-[color:var(--muted)]">What’s left on the floor.</span>
            </h2>
          </div>
          <p className="max-w-md justify-self-end text-sm leading-7 text-[color:var(--muted)] lg:text-right">
            A packing list, not a feature dump. Signed the way a studio signs a spec — what’s promised, and what we will
            never ship as decoration.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] shadow-[0_28px_80px_rgba(0,0,0,.35)]">
          <header className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-[color:var(--line)] px-5 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[color:var(--green)] shadow-[0_0_12px_var(--green)]" />
              <span className="font-['DM_Mono',monospace] text-[11px] tracking-[0.14em] text-[color:var(--muted)] uppercase">
                PRISM · bill of materials
              </span>
            </div>
            <span className="font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">ATELIER-024</span>
          </header>

          <div className="grid lg:grid-cols-2">
            <div className="border-b border-[color:var(--line)] p-5 sm:p-8 lg:border-r lg:border-b-0">
              <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.2em] text-[color:var(--green)] uppercase">
                Included
              </p>
              <ul className="mt-6 space-y-0">
                {included.map((item, i) => (
                  <li
                    key={item.n}
                    className={`grid grid-cols-[auto_1fr_auto] items-start gap-4 py-5 ${i ? 'border-t border-[color:var(--line)]' : ''}`}
                  >
                    <span className="font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">{item.n}</span>
                    <div>
                      <p className="text-sm font-semibold text-[color:var(--text)]">{item.t}</p>
                      <p className="mt-1 text-sm leading-6 text-[color:var(--muted)]">{item.d}</p>
                    </div>
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-md border border-[color:var(--green)]/35 bg-[color:var(--green)]/10">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
                        <path
                          d="M1 4.2 3.4 6.6 9 1"
                          stroke="var(--green)"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[color:var(--bg)]/40 p-5 sm:p-8">
              <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.2em] text-[color:var(--orange)] uppercase">
                Refused
              </p>
              <ul className="mt-6">
                {refused.map((item, i) => (
                  <li
                    key={item.t}
                    className={`grid grid-cols-[auto_1fr] items-start gap-4 py-5 ${i ? 'border-t border-[color:var(--line)]' : ''}`}
                  >
                    <span className="mt-2 h-px w-4 bg-[color:var(--orange)]/80" />
                    <div>
                      <p className="text-sm font-semibold text-[color:var(--muted)] line-through decoration-[color:var(--line)] decoration-1">
                        {item.t}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[color:var(--muted)]/80">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--line)] px-5 py-4 sm:px-8">
            <p className="max-w-sm text-xs leading-5 text-[color:var(--muted)]">
              This list is the contract. If a block cannot keep it, it does not enter the catalog.
            </p>
            <div className="flex items-center gap-3">
              <span className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
                Signed
              </span>
              <span className="rounded-full border border-[color:var(--green)]/40 px-3 py-1 font-['DM_Mono',monospace] text-[11px] text-[color:var(--green)]">
                PRISM · system
              </span>
            </div>
          </footer>
        </div>
      </div>
    </section>
  )
}
