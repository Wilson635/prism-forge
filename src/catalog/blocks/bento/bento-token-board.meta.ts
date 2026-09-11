import { SwatchBook } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoTokenBoard from './bento-token-board'
import source from './bento-token-board.tsx?raw'

export const block = defineBlock({
  id: 'bento-token-board',
  name: 'Bento — Token board',
  category: 'Bento',
  tone: 'violet',
  icon: SwatchBook,
  code: source,
  Component: BentoTokenBoard,
})
