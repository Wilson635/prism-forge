export default function FeaturesOffsetGrid() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--purple)] uppercase">
          System
        </p>
        <h2 className="mt-3 max-w-lg text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
          Uneven on purpose.
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <article className="relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6 sm:col-span-2 sm:p-8">
            <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
              Tokens
            </p>
            <h3 className="mt-3 text-xl font-semibold text-[color:var(--text)]">Color, type and space as decisions.</h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-[color:var(--muted)]">
              Named variables. No one-off hex hiding in a random utility.
            </p>
            <div className="mt-8 flex gap-2">
              {[
                ['--bg', '#090b0a'],
                ['--panel', '#101311'],
                ['--green', '#79f2b0'],
                ['--purple', '#b99cff'],
                ['--orange', '#f7a77a'],
              ].map(([n, h]) => (
                <div key={n} className="flex-1 overflow-hidden rounded-xl border border-[color:var(--line)]">
                  <div className="h-12" style={{ background: h }} />
                  <p className="px-2 py-1.5 font-['DM_Mono',monospace] text-[9px] text-[color:var(--muted)]">{n}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6">
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-70"
              style={{ background: 'radial-gradient(circle, var(--purple), transparent 70%)' }}
            />
            <p className="relative font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--purple)] uppercase">
              Motion
            </p>
            <p className="relative mt-auto pt-10 text-sm leading-6 text-[color:var(--muted)]">
              Optional. Never required. If it does not earn the frame, it stays still.
            </p>
          </article>

          <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6">
            <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--blue)] uppercase">
              A11y
            </p>
            <button className="mt-6 rounded-xl border border-[color:var(--green)] px-4 py-2 text-sm text-[color:var(--text)] outline-none ring-2 ring-[color:var(--green)] ring-offset-2 ring-offset-[color:var(--panel)]">
              Focus, named
            </button>
            <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">Contrast and names first — not an afterthought.</p>
          </article>

          <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6 sm:col-span-2">
            <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--orange)] uppercase">
              Copy
            </p>
            <p className="mt-4 max-w-lg text-2xl font-semibold tracking-tight text-[color:var(--text)]">
              Ready-to-ship voice, easy to rewrite.
            </p>
            <p className="mt-3 font-['DM_Mono',monospace] text-[12px] text-[color:var(--muted)]">
              SHIP · CERT · BACKUP — then your words.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
