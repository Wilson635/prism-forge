import { Check } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesChecklist from './features-checklist'
import source from './features-checklist.tsx?raw'

export const block = defineBlock({
  id: 'features-checklist',
  name: 'Features — Checklist',
  category: 'Features',
  tone: 'mint',
  icon: Check,
  code: source,
  Component: FeaturesChecklist,
})
