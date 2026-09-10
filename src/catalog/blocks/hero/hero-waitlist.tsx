import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function HeroWaitlist() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  return (
    <section className="bg-[#11131a] px-6 py-24 text-white sm:px-12 lg:py-32">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300">Private beta</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight">
          Get early access to Prism 2.
        </h1>
        <p className="mt-4 text-sm leading-6 text-white/55">
          We are onboarding 100 product teams this quarter. Leave your work email — no noise, one invite.
        </p>
        <form
          className="mt-8 flex flex-col gap-2 sm:flex-row"
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
            className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm outline-none placeholder:text-white/30"
          />
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-zinc-950">
            {joined ? 'You’re on the list' : 'Join waitlist'} <ArrowRight size={15} />
          </button>
        </form>
        <p className="mt-4 text-xs text-white/35">4,812 already waiting · no spam, ever</p>
      </div>
    </section>
  )
}
