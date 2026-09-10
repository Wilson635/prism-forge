import { useEffect, useState } from 'react'

function pad(value: number) {
  return String(value).padStart(2, '0')
}

export default function HeroCountdown() {
  const [left, setLeft] = useState({ d: 12, h: 8, m: 41, s: 19 })

  useEffect(() => {
    const id = window.setInterval(() => {
      setLeft((current) => {
        let total = current.s + current.m * 60 + current.h * 3600 + current.d * 86400 - 1
        if (total < 0) total = 12 * 86400
        return {
          d: Math.floor(total / 86400),
          h: Math.floor((total % 86400) / 3600),
          m: Math.floor((total % 3600) / 60),
          s: total % 60,
        }
      })
    }, 1000)
    return () => window.clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: left.d },
    { label: 'Hours', value: left.h },
    { label: 'Min', value: left.m },
    { label: 'Sec', value: left.s },
  ]

  return (
    <section className="bg-zinc-950 px-6 py-24 text-center text-white sm:px-12">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-300">Launch window</p>
      <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Prism Cloud opens in
      </h1>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 gap-3">
        {units.map((unit) => (
          <div key={unit.label} className="rounded-2xl border border-white/10 bg-white/5 py-5">
            <p className="font-mono text-3xl font-semibold">{pad(unit.value)}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wide text-zinc-500">{unit.label}</p>
          </div>
        ))}
      </div>
      <a href="#" className="mt-10 inline-flex rounded-full bg-rose-400 px-6 py-3 text-sm font-semibold text-zinc-950">
        Reserve a seat
      </a>
    </section>
  )
}
