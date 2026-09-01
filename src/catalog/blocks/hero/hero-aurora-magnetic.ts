import { WandSparkles } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "hero-aurora-magnetic",
  name: "Hero — Aurora magnetic",
  category: "Hero",
  tone: "violet",
  icon: WandSparkles,
  code: `

            import { ArrowRight, Sparkles } from "lucide-react"
            
            export default function AuroraHero() {
              return (
                <section className="group relative isolate overflow-hidden rounded-[2rem] bg-[#0b0b12] px-6 py-24 text-white sm:px-12 lg:py-32">
                  <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600/30 blur-[100px] transition duration-1000 group-hover:scale-125" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.12),transparent_45%)]" />
                  <div className="relative mx-auto max-w-3xl text-center items-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-green-200 backdrop-blur"><Sparkles size={13} /> The new creative toolkit</span>
                    <h1 className="mt-7 text-balance text-5xl font-semibold tracking-[-.06em] sm:text-7xl">Ideas deserve a <span className="bg-gradient-to-r from-green-200 via-green-300 to-cyan-200 bg-clip-text text-transparent">beautiful start.</span></h1>
                    <p className="mt-12 pt-5 text-lg text-white/80">Prism is a modern design system for building beautiful, responsive websites and applications. With a focus on simplicity and flexibility, Prism makes it easy to create stunning user interfaces that look great on any device.</p>
                    <div className="mt-12 flex items-center justify-center gap-4">
                      <a href="#" className="group inline-flex items-center transition hover:gap-3 gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur hover:bg-white/10">
                        <span>Explore the collection</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </section>
              )
            }`,
} satisfies Block
