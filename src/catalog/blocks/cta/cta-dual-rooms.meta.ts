import { DoorOpen } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaDualRooms from './cta-dual-rooms'
import source from './cta-dual-rooms.tsx?raw'

export const block = defineBlock({
  id: 'cta-dual-rooms',
  name: 'CTA — Dual rooms',
  category: 'CTA',
  tone: 'mint',
  icon: DoorOpen,
  code: source,
  Component: CtaDualRooms,
})
