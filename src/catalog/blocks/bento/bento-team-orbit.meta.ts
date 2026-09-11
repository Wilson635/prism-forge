import { Users } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoTeamOrbit from './bento-team-orbit'
import source from './bento-team-orbit.tsx?raw'

export const block = defineBlock({
  id: 'bento-team-orbit',
  name: 'Bento — Team orbit',
  category: 'Bento',
  tone: 'mint',
  icon: Users,
  code: source,
  Component: BentoTeamOrbit,
})
