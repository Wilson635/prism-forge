import { Globe2 } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroNetwork from './hero-network'
import source from './hero-network.tsx?raw'

export const block = defineBlock({
  id: 'hero-network',
  name: 'Hero — Network',
  category: 'Hero',
  tone: 'mint',
  icon: Globe2,
  code: source,
  Component: HeroNetwork,
})
