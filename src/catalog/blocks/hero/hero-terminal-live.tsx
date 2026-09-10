import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const script = [
  '$ npx prism init marketing-site',
  '✓ layout scaffolds in 1.2s',
  '✓ tokens linked to your theme',
  'Ready. Open http://localhost:5173',
]

export default function HeroTerminalLive() {
  const [visible, setVisible] = useState(1)

  useEffect(() => {
    const id = window.setInterval(() => {
      setVisible((count) => (count >= script.length ? 1 : count + 1))
    }, 1400)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section className="grid items-center gap-12 bg-[#0c100e] px-6 py-20 text-[#f1f5f2] sm:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-28">
      <div>
        <p className="font-mono text-xs tracking-wide text-[color:var(--green)]">CLI-first workflow</p>
        <h1 className="mt-4 max-w-lg text-4xl font-semibold tracking-tight sm:text-5xl">
          Scaffold a landing page from the terminal.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-6 text-[#8b958f]">
          One command drops Prism blocks into your repo, already themed, already typed.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--green)] px-5 py-3 text-sm font-semibold text-[#09110d]"
        >
          Copy the starter <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="rounded-2xl border border-[#252c28] bg-[#090b0a] p-5 font-mono text-[13px] leading-7 shadow-xl">
        <div className="mb-4 flex gap-1.5">
          <i className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        </div>
        {script.slice(0, visible).map((line) => (
          <p key={line} className={line.startsWith('$') ? 'text-[color:var(--green)]' : 'text-[#c5d0c9]'}>
            {line}
          </p>
        ))}
        <span className="inline-block h-4 w-1.5 animate-pulse bg-[color:var(--green)] align-middle" />
      </div>
    </section>
  )
}
