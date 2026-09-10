import { Smartphone } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroAppDevice from './hero-app-device'
import source from './hero-app-device.tsx?raw'

export const block = defineBlock({
  id: 'hero-app-device',
  name: 'Hero — App device',
  category: 'Hero',
  tone: 'blue',
  icon: Smartphone,
  code: source,
  Component: HeroAppDevice,
})
