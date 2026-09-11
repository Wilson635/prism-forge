import { ScrollText } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaPaperInvite from './cta-paper-invite'
import source from './cta-paper-invite.tsx?raw'

export const block = defineBlock({
  id: 'cta-paper-invite',
  name: 'CTA — Paper invite',
  category: 'CTA',
  tone: 'amber',
  icon: ScrollText,
  code: source,
  Component: CtaPaperInvite,
})
