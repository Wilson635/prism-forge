import { Grid2X2 } from 'lucide-react'
import { defineBlock } from '../../define-block'
import Features from './features'
import source from './features.tsx?raw'

export const block = defineBlock({
  id: "features",
  name: "Bento feature grid",
  category: "Features",
  tone: "mint",
  icon: Grid2X2,
  code: source,
  Component: Features,
})
