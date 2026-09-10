import { Newspaper } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BlogGrid from './blog-grid'
import source from './blog-grid.tsx?raw'

export const block = defineBlock({
  id: "blog-grid",
  name: "Blog grid",
  category: "Blog",
  tone: "blue",
  icon: Newspaper,
  code: source,
  Component: BlogGrid,
})
