import { ShoppingCart } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CartDrawer from './cart-drawer'
import source from './cart-drawer.tsx?raw'

export const block = defineBlock({
  id: "cart-drawer",
  name: "Cart summary drawer",
  category: "Shopping Carts",
  tone: "mint",
  icon: ShoppingCart,
  code: source,
  Component: CartDrawer,
})
