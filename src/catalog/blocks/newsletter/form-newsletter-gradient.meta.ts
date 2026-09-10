import { Send } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FormNewsletterGradient from './form-newsletter-gradient'
import source from './form-newsletter-gradient.tsx?raw'

export const block = defineBlock({
  id: "form-newsletter-gradient",
  name: "Newsletter — gradient hero",
  category: "Newsletter",
  tone: "mint",
  icon: Send,
  code: source,
  Component: FormNewsletterGradient,
})
