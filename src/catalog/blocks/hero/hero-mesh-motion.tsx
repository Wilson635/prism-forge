import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroMeshMotion() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07080c] px-6 py-28 text-white sm:px-12">
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-10 top-10 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-[90px]"
      />
      <motion.div
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-400/25 blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-violet-500/20 blur-[80px]"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
          Color that never sits still.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base text-white/60">
          A living mesh for product launches, festivals and anything that should feel slightly alive.
        </p>
        <a
          href="#"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm backdrop-blur"
        >
          Grab the mesh kit <ArrowRight size={15} />
        </a>
      </div>
    </section>
  )
}
