import { Command } from 'lucide-react'
import { defineBlock } from '../../define-block'
import AnimatedBentoGrid from './two-bento-grid'
import source from './two-bento-grid.tsx?raw'

export const block = defineBlock({
  id: 'two-bento-grid',
  name: 'Two row bento grid with three column second row',
  category: 'Bento',
  tone: 'blue',
  icon: Command,
  code: source,
  Component: AnimatedBentoGrid,
})
