import { motion } from 'framer-motion'

export default function CtaOrbitAccess() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--bg)] px-6 py-24 font-['Manrope',sans-serif] text-center sm:px-10">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--green)]/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[color:var(--green)]" />
      </motion.div>
      <div className="relative mx-auto max-w-lg">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
          Orbit
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)]">
          Access that stays in motion.
        </h2>
        <a
          href="/signup"
          className="mt-8 inline-flex rounded-xl bg-[color:var(--green)] px-5 py-3 text-sm font-semibold text-[color:var(--bg)]"
        >
          Enter orbit
        </a>
      </div>
    </section>
  )
}
