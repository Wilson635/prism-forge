export default function HeroCompare() {
  return (
    <section className="bg-zinc-100 px-6 py-20 sm:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Before the system. After Prism.
        </h1>
        <p className="mt-4 text-sm text-zinc-500">Same product. Two ways of showing up.</p>
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl overflow-hidden rounded-3xl border border-zinc-200 bg-white md:grid-cols-2">
        <div className="p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Before</p>
          <h2 className="mt-3 text-2xl font-medium text-zinc-500 line-through decoration-zinc-300">
            Welcome to our software
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Lorem ipsum landing page with five CTAs, a carousel, and a form nobody finishes.
          </p>
          <button className="mt-6 rounded bg-blue-600 px-4 py-2 text-xs text-white">CLICK HERE</button>
        </div>
        <div className="bg-zinc-950 p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">After</p>
          <h2 className="mt-3 text-2xl font-semibold">Work, in focus.</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">One promise. One action. The rest can wait.</p>
          <a href="#" className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-950">
            Start building
          </a>
        </div>
      </div>
    </section>
  )
}
