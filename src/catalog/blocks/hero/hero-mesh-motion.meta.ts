import { Blend } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroMeshMotion from './hero-mesh-motion'
import source from './hero-mesh-motion.tsx?raw'

export const block = defineBlock({
  id: 'hero-mesh-motion',
  name: 'Hero — Mesh motion',
  category: 'Hero',
  tone: 'violet',
  icon: Blend,
  code: source,
  Component: HeroMeshMotion,
})
