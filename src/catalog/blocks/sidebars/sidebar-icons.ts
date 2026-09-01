import { PanelLeft } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "sidebar-icons",
  name: "Icon + label sidebar",
  category: "Sidebars",
  tone: "blue",
  icon: PanelLeft,
  code: `const items = [
  { icon: Grid2X2, label: "Overview", active: true },
  { icon: Layers3, label: "Projects" },
  { icon: Table2, label: "Reports" },
];
 
<aside className="w-56 space-y-1 rounded-2xl border border-zinc-200 bg-white p-3">
  {items.map(({ icon: Icon, label, active }) => (
    <button className={\`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm \${active ? "bg-blue-50 text-blue-700" : "text-zinc-600 hover:bg-zinc-50"}\`}>
      <Icon size={16} />
      {label}
    </button>
  ))}
</aside>`,
} satisfies Block
