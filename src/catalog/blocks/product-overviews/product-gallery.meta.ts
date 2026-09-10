import { Package } from 'lucide-react'
import { defineBlock } from '../../define-block'
import ProductGallery from './product-gallery'
import source from './product-gallery.tsx?raw'

export const block = defineBlock({
  id: "product-gallery",
  name: "Product gallery + details",
  category: "Product Overviews",
  tone: "mint",
  icon: Package,
  code: source,
  Component: ProductGallery,
})
