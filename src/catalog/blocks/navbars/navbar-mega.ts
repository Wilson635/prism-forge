import { ChevronDown } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "navbar-mega",
  name: "Nav with dropdown menu",
  category: "Navbars",
  tone: "violet",
  icon: ChevronDown,
  code: `<nav className="flex items-center justify-between border-b border-zinc-200 bg-white px-8 py-4">
  <span className="text-lg font-semibold text-zinc-950">brand</span>
  <div className="hidden items-center gap-7 text-sm text-zinc-600 md:flex">
    <button className="flex items-center gap-1">Products <ChevronDown size={14} /></button>
    <a href="#">Solutions</a>
    <a href="#">Resources</a>
    <a href="#">Pricing</a>
  </div>
  <div className="flex items-center gap-3">
    <a href="#" className="text-sm text-zinc-600">Log in</a>
    <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white">Get started</button>
  </div>
</nav>`,
} satisfies Block
