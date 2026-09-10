import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function NewsletterGradient() {
                  const [email, setEmail] = useState('');
                 
                  return (
                    <section className="relative overflow-hidden rounded-3xl bg-[color:var(--panel)] px-8 py-16 sm:px-16">
                      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[color:var(--green)] opacity-25 blur-3xl" />
                      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-[color:var(--purple)] opacity-25 blur-3xl" />
                 
                      <div className="relative mx-auto max-w-xl text-center">
                        <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--green)] to-[color:var(--blue)]">
                          <Sparkles size={18} className="text-[color:var(--bg)]" />
                        </span>
                        <h2 className="mt-5 text-3xl font-semibold text-[color:var(--text)] sm:text-4xl">Stay in the loop</h2>
                        <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                          One email a month with product updates, release notes and the occasional deep dive.
                        </p>
                 
                        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@company.com"
                            className="flex-1 rounded-full border border-[color:var(--line)] bg-[color:var(--panel-2)] px-5 py-3 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)] focus:border-[color:var(--green)]"
                          />
                          <button type="submit" className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--green)] to-[color:var(--blue)] px-6 py-3 text-sm font-semibold text-[color:var(--bg)] transition hover:opacity-90">
                            Subscribe <ArrowRight size={16} />
                          </button>
                        </form>
                        <p className="mt-4 text-xs text-[color:var(--muted)]">No spam. Unsubscribe anytime.</p>
                      </div>
                    </section>
                  );
                }
