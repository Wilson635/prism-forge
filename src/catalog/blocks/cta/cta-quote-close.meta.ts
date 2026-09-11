import { Quote } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaQuoteClose from './cta-quote-close'
import source from './cta-quote-close.tsx?raw'

export const block = defineBlock({
  id: 'cta-quote-close',
  name: 'CTA — Quote close',
  category: 'CTA',
  tone: 'mint',
  icon: Quote,
  code: source,
  Component: CtaQuoteClose,
})
