export default function CtaRibbon() {
  return (
    <section className="bg-[color:var(--bg)] font-['Manrope',sans-serif]">
      <div
        className="border-y border-[color:var(--green)]/25 px-6 py-5 sm:px-10"
        style={{
          background:
            'linear-gradient(90deg, color-mix(in oklab, var(--green) 12%, var(--bg)), var(--panel) 40%, color-mix(in oklab, var(--purple) 10%, var(--bg)))',
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm font-medium text-[color:var(--text)]">
            Cohort 04 is open.{' '}
            <span className="text-[color:var(--muted)]">Twelve seats. Work email. One invite.</span>
          </p>
          <a
            href="/signup"
            className="inline-flex rounded-xl bg-[color:var(--green)] px-4 py-2.5 text-sm font-semibold text-[color:var(--bg)]"
          >
            Claim a seat
          </a>
        </div>
      </div>
    </section>
  )
}
