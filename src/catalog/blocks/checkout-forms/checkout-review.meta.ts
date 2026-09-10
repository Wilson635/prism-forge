import { CreditCard } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CheckoutReview from './checkout-review'
import source from './checkout-review.tsx?raw'

export const block = defineBlock({
  id: "checkout-review",
  name: "Checkout — order review",
  category: "Checkout Forms",
  tone: "amber",
  icon: CreditCard,
  code: source,
  Component: CheckoutReview,
})
