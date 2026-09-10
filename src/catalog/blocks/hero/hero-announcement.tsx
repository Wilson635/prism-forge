import { ArrowRight } from 'lucide-react'

export default function HeroAnnouncement() {
  return (
    <section className="bg-white px-6 py-20 text-zinc-950 sm:px-12 lg:py-28">
      <a
        href="#"
        className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700"
      >
        <span className="rounded-full bg-fuchsia-600 px-2 py-0.5 text-[10px] font-semibold text-white">NEW</span>
        Prism 1.9 is live — changelog
        <ArrowRight size={12} />
      </a>
      <h1 className="mt-8 max-w-4xl text-6xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-8xl">
        Make the first screen impossible to skip.
      </h1>
      <p className="mt-6 max-w-xl text-base text-zinc-500">
        Giant type, a single action, and an announcement that actually earns the click.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white">
          Get started
        </a>
        <a href="#" className="rounded-full px-6 py-3 text-sm font-medium text-zinc-600">
          Pricing
        </a>
      </div>
    </section>
  )
}
