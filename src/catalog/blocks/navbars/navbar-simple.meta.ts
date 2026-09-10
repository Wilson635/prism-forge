import { PanelTop } from 'lucide-react'
import { defineBlock } from '../../define-block'
import NavbarSimple from './navbar-simple'
import source from './navbar-simple.tsx?raw'

export const block = defineBlock({
  id: "navbar-simple",
  name: "Simple nav with CTA",
  category: "Navbars",
  tone: "mint",
  icon: PanelTop,
  code: source,
  Component: NavbarSimple,
})
