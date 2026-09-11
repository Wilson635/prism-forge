const items = ['Semantic tokens', 'Copy-paste TSX', 'No runtime CSS-in-JS', 'Charter included']

export default function CtaChecklistClose() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
            In the crate
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
            What’s promised is what ships.
          </h2>
        </div>
        <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8">
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-center justify-between gap-4 text-sm text-[color:var(--text)]">
                {item}
                <span className="flex h-6 w-6 items-center justify-center rounded-md border border-[color:var(--green)]/35 bg-[color:var(--green)]/10">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
                    <path d="M1 4.2 3.4 6.6 9 1" stroke="var(--green)" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </li>
            ))}
          </ul>
          <a
            href="/signup"
            className="mt-8 flex items-center justify-center rounded-xl bg-[color:var(--green)] py-3 text-sm font-semibold text-[color:var(--bg)]"
          >
            Sign the scope
          </a>
        </div>
      </div>
    </section>
  )
}
