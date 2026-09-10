import { ShieldCheck } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesCardsLight from './features-cards-light'
import source from './features-cards-light.tsx?raw'

export const block = defineBlock({
  id: "features-cards-light",
  name: "Feature cards / Light",
  category: "Features",
  tone: "blue",
  icon: ShieldCheck,
  code: source,
  Component: FeaturesCardsLight,
})
