import { ShoppingBag } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "product-grid-list",
  name: "Product grid",
  category: "Product Lists",
  tone: "blue",
  icon: ShoppingBag,
  code: `const products = [
  { name: "Aria Lamp", price: "$89" },
  { name: "Orbit Chair", price: "$249" },
  { name: "Nova Desk", price: "$399" },
  { name: "Frame Shelf", price: "$129" },
];
 
<div className="grid grid-cols-2 gap-5 md:grid-cols-4">
  {products.map((product) => (
    <div className="group cursor-pointer">
      <div className="aspect-square rounded-xl bg-blue-100" />
      <p className="mt-3 text-sm font-medium text-zinc-900">{product.name}</p>
      <p className="text-sm text-zinc-500">{product.price}</p>
    </div>
  ))}
</div>`,
} satisfies Block
