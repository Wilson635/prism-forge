import { Scale } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaCompareJump from './cta-compare-jump'
import source from './cta-compare-jump.tsx?raw'

export const block = defineBlock({
  id: 'cta-compare-jump',
  name: 'CTA — Compare jump',
  category: 'CTA',
  tone: 'mint',
  icon: Scale,
  code: source,
  Component: CtaCompareJump,
})
