import { Quote } from 'lucide-react'
import { defineBlock } from '../../define-block'
import TestimonialsMarqueeVoices from './testimonials-marquee-voices'
import source from './testimonials-marquee-voices.tsx?raw'

export const block = defineBlock({
  id: "testimonials-marquee-voices",
  name: "Testimonials — Marquee voices",
  category: "Testimonials",
  tone: "violet",
  icon: Quote,
  code: source,
  Component: TestimonialsMarqueeVoices,
})
