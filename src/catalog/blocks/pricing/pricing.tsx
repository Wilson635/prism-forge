import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    { name: "Basic", price: "$19", features: ["3 projects", "Basic analytics", "Email support"] },
    { name: "Pro", price: "$49", features: ["Unlimited projects", "Advanced analytics", "Priority support"] },
    { name: "Enterprise", price: "$99", features: ["Unlimited everything", "Custom integrations", "Dedicated success"] },
  ];

  return (
    <section className="grid gap-5 md:grid-cols-3">
      {plans.map((plan) => (
        <article className="rounded-2xl border bg-white p-7 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">{plan.name}</h3>
          <p className="mt-5 text-4xl font-bold text-slate-950">{plan.price}<span className="text-sm font-normal text-slate-500">/mo</span></p>
          <ul className="mt-7 space-y-3 text-sm text-slate-600">
            {plan.features.map((feature) => <li><Check className="mr-2 inline text-emerald-600" />{feature}</li>)}
          </ul>
          <button className="mt-8 w-full rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-600">Choose {plan.name}</button>
        </article>
      ))}
    </section>
  )
}
