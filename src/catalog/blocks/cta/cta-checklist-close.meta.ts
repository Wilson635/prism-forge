import { ListChecks } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaChecklistClose from './cta-checklist-close'
import source from './cta-checklist-close.tsx?raw'

export const block = defineBlock({
  id: 'cta-checklist-close',
  name: 'CTA — Checklist close',
  category: 'CTA',
  tone: 'mint',
  icon: ListChecks,
  code: source,
  Component: CtaChecklistClose,
})
