import { PanelBottom } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaRibbon from './cta-ribbon'
import source from './cta-ribbon.tsx?raw'

export const block = defineBlock({
  id: 'cta-ribbon',
  name: 'CTA — Ribbon',
  category: 'CTA',
  tone: 'mint',
  icon: PanelBottom,
  code: source,
  Component: CtaRibbon,
})
