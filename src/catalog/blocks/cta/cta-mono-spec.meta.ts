import { Table2 } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaMonoSpec from './cta-mono-spec'
import source from './cta-mono-spec.tsx?raw'

export const block = defineBlock({
  id: 'cta-mono-spec',
  name: 'CTA — Spec sheet',
  category: 'CTA',
  tone: 'mint',
  icon: Table2,
  code: source,
  Component: CtaMonoSpec,
})
