import { StickyNote } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaAtelierLetter from './cta-atelier-letter'
import source from './cta-atelier-letter.tsx?raw'

export const block = defineBlock({
  id: 'cta-atelier-letter',
  name: 'CTA — Atelier letter',
  category: 'CTA',
  tone: 'mint',
  icon: StickyNote,
  code: source,
  Component: CtaAtelierLetter,
})
