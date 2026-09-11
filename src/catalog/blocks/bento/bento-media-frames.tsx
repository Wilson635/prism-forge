import { motion } from 'framer-motion'

const prints = [
  {
    n: '01',
    title: 'Signal still',
    kicker: 'Green as light',
    className: 'lg:col-span-2 lg:row-span-2',
    rotate: -1.2,
    inner: (
      <div className="relative h-full min-h-[220px] overflow-hidden bg-[color:var(--bg)]">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 70% 80%, color-mix(in oklab, var(--green) 35%, transparent), transparent 55%)',
          }}
        />
        <div className="absolute inset-6 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel)]/80 p-4 backdrop-blur-sm">
          <p className="font-['DM_Mono',monospace] text-[10px] text-[color:var(--green)]">LIVE</p>
          <p className="mt-2 text-lg font-semibold text-[color:var(--text)]">Ship quieter.</p>
          <div className="mt-4 h-px bg-gradient-to-r from-[color:var(--green)] to-transparent" />
          <p className="mt-4 font-['DM_Mono',monospace] text-[11px] text-[color:var(--muted)]">09:41:22 · edge · ok</p>
        </div>
      </div>
    ),
  },
  {
    n: '02',
    title: 'Rare still',
    kicker: 'Violet, once',
    className: '',
    rotate: 1.6,
    inner: (
      <div
        className="h-36"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--purple) 45%, transparent), var(--bg))',
        }}
      />
    ),
  },
  {
    n: '03',
    title: 'Info still',
    kicker: 'Blue, named',
    className: '',
    rotate: -0.8,
    inner: (
      <div
        className="h-36"
        style={{
          background:
            'linear-gradient(135deg, color-mix(in oklab, var(--blue) 30%, transparent), var(--bg) 60%)',
        }}
      />
    ),
  },
]

export default function BentoMediaFrames() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
          Gallery
        </p>
        <h2 className="mt-3 max-w-lg text-4xl font-semibold tracking-tight text-[color:var(--text)]">
          Frames, hung. Not tiles dumped.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {prints.map((print, i) => (
            <motion.figure
              key={print.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 240, damping: 26 }}
              whileHover={{ y: -6, rotate: 0 }}
              className={`group overflow-hidden rounded-sm border-[10px] border-[color:var(--panel-2)] bg-[color:var(--panel)] shadow-[0_24px_60px_rgba(0,0,0,.45)] ${print.className}`}
              style={{ rotate: print.rotate }}
            >
              {print.inner}
              <figcaption className="flex items-center justify-between border-t border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-3">
                <div>
                  <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
                    Print {print.n}
                  </p>
                  <p className="text-sm font-semibold text-[color:var(--text)]">{print.title}</p>
                </div>
                <p className="font-['DM_Mono',monospace] text-[10px] text-[color:var(--green)]">{print.kicker}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
