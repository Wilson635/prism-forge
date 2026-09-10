import { PanelTop } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoDeployDashboard from './bento-deploy-dashboard'
import source from './bento-deploy-dashboard.tsx?raw'

export const block = defineBlock({
  id: 'bento-deploy-dashboard',
  name: 'Bento — Deploy dashboard',
  category: 'Bento',
  tone: 'mint',
  icon: PanelTop,
  code: source,
  Component: BentoDeployDashboard,
})
