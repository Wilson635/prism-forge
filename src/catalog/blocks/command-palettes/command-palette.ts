import { Command } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "command-palette",
  name: "Command palette (⌘K)",
  category: "Command Palettes",
  tone: "violet",
  icon: Command,
  code: `<div className="mx-auto max-w-lg rounded-2xl border border-zinc-200 bg-white shadow-2xl">
  <div className="flex items-center gap-2 border-b border-zinc-100 px-4 py-3">
    <Search size={16} className="text-zinc-400" />
    <input placeholder="Search commands..." className="flex-1 text-sm outline-none" />
    <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs text-zinc-500">esc</kbd>
  </div>
  <div className="p-2">
    <span className="px-2 text-xs font-medium text-zinc-400">Actions</span>
    {["Create new project", "Invite teammate", "Open settings"].map((label) => (
      <button className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-zinc-700 hover:bg-violet-50">
        <Command size={14} className="text-violet-500" />
        {label}
      </button>
    ))}
  </div>
</div>`,
} satisfies Block
