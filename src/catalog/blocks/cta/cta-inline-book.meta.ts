import { Calendar } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaInlineBook from './cta-inline-book'
import source from './cta-inline-book.tsx?raw'

export const block = defineBlock({
  id: 'cta-inline-book',
  name: 'CTA — Book a desk',
  category: 'CTA',
  tone: 'mint',
  icon: Calendar,
  code: source,
  Component: CtaInlineBook,
})
