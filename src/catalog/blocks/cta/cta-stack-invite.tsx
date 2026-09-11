export default function CtaStackInvite() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
            Stack
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
            Three rooms. One key.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[color:var(--muted)]">
            Hero, features, pricing — already talking to each other. Unlock the set.
          </p>
          <a
            href="/kits"
            className="mt-8 inline-flex rounded-xl bg-[color:var(--green)] px-5 py-3 text-sm font-semibold text-[color:var(--bg)]"
          >
            Open a kit
          </a>
        </div>
        <div className="relative h-64">
          {['Hero', 'Features', 'Pricing'].map((label, i) => (
            <div
              key={label}
              className="absolute right-0 w-[88%] rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-5 shadow-[0_20px_50px_rgba(0,0,0,.35)]"
              style={{ top: i * 36, transform: `rotate(${i * 1.4 - 1.4}deg)` }}
            >
              <p className="font-['DM_Mono',monospace] text-[10px] text-[color:var(--muted)]">0{i + 1}</p>
              <p className="mt-2 text-sm font-semibold text-[color:var(--text)]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
