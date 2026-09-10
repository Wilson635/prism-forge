import { Zap } from 'lucide-react'
import { defineBlock } from '../../define-block'
import Pricing from './pricing'
import source from './pricing.tsx?raw'

export const block = defineBlock({
  id: "pricing",
  name: "Pricing comparison",
  category: "Pricing",
  tone: "blue",
  icon: Zap,
  code: source,
  Component: Pricing,
})
