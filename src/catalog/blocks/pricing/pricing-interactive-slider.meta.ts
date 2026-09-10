import { DollarSign } from 'lucide-react'
import { defineBlock } from '../../define-block'
import PricingInteractiveSlider from './pricing-interactive-slider'
import source from './pricing-interactive-slider.tsx?raw'

export const block = defineBlock({
  id: "pricing-interactive-slider",
  name: "Pricing / Interactive volume slider",
  category: "Pricing",
  tone: "mint",
  icon: DollarSign,
  code: source,
  Component: PricingInteractiveSlider,
})
