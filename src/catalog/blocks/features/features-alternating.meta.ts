import { Rows3 } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesAlternating from './features-alternating'
import source from './features-alternating.tsx?raw'

export const block = defineBlock({
  id: 'features-alternating',
  name: 'Features — Alternating',
  category: 'Features',
  tone: 'violet',
  icon: Rows3,
  code: source,
  Component: FeaturesAlternating,
})
