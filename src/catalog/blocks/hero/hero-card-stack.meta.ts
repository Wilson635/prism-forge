import { Layers } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroCardStack from './hero-card-stack'
import source from './hero-card-stack.tsx?raw'

export const block = defineBlock({
  id: 'hero-card-stack',
  name: 'Hero — Card stack',
  category: 'Hero',
  tone: 'amber',
  icon: Layers,
  code: source,
  Component: HeroCardStack,
})
