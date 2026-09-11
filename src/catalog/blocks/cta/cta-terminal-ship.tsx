import { useState } from 'react'

export default function CtaTerminalShip() {
  const [ok, setOk] = useState(false)

  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10">
      <div className="mx-auto max-w-2xl">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
          CLI
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)]">
          Type the invite. That’s the CTA.
        </h2>
        <form
          className="mt-10 overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] shadow-[0_24px_70px_rgba(0,0,0,.35)]"
          onSubmit={(event) => {
            event.preventDefault()
            setOk(true)
          }}
        >
          <div className="flex items-center gap-2 border-b border-[color:var(--line)] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--orange)]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--green)]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--blue)]/70" />
            <span className="ml-2 font-['DM_Mono',monospace] text-[10px] text-[color:var(--muted)]">prism · access</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-5 font-['DM_Mono',monospace] text-[13px]">
            <span className="text-[color:var(--green)]">➜</span>
            <span className="text-[color:var(--muted)]">prism</span>
            <input
              defaultValue="request-access --studio"
              className="min-w-0 flex-1 bg-transparent text-[color:var(--text)] outline-none"
              aria-label="Command"
            />
            <button className="rounded-lg bg-[color:var(--green)] px-3 py-1.5 text-[11px] font-semibold text-[color:var(--bg)]">
              {ok ? 'queued' : 'run'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
