import { UserPlus } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FormSignupModern from './form-signup-modern'
import source from './form-signup-modern.tsx?raw'

export const block = defineBlock({
  id: "form-signup-modern",
  name: "Signup — gradient card",
  category: "Forms",
  tone: "amber",
  icon: UserPlus,
  code: source,
  Component: FormSignupModern,
})
