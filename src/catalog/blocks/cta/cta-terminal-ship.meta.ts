import { Terminal } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaTerminalShip from './cta-terminal-ship'
import source from './cta-terminal-ship.tsx?raw'

export const block = defineBlock({
  id: 'cta-terminal-ship',
  name: 'CTA — Terminal ship',
  category: 'CTA',
  tone: 'mint',
  icon: Terminal,
  code: source,
  Component: CtaTerminalShip,
})
