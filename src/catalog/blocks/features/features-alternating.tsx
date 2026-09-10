function GitPreview() {
  return (
    <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] p-4 font-['DM_Mono',monospace] text-[11px]">
      <p className="text-[color:var(--muted)]">origin/main → preview</p>
      <div className="mt-4 space-y-3">
        {['feat/nav', 'fix/tls', 'chore/tokens'].map((b, i) => (
          <div key={b} className="flex items-center gap-3">
            <span className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-[color:var(--green)]' : 'bg-[color:var(--line)]'}`} />
            <span className="text-[color:var(--text)]">{b}</span>
            <span className="ml-auto text-[color:var(--muted)]">{i === 0 ? 'live' : 'idle'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PresencePreview() {
  const people = ['LO', 'MK', 'AR']
  return (
    <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] p-5">
      <div className="flex items-center gap-2">
        {people.map((p, i) => (
          <span
            key={p}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel-2)] font-['DM_Mono',monospace] text-[10px] text-[color:var(--text)]"
            style={{ marginLeft: i ? -8 : 0 }}
          >
            {p}
          </span>
        ))}
        <span className="ml-3 h-2 w-2 animate-pulse rounded-full bg-[color:var(--green)]" />
        <span className="font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">3 in canvas</span>
      </div>
      <p className="mt-5 text-sm leading-6 text-[color:var(--muted)]">
        Lina is on <span className="text-[color:var(--text)]">Hero — Split</span>. Cursor at 48 / 12.
      </p>
    </div>
  )
}

function TastePreview() {
  return (
    <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] p-5">
      <p className="text-3xl font-semibold tracking-tight text-[color:var(--text)]">Aa</p>
      <p className="mt-1 font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
        Manrope · DM Mono
      </p>
      <div className="mt-4 flex gap-2">
        {['var(--green)', 'var(--purple)', 'var(--orange)', 'var(--blue)'].map((c) => (
          <span key={c} className="h-8 flex-1 rounded-lg" style={{ background: c }} />
        ))}
      </div>
    </div>
  )
}

const rows = [
  {
    n: '01',
    title: 'Branch previews',
    body: 'Every git push opens a quiet URL. No staging theatre, no “works on my machine”.',
    flip: false,
    stage: <GitPreview />,
  },
  {
    n: '02',
    title: 'Realtime sync',
    body: 'Presence, comments and cursors without a second vendor on the invoice.',
    flip: true,
    stage: <PresencePreview />,
  },
  {
    n: '03',
    title: 'Taste, baked in',
    body: 'Spacing and type already match the Prism system. You rewrite the words, not the chrome.',
    flip: false,
    stage: <TastePreview />,
  },
]

export default function FeaturesAlternating() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
          Alternating
        </p>
        <h2 className="mt-3 max-w-lg text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
          Left the copy. Right the proof.
        </h2>
        <div className="mt-14 space-y-4">
          {rows.map((row) => (
            <article
              key={row.n}
              className={`grid items-center gap-8 overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6 sm:p-8 lg:grid-cols-2 ${row.flip ? 'lg:[&>div:first-child]:order-2' : ''}`}
            >
              <div>
                <span className="font-['DM_Mono',monospace] text-[11px] text-[color:var(--green)]">{row.n}</span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--text)]">{row.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-[color:var(--muted)]">{row.body}</p>
              </div>
              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-80 blur-2xl"
                  style={{
                    background: row.flip
                      ? 'radial-gradient(circle, color-mix(in oklab, var(--purple) 18%, transparent), transparent 70%)'
                      : 'radial-gradient(circle, color-mix(in oklab, var(--green) 16%, transparent), transparent 70%)',
                  }}
                />
                <div className="relative">{row.stage}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
