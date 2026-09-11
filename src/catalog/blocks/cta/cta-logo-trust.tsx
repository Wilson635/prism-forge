const marks = [
  { name: 'GitHub', d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z' },
  { name: 'Linear', d: 'M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z' },
  { name: 'Vercel', d: 'M12 3.2 22 20.8H2L12 3.2Z' },
]

export default function CtaLogoTrust() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 text-center font-['Manrope',sans-serif] sm:px-10">
      <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
        Already on the invoice
      </p>
      <h2 className="mx-auto mt-3 max-w-xl text-4xl font-semibold tracking-tight text-[color:var(--text)]">
        Plays with the stack you kept.
      </h2>
      <ul className="mx-auto mt-10 flex max-w-lg items-center justify-center gap-8 text-[color:var(--muted)]">
        {marks.map((m) => (
          <li key={m.name} className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d={m.d} />
            </svg>
            <span className="font-['DM_Mono',monospace] text-[11px] tracking-[0.12em] uppercase">{m.name}</span>
          </li>
        ))}
      </ul>
      <a
        href="/signup"
        className="mt-10 inline-flex rounded-xl bg-[color:var(--green)] px-5 py-3 text-sm font-semibold text-[color:var(--bg)]"
      >
        Wire Prism in
      </a>
    </section>
  )
}
