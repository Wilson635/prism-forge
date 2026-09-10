export default function CartPromo() {
  return (
    <aside className="w-80 rounded-2xl border border-zinc-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-zinc-950">Order summary</h3>
      <div className="mt-4 flex gap-2">
        <input placeholder="Promo code" className="flex-1 rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none" />
        <button className="rounded-lg bg-violet-100 px-3 py-2 text-sm font-medium text-violet-700">Apply</button>
      </div>
      <div className="mt-4 space-y-2 text-sm text-zinc-600">
        <div className="flex justify-between"><span>Subtotal</span><span>$347.00</span></div>
        <div className="flex justify-between"><span>Discount</span><span className="text-emerald-600">-$34.70</span></div>
        <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
      </div>
      <div className="mt-3 flex justify-between border-t border-zinc-100 pt-3 text-sm font-semibold text-zinc-950">
        <span>Total</span>
        <span>$312.30</span>
      </div>
    </aside>
  )
}
