import { Quote } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "testimonial-grid",
  name: "Testimonial grid",
  category: "Testimonials",
  tone: "mint",
  icon: Quote,
  code: `const reviews = [
  { name: "Sofia Mendes", role: "Founder, Arlo", quote: "The best UI kit we've shipped with. Every block just works." },
  { name: "Théo Ricard", role: "Design Lead, Orbit", quote: "Consistent, accessible, and genuinely fast to customize." },
  { name: "Priya Nair", role: "CTO, Frame", quote: "Cut our design-to-dev handoff time down to almost nothing." },
];
 
<section className="grid gap-5 md:grid-cols-3">
  {reviews.map((review) => (
    <article className="rounded-2xl border border-zinc-200 bg-white p-7">
      <Quote className="text-emerald-500" size={20} />
      <p className="mt-4 text-sm text-zinc-700">{review.quote}</p>
      <p className="mt-6 text-sm font-semibold text-zinc-950">{review.name}</p>
      <p className="text-xs text-zinc-500">{review.role}</p>
    </article>
  ))}
</section>`,
} satisfies Block
