import { GitCommitHorizontal } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesTimeline from './features-timeline'
import source from './features-timeline.tsx?raw'

export const block = defineBlock({
  id: 'features-timeline',
  name: 'Features — Timeline',
  category: 'Features',
  tone: 'blue',
  icon: GitCommitHorizontal,
  code: source,
  Component: FeaturesTimeline,
})
