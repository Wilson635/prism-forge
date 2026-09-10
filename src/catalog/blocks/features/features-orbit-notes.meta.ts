import { NotebookPen } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeaturesOrbitNotes from './features-orbit-notes'
import source from './features-orbit-notes.tsx?raw'

export const block = defineBlock({
  id: 'features-orbit-notes',
  name: 'Features — Charter notes',
  category: 'Features',
  tone: 'mint',
  icon: NotebookPen,
  code: source,
  Component: FeaturesOrbitNotes,
})
