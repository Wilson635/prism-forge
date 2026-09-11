import { Smartphone } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoFeatureShowcase2 from './bento-feature-showcase-2'
import source from './bento-feature-showcase-2.tsx?raw'

export const block = defineBlock({
  id: 'bento-feature-showcase-2',
  name: 'Bento — Feature showcase -2',
  category: 'Bento',
  tone: 'blue',
  icon: Smartphone,
  code: source,
  Component: BentoFeatureShowcase2,
})
