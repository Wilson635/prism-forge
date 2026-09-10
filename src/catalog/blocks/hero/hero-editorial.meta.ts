import { BookOpen } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroEditorial from './hero-editorial'
import source from './hero-editorial.tsx?raw'

export const block = defineBlock({
  id: 'hero-editorial',
  name: 'Hero — Editorial',
  category: 'Hero',
  tone: 'amber',
  icon: BookOpen,
  code: source,
  Component: HeroEditorial,
})
