import { Timer } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaCountdownSoft from './cta-countdown-soft'
import source from './cta-countdown-soft.tsx?raw'

export const block = defineBlock({
  id: 'cta-countdown-soft',
  name: 'CTA — Soft close',
  category: 'CTA',
  tone: 'amber',
  icon: Timer,
  code: source,
  Component: CtaCountdownSoft,
})
