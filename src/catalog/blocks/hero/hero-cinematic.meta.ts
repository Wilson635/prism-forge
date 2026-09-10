import { Aperture } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroCinematic from './hero-cinematic'
import source from './hero-cinematic.tsx?raw'

export const block = defineBlock({
  id: 'hero-cinematic',
  name: 'Hero — Cinematic',
  category: 'Hero',
  tone: 'violet',
  icon: Aperture,
  code: source,
  Component: HeroCinematic,
})
