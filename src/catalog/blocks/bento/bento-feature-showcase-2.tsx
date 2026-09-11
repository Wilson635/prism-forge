import { Lock } from 'lucide-react'
import { motion } from 'framer-motion'

const bars = [40, 65, 45, 80, 60, 95, 70]

export default function BentoFeatureShowcase2() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-[color:var(--blue)]">Built for builders</span>
          <p className="mx-auto mt-3 max-w-lg text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
            Everything you need to ship your app
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] lg:row-span-2"
          >
            <div className="p-7 pb-0">
              <p className="text-sm font-semibold text-[color:var(--text)]">Mobile ready</p>
              <p className="mt-1.5 text-sm text-[color:var(--muted)]">
                Every block adapts down to a phone without any extra work on your end.
              </p>
            </div>
            <div className="relative mt-6 flex flex-1 items-end justify-center px-8 pb-8">
              <motion.div
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 220, damping: 24, delay: 0.15 }}
                className="w-40 rounded-t-[2rem] border-x-[10px] border-t-[10px] border-[color:var(--panel-2)] bg-[color:var(--bg)] pt-4 shadow-2xl"
              >
                <div className="mx-auto h-1 w-10 rounded-full bg-[color:var(--line)]" />
                <div className="mt-5 space-y-2 px-4 pb-6">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                    className="h-2 w-2/3 origin-left rounded-full bg-[color:var(--green)]/40"
                  />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 }}
                    className="h-2 w-1/2 origin-left rounded-full bg-[color:var(--panel-2)]"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55 }}
                    className="mt-3 h-16 rounded-xl bg-gradient-to-br from-[color:var(--green)]/20 to-transparent"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-7"
          >
            <p className="text-sm font-semibold text-[color:var(--text)]">Performance</p>
            <p className="mt-1.5 text-sm text-[color:var(--muted)]">
              Optimized rendering keeps every page fast, even on slow connections.
            </p>
            <div className="mt-6 flex h-20 items-end gap-2">
              {bars.map((height, index) => (
                <motion.div
                  key={'bar-' + index}
                  initial={{ height: 0 }}
                  whileInView={{ height: height + '%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.06, type: 'spring', stiffness: 260, damping: 22 }}
                  className="flex-1 rounded-full bg-gradient-to-t from-[color:var(--blue)] to-[color:var(--purple)]"
                  style={{ opacity: 0.35 + height / 200 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-7"
          >
            <p className="text-sm font-semibold text-[color:var(--text)]">Security</p>
            <p className="mt-1.5 text-sm text-[color:var(--muted)]">
              Encrypted by default, with granular access on every workspace.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 280, damping: 16, delay: 0.25 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--panel-2)]"
              >
                <Lock size={18} className="text-[color:var(--green)]" />
              </motion.div>
              <div className="flex-1 space-y-1.5">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                  className="h-1.5 w-full origin-left rounded-full bg-[color:var(--panel-2)]"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45 }}
                  className="h-1.5 w-2/3 origin-left rounded-full bg-[color:var(--panel-2)]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="flex flex-col overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] lg:row-span-2"
          >
            <div className="p-7 pb-0">
              <p className="text-sm font-semibold text-[color:var(--text)]">Powerful APIs</p>
              <p className="mt-1.5 text-sm text-[color:var(--muted)]">
                Automate any workflow with a typed SDK and predictable webhooks.
              </p>
            </div>
            <div className="mt-6 flex-1 px-7 pb-7">
              <div className="h-full overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg)]">
                <div className="flex items-center gap-1.5 border-b border-[color:var(--line)] px-3 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--muted)]/40" />
                  <span className="h-2 w-2 rounded-full bg-[color:var(--muted)]/40" />
                  <span className="h-2 w-2 rounded-full bg-[color:var(--muted)]/40" />
                  <span className="ml-2 text-[10px] text-[color:var(--muted)]">webhook.ts</span>
                </div>
                <div className="space-y-2 p-4 font-mono text-[11px] leading-relaxed">
                  {[
                    <>
                      <span className="text-[color:var(--purple)]">const</span>{' '}
                      <span className="text-[color:var(--text)]">client</span> ={' '}
                      <span className="text-[color:var(--blue)]">new</span>{' '}
                      <span className="text-[color:var(--green)]">Prism</span>()
                    </>,
                    <>
                      <span className="text-[color:var(--text)]">client</span>.
                      <span className="text-[color:var(--green)]">on</span>(
                      <span className="text-[color:var(--blue)]">'deploy'</span>, handleDeploy)
                    </>,
                    <span className="pl-4 text-[color:var(--muted)]">notify(event.project)</span>,
                  ].map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + i * 0.12 }}
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
