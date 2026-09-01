import { PanelLeft } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "sidebar-dashboard",
  name: "Dashboard sidebar with user card",
  category: "Sidebars",
  tone: "amber",
  icon: PanelLeft,
  code: `<aside className="flex h-full w-60 flex-col justify-between rounded-2xl bg-zinc-950 p-4 text-white">
  <div className="space-y-1">
    <span className="px-3 text-xs uppercase tracking-wide text-zinc-500">Workspace</span>
    {["Dashboard", "Analytics", "Team", "Settings"].map((label, i) => (
      <button className={\`w-full rounded-lg px-3 py-2.5 text-left text-sm \${i === 0 ? "bg-white/10" : "text-zinc-400 hover:bg-white/5"}\`}>
        {label}
      </button>
    ))}
  </div>
  <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
    <div className="h-9 w-9 rounded-full bg-amber-300" />
    <div>
      <p className="text-sm font-medium">Jonas Weber</p>
      <p className="text-xs text-zinc-400">Free plan</p>
    </div>
  </div>
</aside>`,
} satisfies Block
