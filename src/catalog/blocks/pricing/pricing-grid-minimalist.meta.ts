import { DollarSign } from 'lucide-react'
import { defineBlock } from '../../define-block'
import PricingGridMinimalist from './pricing-grid-minimalist'
import source from './pricing-grid-minimalist.tsx?raw'

export const block = defineBlock({
  id: "pricing-grid-minimalist",
  name: "Pricing / Minimalist Dark Grid",
  category: "Pricing",
  tone: "mint",
  icon: DollarSign,
  code: source,
  Component: PricingGridMinimalist,
})
