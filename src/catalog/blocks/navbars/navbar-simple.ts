import { PanelTop } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "navbar-simple",
  name: "Simple nav with CTA",
  category: "Navbars",
  tone: "mint",
  icon: PanelTop,
  code: `<nav className="flex items-center justify-between rounded-full border border-zinc-200 bg-white px-6 py-3">
  <span className="text-lg font-semibold text-zinc-950">brand</span>
  <div className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
    <a href="#">Product</a>
    <a href="#">Pricing</a>
    <a href="#">Docs</a>
  </div>
  <button className="rounded-full bg-zinc-950 px-4 py-2 text-sm text-white">Sign in</button>
</nav>`,
} satisfies Block
