export default function CtaMeshClose() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--bg)] px-6 py-28 font-['Manrope',sans-serif] text-center sm:px-10 lg:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, color-mix(in oklab, var(--green) 22%, transparent), transparent 55%), radial-gradient(ellipse 50% 40% at 80% 80%, color-mix(in oklab, var(--purple) 16%, transparent), transparent 50%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-2xl">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
          Close
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-6xl">
          Stop assembling kits. Start shipping rooms.
        </h2>
        <a
          href="/signup"
          className="mt-10 inline-flex rounded-xl bg-[color:var(--green)] px-6 py-3 text-sm font-semibold text-[color:var(--bg)]"
        >
          Get access
        </a>
      </div>
    </section>
  )
}
