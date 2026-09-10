import { ArrowUpRight } from 'lucide-react'
import { defineBlock } from '../../define-block'
import Cta from './cta'
import source from './cta.tsx?raw'

export const block = defineBlock({
  id: "cta",
  name: "Call to action",
  category: "CTA",
  tone: "mint",
  icon: ArrowUpRight,
  code: source,
  Component: Cta,
})
