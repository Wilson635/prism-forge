import { ChartNoAxesColumn } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesMetricCards from './features-metric-cards'
import source from './features-metric-cards.tsx?raw'

export const block = defineBlock({
  id: 'features-metric-cards',
  name: 'Features — Metric cards',
  category: 'Features',
  tone: 'mint',
  icon: ChartNoAxesColumn,
  code: source,
  Component: FeaturesMetricCards,
})
