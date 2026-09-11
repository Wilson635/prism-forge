import { ChartNoAxesColumn } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaMetricClose from './cta-metric-close'
import source from './cta-metric-close.tsx?raw'

export const block = defineBlock({
  id: 'cta-metric-close',
  name: 'CTA — Metric close',
  category: 'CTA',
  tone: 'mint',
  icon: ChartNoAxesColumn,
  code: source,
  Component: CtaMetricClose,
})
