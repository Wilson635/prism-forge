import { ChevronDown } from 'lucide-react'
import { defineBlock } from '../../define-block'
import NavbarMega from './navbar-mega'
import source from './navbar-mega.tsx?raw'

export const block = defineBlock({
  id: "navbar-mega",
  name: "Nav with dropdown menu",
  category: "Navbars",
  tone: "violet",
  icon: ChevronDown,
  code: source,
  Component: NavbarMega,
})
