import { AppWindow } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaSplitChrome from './cta-split-chrome'
import source from './cta-split-chrome.tsx?raw'

export const block = defineBlock({
  id: 'cta-split-chrome',
  name: 'CTA — App chrome',
  category: 'CTA',
  tone: 'blue',
  icon: AppWindow,
  code: source,
  Component: CtaSplitChrome,
})
