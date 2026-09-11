export default function BentoPaperMosaic() {
  return (
    <section className="bg-[#f4f1ea] px-6 py-20 font-['Manrope',sans-serif] text-[#161914] sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
        <article className="rounded-2xl border border-[#161914]/10 bg-white/80 p-8 sm:col-span-2">
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.18em] text-[color:var(--green-grap)] uppercase">
            Paper
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight">Uneven tiles, even margins.</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#161914]/55">
            A light mosaic for studios who still want the catalog to feel like a printed board.
          </p>
        </article>
        <article className="rounded-2xl bg-[#161914] p-8 text-[#f4f1ea]">
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
            Seal
          </p>
          <p className="mt-8 text-5xl font-semibold">Aa</p>
        </article>
        <article className="rounded-2xl border border-[#161914]/10 bg-white/70 p-6">
          <p className="text-sm font-semibold">Hero</p>
          <p className="mt-2 text-sm text-[#161914]/50">Split console</p>
        </article>
        <article className="rounded-2xl border border-[#161914]/10 bg-white/70 p-6">
          <p className="text-sm font-semibold">CTA</p>
          <p className="mt-2 text-sm text-[#161914]/50">Atelier invite</p>
        </article>
        <article className="rounded-2xl border border-[#161914]/10 bg-white/70 p-6">
          <p className="text-sm font-semibold">Bento</p>
          <p className="mt-2 text-sm text-[#161914]/50">This board</p>
        </article>
      </div>
    </section>
  )
}
