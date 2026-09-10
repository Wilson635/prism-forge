import { Terminal } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroTerminalLive from './hero-terminal-live'
import source from './hero-terminal-live.tsx?raw'

export const block = defineBlock({
  id: 'hero-terminal-live',
  name: 'Hero — Live terminal',
  category: 'Hero',
  tone: 'mint',
  icon: Terminal,
  code: source,
  Component: HeroTerminalLive,
})
