import { ChevronDown } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesAccordion from './features-accordion'
import source from './features-accordion.tsx?raw'

export const block = defineBlock({
  id: 'features-accordion',
  name: 'Features — Accordion',
  category: 'Features',
  tone: 'mint',
  icon: ChevronDown,
  code: source,
  Component: FeaturesAccordion,
})
