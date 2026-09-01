import { Quote } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "testimonial-spotlight",
  name: "Single quote spotlight",
  category: "Testimonials",
  tone: "violet",
  icon: Quote,
  code: `<section className="mx-auto max-w-3xl rounded-3xl bg-zinc-950 p-12 text-center text-white">
  <Quote className="mx-auto text-violet-300" size={28} />
  <p className="mt-6 text-2xl font-medium leading-snug">
    "Switching to this stack cut our shipping time in half. It's the calmest our workflow has ever felt."
  </p>
  <div className="mt-8 flex items-center justify-center gap-3">
    <img src="/avatar.jpg" className="h-11 w-11 rounded-full object-cover" alt="Camille Laurent" />
    <div className="text-left">
      <p className="text-sm font-semibold">Camille Laurent</p>
      <p className="text-xs text-zinc-400">Head of Product, Nova</p>
    </div>
  </div>
</section>`,
} satisfies Block
