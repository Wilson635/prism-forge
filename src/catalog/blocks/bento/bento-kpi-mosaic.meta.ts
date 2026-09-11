import { ChartNoAxesColumn } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoKpiMosaic from './bento-kpi-mosaic'
import source from './bento-kpi-mosaic.tsx?raw'

export const block = defineBlock({
  id: 'bento-kpi-mosaic',
  name: 'Bento — KPI mosaic',
  category: 'Bento',
  tone: 'mint',
  icon: ChartNoAxesColumn,
  code: source,
  Component: BentoKpiMosaic,
})
