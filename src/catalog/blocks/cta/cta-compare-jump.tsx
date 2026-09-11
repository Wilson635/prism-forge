export default function CtaCompareJump() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <p className="mx-auto max-w-6xl font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
        Before you leave
      </p>
      <h2 className="mx-auto mt-3 max-w-6xl text-4xl font-semibold tracking-tight text-[color:var(--text)]">
        Keep the kit, or keep the charter.
      </h2>
      <div className="mx-auto mt-12 grid max-w-6xl gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-[color:var(--line)] p-8">
          <p className="font-['DM_Mono',monospace] text-[10px] text-[color:var(--muted)] uppercase">Generic pack</p>
          <p className="mt-3 text-lg text-[color:var(--muted)]">Blue buttons. Mystery JSX. A Figma you don’t own.</p>
        </article>
        <article className="rounded-2xl border border-[color:var(--green)]/35 bg-[color:var(--panel)] p-8">
          <p className="font-['DM_Mono',monospace] text-[10px] text-[color:var(--green)] uppercase">Prism</p>
          <p className="mt-3 text-lg text-[color:var(--text)]">Named tokens. The file is the preview. You ship the TSX.</p>
          <a
            href="/signup"
            className="mt-8 inline-flex rounded-xl bg-[color:var(--green)] px-5 py-3 text-sm font-semibold text-[color:var(--bg)]"
          >
            Choose Prism
          </a>
        </article>
      </div>
    </section>
  )
}
