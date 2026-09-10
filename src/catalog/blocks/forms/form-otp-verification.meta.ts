import { ShieldCheck } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FormOtpVerification from './form-otp-verification'
import source from './form-otp-verification.tsx?raw'

export const block = defineBlock({
  id: "form-otp-verification",
  name: "OTP verification",
  category: "Forms",
  tone: "mint",
  icon: ShieldCheck,
  code: source,
  Component: FormOtpVerification,
})
