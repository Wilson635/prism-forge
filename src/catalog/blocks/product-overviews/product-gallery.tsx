export default function ProductGallery() {
  return (
    <section className="grid gap-10 lg:grid-cols-2">
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-4 aspect-square rounded-2xl bg-emerald-100" />
        <div className="aspect-square rounded-xl bg-emerald-50" />
        <div className="aspect-square rounded-xl bg-emerald-50" />
        <div className="aspect-square rounded-xl bg-emerald-50" />
        <div className="aspect-square rounded-xl bg-emerald-50" />
      </div>
      <div>
        <span className="text-xs font-medium text-emerald-600">In stock</span>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-950">Aria Desk Lamp</h1>
        <p className="mt-3 text-2xl font-semibold text-zinc-950">$89</p>
        <p className="mt-4 text-sm text-zinc-600">Warm, adjustable lighting with a solid oak base. Designed to last, built to fit any desk.</p>
        <button className="mt-6 w-full rounded-xl bg-zinc-950 py-3 text-sm font-semibold text-white">Add to cart</button>
      </div>
    </section>
  )
}
