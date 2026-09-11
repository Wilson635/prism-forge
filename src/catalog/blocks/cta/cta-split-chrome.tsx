export default function CtaSplitChrome() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
            In product
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)]">
            The close lives inside the app.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[color:var(--muted)]">
            Use this when onboarding should feel like the workspace, not a brochure.
          </p>
          <a
            href="/signup"
            className="mt-8 inline-flex rounded-xl bg-[color:var(--green)] px-5 py-3 text-sm font-semibold text-[color:var(--bg)]"
          >
            Create a workspace
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)]">
          <div className="flex items-center gap-2 border-b border-[color:var(--line)] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--orange)]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--green)]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--blue)]/70" />
            <span className="ml-3 font-['DM_Mono',monospace] text-[10px] text-[color:var(--muted)]">prism.dev/home</span>
          </div>
          <div className="space-y-2 p-5">
            {['Overview', 'Blocks', 'Ship'].map((item, i) => (
              <p
                key={item}
                className={`rounded-lg px-3 py-2 text-sm ${i === 2 ? 'bg-[color:var(--bg)] text-[color:var(--green)]' : 'text-[color:var(--muted)]'}`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
