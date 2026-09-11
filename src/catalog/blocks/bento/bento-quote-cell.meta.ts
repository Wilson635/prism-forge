import { Quote } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoQuoteCell from './bento-quote-cell'
import source from './bento-quote-cell.tsx?raw'

export const block = defineBlock({
  id: 'bento-quote-cell',
  name: 'Bento — Quote cell',
  category: 'Bento',
  tone: 'mint',
  icon: Quote,
  code: source,
  Component: BentoQuoteCell,
})
