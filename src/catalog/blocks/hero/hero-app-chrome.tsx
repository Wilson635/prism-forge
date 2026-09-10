export default function HeroAppChrome() {
  return (
    <section className="bg-zinc-200/80 px-4 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-xl">
        <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-4 rounded-md bg-white px-3 py-1 text-[11px] text-zinc-500">prism.dev/home</span>
        </div>
        <div className="grid lg:grid-cols-[200px_1fr]">
          <aside className="hidden space-y-2 border-r border-zinc-100 p-4 text-sm text-zinc-600 lg:block">
            {['Overview', 'Blocks', 'Themes', 'Ship'].map((item, i) => (
              <p key={item} className={`rounded-lg px-3 py-2 ${i === 0 ? 'bg-zinc-950 text-white' : ''}`}>
                {item}
              </p>
            ))}
          </aside>
          <div className="px-8 py-12">
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">In-product hero</p>
            <h1 className="mt-3 max-w-md text-4xl font-semibold tracking-tight text-zinc-950">
              The homepage lives inside the product.
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500">
              Use this when onboarding should feel like the app, not a brochure.
            </p>
            <a href="#" className="mt-6 inline-flex rounded-lg bg-zinc-950 px-4 py-2.5 text-sm text-white">
              Create a workspace
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
