import { Grid2X2 } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesGrid2X2 from './features-grid2X2'
import source from './features-grid2X2.tsx?raw'

export const block = defineBlock({
  id: "features-grid2X2",
  name: "Features — 2×2 grid",
  category: "Features",
  tone: "mint",
  icon: Grid2X2,
  code: source,
  Component: FeaturesGrid2X2,
})
