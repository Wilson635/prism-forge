import { useState } from "react"
import { Check } from "lucide-react"

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
          if (val >= 1000000) return `${(val / 1000000).toLocaleString("en-US")}M`
          return val.toLocaleString("en-US")
        }

        return (
          <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,var(--green-grap)_0%,var(--bg)_80%)] px-6 py-24 sm:px-10 text-[color:var(--text)]">
            {/* Lamp Light Top Effect */}
            <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 flex flex-col items-center">
              <div className="h-1 w-48 rounded-full bg-[color:var(--green)] opacity-90 blur-[1px] shadow-[0_0_12px_var(--green)]" />
              <div 
                className="h-[360px] w-[700px] opacity-25 blur-3xl"
                style={{
                  background: 'conic-gradient(from 90deg at 50% 0%, var(--green) 0deg, var(--green-grap) 60deg, transparent 120deg, transparent 240deg, var(--green-grap) 300deg, var(--green) 360deg)'
                }}
              />
              <div className="absolute top-0 h-80 w-[600px] rounded-full bg-[color:var(--green)] opacity-20 blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl">
              {/* Header avec Titre Illuminé & Dégradé */}
              <div className="text-center">
                <h2 className="bg-gradient-to-b from-[color:var(--white)] via-[color:var(--text)] to-[color:var(--muted)] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent drop-shadow-[0_10px_20px_rgba(121,242,176,0.2)] sm:text-6xl">
                  Pricing
                </h2>
                <p className="mt-3 text-sm font-medium text-[color:var(--muted)]">
                  Start for free and scale as you grow.
                </p>
              </div>

              {/* Email Type Switcher */}
              <div className="mt-10 flex justify-center">
                <div className="inline-flex rounded-full border border-[color:var(--line)] bg-[color:var(--panel-2)]/80 p-1 backdrop-blur-md">
                  <button
                    onClick={() => setEmailType("transactional")}
                    className={`rounded-full px-5 py-2 text-xs font-medium transition-all text-center flex items-center justify-center ${
                      emailType === "transactional"
                        ? "bg-[color:var(--panel)] text-[color:var(--text)] border border-[color:var(--line)]"
                        : "text-[color:var(--muted)] hover:text-[color:var(--text)]"
                    }`}
                  >
                    Transactional emails
                  </button>
                  <button
                    onClick={() => setEmailType("marketing")}
                    className={`rounded-full px-5 py-2 text-xs font-medium transition-all text-center flex items-center justify-center ${
                      emailType === "marketing"
                        ? "bg-[color:var(--panel)] text-[color:var(--text)] border border-[color:var(--line)]"
                        : "text-[color:var(--muted)] hover:text-[color:var(--text)]"
                    }`}
                  >
                    Marketing emails
                  </button>
                </div>
              </div>

              {/* Slider Controls */}
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
                {/* Ticks Labels */}
                <div className="mt-4 flex justify-between text-[11px] font-medium text-[color:var(--muted)]">
                  {tiers.map((tier, idx) => (
                    <span
                      key={tier.volume}
                      onClick={() => setSliderIndex(idx)}
                      className={`cursor-pointer transition hover:text-[color:var(--text)] ${
                        idx === sliderIndex ? "font-bold text-[color:var(--green)]" : ""
                      }`}
                    >
                      {idx === tiers.length - 1 ? `${tier.volume.toLocaleString("en-US")}+` : tier.volume.toLocaleString("en-US")}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing Cards Grid */}
              <div className="mt-14 grid gap-4 lg:grid-cols-4">
                {/* Free Card */}
                <div className="relative rounded-t-2xl p-[1px] bg-gradient-to-b from-[color:var(--line)] via-[color:var(--line)]/40 to-transparent pb-0">
                  <div className="flex h-full flex-col justify-between rounded-t-[15px] bg-gradient-to-b from-[color:var(--panel)]/90 via-[color:var(--panel)]/40 to-transparent p-6 backdrop-blur-md">
                    <div>
                      <p className="text-center text-xs font-semibold text-[color:var(--text)]">Free</p>
                      <div className="mt-8 text-center">
                        <span className="text-4xl font-normal tracking-tight text-[color:var(--text)]">$0</span>
                        <span className="text-sm text-[color:var(--muted)]"> / mo</span>
                      </div>

                      <div className="my-6 border-t border-[color:var(--line)]/50 pt-6 text-center">
                        <p className="text-xs font-semibold text-[color:var(--text)]">3,000 emails / mo</p>
                      </div>

                      <div className="border-t border-[color:var(--line)]/50 pt-6">
                        <ul className="space-y-3 text-xs text-[color:var(--muted)]">
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
                    </div>

                    <a href="#" className="mt-8 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)]/80 py-2.5 text-center text-xs font-semibold text-[color:var(--text)] shadow-none transition-colors hover:bg-[color:var(--line)]">
                      Get started
                    </a>
                  </div>
                </div>

                {/* Pro Card */}
                <div className="relative rounded-t-2xl p-[1px] bg-gradient-to-b from-[color:var(--line)] via-[color:var(--line)]/40 to-transparent pb-0">
                  <div className="flex h-full flex-col justify-between rounded-t-[15px] bg-gradient-to-b from-[color:var(--panel)]/90 via-[color:var(--panel)]/40 to-transparent p-6 backdrop-blur-md">
                    <div>
                      <p className="text-center text-xs font-semibold text-[color:var(--text)]">Pro</p>
                      <div className="mt-8 text-center">
                        <span className="text-4xl font-normal tracking-tight text-[color:var(--text)]">
                          ${Math.round(currentTier.proPrice * multiplier)}
                        </span>
                        <span className="text-sm text-[color:var(--muted)]"> / mo</span>
                      </div>

                      <div className="my-6 border-t border-[color:var(--line)]/50 pt-6 text-center">
                        <p className="text-xs font-semibold text-[color:var(--text)]">
                          {formatVolume(currentTier.volume)} emails / mo
                        </p>
                        <p className="mt-1 text-[10px] text-[color:var(--muted)]">Extra emails: $0.90 / 1,000</p>
                      </div>

                      <div className="border-t border-[color:var(--line)]/50 pt-6">
                        <ul className="space-y-3 text-xs text-[color:var(--muted)]">
                          <li className="flex items-center gap-2.5">
                            <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                            <span className="text-[color:var(--text)]">All Free features</span>
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
                    </div>

                    <a href="#" className="mt-8 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)]/80 py-2.5 text-center text-xs font-semibold text-[color:var(--text)] shadow-none transition-colors hover:bg-[color:var(--line)]">
                      Get started
                    </a>
                  </div>
                </div>

                {/* Scale Card */}
                <div className="relative rounded-t-2xl p-[1px] bg-gradient-to-b from-[color:var(--line)] via-[color:var(--line)]/40 to-transparent pb-0">
                  <div className="flex h-full flex-col justify-between rounded-t-[15px] bg-gradient-to-b from-[color:var(--panel)]/90 via-[color:var(--panel)]/40 to-transparent p-6 backdrop-blur-md">
                    <div>
                      <p className="text-center text-xs font-semibold text-[color:var(--text)]">Scale</p>
                      <div className="mt-8 text-center">
                        <span className="text-4xl font-normal tracking-tight text-[color:var(--text)]">
                          ${Math.round(currentTier.scalePrice * multiplier)}
                        </span>
                        <span className="text-sm text-[color:var(--muted)]"> / mo</span>
                      </div>

                      <div className="my-6 border-t border-[color:var(--line)]/50 pt-6 text-center">
                        <p className="text-xs font-semibold text-[color:var(--text)]">
                          {formatVolume(currentTier.volume)} emails / mo
                        </p>
                        <p className="mt-1 text-[10px] text-[color:var(--muted)]">Extra emails: $0.90 / 1,000</p>
                      </div>

                      <div className="border-t border-[color:var(--line)]/50 pt-6">
                        <ul className="space-y-3 text-xs text-[color:var(--muted)]">
                          <li className="flex items-center gap-2.5">
                            <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                            <span className="text-[color:var(--text)]">All Pro features</span>
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
                            <span>SSO with add-on</span>
                          </li>
                          <li className="flex items-center gap-2.5">
                            <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                            <span>Dedicated IP with add-on</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <a href="#" className="mt-8 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)]/80 py-2.5 text-center text-xs font-semibold text-[color:var(--text)] shadow-none transition-colors hover:bg-[color:var(--line)]">
                      Get started
                    </a>
                  </div>
                </div>

                {/* Custom / Enterprise Card */}
                <div className="relative rounded-t-2xl p-[1px] bg-gradient-to-b from-[color:var(--line)] via-[color:var(--line)]/40 to-transparent pb-0">
                  <div className="flex h-full flex-col justify-between rounded-t-[15px] bg-gradient-to-b from-[color:var(--panel)]/90 via-[color:var(--panel)]/40 to-transparent p-6 backdrop-blur-md">
                    <div>
                      <p className="text-center text-xs font-semibold text-[color:var(--text)]">Custom</p>
                      <div className="mt-8 text-center">
                        <span className="text-3xl font-normal tracking-tight text-[color:var(--text)]">Enterprise</span>
                      </div>

                      <div className="my-6 border-t border-[color:var(--line)]/50 pt-6 text-center">
                        <p className="text-xs font-semibold text-[color:var(--text)]">Performance at any scale</p>
                      </div>

                      <div className="border-t border-[color:var(--line)]/50 pt-6">
                        <ul className="space-y-3 text-xs text-[color:var(--muted)]">
                          <li className="flex items-center gap-2.5">
                            <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                            <span className="text-[color:var(--text)]">All Scale features</span>
                          </li>
                          <li className="flex items-center gap-2.5">
                            <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                            <span>99.99% uptime SLA</span>
                          </li>
                          <li className="flex items-center gap-2.5">
                            <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                            <span>Personalized migration support</span>
                          </li>
                          <li className="flex items-center gap-2.5">
                            <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                            <span>Guaranteed response times</span>
                          </li>
                          <li className="flex items-center gap-2.5">
                            <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                            <span>Dedicated CSM</span>
                          </li>
                          <li className="flex items-center gap-2.5">
                            <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                            <span>Single Sign-On</span>
                          </li>
                          <li className="flex items-center gap-2.5">
                            <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                            <span>Custom usage plan</span>
                          </li>
                          <li className="flex items-center gap-2.5">
                            <Check size={14} className="shrink-0 text-[color:var(--green)]" />
                            <span>Enterprise rate limits</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <a href="#" className="mt-8 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)]/80 py-2.5 text-center text-xs font-semibold text-[color:var(--text)] shadow-none transition-colors hover:bg-[color:var(--line)]">
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      }
