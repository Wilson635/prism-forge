import { Mail } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FormContactModern from './form-contact-modern'
import source from './form-contact-modern.tsx?raw'

export const block = defineBlock({
  id: "form-contact-modern",
  name: "Contact — with info panel",
  category: "Forms",
  tone: "blue",
  icon: Mail,
  code: source,
  Component: FormContactModern,
})
