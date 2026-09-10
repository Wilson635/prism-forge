import { Command } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CommandPalette from './command-palette'
import source from './command-palette.tsx?raw'

export const block = defineBlock({
  id: "command-palette",
  name: "Command palette (⌘K)",
  category: "Command Palettes",
  tone: "violet",
  icon: Command,
  code: source,
  Component: CommandPalette,
})
