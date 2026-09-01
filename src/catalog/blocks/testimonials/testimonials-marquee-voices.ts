import { Quote } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "testimonials-marquee-voices",
  name: "Testimonials — Marquee voices",
  category: "Testimonials",
  tone: "violet",
  icon: Quote,
  code: `const voices = [{ quote: "It made our launch feel inevitable.", name: "Maya Chen", role: "Design lead · Arc" }, { quote: "The rare library that gets out of the way.", name: "Jon Bell", role: "Founder · Northstar" }, { quote: "Our interface finally sounds like us.", name: "Inez Okafor", role: "Product · Looma" }]

export default function MarqueeVoices() {
  return <section className="overflow-hidden bg-[#11111a] py-20 text-white"><div className="mx-auto max-w-5xl px-6"><p className="text-center text-xs font-semibold uppercase tracking-[.25em] text-fuchsia-300">Loved by curious teams</p><h2 className="mx-auto mt-4 max-w-xl text-center text-4xl font-semibold tracking-tight">Good tools leave room for good ideas.</h2></div><div className="mt-12 flex w-max animate-[marquee_24s_linear_infinite] gap-4 hover:[animation-play-state:paused]">{[...voices, ...voices].map((voice, i) => <figure key={i} className="w-72 rounded-2xl border border-white/10 bg-white/[.06] p-6 backdrop-blur"><Quote size={18} className="text-fuchsia-300" /><blockquote className="mt-8 text-lg leading-7">{voice.quote}</blockquote><figcaption className="mt-8 text-xs text-white/45"><strong className="block text-white/80">{voice.name}</strong>{voice.role}</figcaption></figure>)}</div><style jsx>{\
"@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }"\
}</style></section>
}`,
} satisfies Block
