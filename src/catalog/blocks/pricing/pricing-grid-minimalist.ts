import { DollarSign } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "pricing-grid-minimalist",
  name: "Pricing / Minimalist Dark Grid",
  category: "Pricing",
  tone: "mint",
  icon: DollarSign,
  code: `
      import { useState } from "react"
      import { Check, Zap } from "lucide-react"

      const tiers = [
        { volume: 3000, freePrice: 0, proPrice: 20, scalePrice: 90 },
        { volume: 50000, freePrice: 0, proPrice: 20, scalePrice: 90 },
        { volume: 100000, freePrice: 0, proPrice: 35, scalePrice: 90 },
        { volume: 200000, freePrice: 0, proPrice: 65, scalePrice: 140 },
        { volume: 500000, freePrice: 0, proPrice: 150, scalePrice: 300 },
        { volume: 1000000, freePrice: 0, proPrice: 280, scalePrice: 550 },
        { volume: 1500000, freePrice: 0, proPrice: 400, scalePrice: 750 },
        { volume: 2500000, freePrice: 0, proPrice: 650, scalePrice: 1100 },
        { volume: 3000000, freePrice: 0, proPrice: 800, scalePrice: 1300 },
      ]

      export default function PricingGridMinimalist() {
        const [emailType, setEmailType] = useState<"transactional" | "marketing">("transactional")
        const [sliderIndex, setSliderIndex] = useState(1)

        const currentTier = tiers[sliderIndex]
        const multiplier = emailType === "marketing" ? 1.25 : 1

        const formatVolume = (val: number) => {
          if (val >= 1000000) return \`\${(val / 1000000).toLocaleString("en-US")}M\`
          return val.toLocaleString("en-US")
        }

        return (
          <section className="relative min-h-screen bg-[var(--bg)] px-6 py-24 text-[color:var(--text)] sm:px-10">
            {/* Effet de lueur en arrière-plan */}
            <div className="pointer-events-none absolute left-1/2 top-10 h-64 w-[500px] -translate-x-1/2 rounded-full bg-[color:var(--green)] opacity-10 blur-[130px]" />

            <div className="relative z-10 mx-auto max-w-6xl">
              {/* Header */}
              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--line)] bg-[color:var(--panel-2)]/60 px-3 py-1 text-[11px] font-medium text-[color:var(--green)]">
                  <Zap size={12} /> Simple & Transparent Pricing
                </span>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[color:var(--text)] sm:text-5xl">
                  Ready to scale your stack?
                </h2>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  Select your volume and choose the tier that matches your infrastructure.
                </p>
              </div>

              {/* Email Switcher */}
              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-xl border border-[color:var(--line)] bg-[color:var(--panel)]/50 p-1 backdrop-blur-md">
                  <button
                    onClick={() => setEmailType("transactional")}
                    className={\`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all text-center flex items-center justify-center \${
                      emailType === "transactional"
                        ? "bg-[color:var(--panel-2)] text-[color:var(--text)] border border-[color:var(--line)] shadow-sm"
                        : "text-[color:var(--muted)] hover:text-[color:var(--text)]"
                    }\`}
                  >
                    Transactional
                  </button>
                  <button
                    onClick={() => setEmailType("marketing")}
                    className={\`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all text-center flex items-center justify-center \${
                      emailType === "marketing"
                        ? "bg-[color:var(--panel-2)] text-[color:var(--text)] border border-[color:var(--line)] shadow-sm"
                        : "text-[color:var(--muted)] hover:text-[color:var(--text)]"
                    }\`}
                  >
                    Marketing
                  </button>
                </div>
              </div>

              {/* Slider */}
              <div className="mx-auto mt-10 max-w-2xl">
                <input
                  type="range"
                  min="0"
                  max={tiers.length - 1}
                  value={sliderIndex}
                  onChange={(e) => setSliderIndex(Number(e.target.value))}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-[color:var(--line)] accent-[color:var(--green)]"
                />
                <div className="mt-3 flex justify-between text-[10px] font-medium text-[color:var(--muted)]">
                  {tiers.map((tier, idx) => (
                    <span
                      key={tier.volume}
                      onClick={() => setSliderIndex(idx)}
                      className={\`cursor-pointer transition hover:text-[color:var(--text)] \${
                        idx === sliderIndex ? "font-bold text-[color:var(--green)]" : ""
                      }\`}
                    >
                      {formatVolume(tier.volume)}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cards Grid */}
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Free */}
                <div className="group relative flex flex-col justify-between rounded-2xl border border-[color:var(--line)]/60 bg-gradient-to-b from-[color:var(--panel)]/60 to-transparent p-6 backdrop-blur-md transition-all hover:border-[color:var(--line)]">
                  <div>
                    <h3 className="text-sm font-semibold text-[color:var(--text)]">Free</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-[color:var(--text)]">$0</span>
                      <span className="text-xs text-[color:var(--muted)]">/mo</span>
                    </div>
                    <p className="mt-2 text-xs text-[color:var(--muted)]">3,000 emails included</p>

                    <div className="my-6 border-t border-[color:var(--line)]/40" />

                    <ul className="space-y-2.5 text-xs text-[color:var(--muted)]">
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[color:var(--green)]" />
                        <span>100 emails/day</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[color:var(--green)]" />
                        <span>3 domains</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[color:var(--green)]" />
                        <span>Ticket support</span>
                      </li>
                    </ul>
                  </div>

                  <a href="#" className="mt-8 w-full rounded-lg border border-[color:var(--line)] bg-[color:var(--panel-2)]/60 py-2 text-center text-xs font-semibold text-[color:var(--text)] transition-colors hover:bg-[color:var(--line)]">
                    Get Started
                  </a>
                </div>

                {/* Pro */}
                <div className="relative flex flex-col justify-between rounded-2xl border border-[color:var(--green)]/40 bg-gradient-to-b from-[color:var(--green-grap)]/15 to-transparent p-6 backdrop-blur-md shadow-[0_0_25px_rgba(121,242,176,0.05)]">
                  <div className="absolute -top-2.5 right-4 rounded-full bg-[color:var(--green)] px-2.5 py-0.5 text-[9px] font-bold text-[color:var(--bg)] uppercase tracking-wider">
                    Recommended
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[color:var(--green)]">Pro</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-[color:var(--text)]">
                        \${Math.round(currentTier.proPrice * multiplier)}
                      </span>
                      <span className="text-xs text-[color:var(--muted)]">/mo</span>
                    </div>
                    <p className="mt-2 text-xs text-[color:var(--text)] font-medium">
                      {formatVolume(currentTier.volume)} emails included
                    </p>

                    <div className="my-6 border-t border-[color:var(--green)]/20" />

                    <ul className="space-y-2.5 text-xs text-[color:var(--muted)]">
                      <li className="flex items-center gap-2 text-[color:var(--text)]">
                        <Check size={14} className="text-[color:var(--green)]" />
                        <span>All Free features</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[color:var(--green)]" />
                        <span>10 domains</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[color:var(--green)]" />
                        <span>5 webhook endpoints</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[color:var(--green)]" />
                        <span>100 AI credits / mo</span>
                      </li>
                    </ul>
                  </div>

                  <a href="#" className="mt-8 w-full rounded-lg bg-[color:var(--green)] py-2 text-center text-xs font-bold text-[color:var(--bg)] transition-opacity hover:opacity-90">
                    Upgrade to Pro
                  </a>
                </div>

                {/* Scale */}
                <div className="group relative flex flex-col justify-between rounded-2xl border border-[color:var(--line)]/60 bg-gradient-to-b from-[color:var(--panel)]/60 to-transparent p-6 backdrop-blur-md transition-all hover:border-[color:var(--line)]">
                  <div>
                    <h3 className="text-sm font-semibold text-[color:var(--text)]">Scale</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-[color:var(--text)]">
                        \${Math.round(currentTier.scalePrice * multiplier)}
                      </span>
                      <span className="text-xs text-[color:var(--muted)]">/mo</span>
                    </div>
                    <p className="mt-2 text-xs text-[color:var(--muted)]">
                      {formatVolume(currentTier.volume)} emails included
                    </p>

                    <div className="my-6 border-t border-[color:var(--line)]/40" />

                    <ul className="space-y-2.5 text-xs text-[color:var(--muted)]">
                      <li className="flex items-center gap-2 text-[color:var(--text)]">
                        <Check size={14} className="text-[color:var(--green)]" />
                        <span>All Pro features</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[color:var(--green)]" />
                        <span>1,000 domains</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[color:var(--green)]" />
                        <span>Dedicated Slack channel</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[color:var(--green)]" />
                        <span>500 AI credits / mo</span>
                      </li>
                    </ul>
                  </div>

                  <a href="#" className="mt-8 w-full rounded-lg border border-[color:var(--line)] bg-[color:var(--panel-2)]/60 py-2 text-center text-xs font-semibold text-[color:var(--text)] transition-colors hover:bg-[color:var(--line)]">
                    Get Started
                  </a>
                </div>

                {/* Enterprise */}
                <div className="group relative flex flex-col justify-between rounded-2xl border border-[color:var(--line)]/60 bg-gradient-to-b from-[color:var(--panel)]/60 to-transparent p-6 backdrop-blur-md transition-all hover:border-[color:var(--line)]">
                  <div>
                    <h3 className="text-sm font-semibold text-[color:var(--text)]">Custom</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[color:var(--text)]">Enterprise</span>
                    </div>
                    <p className="mt-2 text-xs text-[color:var(--muted)]">Custom limits & SLA</p>

                    <div className="my-6 border-t border-[color:var(--line)]/40" />

                    <ul className="space-y-2.5 text-xs text-[color:var(--muted)]">
                      <li className="flex items-center gap-2 text-[color:var(--text)]">
                        <Check size={14} className="text-[color:var(--green)]" />
                        <span>99.99% uptime SLA</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[color:var(--green)]" />
                        <span>Dedicated CSM</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-[color:var(--green)]" />
                        <span>SSO & SAML Auth</span>
                      </li>
                    </ul>
                  </div>

                  <a href="#" className="mt-8 w-full rounded-lg border border-[color:var(--line)] bg-[color:var(--panel-2)]/60 py-2 text-center text-xs font-semibold text-[color:var(--text)] transition-colors hover:bg-[color:var(--line)]">
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </section>
        )
      }
    `,
} satisfies Block
