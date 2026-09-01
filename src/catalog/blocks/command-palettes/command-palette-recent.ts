import { Command } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "command-palette-recent",
  name: "Command palette with recents",
  category: "Command Palettes",
  tone: "mint",
  icon: Command,
  code: `<div className="mx-auto max-w-lg rounded-2xl border border-zinc-200 bg-white shadow-2xl">
  <div className="flex items-center gap-2 border-b border-zinc-100 px-4 py-3">
    <Search size={16} className="text-zinc-400" />
    <input placeholder="Jump to a page or run a command..." className="flex-1 text-sm outline-none" />
  </div>
  <div className="p-2">
    <span className="px-2 text-xs font-medium text-zinc-400">Recent</span>
    {["Billing settings", "Q3 report.xlsx", "Team permissions"].map((label) => (
      <button className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm text-zinc-700 hover:bg-emerald-50">
        <span>{label}</span>
        <span className="text-xs text-zinc-400">Enter ↵</span>
      </button>
    ))}
  </div>
</div>`,
} satisfies Block
