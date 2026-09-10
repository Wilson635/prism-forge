import { Lock } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FormLoginMinimal from './form-login-minimal'
import source from './form-login-minimal.tsx?raw'

export const block = defineBlock({
  id: "form-login-minimal",
  name: "Login — minimal",
  category: "Forms",
  tone: "mint",
  icon: Lock,
  code: source,
  Component: FormLoginMinimal,
})
