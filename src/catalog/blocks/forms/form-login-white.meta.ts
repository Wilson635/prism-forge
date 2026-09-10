import { Lock } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FormLoginWhite from './form-login-white'
import source from './form-login-white.tsx?raw'

export const block = defineBlock({
  id: "form-login-white",
  name: "Login — light",
  category: "Forms",
  tone: "blue",
  icon: Lock,
  code: source,
  Component: FormLoginWhite,
})
