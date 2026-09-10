import { AppWindow } from 'lucide-react'
import { defineBlock } from '../../define-block'
import HeroAppChrome from './hero-app-chrome'
import source from './hero-app-chrome.tsx?raw'

export const block = defineBlock({
  id: 'hero-app-chrome',
  name: 'Hero — App chrome',
  category: 'Hero',
  tone: 'mint',
  icon: AppWindow,
  code: source,
  Component: HeroAppChrome,
})
