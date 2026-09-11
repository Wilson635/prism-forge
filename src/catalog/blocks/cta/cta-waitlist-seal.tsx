import { useState } from 'react'

export default function CtaWaitlistSeal() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
          Waitlist
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
          One seat. One email. No drip.
        </h2>
        <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
          We onboard a hundred product teams a quarter. Leave a work address — the invite is the only mail.
        </p>
        <form
          className="mt-10 overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-2 sm:flex sm:items-center"
          onSubmit={(event) => {
            event.preventDefault()
            setJoined(true)
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@studio.com"
            className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]"
          />
          <button className="w-full rounded-xl bg-[color:var(--green)] px-5 py-3 text-sm font-semibold text-[color:var(--bg)] sm:w-auto">
            {joined ? 'You’re on the list' : 'Request the seal'}
          </button>
        </form>
        <p className="mt-4 font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">4,812 waiting · ATL-024</p>
      </div>
    </section>
  )
}
