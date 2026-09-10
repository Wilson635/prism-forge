import { ShoppingCart } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CartPromo from './cart-promo'
import source from './cart-promo.tsx?raw'

export const block = defineBlock({
  id: "cart-promo",
  name: "Cart with promo code",
  category: "Shopping Carts",
  tone: "violet",
  icon: ShoppingCart,
  code: source,
  Component: CartPromo,
})
