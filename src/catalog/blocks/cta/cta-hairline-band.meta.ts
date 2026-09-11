import { Minus } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaHairlineBand from './cta-hairline-band'
import source from './cta-hairline-band.tsx?raw'

export const block = defineBlock({
  id: 'cta-hairline-band',
  name: 'CTA — Hairline band',
  category: 'CTA',
  tone: 'mint',
  icon: Minus,
  code: source,
  Component: CtaHairlineBand,
})
