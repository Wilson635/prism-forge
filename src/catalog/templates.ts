import previewOne from '@/assets/template-fintech.jpg'
import previewTwo from '@/assets/template-portfolio.jpg'
import previewThree from '@/assets/template-saas.jpg'
import type { Template } from './types'

export const templates = [
  {
    title: 'Arcadia',
    desc: 'A calm space for complex products.',
    tag: 'SaaS / Marketing',
    price: '$79',
    image: previewOne,
  },
  {
    title: 'Lumen',
    desc: 'Make your launch impossible to miss.',
    tag: 'Startup / Launch',
    price: '$99',
    image: previewTwo,
  },
  {
    title: 'Frame',
    desc: 'A sharper point of view for studios.',
    tag: 'Agency / Portfolio',
    price: '$129',
    image: previewThree,
  },
] satisfies Template[]
