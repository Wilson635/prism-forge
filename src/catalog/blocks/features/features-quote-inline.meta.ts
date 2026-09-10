import { Quote } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesQuoteInline from './features-quote-inline'
import source from './features-quote-inline.tsx?raw'

export const block = defineBlock({
  id: 'features-quote-inline',
  name: 'Features — Inline quote',
  category: 'Features',
  tone: 'amber',
  icon: Quote,
  code: source,
  Component: FeaturesQuoteInline,
})
