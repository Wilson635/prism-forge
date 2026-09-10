export default function ProductRows() {
  const products = [
    { name: "Aria Lamp", desc: "Warm adjustable lighting", price: "$89" },
    { name: "Orbit Chair", desc: "Ergonomic, all-day comfort", price: "$249" },
  ];

  return (
    <div className="divide-y divide-zinc-100 rounded-2xl border border-zinc-200">
      {products.map((product) => (
        <div className="flex items-center gap-4 p-4">
          <div className="h-16 w-16 rounded-lg bg-amber-100" />
          <div className="flex-1">
            <p className="text-sm font-medium text-zinc-900">{product.name}</p>
            <p className="text-xs text-zinc-500">{product.desc}</p>
          </div>
          <p className="text-sm font-semibold text-zinc-900">{product.price}</p>
          <button className="rounded-lg bg-zinc-950 px-3 py-2 text-xs font-medium text-white">Add</button>
        </div>
      ))}
    </div>
  )
}
