import { List } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesIconRail from './features-icon-rail'
import source from './features-icon-rail.tsx?raw'

export const block = defineBlock({
  id: 'features-icon-rail',
  name: 'Features — Icon rail',
  category: 'Features',
  tone: 'mint',
  icon: List,
  code: source,
  Component: FeaturesIconRail,
})
