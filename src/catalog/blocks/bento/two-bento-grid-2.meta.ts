import { LayoutGrid } from 'lucide-react'
import { defineBlock } from '../../define-block'
import TwoByThreeOriginal from './two-bento-grid-2'
import source from './two-bento-grid-2.tsx?raw'

export const block = defineBlock({
  id: 'two-bento-grid-2',
  name: 'Bento — Two by three -2',
  category: 'Bento',
  tone: 'blue',
  icon: LayoutGrid,
  code: source,
  Component: TwoByThreeOriginal,
})
