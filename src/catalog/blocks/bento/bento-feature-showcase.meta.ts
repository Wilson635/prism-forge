import { Command } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoFeatureShowcase from './bento-feature-showcase'
import source from './bento-feature-showcase.tsx?raw'

export const block = defineBlock({
  id: 'bento-feature-showcase',
  name: 'Bento — Feature showcase',
  category: 'Bento',
  tone: 'blue',
  icon: Command,
  code: source,
  Component: BentoFeatureShowcase,
})
