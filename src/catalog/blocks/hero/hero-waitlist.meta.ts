import { Mail } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroWaitlist from './hero-waitlist'
import source from './hero-waitlist.tsx?raw'

export const block = defineBlock({
  id: 'hero-waitlist',
  name: 'Hero — Waitlist',
  category: 'Hero',
  tone: 'amber',
  icon: Mail,
  code: source,
  Component: HeroWaitlist,
})
