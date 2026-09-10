import { Command } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CommandPaletteRecent from './command-palette-recent'
import source from './command-palette-recent.tsx?raw'

export const block = defineBlock({
  id: "command-palette-recent",
  name: "Command palette with recents",
  category: "Command Palettes",
  tone: "mint",
  icon: Command,
  code: source,
  Component: CommandPaletteRecent,
})
