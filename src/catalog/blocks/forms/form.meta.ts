import { Terminal } from 'lucide-react'
import { defineBlock } from '../../define-block'
import Form from './form'
import source from './form.tsx?raw'

export const block = defineBlock({
  id: "form",
  name: "Waitlist form",
  category: "Forms",
  tone: "violet",
  icon: Terminal,
  code: source,
  Component: Form,
})
