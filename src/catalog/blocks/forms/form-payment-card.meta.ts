import { CreditCard } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FormPaymentCard from './form-payment-card'
import source from './form-payment-card.tsx?raw'

export const block = defineBlock({
  id: "form-payment-card",
  name: "Payment — card details",
  category: "Forms",
  tone: "violet",
  icon: CreditCard,
  code: source,
  Component: FormPaymentCard,
})
