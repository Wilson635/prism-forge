import type { ComponentType } from 'react'
import type { LucideIcon } from 'lucide-react'

export type PreviewTone = 'mint' | 'violet' | 'blue' | 'amber'

export const BLOCK_CATEGORIES = [
  'Hero',
  'Features',
  'Bento',
  'Pricing',
  'CTA',
  'Header',
  'Newsletter',
  'Testimonials',
  'Blog',
  'Navbars',
  'Sidebars',
  'Command Palettes',
  'Tables',
  'Forms',
  'Checkout Forms',
  'Stats',
  'Product Overviews',
  'Product Lists',
  'Shopping Carts',
] as const

export type BlockCategory = (typeof BLOCK_CATEGORIES)[number]

export type Block = {
  id: string
  name: string
  category: BlockCategory
  tone: PreviewTone
  icon: LucideIcon
  code: string
  /** Real React tree. When set, preview uses this until the user edits `code`. */
  Component?: ComponentType
}

export type Template = {
  title: string
  desc: string
  tag: string
  price: string
  image: string
}

export type KitTone = 'green' | 'purple' | 'orange'

export type Kit = {
  name: string
  sub: string
  count: string
  tone: KitTone
  items: string[]
}
