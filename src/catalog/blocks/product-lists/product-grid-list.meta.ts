import { ShoppingBag } from 'lucide-react'
import { defineBlock } from '../../define-block'
import ProductGridList from './product-grid-list'
import source from './product-grid-list.tsx?raw'

export const block = defineBlock({
  id: "product-grid-list",
  name: "Product grid",
  category: "Product Lists",
  tone: "blue",
  icon: ShoppingBag,
  code: source,
  Component: ProductGridList,
})
