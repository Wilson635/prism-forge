import { Layers } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaStackInvite from './cta-stack-invite'
import source from './cta-stack-invite.tsx?raw'

export const block = defineBlock({
  id: 'cta-stack-invite',
  name: 'CTA — Stack invite',
  category: 'CTA',
  tone: 'violet',
  icon: Layers,
  code: source,
  Component: CtaStackInvite,
})
