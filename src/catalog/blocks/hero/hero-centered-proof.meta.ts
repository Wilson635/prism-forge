import { Users } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroCenteredProof from './hero-centered-proof'
import source from './hero-centered-proof.tsx?raw'

export const block = defineBlock({
  id: 'hero-centered-proof',
  name: 'Hero — Centered social proof',
  category: 'Hero',
  tone: 'mint',
  icon: Users,
  code: source,
  Component: HeroCenteredProof,
})
