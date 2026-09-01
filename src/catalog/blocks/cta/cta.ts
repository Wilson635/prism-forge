import { ArrowUpRight } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "cta",
  name: "Call to action",
  category: "CTA",
  tone: "mint",
  icon: ArrowUpRight,
  code: `<section className="rounded-3xl bg-emerald-300 px-8 py-16 text-center">\n  <p className="text-sm font-medium text-emerald-950">Ready when you are</p>\n  <h2 className="mx-auto mt-4 max-w-xl text-5xl font-semibold tracking-tight text-zinc-950">\n    Make something people remember.\n  </h2>\n  <a href="/signup" className="mt-8 inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm text-white">\n    Get started <ArrowUpRight className="ml-2" />\n  </a>\n</section>`,
} satisfies Block
