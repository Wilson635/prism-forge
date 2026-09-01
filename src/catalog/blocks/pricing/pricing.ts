import { Zap } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "pricing",
  name: "Pricing comparison",
  category: "Pricing",
  tone: "blue",
  icon: Zap,
  code: `const plans = [\n  { name: "Basic", price: "$19", features: ["3 projects", "Basic analytics", "Email support"] },\n  { name: "Pro", price: "$49", features: ["Unlimited projects", "Advanced analytics", "Priority support"] },\n  { name: "Enterprise", price: "$99", features: ["Unlimited everything", "Custom integrations", "Dedicated success"] },\n];\n\n<section className="grid gap-5 md:grid-cols-3">\n  {plans.map((plan) => (\n    <article className="rounded-2xl border bg-white p-7 shadow-sm">\n      <h3 className="text-lg font-semibold text-slate-950">{plan.name}</h3>\n      <p className="mt-5 text-4xl font-bold text-slate-950">{plan.price}<span className="text-sm font-normal text-slate-500">/mo</span></p>\n      <ul className="mt-7 space-y-3 text-sm text-slate-600">\n        {plan.features.map((feature) => <li><Check className="mr-2 inline text-emerald-600" />{feature}</li>)}\n      </ul>\n      <button className="mt-8 w-full rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-600">Choose {plan.name}</button>\n    </article>\n  ))}\n</section>`,
} satisfies Block
