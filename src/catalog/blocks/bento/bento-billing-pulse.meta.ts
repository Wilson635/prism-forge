import { CreditCard } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoBillingPulse from './bento-billing-pulse'
import source from './bento-billing-pulse.tsx?raw'

export const block = defineBlock({
  id: 'bento-billing-pulse',
  name: 'Bento — Billing pulse',
  category: 'Bento',
  tone: 'mint',
  icon: CreditCard,
  code: source,
  Component: BentoBillingPulse,
})
