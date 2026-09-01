import { ShoppingCart } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "cart-drawer",
  name: "Cart summary drawer",
  category: "Shopping Carts",
  tone: "mint",
  icon: ShoppingCart,
  code: `const items = [
  { name: "Aria Lamp", qty: 1, price: "$89" },
  { name: "Frame Shelf", qty: 2, price: "$258" },
];
 
<aside className="w-80 rounded-2xl border border-zinc-200 bg-white p-5">
  <h3 className="text-lg font-semibold text-zinc-950">Your cart</h3>
  <div className="mt-4 space-y-3">
    {items.map((item) => (
      <div className="flex items-center justify-between text-sm">
        <span className="text-zinc-700">{item.name} × {item.qty}</span>
        <span className="font-medium text-zinc-900">{item.price}</span>
      </div>
    ))}
  </div>
  <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4 text-sm font-semibold text-zinc-950">
    <span>Subtotal</span>
    <span>$347</span>
  </div>
  <button className="mt-4 w-full rounded-xl bg-zinc-950 py-3 text-sm font-semibold text-white">Checkout</button>
</aside>`,
} satisfies Block
