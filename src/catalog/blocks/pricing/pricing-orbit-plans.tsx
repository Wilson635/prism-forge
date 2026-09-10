import { useState } from "react"
import { Check, Crown } from "lucide-react"

const plans = [
        { name: "Sprout", monthly: 0, features: ["3 projects", "Community support"] },
        { name: "Orbit", monthly: 24, features: ["Unlimited projects", "Priority support", "Team analytics"] },
        { name: "Constellation", monthly: 64, features: ["Advanced permissions", "Dedicated success manager", "Custom integrations"] },
      ]

      export default function OrbitPlans() {
        const [annual, setAnnual] = useState(true)

        return (
          <section className="relative min-h-screen overflow-hidden bg-white px-5 py-20 text-slate-900 sm:px-10">
            {/* Soft Ambient Light Background */}
            <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[450px] w-[750px] rounded-full bg-gradient-to-b from-[color:var(--green)]/20 via-[color:var(--green-grap)]/10 to-transparent blur-3xl opacity-70" />

            <div className="relative z-10 mx-auto max-w-6xl">
              {/* Header & Toggle */}
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--text)]">
                    Simple, transparent pricing
                  </p>
                  <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                    Choose your orbit.
                  </h2>
                </div>

                {/* Annual/Monthly Switch */}
                <button
                  onClick={() => setAnnual(!annual)}
                  className="flex items-center rounded-full border border-slate-200 bg-slate-100/80 p-1 text-xs font-medium backdrop-blur-md shadow-inner"
                >
                  <span
                    className={`rounded-full px-4 py-2 transition-all ${
                      annual
                        ? "bg-[color:var(--green)] font-bold text-slate-950 shadow-sm"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    Annual · save 20%
                  </span>
                  <span
                    className={`rounded-full px-4 py-2 transition-all ${
                      !annual
                        ? "bg-[color:var(--green)] font-bold text-slate-950 shadow-sm"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    Monthly
                  </span>
                </button>
              </div>

              {/* Plans Grid */}
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {plans.map((plan, i) => (
                  <article
                    key={plan.name}
                    className={`relative flex flex-col justify-between rounded-3xl p-8 backdrop-blur-md transition-all duration-300 ${
                      i === 1
                        ? "border-2 border-[color:var(--green)] bg-white shadow-xl shadow-[color:var(--green)]/15 -translate-y-1"
                        : "border border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    {i === 1 && (
                      <span className="absolute right-6 top-6 rounded-full bg-[color:var(--green)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-950 shadow-xs">
                        Most Popular
                      </span>
                    )}

                    <div>
                      <Crown
                        size={22}
                        className={i === 1 ? "text-[color:var(--text)]" : "text-slate-400"}
                      />
                      <h3 className="mt-4 text-xl font-bold text-slate-900">{plan.name}</h3>

                      <div className="mt-4 flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-slate-900">
                          ${annual ? Math.round(plan.monthly * 0.8) : plan.monthly}
                        </span>
                        <span className="text-xs text-slate-400"> / mo</span>
                      </div>

                      <div className="my-6 border-t border-slate-100" />

                      <ul className="space-y-3.5 text-xs text-slate-600">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2.5">
                            <Check size={15} className="shrink-0 text-[color:var(--green)]" />
                            <span className={i === 1 ? "text-slate-900 font-medium" : ""}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <bouton
                      className={`mt-8 w-full rounded-xl text-center py-3 text-xs font-bold transition-all ${
                        i === 1
                          ? "bg-[color:var(--green)] text-slate-950 shadow-sm hover:opacity-90"
                          : "border border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100"
                      }`}
                    >
                      Start building
                    </bouton>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )
      }
