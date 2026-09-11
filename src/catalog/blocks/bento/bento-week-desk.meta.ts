import { Calendar } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoWeekDesk from './bento-week-desk'
import source from './bento-week-desk.tsx?raw'

export const block = defineBlock({
  id: 'bento-week-desk',
  name: 'Bento — Week desk',
  category: 'Bento',
  tone: 'mint',
  icon: Calendar,
  code: source,
  Component: BentoWeekDesk,
})
