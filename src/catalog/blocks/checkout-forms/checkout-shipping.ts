import { CreditCard } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "checkout-shipping",
  name: "Checkout — shipping & payment",
  category: "Checkout Forms",
  tone: "blue",
  icon: CreditCard,
  code: `<form className="mx-auto max-w-lg space-y-5 rounded-2xl border border-zinc-200 p-6">
  <div>
    <label className="text-sm font-medium text-zinc-700">Shipping address</label>
    <input placeholder="Full name" className="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-sm outline-none" />
    <input placeholder="Street address" className="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-sm outline-none" />
  </div>
  <div>
    <label className="text-sm font-medium text-zinc-700">Payment</label>
    <div className="mt-2 flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2.5">
      <CreditCard size={16} className="text-zinc-400" />
      <input placeholder="Card number" className="flex-1 text-sm outline-none" />
    </div>
  </div>
  <button className="w-full rounded-xl bg-zinc-950 py-3 text-sm font-semibold text-white">Pay $312.30</button>
</form>`,
} satisfies Block
