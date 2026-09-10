import { Timer } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroCountdown from './hero-countdown'
import source from './hero-countdown.tsx?raw'

export const block = defineBlock({
  id: 'hero-countdown',
  name: 'Hero — Countdown',
  category: 'Hero',
  tone: 'amber',
  icon: Timer,
  code: source,
  Component: HeroCountdown,
})
