export default function BentoFeatureShowcase() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
          Mosaic
        </p>
        <h2 className="mt-3 max-w-lg text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
          Four rooms. One surface.
        </h2>

        <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
          <article className="relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6 lg:col-span-5 lg:row-span-2">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 100%, color-mix(in oklab, var(--green) 14%, transparent), transparent 55%)',
              }}
            />
            <p className="relative font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
              Device
            </p>
            <h3 className="relative mt-2 text-lg font-semibold text-[color:var(--text)]">The page, in a hand.</h3>
            <p className="relative mt-2 text-sm leading-6 text-[color:var(--muted)]">
              Every block already collapses. No second layout to maintain.
            </p>
            <div className="relative mx-auto mt-8 w-[180px] rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--bg)] p-3 shadow-[0_24px_60px_rgba(0,0,0,.45)]">
              <div className="mx-auto h-1 w-10 rounded-full bg-[color:var(--line)]" />
              <p className="mt-4 font-['DM_Mono',monospace] text-[9px] tracking-[0.14em] text-[color:var(--green)] uppercase">
                Orbit
              </p>
              <p className="mt-1 text-[13px] font-semibold text-[color:var(--text)]">Ship quieter.</p>
              <div className="mt-4 space-y-2">
                {['Hero split', 'Features rail', 'CTA invite'].map((row, i) => (
                  <div
                    key={row}
                    className={`rounded-lg border border-[color:var(--line)] px-2.5 py-2 text-[11px] ${i === 0 ? 'bg-[color:var(--panel-2)] text-[color:var(--text)]' : 'text-[color:var(--muted)]'}`}
                  >
                    {row}
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6 lg:col-span-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--blue)] uppercase">
                  Edge
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[color:var(--text)]">12ms, not “fast”.</h3>
              </div>
              <p className="font-['DM_Mono',monospace] text-2xl text-[color:var(--green)]">p50</p>
            </div>
            <svg className="mt-6 w-full text-[color:var(--green)]" viewBox="0 0 360 72" fill="none" aria-hidden>
              <path
                d="M0 52 C40 52 50 28 90 30 C130 32 140 12 180 16 C220 20 230 44 270 36 C310 28 320 10 360 14"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M0 52 C40 52 50 28 90 30 C130 32 140 12 180 16 C220 20 230 44 270 36 C310 28 320 10 360 14 L360 72 L0 72 Z"
                fill="url(#bentoSpark)"
                opacity="0.28"
              />
              <defs>
                <linearGradient id="bentoSpark" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="var(--green)" />
                  <stop offset="1" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </article>

          <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6 lg:col-span-3">
            <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--orange)] uppercase">
              Vault
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[color:var(--text)]">Keys stay named.</h3>
            <ul className="mt-5 space-y-2 font-['DM_Mono',monospace] text-[11px]">
              {['SSO · okta', 'Audit · 90d', 'Env · sealed'].map((row) => (
                <li
                  key={row}
                  className="flex items-center justify-between rounded-lg border border-[color:var(--line)] bg-[color:var(--bg)] px-3 py-2 text-[color:var(--muted)]"
                >
                  {row}
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--green)]" />
                </li>
              ))}
            </ul>
          </article>

          <article className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] lg:col-span-4">
            <div className="flex items-center justify-between border-b border-[color:var(--line)] px-4 py-2.5">
              <span className="font-['DM_Mono',monospace] text-[10px] text-[color:var(--muted)]">webhook.ts</span>
              <span className="font-['DM_Mono',monospace] text-[10px] text-[color:var(--green)]">typed</span>
            </div>
            <pre className="px-4 py-4 font-['DM_Mono',monospace] text-[11px] leading-6 text-[color:var(--muted)]">
              <span className="text-[color:var(--purple)]">export</span> const on ={' '}
              <span className="text-[color:var(--green)]">'deploy'</span>
              {'\n'}notify(event.<span className="text-[color:var(--text)]">project</span>)
            </pre>
          </article>
        </div>
      </div>
    </section>
  )
}
