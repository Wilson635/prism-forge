import { Newspaper } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BlogFeatured from './blog-featured'
import source from './blog-featured.tsx?raw'

export const block = defineBlock({
  id: "blog-featured",
  name: "Featured article + list",
  category: "Blog",
  tone: "amber",
  icon: Newspaper,
  code: source,
  Component: BlogFeatured,
})
