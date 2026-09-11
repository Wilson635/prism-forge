import { useState } from 'react'

const regions = ['North America', 'Europe', 'Asia Pacific']
const bars = [42, 68, 54, 82, 61, 92, 74, 86, 66, 97, 78, 88]

export default function LiveCommandCenter() {
  const [region, setRegion] = useState(regions[1])

  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)]">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--line)] px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--green)] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--green)]" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[color:var(--text)]">Live command</p>
              <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.14em] text-[color:var(--muted)] uppercase">
                Edge · last 24h
              </p>
            </div>
          </div>
          <p className="font-['DM_Mono',monospace] text-[11px] text-[color:var(--green)]">{region} · healthy</p>
        </header>

        <div className="grid lg:grid-cols-[1.4fr_.8fr]">
          <div className="relative p-6 sm:p-8">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, color-mix(in oklab, var(--green) 8%, transparent), transparent 50%)',
              }}
            />
            <div className="relative flex items-center justify-between">
              <span className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
                Requests / min
              </span>
              <span className="font-['DM_Mono',monospace] text-sm text-[color:var(--text)]">12.4k</span>
            </div>
            <div className="relative mt-8 flex h-36 items-end gap-1.5">
              {bars.map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-[color:var(--green-deep)] to-[color:var(--green)]"
                  style={{ height: `${height}%`, opacity: 0.45 + height / 220 }}
                />
              ))}
            </div>
          </div>
          <div className="grid border-t border-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-1 lg:border-t-0 lg:border-l">
            <div className="p-6 sm:border-r sm:border-[color:var(--line)] lg:border-r-0 lg:border-b">
              <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
                Uptime
              </p>
              <p className="mt-3 bg-gradient-to-br from-[color:var(--text)] to-[color:var(--green)] bg-clip-text font-['DM_Mono',monospace] text-5xl text-transparent">
                99.98
              </p>
            </div>
            <div className="p-6">
              <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
                p95
              </p>
              <p className="mt-3 font-['DM_Mono',monospace] text-5xl text-[color:var(--text)]">84ms</p>
            </div>
          </div>
        </div>

        <footer className="flex flex-wrap items-center gap-2 border-t border-[color:var(--line)] px-6 py-4">
          {regions.map((item) => (
            <button
              key={item}
              onClick={() => setRegion(item)}
              className={
                region === item
                  ? 'rounded-full bg-[color:var(--green)] px-3 py-1.5 text-[11px] font-medium text-[color:var(--bg)]'
                  : 'rounded-full border border-[color:var(--line)] px-3 py-1.5 text-[11px] text-[color:var(--muted)]'
              }
            >
              {item}
            </button>
          ))}
        </footer>
      </div>
    </section>
  )
}
