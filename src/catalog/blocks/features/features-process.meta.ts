import { ListOrdered } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesProcess from './features-process'
import source from './features-process.tsx?raw'

export const block = defineBlock({
  id: 'features-process',
  name: 'Features — Process',
  category: 'Features',
  tone: 'violet',
  icon: ListOrdered,
  code: source,
  Component: FeaturesProcess,
})
