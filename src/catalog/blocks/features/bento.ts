import { Grid2X2 } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "bento",
  name: "Bento feature grid",
  category: "Features",
  tone: "mint",
  icon: Grid2X2,
  code: `<section className="grid grid-cols-3 gap-4">\n  <div className="col-span-2 rounded-2xl bg-zinc-950 p-8 text-white">\n    <p className="text-sm text-emerald-300">Everything in focus</p>\n    <h2 className="mt-4 text-4xl font-semibold">Build without limits.</h2>\n  </div>\n  <div className="rounded-2xl bg-emerald-300 p-8 text-zinc-950">\n    <span className="text-5xl font-bold">48</span>\n    <p className="mt-2">ready-to-use blocks</p>\n  </div>\n</section>`,
} satisfies Block
