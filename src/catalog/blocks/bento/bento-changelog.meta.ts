import { List } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoChangelog from './bento-changelog'
import source from './bento-changelog.tsx?raw'

export const block = defineBlock({
  id: 'bento-changelog',
  name: 'Bento — Changelog tape',
  category: 'Bento',
  tone: 'mint',
  icon: List,
  code: source,
  Component: BentoChangelog,
})
