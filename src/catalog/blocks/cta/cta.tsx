import { ArrowUpRight } from 'lucide-react'

export default function Cta() {
  return (
    <section className="rounded-3xl bg-emerald-300 px-8 py-16 text-center">
      <p className="text-sm font-medium text-emerald-950">Ready when you are</p>
      <h2 className="mx-auto mt-4 max-w-xl text-5xl font-semibold tracking-tight text-zinc-950">
        Make something people remember.
      </h2>
      <a href="/signup" className="mt-8 inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm text-white">
        Get started <ArrowUpRight className="ml-2" />
      </a>
    </section>
  )
}
