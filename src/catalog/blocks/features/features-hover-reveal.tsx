import { useState } from 'react'
import { motion } from 'framer-motion'

const rooms = [
  {
    n: '01',
    title: 'Command',
    kicker: 'Anywhere',
    line: 'Open the index without leaving the canvas.',
    hint: '⌘K',
  },
  {
    n: '02',
    title: 'Tokens',
    kicker: 'Living',
    line: 'Mint as signal. Surfaces stay quiet.',
    hint: 'Aa',
  },
  {
    n: '03',
    title: 'Export',
    kicker: 'Honest',
    line: 'The file you copy is the file you ship.',
    hint: 'TSX',
  },
] as const

function CommandStage({ live }: { live: boolean }) {
  const rows = [
    { k: 'Hero — Split console', g: 'hero' },
    { k: 'Features — Icon rail', g: 'features' },
    { k: 'Pricing — Orbit plans', g: 'pricing' },
  ]
  return (
    <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)]/80 shadow-[0_20px_60px_rgba(0,0,0,.45)]">
      <div className="flex items-center gap-2 border-b border-[color:var(--line)] px-3 py-2.5">
        <span className="font-['DM_Mono',monospace] text-[10px] text-[color:var(--green)]">⌘K</span>
        <span className="h-3 w-px bg-[color:var(--line)]" />
        <span className="font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">
          Search the atelier…
          <span className={`ml-0.5 inline-block h-3 w-px bg-[color:var(--green)] ${live ? 'animate-pulse' : 'opacity-30'}`} />
        </span>
      </div>
      <ul className="p-1.5">
        {rows.map((row, i) => (
          <li
            key={row.k}
            className={`flex items-center justify-between rounded-lg px-2.5 py-2 text-[12px] ${
              live && i === 0 ? 'bg-[color:var(--panel-2)] text-[color:var(--text)]' : 'text-[color:var(--muted)]'
            }`}
          >
            {row.k}
            <span className="font-['DM_Mono',monospace] text-[10px] tracking-wide">{row.g}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TokenStage({ live }: { live: boolean }) {
  const chips = [
    { c: 'var(--green)', l: 'signal' },
    { c: 'var(--purple)', l: 'rare' },
    { c: 'var(--orange)', l: 'warn' },
    { c: 'var(--blue)', l: 'info' },
  ]
  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-xl border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-5">
        <p className="font-['Manrope',sans-serif] text-4xl font-semibold tracking-tight text-[color:var(--text)]">Aa</p>
        <p className="mt-1 font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
          Manrope 600 · display
        </p>
        <p className="mt-3 font-['DM_Mono',monospace] text-[11px] text-[color:var(--green)]">SHIP · 09:41:22</p>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {chips.map((chip) => (
          <div
            key={chip.l}
            className="h-10 rounded-lg border border-[color:var(--line)] transition-transform duration-500"
            style={{
              background: chip.c,
              transform: live ? 'translateY(0)' : 'translateY(4px)',
              opacity: live ? 1 : 0.55,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function ExportStage({ live }: { live: boolean }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] font-['DM_Mono',monospace] text-[11px] leading-6">
      <div className="flex items-center justify-between border-b border-[color:var(--line)] px-3 py-2 text-[color:var(--muted)]">
        <span>features-split.tsx</span>
        <span className={live ? 'text-[color:var(--green)]' : ''}>{live ? 'copied' : 'tsx'}</span>
      </div>
      <pre className="px-3 py-3 text-[color:var(--muted)]">
        <span className="text-[color:var(--purple)]">export</span> default{' '}
        <span className="text-[color:var(--blue)]">function</span>{' '}
        <span className="text-[color:var(--text)]">Features</span>() {'{'}
        {'\n'}
        {'  '}
        <span className="text-[color:var(--purple)]">return</span> &lt;<span className="text-[color:var(--green)]">section</span> /&gt;
        {'\n'}
        {'}'}
      </pre>
    </div>
  )
}

const stages = [CommandStage, TokenStage, ExportStage]

export default function FeaturesHoverReveal() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
              Atelier · hover
            </p>
            <h2 className="mt-3 max-w-lg text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-[2.75rem]">
              Three rooms. Lean in to open one.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[color:var(--muted)]">
            Nothing is a tooltip. Each panel is a working fragment of the product — command, tokens, the file itself.
          </p>
        </div>

        <div
          className="mt-12 flex min-h-[380px] flex-col gap-3 lg:h-[420px] lg:flex-row"
          onMouseLeave={() => setActive(0)}
        >
          {rooms.map((room, i) => {
            const Stage = stages[i]
            const open = active === i
            return (
              <motion.article
                key={room.n}
                layout
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
                className="relative flex cursor-default flex-col overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] outline-none focus-visible:border-[color:var(--green)]/50"
                animate={{ flexGrow: open ? 1.7 : 1 }}
                transition={{ type: 'spring', stiffness: 280, damping: 32 }}
                style={{ flexBasis: 0 }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.35]"
                  style={{
                    backgroundImage:
                      'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                    maskImage: 'radial-gradient(ellipse at 30% 0%, black, transparent 70%)',
                  }}
                />
                <div className="relative flex items-start justify-between px-5 pt-5">
                  <span className="font-['DM_Mono',monospace] text-[11px] tracking-[0.2em] text-[color:var(--muted)]">
                    {room.n}
                  </span>
                  <span className="font-['DM_Mono',monospace] text-[11px] text-[color:var(--green)]">{room.hint}</span>
                </div>

                <div className="relative mt-6 flex-1 px-5">
                  <motion.div
                    initial={false}
                    animate={{ opacity: open ? 1 : 0.35, y: open ? 0 : 12, filter: open ? 'blur(0px)' : 'blur(1px)' }}
                    transition={{ duration: 0.35 }}
                  >
                    <Stage live={open} />
                  </motion.div>
                </div>

                <div className="relative mt-auto border-t border-[color:var(--line)] px-5 py-5">
                  <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
                    {room.kicker}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight text-[color:var(--text)]">{room.title}</h3>
                  <p
                    className={`mt-1 text-sm leading-6 text-[color:var(--muted)] transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 lg:h-0 lg:overflow-hidden'}`}
                  >
                    {room.line}
                  </p>
                </div>
                <div
                  className={`absolute inset-x-0 bottom-0 h-px bg-[color:var(--green)] transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
                />
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
