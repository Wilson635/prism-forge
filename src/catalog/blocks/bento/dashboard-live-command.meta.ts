import { Gauge } from 'lucide-react'
import { defineBlock } from '../../define-block'
import DashboardLiveCommand from './dashboard-live-command'
import source from './dashboard-live-command.tsx?raw'

export const block = defineBlock({
  id: "dashboard-live-command",
  name: "Dashboard — Live command center",
  category: "Bento",
  tone: "blue",
  icon: Gauge,
  code: source,
  Component: DashboardLiveCommand,
})
