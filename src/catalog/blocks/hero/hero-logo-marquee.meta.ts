import { Building2 } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroLogoMarquee from './hero-logo-marquee'
import source from './hero-logo-marquee.tsx?raw'

export const block = defineBlock({
  id: 'hero-logo-marquee',
  name: 'Hero — Logo marquee',
  category: 'Hero',
  tone: 'violet',
  icon: Building2,
  code: source,
  Component: HeroLogoMarquee,
})
