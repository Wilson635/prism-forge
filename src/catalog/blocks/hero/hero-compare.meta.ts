import { Columns2 } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroCompare from './hero-compare'
import source from './hero-compare.tsx?raw'

export const block = defineBlock({
  id: 'hero-compare',
  name: 'Hero — Before / after',
  category: 'Hero',
  tone: 'blue',
  icon: Columns2,
  code: source,
  Component: HeroCompare,
})
