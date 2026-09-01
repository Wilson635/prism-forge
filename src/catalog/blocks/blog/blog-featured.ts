import { Newspaper } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "blog-featured",
  name: "Featured article + list",
  category: "Blog",
  tone: "amber",
  icon: Newspaper,
  code: `<section className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
  <article className="rounded-3xl bg-zinc-950 p-8 text-white">
    <span className="text-xs font-medium text-amber-300">Featured</span>
    <h2 className="mt-3 text-3xl font-semibold leading-tight">
      Why most design systems fail after year one
    </h2>
    <p className="mt-3 text-sm text-zinc-400">A look at the patterns that actually survive contact with a growing team.</p>
  </article>
  <div className="space-y-5">
    {["The case for fewer components", "Shipping accessibility by default", "Naming things is still the hardest part"].map((title) => (
      <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
        <span className="text-sm font-medium text-zinc-800">{title}</span>
        <ArrowUpRight className="text-zinc-400" size={16} />
      </div>
    ))}
  </div>
</section>`,
} satisfies Block
