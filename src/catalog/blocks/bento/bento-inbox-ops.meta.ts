import { Inbox } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoInboxOps from './bento-inbox-ops'
import source from './bento-inbox-ops.tsx?raw'

export const block = defineBlock({
  id: 'bento-inbox-ops',
  name: 'Bento — Inbox ops',
  category: 'Bento',
  tone: 'mint',
  icon: Inbox,
  code: source,
  Component: BentoInboxOps,
})
