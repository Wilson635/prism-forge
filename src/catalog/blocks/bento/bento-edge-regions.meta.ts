import { Globe } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoEdgeRegions from './bento-edge-regions'
import source from './bento-edge-regions.tsx?raw'

export const block = defineBlock({
  id: 'bento-edge-regions',
  name: 'Bento — Edge regions',
  category: 'Bento',
  tone: 'blue',
  icon: Globe,
  code: source,
  Component: BentoEdgeRegions,
})
