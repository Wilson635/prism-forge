import { WandSparkles } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroAmoreMagnetic from './hero-Amore-magnetic'
import source from './hero-Amore-magnetic.tsx?raw'

export const block = defineBlock({
  id: "hero-Amore-magnetic",
  name: "Hero — Amore magnetic",
  category: "Hero",
  tone: "violet",
  icon: WandSparkles,
  code: source,
  Component: HeroAmoreMagnetic,
})
