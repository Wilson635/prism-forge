import { Sparkles } from 'lucide-react'
import { defineBlock } from '../../define-block'
import Hero from './hero'
import source from './hero.tsx?raw'

export const block = defineBlock({
  id: "hero",
  name: "Product hero / Split",
  category: "Hero",
  tone: "violet",
  icon: Sparkles,
  code: source,
  Component: Hero,
})
