import { Mail } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FormContactWhite from './form-contact-white'
import source from './form-contact-white.tsx?raw'

export const block = defineBlock({
  id: "form-contact-white",
  name: "Contact — light",
  category: "Forms",
  tone: "blue",
  icon: Mail,
  code: source,
  Component: FormContactWhite,
})
