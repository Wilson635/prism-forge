import { Quote } from 'lucide-react'

export default function HeroSplitQuote() {
  return (
    <section className="grid min-h-[480px] lg:grid-cols-2">
      <div className="flex flex-col justify-center bg-zinc-950 px-8 py-16 text-white sm:px-12">
        <Quote size={28} className="text-amber-300" />
        <blockquote className="mt-6 max-w-md text-3xl font-medium leading-snug tracking-tight">
          “We replaced three landing-page tools with Prism and shipped the rebrand in a week.”
        </blockquote>
        <p className="mt-6 text-sm text-zinc-400">Amira Chen · Head of Brand, Lumen</p>
      </div>
      <div className="flex flex-col justify-center bg-amber-300 px-8 py-16 text-zinc-950 sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em]">Customer story</p>
        <h1 className="mt-4 max-w-sm text-4xl font-semibold tracking-tight">
          Built with the people who use it daily.
        </h1>
        <a href="#" className="mt-8 inline-flex w-fit rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white">
          Read the story
        </a>
      </div>
    </section>
  )
}
