import { Frame } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoMediaFrames from './bento-media-frames'
import source from './bento-media-frames.tsx?raw'

export const block = defineBlock({
  id: 'bento-media-frames',
  name: 'Bento — Media frames',
  category: 'Bento',
  tone: 'violet',
  icon: Frame,
  code: source,
  Component: BentoMediaFrames,
})
