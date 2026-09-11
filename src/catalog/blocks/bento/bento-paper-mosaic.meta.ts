import { Newspaper } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoPaperMosaic from './bento-paper-mosaic'
import source from './bento-paper-mosaic.tsx?raw'

export const block = defineBlock({
  id: 'bento-paper-mosaic',
  name: 'Bento — Paper mosaic',
  category: 'Bento',
  tone: 'amber',
  icon: Newspaper,
  code: source,
  Component: BentoPaperMosaic,
})
