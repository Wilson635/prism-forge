import { Blocks } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesLogoCloud from './features-logo-cloud'
import source from './features-logo-cloud.tsx?raw'

export const block = defineBlock({
  id: 'features-logo-cloud',
  name: 'Features — Logo cloud',
  category: 'Features',
  tone: 'blue',
  icon: Blocks,
  code: source,
  Component: FeaturesLogoCloud,
})
