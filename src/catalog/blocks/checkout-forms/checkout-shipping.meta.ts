import { CreditCard } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CheckoutShipping from './checkout-shipping'
import source from './checkout-shipping.tsx?raw'

export const block = defineBlock({
  id: "checkout-shipping",
  name: "Checkout — shipping & payment",
  category: "Checkout Forms",
  tone: "blue",
  icon: CreditCard,
  code: source,
  Component: CheckoutShipping,
})
