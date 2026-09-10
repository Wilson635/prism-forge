import { UserPlus } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FormSignupWhite from './form-signup-white'
import source from './form-signup-white.tsx?raw'

export const block = defineBlock({
  id: "form-signup-white",
  name: "Signup — light",
  category: "Forms",
  tone: "mint",
  icon: UserPlus,
  code: source,
  Component: FormSignupWhite,
})
