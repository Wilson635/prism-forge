export default function CtaAtelierLetter() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at 20% 80%, color-mix(in oklab, var(--green) 10%, transparent), transparent 45%)',
        }}
      />
      <div className="relative mx-auto max-w-xl rotate-[-0.6deg] rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-2)] p-8 shadow-[0_30px_80px_rgba(0,0,0,.45)] sm:p-12">
        <div className="flex items-center justify-between">
          <span className="font-['DM_Mono',monospace] text-[10px] tracking-[0.18em] text-[color:var(--green)]">
            NOTE 01
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--green)]" />
        </div>
        <p className="mt-8 text-sm leading-7 text-[color:var(--muted)]">Dear studio,</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--text)]">
          The catalog is open. Come take a room.
        </h2>
        <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
          We kept the green as a signal and the rest quiet. If that sounds like your desk, request the key.
        </p>
        <a
          href="/signup"
          className="mt-8 inline-flex rounded-xl bg-[color:var(--green)] px-5 py-3 text-sm font-semibold text-[color:var(--bg)]"
        >
          Request the key
        </a>
        <p className="mt-8 font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
          PRISM · system
        </p>
      </div>
    </section>
  )
}
