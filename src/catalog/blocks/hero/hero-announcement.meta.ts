import { Megaphone } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroAnnouncement from './hero-announcement'
import source from './hero-announcement.tsx?raw'

export const block = defineBlock({
  id: 'hero-announcement',
  name: 'Hero — Announcement',
  category: 'Hero',
  tone: 'violet',
  icon: Megaphone,
  code: source,
  Component: HeroAnnouncement,
})
