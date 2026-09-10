import { motion } from 'framer-motion'

const notes = [
  {
    n: '01',
    t: 'Green is a signal',
    d: 'Never a fill. Never a gradient wash. One bright line when something is true.',
    rot: -2.4,
  },
  {
    n: '02',
    t: 'Hairline, then content',
    d: 'Frames sit at 16–24px. --line is the only border. The work lives inside, not on the chrome.',
    rot: 1.8,
  },
  {
    n: '03',
    t: 'Two voices, one room',
    d: 'Manrope for the sentence. DM Mono for the spec. Mixing a third typeface is a bug.',
    rot: -1.1,
  },
]

const chips = [
  { name: 'bg', hex: '#090b0a', varName: '--bg' },
  { name: 'panel', hex: '#101311', varName: '--panel' },
  { name: 'line', hex: '#252c28', varName: '--line' },
  { name: 'muted', hex: '#8b958f', varName: '--muted' },
  { name: 'text', hex: '#f1f5f2', varName: '--text' },
  { name: 'green', hex: '#79f2b0', varName: '--green' },
]

export default function FeaturesOrbitNotes() {
  return (
    <section className="overflow-hidden bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
              Foundry · notes
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
              The charter, as a desk.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[color:var(--muted)]">
            A specimen, not a manifesto. Type, chips and radius — the decisions you can hold.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 sm:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <div className="relative">
              <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--muted)] uppercase">
                Type ramp
              </p>
              <p className="mt-6 text-[clamp(4.5rem,12vw,8rem)] leading-[0.85] font-semibold tracking-tight text-[color:var(--text)]">
                Aa
              </p>
              <p className="mt-2 font-['DM_Mono',monospace] text-[11px] text-[color:var(--green)]">Manrope 600 · display</p>
              <p className="mt-8 max-w-sm text-lg leading-8 text-[color:var(--text)]">
                A calmer way to run infrastructure.
              </p>
              <p className="mt-3 font-['DM_Mono',monospace] text-[12px] tracking-[0.12em] text-[color:var(--muted)]">
                DEPLOY · TLS · EDGE · 09:41:22
              </p>

              <div className="mt-10 flex items-end gap-4">
                <div className="h-16 w-16 rounded-[8px] border border-[color:var(--line)] bg-[color:var(--bg)]" />
                <div className="h-16 w-16 rounded-[16px] border border-[color:var(--line)] bg-[color:var(--bg)]" />
                <div className="relative h-16 w-16 rounded-[24px] border border-[color:var(--green)]/50 bg-[color:var(--bg)]">
                  <span className="absolute -bottom-6 left-0 font-['DM_Mono',monospace] text-[10px] text-[color:var(--green)]">
                    16–24
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col">
            {notes.map((note, i) => (
              <motion.article
                key={note.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.12, type: 'spring', stiffness: 260, damping: 28 }}
                className="w-[min(100%,380px)] rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-2)] p-5 shadow-[0_24px_60px_rgba(0,0,0,.4)]"
                style={{
                  marginTop: i ? -18 : 0,
                  marginLeft: i * 18,
                  rotate: `${note.rot}deg`,
                  zIndex: i + 1,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)]">
                    NOTE {note.n}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--green)]" />
                </div>
                <h3 className="mt-3 text-base font-semibold text-[color:var(--text)]">{note.t}</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{note.d}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {chips.map((chip) => (
            <div
              key={chip.name}
              className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)]"
            >
              <div className="h-14" style={{ background: chip.hex }} />
              <div className="px-3 py-2.5">
                <p className="text-xs font-semibold text-[color:var(--text)]">{chip.name}</p>
                <p className="font-['DM_Mono',monospace] text-[10px] text-[color:var(--muted)]">{chip.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
