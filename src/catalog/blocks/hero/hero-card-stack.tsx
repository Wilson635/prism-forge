import { motion } from 'framer-motion'

const cards = [
  { title: 'Inbox', tone: 'bg-violet-200' },
  { title: 'Board', tone: 'bg-emerald-200' },
  { title: 'Pulse', tone: 'bg-amber-200' },
]

export default function HeroCardStack() {
  return (
    <section className="overflow-hidden bg-[#f4f0ea] px-6 py-20 sm:px-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 lg:py-28">
      <div>
        <h1 className="max-w-md text-5xl font-semibold tracking-tight text-zinc-950">
          Three surfaces. One product.
        </h1>
        <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-600">
          Hover the stack — each layer is a different workspace, same design language.
        </p>
        <a href="#" className="mt-8 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm text-white">
          Open the kit
        </a>
      </div>
      <div className="relative mx-auto mt-16 h-64 w-full max-w-md lg:mt-0">
        {cards.map((card, i) => (
          <motion.article
            key={card.title}
            whileHover={{ y: -16, rotate: 0 }}
            className={`absolute left-8 right-8 rounded-3xl p-6 shadow-lg ${card.tone}`}
            style={{ top: i * 28, transform: `rotate(${[-6, 3, 7][i]}deg)`, zIndex: i + 1 }}
          >
            <p className="text-sm font-semibold text-zinc-800">{card.title}</p>
            <div className="mt-6 h-16 rounded-xl bg-white/50" />
          </motion.article>
        ))}
      </div>
    </section>
  )
}
