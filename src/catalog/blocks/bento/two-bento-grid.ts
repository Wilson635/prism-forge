import { Command } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "two-bento-grid",
  name: "Two row bento grid with three column second row",
  category: "Bento",
  tone: "blue",
  icon: Command,
  code: `
            import { motion } from "framer-motion"
            import { Search, ChevronRight, Activity, ShieldCheck, Cpu, Globe, ArrowUpRight } from "lucide-react"
            
            export default function AnimatedBentoGrid() {
              return (
                <section className="mx-auto max-w-7xl px-6 py-16 font-['Manrope',sans-serif] bg-white text-slate-900">
                  {/* Header section */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mb-12"
                  >
                    <span className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
                      Deploy faster
                    </span>
                    <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
                      Everything you need to deploy your app
                    </h2>
                  </motion.div>
            
                  {/* Grid Container */}
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    
                    {/* ROW 1 - LEFT CARD (Span 2) */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      whileHover={{ y: -4 }}
                      className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200/80 p-8 flex flex-col justify-between transition-all hover:shadow-xl hover:border-slate-300 group"
                    >
                      {/* UI Mockup Window */}
                      <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm mb-8 relative overflow-hidden">
                        <div className="flex items-center gap-2 text-slate-400 border-b border-slate-100 pb-4 text-xs font-medium">
                          <Search size={14} />
                          <span>Search something...</span>
                        </div>
                        
                        <div className="flex gap-6 border-b border-slate-100 py-3 text-xs font-semibold">
                          <span className="text-indigo-600 border-b-2 border-indigo-600 pb-3 -mb-3">Overview</span>
                          <span className="text-slate-400 hover:text-slate-600 cursor-pointer transition">Activity</span>
                          <span className="text-slate-400 hover:text-slate-600 cursor-pointer transition">Settings</span>
                          <span className="text-slate-400 hover:text-slate-600 cursor-pointer transition">Collaborators</span>
                        </div>
            
                        <div className="py-4">
                          <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            Planetary <span className="text-slate-300 font-normal">/</span> mobile-api
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">Deploys from GitHub via main branch</p>
                        </div>
            
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 mt-2">
                          <div>
                            <span className="text-xs text-slate-400 font-medium">Number of deploys</span>
                            <p className="text-3xl font-extrabold text-slate-900 mt-1">405</p>
                          </div>
                          <div>
                            <span className="text-xs text-slate-400 font-medium">Avg deploy time</span>
                            <p className="text-3xl font-extrabold text-slate-900 mt-1">
                              3.65 <span className="text-sm font-medium text-slate-400">mins</span>
                            </p>
                          </div>
                        </div>
                      </div>
            
                      {/* Card Description */}
                      <div>
                        <span className="text-xs font-semibold text-indigo-600">Performance</span>
                        <h3 className="text-xl font-bold mt-1 text-slate-900 group-hover:text-indigo-600 transition">Lightning-fast builds</h3>
                        <p className="text-sm text-slate-500 mt-2 max-w-xl">
                          Automate your deployment pipeline with optimized build caching and zero-downtime releases worldwide.
                        </p>
                      </div>
                    </motion.div>
            
                    {/* ROW 1 - RIGHT CARD (Span 1) */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ y: -4 }}
                      className="lg:col-span-1 relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200/80 p-8 flex flex-col justify-between transition-all hover:shadow-xl hover:border-slate-300 group"
                    >
                      {/* UI Mockup Feed */}
                      <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm mb-8 space-y-3">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                          <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                            <Activity size={14} className="text-indigo-600" /> Activity feed
                          </span>
                          <span className="text-xs text-indigo-600 font-semibold cursor-pointer hover:underline">View all</span>
                        </div>
            
                        <div className="divide-y divide-slate-100 text-xs">
                          <div className="py-2.5 flex items-start gap-3">
                            <img 
                              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                              alt="Cosetta" 
                              className="h-8 w-8 rounded-full object-cover border border-slate-200"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <span className="font-bold text-slate-800">Cosetta Dusett</span>
                                <span className="text-slate-400 text-[10px]">30s</span>
                              </div>
                              <p className="text-slate-500 mt-0.5">Pushed to <span className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-indigo-600">ios-app</span></p>
                            </div>
                          </div>
            
                          <div className="py-2.5 flex items-start gap-3">
                            <img 
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" 
                              alt="Pammi" 
                              className="h-8 w-8 rounded-full object-cover border border-slate-200"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <span className="font-bold text-slate-800">Pammi Kakani</span>
                                <span className="text-slate-400 text-[10px]">3m</span>
                              </div>
                              <p className="text-slate-500 mt-0.5">Pushed to <span className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-indigo-600">mobile-api</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
            
                      {/* Card Description */}
                      <div>
                        <span className="text-xs font-semibold text-indigo-600">Releases</span>
                        <h3 className="text-xl font-bold mt-1 text-slate-900 group-hover:text-indigo-600 transition">Push to deploy</h3>
                        <p className="text-sm text-slate-500 mt-2">
                          Instant previews for every pull request with team notifications.
                        </p>
                      </div>
                    </motion.div>
            
                    {/* ROW 2 - CARD 1 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      whileHover={{ y: -4 }}
                      className="rounded-3xl bg-slate-50 border border-slate-200/80 p-8 flex flex-col justify-between transition-all hover:shadow-xl hover:border-slate-300 group"
                    >
                      <div className="h-44 rounded-2xl overflow-hidden border border-slate-200 mb-6 relative">
                        <img 
                          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80" 
                          alt="Security"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent flex items-end p-4">
                          <ShieldCheck className="text-emerald-400" size={24} />
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-indigo-600">Security</span>
                        <h3 className="text-lg font-bold mt-1 text-slate-900 group-hover:text-indigo-600 transition">Advanced permissions</h3>
                        <p className="text-sm text-slate-500 mt-2">Manage RBAC access rights seamlessly across your organization.</p>
                      </div>
                    </motion.div>
            
                    {/* ROW 2 - CARD 2 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ y: -4 }}
                      className="rounded-3xl bg-slate-50 border border-slate-200/80 p-8 flex flex-col justify-between transition-all hover:shadow-xl hover:border-slate-300 group"
                    >
                      <div className="h-44 rounded-2xl overflow-hidden border border-slate-200 mb-6 relative">
                        <img 
                          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80" 
                          alt="Integrations"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent flex items-end p-4">
                          <Cpu className="text-indigo-400" size={24} />
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-indigo-600">Integrations</span>
                        <h3 className="text-lg font-bold mt-1 text-slate-900 group-hover:text-indigo-600 transition">Connect your stack</h3>
                        <p className="text-sm text-slate-500 mt-2">Plug into your favorite developer tools with zero extra setup.</p>
                      </div>
                    </motion.div>
            
                    {/* ROW 2 - CARD 3 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      whileHover={{ y: -4 }}
                      className="rounded-3xl bg-slate-50 border border-slate-200/80 p-8 flex flex-col justify-between transition-all hover:shadow-xl hover:border-slate-300 group"
                    >
                      <div className="h-44 rounded-2xl overflow-hidden border border-slate-200 mb-6 relative">
                        <img 
                          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80" 
                          alt="Edge Network"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent flex items-end p-4">
                          <Globe className="text-cyan-400" size={24} />
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-indigo-600">Global Scale</span>
                        <h3 className="text-lg font-bold mt-1 text-slate-900 group-hover:text-indigo-600 transition">Global edge network</h3>
                        <p className="text-sm text-slate-500 mt-2">Deploy your web applications with ultra-low latency worldwide.</p>
                      </div>
                    </motion.div>
            
                  </div>
                </section>
              )
            }
        
        `,
} satisfies Block
