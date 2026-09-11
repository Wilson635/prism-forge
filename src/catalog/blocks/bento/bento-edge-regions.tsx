import { useState } from 'react'
import worldMap from './world-map.svg?url'

const pops = [
  { id: 'IAD', city: 'Ashburn', ms: '8ms', lon: -77.5, lat: 39.0 },
  { id: 'CDG', city: 'Paris', ms: '11ms', lon: 2.35, lat: 48.86 },
  { id: 'NRT', city: 'Tokyo', ms: '14ms', lon: 139.8, lat: 35.7 },
  { id: 'GRU', city: 'São Paulo', ms: '19ms', lon: -46.6, lat: -23.5 },
  { id: 'SYD', city: 'Sydney', ms: '22ms', lon: 151.2, lat: -33.9 },
]

/** Linear fit to world-map.svg (950×620), from FR / US / AU landmarks. */
function project(lon: number, lat: number) {
  const x = 2.652 * lon + 473.1
  const y = 178.7 + (249.3 * (48.4 - lat)) / 80.4
  return {
    x: (x / 950) * 100,
    y: (y / 620) * 100,
  }
}

export default function BentoEdgeRegions() {
  const [active, setActive] = useState(pops[0].id)
  const current = pops.find((p) => p.id === active)!

  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-3">
        <article className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-5 lg:col-span-2">
          <div className="flex items-start justify-between gap-4 px-1">
            <div>
              <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
                World map
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[color:var(--text)]">Already close to the click.</h2>
            </div>
            <p className="font-['DM_Mono',monospace] text-[11px] text-[color:var(--green)]">
              {current.id} · {current.ms}
            </p>
          </div>

          <div className="relative mt-4 overflow-hidden rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)]">
            <img
              src={worldMap}
              alt="World map"
              className="aspect-[950/620] w-full object-contain opacity-80"
              style={{
                filter: 'invert(1) sepia(0.35) hue-rotate(85deg) saturate(1.4) brightness(0.72)',
              }}
            />
            {pops.map((pop) => {
              const { x, y } = project(pop.lon, pop.lat)
              const on = active === pop.id
              return (
                <button
                  key={pop.id}
                  type="button"
                  onClick={() => setActive(pop.id)}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  aria-label={`${pop.city} ${pop.ms}`}
                >
                  <span className={`relative flex h-3 w-3 ${on ? 'scale-125' : ''}`}>
                    {on && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--green)] opacity-70" />
                    )}
                    <span className="relative inline-flex h-3 w-3 rounded-full border border-[color:var(--bg)] bg-[color:var(--green)]" />
                  </span>
                </button>
              )
            })}
          </div>
        </article>

        <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6">
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
            PoPs
          </p>
          <ul className="mt-5 space-y-2">
            {pops.map((pop) => (
              <li key={pop.id}>
                <button
                  type="button"
                  onClick={() => setActive(pop.id)}
                  className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left text-sm ${
                    active === pop.id
                      ? 'border-[color:var(--green)]/40 bg-[color:var(--bg)] text-[color:var(--text)]'
                      : 'border-[color:var(--line)] text-[color:var(--muted)]'
                  }`}
                >
                  <span>
                    <span className="font-['DM_Mono',monospace] text-[color:var(--green)]">{pop.id}</span>
                    <span className="ml-2">{pop.city}</span>
                  </span>
                  <span className="font-['DM_Mono',monospace] text-[11px]">{pop.ms}</span>
                </button>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
