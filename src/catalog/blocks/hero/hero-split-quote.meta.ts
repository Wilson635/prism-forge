import { Quote } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroSplitQuote from './hero-split-quote'
import source from './hero-split-quote.tsx?raw'

export const block = defineBlock({
  id: 'hero-split-quote',
  name: 'Hero — Split quote',
  category: 'Hero',
  tone: 'amber',
  icon: Quote,
  code: source,
  Component: HeroSplitQuote,
})
