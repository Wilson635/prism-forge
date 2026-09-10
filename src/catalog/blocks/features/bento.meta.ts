import { Grid2X2 } from 'lucide-react'
import { defineBlock } from '../../define-block'
import Bento from './bento'
import source from './bento.tsx?raw'

export const block = defineBlock({
  id: "bento",
  name: "Features — Focus pair",
  category: "Features",
  tone: "mint",
  icon: Grid2X2,
  code: source,
  Component: Bento,
})
