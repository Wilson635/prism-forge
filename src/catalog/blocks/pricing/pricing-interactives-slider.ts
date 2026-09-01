import { DollarSign } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "pricing-interactives-slider",
  name: "Pricing / Interactive volume slider",
  category: "Pricing",
  tone: "mint",
  icon: DollarSign,
  code: `
      import { useState } from "react"
      import { Check, Sparkles } from "lucide-react"

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

      export default function PricingInteractiveSlider() {
        const [emailType, setEmailType] = useState<"transactional" | "marketing">("transactional")
        const [sliderIndex, setSliderIndex] = useState(1)

        const currentTier = tiers[sliderIndex]
        const multiplier = emailType === "marketing" ? 1.25 : 1

        const formatVolume = (val: number) => {
          if (val >= 1000000) return \`\${(val / 1000000).toLocaleString("en-US")}M\`
          return val.toLocaleString("en-US")
        }

        return (
          <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,var(--green-grap)_0%,var(--bg)_85%)] px-4 py-24 sm:px-8 text-[color:var(--text)]">
            {/* Projecteur Effet Lampe Supérieur */}
            <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 flex flex-col items-center">
              <div className="h-1 w-64 rounded-full bg-[color:var(--green)] opacity-90 blur-[1px] shadow-[0_0_20px_var(--green)]" />
              <div 
                className="h-[400px] w-[800px] opacity-20 blur-3xl"
                style={{
                  background: 'conic-gradient(from 90deg at 50% 0%, var(--green) 0deg, var(--green-grap) 60deg, transparent 120deg, transparent 240deg, var(--green-grap) 300deg, var(--green) 360deg)'
                }}
              />
              <div className="absolute top-0 h-96 w-[700px] rounded-full bg-[color:var(--green)] opacity-15 blur-[140px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl">
              {/* Header avec Titre Glowing */}
              <div className="text-center">
                <h2 className="bg-gradient-to-b from-[color:var(--white)] via-[color:var(--text)] to-[color:var(--muted)] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent drop-shadow-[0_10px_25px_rgba(121,242,176,0.25)] sm:text-6xl">
                  Pricing Plans
                </h2>
                <p className="mt-3 text-sm font-medium text-[color:var(--muted)]">
                  Start for free and scale smoothly as your application grows.
                </p>
              </div>

              {/* Selector Emails */}
              <div className="mt-10 flex justify-center">
                <div className="inline-flex rounded-full border border-[color:var(--line)] bg-[color:var(--panel-2)]/80 p-1 backdrop-blur-md">
                  <button
                    onClick={() => setEmailType("transactional")}
                    className={\`rounded-full px-5 py-2 text-xs font-medium transition-all text-center flex items-center justify-center \${
                      emailType === "transactional"
                        ? "bg-[color:var(--panel)] text-[color:var(--text)] border border-[color:var(--line)]"
                        : "text-[color:var(--muted)] hover:text-[color:var(--text)]"
                    }\`}
                  >
                    Transactional emails
                  </button>
                  <button
                    onClick={() => setEmailType("marketing")}
                    className={\`rounded-full px-5 py-2 text-xs font-medium transition-all text-center flex items-center justify-center \${
                      emailType === "marketing"
                        ? "bg-[color:var(--panel)] text-[color:var(--text)] border border-[color:var(--line)]"
                        : "text-[color:var(--muted)] hover:text-[color:var(--text)]"
                    }\`}
                  >
                    Marketing emails
                  </button>
                </div>
              </div>

              {/* Slider Volume */}
              <div className="mx-auto mt-12 max-w-3xl">
                <div className="relative flex items-center">
                  <input
                    type="range"
                    min="0"
                    max={tiers.length - 1}
                    value={sliderIndex}
                    onChange={(e) => setSliderIndex(Number(e.target.value))}
                    className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-[color:var(--line)] accent-[color:var(--green)]"
                  />
                </div>
                <div className="mt-4 flex justify-between text-[11px] font-medium text-[color:var(--muted)]">
                  {tiers.map((tier, idx) => (
                    <span
                      key={tier.volume}
                      onClick={() => setSliderIndex(idx)}
                      className={\`cursor-pointer transition hover:text-[color:var(--text)] \${
                        idx === sliderIndex ? "font-bold text-[color:var(--green)]" : ""
                      }\`}
                    >
                      {idx === tiers.length - 1 ? \`\${tier.volume.toLocaleString("en-US")}+\` : tier.volume.toLocaleString("en-US")}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bloc Monolithique (Cartes collées) */}
              <div className="mt-16 relative rounded-t-3xl p-[1px] bg-gradient-to-b from-[color:var(--line)] via-[color:var(--line)]/30 to-transparent">
                <div className="grid grid-cols-1 divide-y divide-[color:var(--line)]/40 rounded-t-[23px] bg-gradient-to-b from-[color:var(--panel)]/90 via-[color:var(--panel)]/30 to-transparent backdrop-blur-xl lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:divide-[color:var(--line)]/50">
                  
                  {/* Free Card */}
                  <div className="flex flex-col justify-between p-7 text-center">
                    <div>
                      <p className="text-xs font-semibold text-[color:var(--muted)]">Free</p>
                      <div className="mt-6">
                        <span className="text-4xl font-normal text-[color:var(--text)]">$0</span>
                        <span className="text-xs text-[color:var(--muted)]"> / mo</span>
                      </div>

                      <div className="my-6 border-t border-[color:var(--line)]/50 pt-5">
                        <p className="text-xs font-semibold text-[color:var(--text)]">3,000 emails / mo</p>
                      </div>

                      <ul className="space-y-3.5 text-left text-xs text-[color:var(--muted)]">
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>100 emails a day</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>3 domains</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>Ticket support</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>10,000 automation runs</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>30-day data retention</span>
                        </li>
                      </ul>
                    </div>

                    <a href="#" className="mt-10 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)]/80 py-2.5 text-center text-xs font-semibold text-[color:var(--text)] shadow-none transition-colors hover:bg-[color:var(--line)]">
                      Get started
                    </a>
                  </div>

                  {/* Pro Card (Highlight) */}
                  <div className="relative flex flex-col justify-between bg-gradient-to-b from-[color:var(--green-grap)]/20 via-transparent to-transparent p-7 text-center">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-[color:var(--green)]/40 bg-[color:var(--panel-2)] px-3 py-0.5 text-[10px] font-bold tracking-wider text-[color:var(--green)] uppercase flex items-center gap-1 shadow-[0_0_10px_rgba(121,242,176,0.15)]">
                      Popular
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[color:var(--green)]">Pro</p>
                      <div className="mt-6">
                        <span className="text-4xl font-normal text-[color:var(--text)]">
                          \${Math.round(currentTier.proPrice * multiplier)}
                        </span>
                        <span className="text-xs text-[color:var(--muted)]"> / mo</span>
                      </div>

                      <div className="my-6 border-t border-[color:var(--line)]/50 pt-5">
                        <p className="text-xs font-semibold text-[color:var(--text)]">
                          {formatVolume(currentTier.volume)} emails / mo
                        </p>
                        <p className="mt-1 text-[10px] text-[color:var(--muted)]">Extra emails: $0.90 / 1,000</p>
                      </div>

                      <ul className="space-y-3.5 text-left text-xs text-[color:var(--muted)]">
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span className="text-[color:var(--text)] font-medium">All Free features</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>10 domains</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>No daily email limit</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>5 webhook endpoints</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>100 AI credits / mo</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>Additional domains with add-on</span>
                        </li>
                      </ul>
                    </div>

                    <a href="#" className="mt-10 w-full rounded-xl border border-[color:var(--green)]/50 bg-[color:var(--green)] py-2.5 text-center text-xs font-bold text-[#000] shadow-none transition-opacity hover:opacity-90">
                      Get started
                    </a>
                  </div>

                  {/* Scale Card */}
                  <div className="flex flex-col justify-between p-7 text-center">
                    <div>
                      <p className="text-xs font-semibold text-[color:var(--muted)]">Scale</p>
                      <div className="mt-6">
                        <span className="text-4xl font-normal text-[color:var(--text)]">
                          \${Math.round(currentTier.scalePrice * multiplier)}
                        </span>
                        <span className="text-xs text-[color:var(--muted)]"> / mo</span>
                      </div>

                      <div className="my-6 border-t border-[color:var(--line)]/50 pt-5">
                        <p className="text-xs font-semibold text-[color:var(--text)]">
                          {formatVolume(currentTier.volume)} emails / mo
                        </p>
                        <p className="mt-1 text-[10px] text-[color:var(--muted)]">Extra emails: $0.90 / 1,000</p>
                      </div>

                      <ul className="space-y-3.5 text-left text-xs text-[color:var(--muted)]">
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span className="text-[color:var(--text)] font-medium">All Pro features</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>1,000 domains</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>Dedicated Slack channel</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>10 webhook endpoints</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>500 AI credits / mo</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>SSO & Dedicated IP add-ons</span>
                        </li>
                      </ul>
                    </div>

                    <a href="#" className="mt-10 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)]/80 py-2.5 text-center text-xs font-semibold text-[color:var(--text)] shadow-none transition-colors hover:bg-[color:var(--line)]">
                      Get started
                    </a>
                  </div>

                  {/* Custom / Enterprise Card */}
                  <div className="flex flex-col justify-between p-7 text-center">
                    <div>
                      <p className="text-xs font-semibold text-[color:var(--muted)]">Custom</p>
                      <div className="mt-6">
                        <span className="text-3xl font-normal text-[color:var(--text)]">Enterprise</span>
                      </div>

                      <div className="my-6 border-t border-[color:var(--line)]/50 pt-5">
                        <p className="text-xs font-semibold text-[color:var(--text)]">Performance at scale</p>
                      </div>

                      <ul className="space-y-3.5 text-left text-xs text-[color:var(--muted)]">
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span className="text-[color:var(--text)] font-medium">All Scale features</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>99.99% uptime SLA</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>Personalized migration</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>Guaranteed response times</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                          <span>Dedicated CSM & SSO</span>
                        </li>
                      </ul>
                    </div>

                    <a href="#" className="mt-10 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)]/80 py-2.5 text-center text-xs font-semibold text-[color:var(--text)] shadow-none transition-colors hover:bg-[color:var(--line)]">
                      Contact us
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </section>
        )
      }
    `,
} satisfies Block
