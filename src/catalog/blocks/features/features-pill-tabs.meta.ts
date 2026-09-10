import { AppWindow } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesPillTabs from './features-pill-tabs'
import source from './features-pill-tabs.tsx?raw'

export const block = defineBlock({
  id: 'features-pill-tabs',
  name: 'Features — Pill tabs',
  category: 'Features',
  tone: 'mint',
  icon: AppWindow,
  code: source,
  Component: FeaturesPillTabs,
})
