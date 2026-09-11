export default function BentoTerminalWall() {
  const logs = [
    ['09:41:02', 'build', 'ok'],
    ['09:41:18', 'tls', 'ok'],
    ['09:41:22', 'edge', 'live'],
  ]
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-3">
        <article className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] lg:col-span-2">
          <div className="flex gap-1.5 border-b border-[color:var(--line)] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--orange)]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--green)]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--blue)]/70" />
          </div>
          <div className="space-y-2 p-4 font-['DM_Mono',monospace] text-[12px]">
            {logs.map((row) => (
              <div key={row[0]} className="flex justify-between rounded-lg border border-[color:var(--line)] bg-[color:var(--bg)] px-3 py-2">
                <span className="text-[color:var(--muted)]">{row[0]}</span>
                <span className="text-[color:var(--text)]">{row[1]}</span>
                <span className="text-[color:var(--green)]">{row[2]}</span>
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6">
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
            Wall
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[color:var(--text)]">The log is the tile.</h2>
          <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">No empty chrome. The mosaic shows work already done.</p>
        </article>
      </div>
    </section>
  )
}
