import { KeyRound } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FormForgotPassword from './form-forgot-password'
import source from './form-forgot-password.tsx?raw'

export const block = defineBlock({
  id: "form-forgot-password",
  name: "Forgot password",
  category: "Forms",
  tone: "amber",
  icon: KeyRound,
  code: source,
  Component: FormForgotPassword,
})
