import { Binary } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroDarkGrid from './hero-dark-grid'
import source from './hero-dark-grid.tsx?raw'

export const block = defineBlock({
  id: 'hero-dark-grid',
  name: 'Hero — Dark grid',
  category: 'Hero',
  tone: 'blue',
  icon: Binary,
  code: source,
  Component: HeroDarkGrid,
})
