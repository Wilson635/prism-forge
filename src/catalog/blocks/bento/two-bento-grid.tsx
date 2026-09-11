import { motion } from 'framer-motion'

export default function AnimatedBentoGrid() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 font-['Manrope',sans-serif] sm:px-10 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl"
      >
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
          Two × three
        </p>
        <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
          A wide room, then three quiet ones.
        </h2>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-4 lg:grid-cols-3">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6 lg:col-span-2"
        >
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--green)] uppercase">
            Overview
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)]">
            <div className="flex gap-4 border-b border-[color:var(--line)] px-4 py-3 font-['DM_Mono',monospace] text-[11px]">
              <span className="text-[color:var(--green)]">Overview</span>
              <span className="text-[color:var(--muted)]">Activity</span>
              <span className="text-[color:var(--muted)]">Settings</span>
            </div>
            <div className="grid grid-cols-2 gap-6 p-5">
              <div>
                <p className="text-[11px] text-[color:var(--muted)]">Deploys</p>
                <p className="mt-1 font-['DM_Mono',monospace] text-3xl text-[color:var(--text)]">405</p>
              </div>
              <div>
                <p className="text-[11px] text-[color:var(--muted)]">Avg time</p>
                <p className="mt-1 font-['DM_Mono',monospace] text-3xl text-[color:var(--text)]">
                  3.4<span className="text-sm text-[color:var(--muted)]">s</span>
                </p>
              </div>
            </div>
          </div>
          <h3 className="mt-5 text-lg font-semibold text-[color:var(--text)]">Lightning-fast builds</h3>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">Cache, promote, forget. The edge keeps the receipt.</p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6"
        >
          <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--blue)] uppercase">
            Feed
          </p>
          <ul className="mt-4 space-y-3">
            {[
              ['LO', 'Lina · hero split'],
              ['MK', 'Mark · tls renew'],
            ].map(([ini, line]) => (
              <li key={line} className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--line)] font-['DM_Mono',monospace] text-[10px] text-[color:var(--green)]">
                  {ini}
                </span>
                <span className="text-sm text-[color:var(--muted)]">{line}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 text-lg font-semibold text-[color:var(--text)]">Push to deploy</h3>
        </motion.article>

        {['Permissions', 'Integrations', 'Edge'].map((title, i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 + i * 0.06 }}
            className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6"
          >
            <div
              className="mb-5 h-24 rounded-xl border border-[color:var(--line)]"
              style={{
                background: [
                  'radial-gradient(circle at 30% 80%, color-mix(in oklab, var(--green) 22%, transparent), var(--bg))',
                  'radial-gradient(circle at 70% 20%, color-mix(in oklab, var(--purple) 22%, transparent), var(--bg))',
                  'radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--blue) 22%, transparent), var(--bg))',
                ][i],
              }}
            />
            <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[color:var(--muted)] uppercase">
              0{i + 1}
            </p>
            <h3 className="mt-2 text-base font-semibold text-[color:var(--text)]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
              {['Roles down to env.', 'The stack you already pay for.', 'PoPs already warm.'][i]}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
