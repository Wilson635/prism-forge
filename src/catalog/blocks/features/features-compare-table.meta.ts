import { TableProperties } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesCompareTable from './features-compare-table'
import source from './features-compare-table.tsx?raw'

export const block = defineBlock({
  id: 'features-compare-table',
  name: 'Features — Compare table',
  category: 'Features',
  tone: 'blue',
  icon: TableProperties,
  code: source,
  Component: FeaturesCompareTable,
})
