import { Activity } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroStatsBand from './hero-stats-band'
import source from './hero-stats-band.tsx?raw'

export const block = defineBlock({
  id: 'hero-stats-band',
  name: 'Hero — Stats band',
  category: 'Hero',
  tone: 'mint',
  icon: Activity,
  code: source,
  Component: HeroStatsBand,
})
