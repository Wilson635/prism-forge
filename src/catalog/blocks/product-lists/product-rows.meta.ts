import { ShoppingBag } from 'lucide-react'
import { defineBlock } from '../../define-block'
import ProductRows from './product-rows'
import source from './product-rows.tsx?raw'

export const block = defineBlock({
  id: "product-rows",
  name: "Product list rows",
  category: "Product Lists",
  tone: "amber",
  icon: ShoppingBag,
  code: source,
  Component: ProductRows,
})
