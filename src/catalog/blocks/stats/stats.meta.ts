import { Layers3 } from 'lucide-react'
import { defineBlock } from '../../define-block'
import Stats from './stats'
import source from './stats.tsx?raw'

export const block = defineBlock({
  id: "stats",
  name: "Metrics that matter",
  category: "Stats",
  tone: "amber",
  icon: Layers3,
  code: source,
  Component: Stats,
})
