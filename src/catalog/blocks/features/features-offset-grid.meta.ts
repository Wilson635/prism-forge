import { LayoutGrid } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesOffsetGrid from './features-offset-grid'
import source from './features-offset-grid.tsx?raw'

export const block = defineBlock({
  id: 'features-offset-grid',
  name: 'Features — Offset grid',
  category: 'Features',
  tone: 'violet',
  icon: LayoutGrid,
  code: source,
  Component: FeaturesOffsetGrid,
})
