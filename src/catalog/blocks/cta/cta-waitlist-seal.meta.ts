import { Mail } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaWaitlistSeal from './cta-waitlist-seal'
import source from './cta-waitlist-seal.tsx?raw'

export const block = defineBlock({
  id: 'cta-waitlist-seal',
  name: 'CTA — Waitlist seal',
  category: 'CTA',
  tone: 'mint',
  icon: Mail,
  code: source,
  Component: CtaWaitlistSeal,
})
