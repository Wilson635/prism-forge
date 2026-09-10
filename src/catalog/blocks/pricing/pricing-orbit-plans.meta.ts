import { Crown } from 'lucide-react'
import { defineBlock } from '../../define-block'
import PricingOrbitPlans from './pricing-orbit-plans'
import source from './pricing-orbit-plans.tsx?raw'

export const block = defineBlock({
  id: "pricing-orbit-plans",
  name: "Pricing — Orbit plans",
  category: "Pricing",
  tone: "mint",
  icon: Crown,
  code: source,
  Component: PricingOrbitPlans,
})
