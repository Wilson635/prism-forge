import { Type } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoTypeFoundry from './bento-type-foundry'
import source from './bento-type-foundry.tsx?raw'

export const block = defineBlock({
  id: 'bento-type-foundry',
  name: 'Bento — Type foundry',
  category: 'Bento',
  tone: 'mint',
  icon: Type,
  code: source,
  Component: BentoTypeFoundry,
})
