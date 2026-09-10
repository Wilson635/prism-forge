export default function CheckoutReview() {
  return (
    <section className="mx-auto grid max-w-3xl gap-8 lg:grid-cols-[1.3fr_1fr]">
      <div className="space-y-4 rounded-2xl border border-zinc-200 p-6">
        <h3 className="text-lg font-semibold text-zinc-950">Review your order</h3>
        {[["Aria Lamp", "$89"], ["Frame Shelf × 2", "$258"]].map(([name, price]) => (
          <div className="flex justify-between text-sm text-zinc-700">
            <span>{name}</span>
            <span className="font-medium text-zinc-900">{price}</span>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-zinc-950 p-6 text-white">
        <p className="text-sm text-zinc-400">Total due today</p>
        <p className="mt-1 text-3xl font-semibold">$312.30</p>
        <button className="mt-5 w-full rounded-xl bg-amber-300 py-3 text-sm font-semibold text-zinc-950">Confirm & pay</button>
      </div>
    </section>
  )
}
