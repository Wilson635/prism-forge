import { PanelLeft } from 'lucide-react'
import { defineBlock } from '../../define-block'
import SidebarDashboard from './sidebar-dashboard'
import source from './sidebar-dashboard.tsx?raw'

export const block = defineBlock({
  id: "sidebar-dashboard",
  name: "Dashboard sidebar with user card",
  category: "Sidebars",
  tone: "amber",
  icon: PanelLeft,
  code: source,
  Component: SidebarDashboard,
})
