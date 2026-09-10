const steps = [
  { t: 'Connect git', d: 'Install the GitHub app. That is the whole setup.', k: '2 min' },
  { t: 'Push a block', d: 'Drop a Prism section into the route you already have.', k: 'paste' },
  { t: 'Review live', d: 'Stakeholders click a preview, not a Figma comment thread.', k: 'URL' },
  { t: 'Promote', d: 'Merge. The edge updates. Nobody files a ticket.', k: 'main' },
]

export default function FeaturesTimeline() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--green), transparent)' }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
            Path
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
            Four steps, then you forget the tool.
          </h2>
        </div>

        <ol className="mt-16 grid gap-0 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.t} className="relative px-1 py-2 lg:px-4">
              {i < steps.length - 1 && (
                <span
                  className="pointer-events-none absolute top-5 left-[2.25rem] hidden h-px lg:block"
                  style={{
                    width: 'calc(100% - 1rem)',
                    background: 'linear-gradient(90deg, var(--green), var(--line))',
                  }}
                />
              )}
              <div className="flex items-center gap-3">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--green)]/40 bg-[color:var(--panel)] font-['DM_Mono',monospace] text-[12px] text-[color:var(--green)] shadow-[0_0_24px_color-mix(in_oklab,var(--green)_25%,transparent)]">
                  0{i + 1}
                </span>
                <span className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase lg:hidden">
                  {step.k}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[color:var(--text)]">{step.t}</h3>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{step.d}</p>
              <p className="mt-4 hidden font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase lg:block">
                {step.k}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
