import { Quote } from 'lucide-react'
import { defineBlock } from '../../define-block'
import TestimonialGrid from './testimonial-grid'
import source from './testimonial-grid.tsx?raw'

export const block = defineBlock({
  id: "testimonial-grid",
  name: "Testimonial grid",
  category: "Testimonials",
  tone: "mint",
  icon: Quote,
  code: source,
  Component: TestimonialGrid,
})
