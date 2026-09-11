import { Command } from 'lucide-react'
import { defineBlock } from '../../define-block'
import AnimatedBentoGrid from './two-bento-grid'
import source from './two-bento-grid.tsx?raw'

export const block = defineBlock({
  id: 'two-bento-grid',
  name: 'Bento — Two by three -1',
  category: 'Bento',
  tone: 'blue',
  icon: Command,
  code: source,
  Component: AnimatedBentoGrid,
})
