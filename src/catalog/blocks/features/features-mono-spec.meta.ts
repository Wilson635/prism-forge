import { Table2 } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesMonoSpec from './features-mono-spec'
import source from './features-mono-spec.tsx?raw'

export const block = defineBlock({
  id: 'features-mono-spec',
  name: 'Features — Mono spec',
  category: 'Features',
  tone: 'mint',
  icon: Table2,
  code: source,
  Component: FeaturesMonoSpec,
})
