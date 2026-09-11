import { Search } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoSearchIndex from './bento-search-index'
import source from './bento-search-index.tsx?raw'

export const block = defineBlock({
  id: 'bento-search-index',
  name: 'Bento — Search index',
  category: 'Bento',
  tone: 'blue',
  icon: Search,
  code: source,
  Component: BentoSearchIndex,
})
