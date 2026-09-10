import { DollarSign } from 'lucide-react'
import { defineBlock } from '../../define-block'
import PricingInteractivesSlider from './pricing-interactives-slider'
import source from './pricing-interactives-slider.tsx?raw'

export const block = defineBlock({
  id: "pricing-interactives-slider",
  name: "Pricing / Interactive volume slider",
  category: "Pricing",
  tone: "mint",
  icon: DollarSign,
  code: source,
  Component: PricingInteractivesSlider,
})
