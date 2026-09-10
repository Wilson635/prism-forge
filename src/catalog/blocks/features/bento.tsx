export default function Bento() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-16 font-['Manrope',sans-serif] sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
        <div className="relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 sm:col-span-2">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 100% 0%, color-mix(in oklab, var(--green) 14%, transparent), transparent 50%)',
            }}
          />
          <div className="relative">
            <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
              Everything in focus
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[color:var(--text)]">Build without limits.</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-[color:var(--muted)]">
              One surface for layout, type and motion — tuned to the Prism palette, ready to paste.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-2 font-['DM_Mono',monospace] text-[10px]">
              {['Hero', 'Features', 'Pricing'].map((l, i) => (
                <div
                  key={l}
                  className={`rounded-xl border border-[color:var(--line)] px-3 py-4 ${i === 0 ? 'bg-[color:var(--bg)] text-[color:var(--text)]' : 'text-[color:var(--muted)]'}`}
                >
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[color:var(--green)] to-[color:var(--green-deep)] p-8 text-[color:var(--bg)]">
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] uppercase opacity-70">Catalog</p>
          <span className="mt-6 block text-6xl font-semibold tracking-tight">48</span>
          <p className="mt-2 text-sm font-medium">ready-to-use blocks</p>
        </div>
      </div>
    </section>
  )
}
