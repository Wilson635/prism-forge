import { Terminal } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoTerminalWall from './bento-terminal-wall'
import source from './bento-terminal-wall.tsx?raw'

export const block = defineBlock({
  id: 'bento-terminal-wall',
  name: 'Bento — Terminal wall',
  category: 'Bento',
  tone: 'mint',
  icon: Terminal,
  code: source,
  Component: BentoTerminalWall,
})
