import { Terminal } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "form",
  name: "Waitlist form",
  category: "Forms",
  tone: "violet",
  icon: Terminal,
  code: `<form className="mx-auto flex max-w-lg gap-2 rounded-full bg-white p-2 shadow-xl">\n  <label className="sr-only" htmlFor="email">Email address</label>\n  <input id="email" type="email" placeholder="you@company.com"\n    className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none" />\n  <button className="rounded-full bg-zinc-950 px-5 py-3 text-sm text-white">\n    Join the waitlist\n  </button>\n</form>`,
} satisfies Block
