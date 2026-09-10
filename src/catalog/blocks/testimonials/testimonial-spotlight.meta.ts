import { Quote } from 'lucide-react'
import { defineBlock } from '../../define-block'
import TestimonialSpotlight from './testimonial-spotlight'
import source from './testimonial-spotlight.tsx?raw'

export const block = defineBlock({
  id: "testimonial-spotlight",
  name: "Single quote spotlight",
  category: "Testimonials",
  tone: "violet",
  icon: Quote,
  code: source,
  Component: TestimonialSpotlight,
})
