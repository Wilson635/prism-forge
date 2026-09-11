import { Sparkles } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaMeshClose from './cta-mesh-close'
import source from './cta-mesh-close.tsx?raw'

export const block = defineBlock({
  id: 'cta-mesh-close',
  name: 'CTA — Mesh close',
  category: 'CTA',
  tone: 'violet',
  icon: Sparkles,
  code: source,
  Component: CtaMeshClose,
})
