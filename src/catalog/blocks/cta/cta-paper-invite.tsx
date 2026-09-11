export default function CtaPaperInvite() {
  return (
    <section className="bg-[#f4f1ea] px-6 py-20 font-['Manrope',sans-serif] text-[#161914] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[#161914]/10 bg-white/70 p-10 shadow-[0_24px_60px_rgba(22,25,20,.08)] backdrop-blur-sm sm:p-14">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green-grap)] uppercase">
          Letterpress
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
          You are invited to the next catalog.
        </h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-[#161914]/55">
          Paper, margins, and a green seal. For studios who still believe a CTA can feel like stationery.
        </p>
        <a
          href="/signup"
          className="mt-8 inline-flex border-b border-[#161914] pb-1 text-sm font-medium"
        >
          RSVP the atelier
        </a>
      </div>
    </section>
  )
}
