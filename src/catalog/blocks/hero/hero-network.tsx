import { motion } from 'framer-motion'

const nodes = [
  { x: 18, y: 42 },
  { x: 34, y: 22 },
  { x: 52, y: 48 },
  { x: 68, y: 28 },
  { x: 82, y: 55 },
]

export default function HeroNetwork() {
  return (
    <section className="relative overflow-hidden bg-[#081018] px-6 py-24 text-white sm:px-12">
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-70" viewBox="0 0 100 80" preserveAspectRatio="none">
        <path d="M18 42 L34 22 L52 48 L68 28 L82 55" fill="none" stroke="rgba(125,241,178,.35)" strokeWidth="0.4" />
        {nodes.map((node) => (
          <motion.circle
            key={`${node.x}-${node.y}`}
            cx={node.x}
            cy={node.y}
            r="1.2"
            fill="#79f2b0"
            animate={{ opacity: [0.4, 1, 0.4], r: [1.1, 1.6, 1.1] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: node.x / 40 }}
          />
        ))}
      </svg>
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Global edge</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          Close to every person who opens your app.
        </h1>
        <p className="mt-4 text-sm text-white/55">32 regions. One deploy. Latency you can ignore.</p>
        <a href="#" className="mt-8 inline-flex rounded-full border border-emerald-300/40 px-6 py-3 text-sm text-emerald-200">
          View the map
        </a>
      </div>
    </section>
  )
}
