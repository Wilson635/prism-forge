import { Blocks } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaLogoTrust from './cta-logo-trust'
import source from './cta-logo-trust.tsx?raw'

export const block = defineBlock({
  id: 'cta-logo-trust',
  name: 'CTA — Logo trust',
  category: 'CTA',
  tone: 'blue',
  icon: Blocks,
  code: source,
  Component: CtaLogoTrust,
})
