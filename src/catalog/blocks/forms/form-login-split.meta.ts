import { Fingerprint } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FormLoginSplit from './form-login-split'
import source from './form-login-split.tsx?raw'

export const block = defineBlock({
  id: "form-login-split",
  name: "Login — split screen",
  category: "Forms",
  tone: "violet",
  icon: Fingerprint,
  code: source,
  Component: FormLoginSplit,
})
