import { ArrowRight, Sparkles } from "lucide-react"

export default function AmoreHero() {
              return (
                <section className="group relative isolate overflow-hidden border border-slate-200 bg-white px-6 py-24 text-slate-900 sm:px-12 lg:py-32 font-['Manrope',sans-serif] shadow-sm">
                  {/* Background Glows (adapted for light theme) */}
                  <div 
                    className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px] transition-transform duration-1000 group-hover:scale-125"
                    style={{ background: 'radial-gradient(circle, var(--green) 0%, var(--green-deep) 100%)' }}
                  />
                  <div 
                    className="pointer-events-none absolute -top-24 right-1/4 -z-10 h-72 w-72 rounded-full opacity-15 blur-[100px]"
                    style={{ background: 'var(--purple)' }}
                  />
            
                  <div className="relative mx-auto max-w-4xl text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm">
                      <Sparkles size={14} className="text-[var(--green-deep)]" />
                      <span>The Next Generation Toolkit</span>
                    </div>
            
                    {/* Heading avec le MÊME dégradé */}
                    <h1 className="mt-8 text-balance text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
                      Ideas deserve a{" "}
                      <span 
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: 'linear-gradient(135deg, var(--green-deep) 0%, var(--green-grap) 50%, var(--muted) 100%)' }}
                      >
                        stunning beginning.
                      </span>
                    </h1>
            
                    {/* Description */}
                    
                    <p className="mt-12 pt-5 text-lg text-slate-600">Prism is a modern design system for building beautiful, responsive websites and applications. With a focus on simplicity and flexibility, Prism makes it easy to create stunning user interfaces that look great on any device.</p>
            
            
                    {/* Call to Actions */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                      
                      <a
                        href="#"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300"
                      >
                        <span>Documentation</span>
                      </a>
                    </div>
                  </div>
                </section>
              )
            }
