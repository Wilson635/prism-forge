import { Table2 } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "table-status",
  name: "Data table with status badges",
  category: "Tables",
  tone: "blue",
  icon: Table2,
  code: `const rows = [
  { name: "Landing page redesign", owner: "Sofia M.", status: "In progress" },
  { name: "Q3 marketing site", owner: "Théo R.", status: "Done" },
  { name: "Onboarding revamp", owner: "Priya N.", status: "Blocked" },
];
 
<table className="w-full overflow-hidden rounded-xl border border-zinc-200 text-sm">
  <thead className="bg-zinc-50 text-left text-xs uppercase text-zinc-500">
    <tr><th className="px-4 py-3">Project</th><th className="px-4 py-3">Owner</th><th className="px-4 py-3">Status</th></tr>
  </thead>
  <tbody>
    {rows.map((row) => (
      <tr className="border-t border-zinc-100">
        <td className="px-4 py-3 font-medium text-zinc-900">{row.name}</td>
        <td className="px-4 py-3 text-zinc-600">{row.owner}</td>
        <td className="px-4 py-3">
          <span className={\`rounded-full px-2 py-1 text-xs \${row.status === "Done" ? "bg-emerald-100 text-emerald-700" : row.status === "Blocked" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}\`}>
            {row.status}
          </span>
        </td>
      </tr>
    ))}
  </tbody>
</table>`,
} satisfies Block
