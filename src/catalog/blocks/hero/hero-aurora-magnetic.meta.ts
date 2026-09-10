import { WandSparkles } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroAuroraMagnetic from './hero-aurora-magnetic'
import source from './hero-aurora-magnetic.tsx?raw'

export const block = defineBlock({
  id: "hero-aurora-magnetic",
  name: "Hero — Aurora magnetic",
  category: "Hero",
  tone: "violet",
  icon: WandSparkles,
  code: source,
  Component: HeroAuroraMagnetic,
})
