import { MousePointer2 } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesHoverReveal from './features-hover-reveal'
import source from './features-hover-reveal.tsx?raw'

export const block = defineBlock({
  id: 'features-hover-reveal',
  name: 'Features — Hover reveal',
  category: 'Features',
  tone: 'mint',
  icon: MousePointer2,
  code: source,
  Component: FeaturesHoverReveal,
})
