import { PanelLeft } from 'lucide-react'
import { defineBlock } from '../../define-block'
import SidebarIcons from './sidebar-icons'
import source from './sidebar-icons.tsx?raw'

export const block = defineBlock({
  id: "sidebar-icons",
  name: "Icon + label sidebar",
  category: "Sidebars",
  tone: "blue",
  icon: PanelLeft,
  code: source,
  Component: SidebarIcons,
})
