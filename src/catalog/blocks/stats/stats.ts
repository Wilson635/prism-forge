import { Layers3 } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "stats",
  name: "Metrics that matter",
  category: "Stats",
  tone: "amber",
  icon: Layers3,
  code: `<dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">\n  {metrics.map(({ label, value, change }) => (\n    <div>\n      <dt className="text-sm text-zinc-500">{label}</dt>\n      <dd className="mt-3 text-4xl font-semibold text-zinc-950">{value}</dd>\n      <span className="mt-2 inline-flex text-xs text-emerald-700">{change} this month</span>\n    </div>\n  ))}\n</dl>`,
} satisfies Block
