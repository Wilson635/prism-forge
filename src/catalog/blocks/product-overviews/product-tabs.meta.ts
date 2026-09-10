import { Package } from 'lucide-react'
import { defineBlock } from '../../define-block'
import ProductTabs from './product-tabs'
import source from './product-tabs.tsx?raw'

export const block = defineBlock({
  id: "product-tabs",
  name: "Product overview with tabs",
  category: "Product Overviews",
  tone: "violet",
  icon: Package,
  code: source,
  Component: ProductTabs,
})
