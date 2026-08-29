import {
  ArrowUpRight,
  ChevronDown,
  Command,
  CreditCard,
  Crown,
  DollarSign,
  Fingerprint,
  Gauge,
  Grid2X2,
  KeyRound,
  Layers3,
  Lock,
  Mail,
  Newspaper,
  Package,
  PanelLeft,
  PanelTop,
  Quote,
  Send,
  Settings,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Table2,
  Terminal,
  UserPlus,
  WandSparkles,
  Zap,
} from "lucide-react"
import previewOne from '@/assets/template-fintech.jpg';
import previewTwo from '@/assets/template-portfolio.jpg';
import previewThree from '@/assets/template-saas.jpg';

export type PreviewTone = 'mint' | 'violet' | 'blue' | 'amber';

export const blocks = [
    {
        id: 'bento',
        name: 'Bento feature grid',
        category: 'Features',
        tone: 'mint' as PreviewTone,
        icon: Grid2X2,
        code: `<section className="grid grid-cols-3 gap-4">\n  <div className="col-span-2 rounded-2xl bg-zinc-950 p-8 text-white">\n    <p className="text-sm text-emerald-300">Everything in focus</p>\n    <h2 className="mt-4 text-4xl font-semibold">Build without limits.</h2>\n  </div>\n  <div className="rounded-2xl bg-emerald-300 p-8 text-zinc-950">\n    <span className="text-5xl font-bold">48</span>\n    <p className="mt-2">ready-to-use blocks</p>\n  </div>\n</section>`,
    },
    {
        id: 'bento-deploy-dashboard',
        name: 'Bento — Deploy dashboard',
        category: 'Bento',
        tone: 'mint' as PreviewTone,
        icon: PanelTop,
        code: `const deploys = [
  { name: 'marketing-site', branch: 'main', time: '2m ago', status: 'Live', tone: 'live' },
  { name: 'docs-portal', branch: 'release/2.4', time: '18m ago', status: 'Preview', tone: 'preview' },
  { name: 'api-gateway', branch: 'main', time: '1h ago', status: 'Live', tone: 'live' },
];

const integrations = [
  { name: 'Mail', icon: Mail },
  { name: 'Calendar', icon: Calendar },
  { name: 'Messages', icon: MessageCircle },
  { name: 'Storage', icon: Cloud },
  { name: 'Database', icon: Database },
  { name: 'Alerts', icon: Bell },
];

const stats = [
  { label: 'Deploys', value: '482' },
  { label: 'Avg build', value: '3.4s' },
  { label: 'Uptime', value: '99.98%' },
];

<section className="bg-[color:var(--bg)] px-6 py-20 sm:px-10">
  <div className="mx-auto max-w-6xl">
    <div className="text-center">
      <span className="text-xs font-semibold uppercase tracking-wide text-[color:var(--green)]">Deploy faster</span>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
        Everything you need to ship
      </h2>
    </div>

    <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
      <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-7 lg:row-span-2">
        <p className="text-sm font-semibold text-[color:var(--text)]">Push to deploy</p>
        <p className="mt-1.5 text-sm text-[color:var(--muted)]">Every merge to main ships automatically, with instant rollbacks if something looks off.</p>
        <div className="mt-6 space-y-2.5">
          {deploys.map((deploy) => (
            <div key={deploy.name} className="flex items-center justify-between rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className={deploy.tone === 'live' ? 'h-2 w-2 rounded-full bg-[color:var(--green)]' : 'h-2 w-2 rounded-full bg-[color:var(--blue)]'} />
                <div>
                  <p className="text-xs font-medium text-[color:var(--text)]">{deploy.name}</p>
                  <p className="text-[11px] text-[color:var(--muted)]">{deploy.branch} · {deploy.time}</p>
                </div>
              </div>
              <span className="rounded-full border border-[color:var(--line)] px-2.5 py-1 text-[10px] font-medium text-[color:var(--muted)]">{deploy.status}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-7 lg:col-span-2">
        <p className="text-sm font-semibold text-[color:var(--text)]">Connect your favorite tools</p>
        <p className="mt-1.5 max-w-md text-sm text-[color:var(--muted)]">Wire up the services your team already relies on in a couple of clicks.</p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {integrations.map((tool) => (
            <div key={tool.name} className="flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2">
              <tool.icon size={14} className="text-[color:var(--green)]" />
              <span className="text-xs font-medium text-[color:var(--text)]">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-7">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--purple)] to-[color:var(--blue)]">
          <ShieldCheck size={18} className="text-[color:var(--bg)]" />
        </div>
        <p className="mt-4 text-sm font-semibold text-[color:var(--text)]">Advanced access control</p>
        <p className="mt-1.5 text-sm text-[color:var(--muted)]">Role-based permissions and audit logs, down to every environment.</p>
      </div>

      <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-7">
        <p className="text-sm font-semibold text-[color:var(--text)]">Lightning-fast builds</p>
        <div className="mt-5 grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-lg font-semibold text-[color:var(--text)]">{stat.value}</p>
              <p className="mt-0.5 text-[11px] text-[color:var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>`,
    },
    {
        id: 'bento-feature-showcase',
        name: 'Bento — Feature showcase',
        category: 'Bento',
        tone: 'blue' as PreviewTone,
        icon: Command,
        code: `<section className="bg-[color:var(--bg)] px-6 py-20 sm:px-10">
  <div className="mx-auto max-w-6xl">
    <div className="text-center">
      <span className="text-xs font-semibold uppercase tracking-wide text-[color:var(--blue)]">Built for builders</span>
      <p className="mx-auto mt-3 max-w-lg text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
        Everything you need to ship your app
      </p>
    </div>

    <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
      <div className="flex flex-col overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] lg:row-span-2">
        <div className="p-7 pb-0">
          <p className="text-sm font-semibold text-[color:var(--text)]">Mobile ready</p>
          <p className="mt-1.5 text-sm text-[color:var(--muted)]">Every block adapts down to a phone without any extra work on your end.</p>
        </div>
        <div className="relative mt-6 flex flex-1 items-end justify-center px-8 pb-8">
          <div className="w-40 rounded-t-[2rem] border-x-[10px] border-t-[10px] border-[color:var(--panel-2)] bg-[color:var(--bg)] pt-4 shadow-2xl">
            <div className="mx-auto h-1 w-10 rounded-full bg-[color:var(--line)]" />
            <div className="mt-5 space-y-2 px-4 pb-6">
              <div className="h-2 w-2/3 rounded-full bg-[color:var(--green)]/40" />
              <div className="h-2 w-1/2 rounded-full bg-[color:var(--panel-2)]" />
              <div className="mt-3 h-16 rounded-xl bg-gradient-to-br from-[color:var(--green)]/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-7">
        <p className="text-sm font-semibold text-[color:var(--text)]">Performance</p>
        <p className="mt-1.5 text-sm text-[color:var(--muted)]">Optimized rendering keeps every page fast, even on slow connections.</p>
        <div className="mt-6 flex h-20 items-end gap-2">
          {[40, 65, 45, 80, 60, 95, 70].map((height, index) => (
            <div key={'bar-' + index} className="flex-1 rounded-full bg-gradient-to-t from-[color:var(--blue)] to-[color:var(--purple)]" style={{ height: height + '%', opacity: 0.35 + height / 200 }} />
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-7">
        <p className="text-sm font-semibold text-[color:var(--text)]">Security</p>
        <p className="mt-1.5 text-sm text-[color:var(--muted)]">Encrypted by default, with granular access on every workspace.</p>
        <div className="mt-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--panel-2)]">
            <Lock size={18} className="text-[color:var(--green)]" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-[color:var(--panel-2)]" />
            <div className="h-1.5 w-2/3 rounded-full bg-[color:var(--panel-2)]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] lg:row-span-2">
        <div className="p-7 pb-0">
          <p className="text-sm font-semibold text-[color:var(--text)]">Powerful APIs</p>
          <p className="mt-1.5 text-sm text-[color:var(--muted)]">Automate any workflow with a typed SDK and predictable webhooks.</p>
        </div>
        <div className="mt-6 flex-1 px-7 pb-7">
          <div className="h-full overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg)]">
            <div className="flex items-center gap-1.5 border-b border-[color:var(--line)] px-3 py-2.5">
              <span className="h-2 w-2 rounded-full bg-[color:var(--muted)]/40" />
              <span className="h-2 w-2 rounded-full bg-[color:var(--muted)]/40" />
              <span className="h-2 w-2 rounded-full bg-[color:var(--muted)]/40" />
              <span className="ml-2 text-[10px] text-[color:var(--muted)]">webhook.ts</span>
            </div>
            <div className="space-y-2 p-4 font-mono text-[11px] leading-relaxed">
              <p><span className="text-[color:var(--purple)]">const</span> <span className="text-[color:var(--text)]">client</span> = <span className="text-[color:var(--blue)]">new</span> <span className="text-[color:var(--green)]">Prism</span>()</p>
              <p><span className="text-[color:var(--text)]">client</span>.<span className="text-[color:var(--green)]">on</span>(<span className="text-[color:var(--blue)]">'deploy'</span>, handleDeploy)</p>
              <p className="pl-4 text-[color:var(--muted)]">notify(event.project)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
    },
    {
        id: 'two-bento-grid',
        name: 'Two row bento grid with three column second row',
        category: 'Bento',
        tone: 'blue' as PreviewTone,
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
    },
    {
        id: 'features-grid2X2',
        name: 'Bento feature grid',
        category: 'Features',
        tone: 'mint' as PreviewTone,
        icon: Grid2X2,
        code: `const features = [
  {
    name: 'Push to deploy',
    description: 'Automated pipelines ship your code the moment you merge, no manual steps required.',
    icon: Zap
  },
  {
    name: 'SSL certificates',
    description: 'Every domain is encrypted automatically and renewed silently in the background.',
    icon: Lock
  },
  {
    name: 'Simple queues',
    description: 'Background jobs run reliably with built-in retries and dead-letter handling.',
    icon: RefreshCw
  },
  {
    name: 'Advanced security',
    description: 'Fingerprint-level auth and anomaly detection keep every session locked down.',
    icon: Fingerprint
  },
];

<section className="relative overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--bg)] px-8 py-16 sm:px-12">
  <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--green)] opacity-20 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[color:var(--purple)] opacity-20 blur-3xl" />
  <div className="relative mx-auto max-w-2xl text-center">
    <p className="text-sm font-semibold tracking-wide text-[color:var(--green)]">Deploy faster</p>
    <h2 className="mt-2 bg-gradient-to-r from-[color:var(--text)] to-[color:var(--muted)] bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
      Everything you need to ship
    </h2>
  </div>
  <div className="relative mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
    {features.map((feature) => (
      <div key={feature.name} className="group rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)]/60 p-6 backdrop-blur-xl transition hover:border-[color:var(--green-deep)]/50">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--green)] to-[color:var(--green-deep)] shadow-lg shadow-[color:var(--green)]/20">
          <feature.icon size={20} className="text-[color:var(--bg)]" />
        </div>
        <h3 className="mt-4 text-base font-semibold text-[color:var(--text)]">{feature.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">{feature.description}</p>
      </div>
    ))}
  </div>
</section>`,
    },
    {
        id: 'features',
        name: 'Bento feature grid',
        category: 'Features',
        tone: 'mint' as PreviewTone,
        icon: Grid2X2,
        code: `const features = [
  {
    name: "Instant deploys",
    desc: "Ship straight from your branch with zero-downtime releases.",
    icon: Cloud
  },
  {
    name: "Managed TLS",
    desc: "Certificates renew automatically across every environment.",
    icon: Lock
  },
  {
    name: "Automated backups",
    desc: "Point-in-time snapshots run on a schedule you control.",
    icon: Server
  }
];

<section className="rounded-3xl bg-[#090b0a] px-6 py-20 sm:px-10">
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
    <div>
      <span className="text-sm font-semibold text-[#79f2b0]">Ship faster</span>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#f1f5f2] sm:text-5xl">
        A calmer way to run infrastructure
      </h2>
      <p className="mt-5 text-base leading-relaxed text-[#8b958f]">
        Every release, certificate and backup is handled for you, so the team can spend its time on the product instead of the plumbing underneath it.
      </p>
      <dl className="mt-10 space-y-6">
        {features.map((feature) => (
          <div key={feature.name} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#252c28] bg-gradient-to-br from-[#3ecf8e]/20 to-transparent">
              <feature.icon size={18} className="text-[#79f2b0]" />
            </div>
            <div>
              <dt className="text-sm font-semibold text-[#f1f5f2]">{feature.name}</dt>
              <dd className="mt-1 text-sm text-[#8b958f]">{feature.desc}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>

    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#79f2b0]/20 via-[#7fc8ff]/10 to-transparent blur-2xl" />
      <div className="relative rounded-2xl border border-[#252c28] bg-[#101311]/80 p-2 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-1.5 border-b border-[#252c28] px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f7a77a]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#79f2b0]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#7fc8ff]/60" />
        </div>
        <div className="space-y-3 p-6">
          <div className="h-3 w-2/3 rounded-full bg-gradient-to-r from-[#79f2b0]/40 to-transparent" />
          <div className="h-3 w-1/2 rounded-full bg-[#151a17]" />
          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-[#79f2b0]/20 to-transparent" />
            <div className="aspect-square rounded-xl bg-gradient-to-br from-[#7fc8ff]/20 to-transparent" />
            <div className="aspect-square rounded-xl bg-gradient-to-br from-[#b99cff]/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        `,
    },
    {
        id: 'pricing-interactive-slider',
        name: 'Pricing / Interactive volume slider',
        category: 'Pricing',
        tone: 'mint' as PreviewTone,
        icon: DollarSign,
        code: `
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
          if (val >= 1000000) return \`\${(val / 1000000).toLocaleString("en-US")}M\`
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
                      className={\`cursor-pointer transition hover:text-[color:var(--text)] \${
                        idx === sliderIndex ? "font-bold text-[color:var(--green)]" : ""
                      }\`}
                    >
                      {idx === tiers.length - 1 ? \`\${tier.volume.toLocaleString("en-US")}+\` : tier.volume.toLocaleString("en-US")}
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
                          \${Math.round(currentTier.proPrice * multiplier)}
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
                          \${Math.round(currentTier.scalePrice * multiplier)}
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
    `,
    },
    {
        id: 'pricing-interactives-slider',
        name: 'Pricing / Interactive volume slider',
        category: 'Pricing',
        tone: 'mint' as PreviewTone,
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
    },
    {
        id: 'pricing-grid-minimalist',
        name: 'Pricing / Minimalist Dark Grid',
        category: 'Pricing',
        tone: 'mint' as PreviewTone,
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
    },
    {
        id: 'features-cards-light',
        name: 'Feature cards / Light',
        category: 'Features',
        tone: 'blue' as PreviewTone,
        icon: ShieldCheck,
        code: `const features = [
  {
    name: 'Instant deploys',
    desc: 'Ship straight from your branch with zero-downtime releases.',
    icon: Rocket
  },
  {
    name: 'Managed TLS',
    desc: 'Certificates renew automatically across every environment.',
    icon: ShieldCheck
  },
  {
    name: 'Automated backups',
    desc: 'Point-in-time snapshots run on a schedule you control.',
    icon: Server
  }
];

<section className="bg-white px-6 py-20 sm:px-10">
  <div className="mx-auto max-w-2xl text-center">
    <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-600">
      Ship faster
    </span>
    <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
      A calmer way to run infrastructure
    </h2>
    <p className="mt-4 text-base leading-relaxed text-slate-500">
      Every release, certificate and backup is handled for you, so the team can spend its time on the product instead of the plumbing underneath it.
    </p>
  </div>

  <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
    {features.map((feature, index) => (
      <div
        key={feature.name}
        className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100"
      >
        <span className="text-xs font-semibold text-slate-300">0{index + 1}</span>
        <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
          <feature.icon size={20} />
        </div>
        <h3 className="mt-5 text-base font-semibold text-slate-950">{feature.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{feature.desc}</p>
      </div>
    ))}
  </div>
</section>`,
    },
    {
        id: 'hero',
        name: 'Product hero / Split',
        category: 'Hero',
        tone: 'violet' as PreviewTone,
        icon: Sparkles,
        code: `
        import { ArrowUpRight } from "lucide-react"

        export default function OrbitHero() {
          return (
            <section className="grid items-center gap-12 p-20 pt-32 lg:grid-cols-2">
              <div>
                <span className="text-sm font-medium text-violet-400">
                  Introducing Orbit
                </span>
                
                <h1 className="mt-5 text-balance text-6xl font-bold tracking-tight">
                  Your work,
                  <br />
                  in focus.
                </h1>
        
                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition-all hover:bg-zinc-100 active:scale-95">
                  <span>Start building</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>
        
              <div className="min-h-[300px] rounded-3xl bg-violet-200 p-5">
                {/* product visual */}
              </div>
            </section>
          )
        }
        `,
    },
    {
        id: 'feature-email-api',
        name: 'Product Features / Live email API',
        category: 'Features',
        tone: 'mint' as PreviewTone,
        icon: Send,
        code: `
        import { useEffect, useRef, useState } from 'react';
        import { AnimatePresence, motion } from 'framer-motion';

        const statusOptions = [
          {
            key: 'delivered',
            label: 'Delivered',
            email: 'delivered@prism.dev',
            badgeClass: 'bg-[color:var(--green)]/20 text-[color:var(--green)]',
          },
          {
            key: 'bounced',
            label: 'Bounced',
            email: 'bounced@prism.dev',
            badgeClass: 'bg-[color:var(--orange)]/20 text-[color:var(--orange)]',
          },
          {
            key: 'complained',
            label: 'Complained',
            email: 'complained@prism.dev',
            badgeClass: 'border border-[color:var(--orange)]/60 text-[color:var(--orange)]',
          },
        ];

        const feedTemplates = [
          {
            type: 'Bounced',
            icon: AlertTriangle,
            textClass: 'text-[color:var(--orange)]',
            badgeClass: 'bg-[color:var(--orange)]/15 text-[color:var(--orange)]',
            ringClass: 'border-[color:var(--orange)]/50',
            rows: [
              ['to', 'jackson@company.com'],
              ['with type', 'Spam'],
            ],
            meta: [
              { icon: Mail, label: 'Gmail' },
              { icon: Monitor, label: 'macOS' },
            ],
          },
          {
            type: 'Clicked',
            icon: MousePointer2,
            textClass: 'text-[color:var(--purple)]',
            badgeClass: 'bg-[color:var(--purple)]/15 text-[color:var(--purple)]',
            ringClass: 'border-[color:var(--purple)]/50',
            rows: [
              ['from', 'emma@company.com'],
              ['on', 'Magic Link'],
            ],
            meta: [
              { icon: Mail, label: 'Outlook' },
              { icon: Monitor, label: 'Windows' },
            ],
          },
          {
            type: 'Delivered',
            icon: CheckCircle2,
            textClass: 'text-[color:var(--green)]',
            badgeClass: 'bg-[color:var(--green)]/15 text-[color:var(--green)]',
            ringClass: 'border-[color:var(--green)]/50',
            rows: [
              ['to', 'noah@company.com'],
              ['with subject', 'Hello world'],
            ],
            meta: [
              { icon: Mail, label: 'Gmail' },
              { icon: Monitor, label: 'macOS' },
            ],
          },
          {
            type: 'Opened',
            icon: Eye,
            textClass: 'text-[color:var(--blue)]',
            badgeClass: 'bg-[color:var(--blue)]/15 text-[color:var(--blue)]',
            ringClass: 'border-[color:var(--blue)]/50',
            rows: [
              ['from', 'lea@company.com'],
              ['with subject', 'Invoice'],
            ],
            meta: [
              { icon: Mail, label: 'Apple Mail' },
              { icon: Monitor, label: 'iOS' },
            ],
          },
          {
            type: 'Complained',
            icon: Frown,
            textClass: 'text-[color:var(--orange)]',
            badgeClass: 'bg-[color:var(--orange)]/15 text-[color:var(--orange)]',
            ringClass: 'border-[color:var(--orange)]/50',
            rows: [
              ['to', 'isabella@company.com'],
              ['with feedback', 'Spam'],
            ],
            meta: [
              { icon: Mail, label: 'Thunderbird' },
              { icon: Monitor, label: 'Windows' },
            ],
          },
        ];

        let feedCounter = 0;
        let logCounter = 0;

        function randomId() {
          const chunk = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          return chunk() + chunk() + '-' + chunk() + '-' + chunk() + '-' + chunk() + '-' + chunk() + chunk() + chunk();
        }

        function timeNow() {
          const d = new Date();
          const pad = (n) => String(n).padStart(2, '0');
          return pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
        }

        function dateNow() {
          return new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }

        export default function EmailApiHero() {
          const [status, setStatus] = useState(statusOptions[1]);
          const [menuOpen, setMenuOpen] = useState(false);
          const [logs, setLogs] = useState(() => [{ id: randomId(), key: 'log-seed' }]);
          const [feed, setFeed] = useState(() => [
            { ...feedTemplates[2], key: 'seed', time: timeNow(), date: dateNow() },
          ]);
          const templateIndex = useRef(0);

          function pushLog() {
            logCounter += 1;
            setLogs((current) => [{ id: randomId(), key: 'log-' + logCounter }, ...current].slice(0, 6));
          }

          function handleSelect(option) {
            setStatus(option);
            setMenuOpen(false);
            pushLog();
          }

          useEffect(() => {
            const logTimer = setInterval(() => {
              pushLog();
            }, 1500);
            return () => clearInterval(logTimer);
          }, []);

          useEffect(() => {
            const feedTimer = setInterval(() => {
              templateIndex.current = (templateIndex.current + 1) % feedTemplates.length;
              feedCounter += 1;
              const next = {
                ...feedTemplates[templateIndex.current],
                key: 'feed-' + feedCounter,
                time: timeNow(),
                date: dateNow(),
              };
              setFeed((current) => [next, ...current].slice(0, 3));
            }, 2600);
            return () => clearInterval(feedTimer);
          }, []);

          return (
            <section className="relative overflow-hidden bg-[color:var(--bg)] px-6 py-20 sm:px-10">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
                style={{ background: 'radial-gradient(60% 100% at 50% 0%, rgba(121,242,176,0.08), transparent 70%)' }}
              />

              <div className="relative mx-auto max-w-6xl">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[color:var(--green)]">
                    First-class email
                  </span>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
                    Email infrastructure,
                    <br />
                    built for <span className="italic text-[color:var(--muted)]">developers.</span>
                  </h1>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-[color:var(--muted)]">
                    A small team of engineers who love building tools for other engineers. Our goal is an email platform that just works.
                  </p>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-2">
                  <div
                    className="relative flex h-[500px] flex-col overflow-hidden rounded-tr-3xl rounded-tl-3xl border-l border-r border-t border-[color:var(--line)]/60 p-5"
                    style={{ background: 'radial-gradient(70% 30% at 50% 0%, rgba(121,242,176,0.08), transparent 70%)' }}
                  >
                    <div className="mt-20 flex flex-wrap items-center justify-center gap-2 sm:justify-between rounded-full border border-[color:var(--line)] bg-[color:var(--bg)] py-2 pl-1.5 pr-3.5 transition hover:border-[color:var(--line)]">
                      <div className="relative">
                        <div
                          onClick={() => setMenuOpen((open) => !open)}
                          className="flex items-center gap-2.5 py-2 pl-1.5 pr-3.5  hover:shadow-none"
                        >
                          <span className={'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ' + status.badgeClass}>
                            {status.key === 'delivered' && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--green)]" />}
                            {status.label}
                          </span>
                          <span className="text-sm text-[color:var(--muted)]">{status.email}</span>
                          <ChevronDown
                            size={13}
                            className={'text-[color:var(--muted)] transition-transform duration-200 ' + (menuOpen ? 'rotate-180' : '')}
                          />
                        </div>

                        <AnimatePresence>
                          {menuOpen && (
                            <>
                              <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                              <motion.div
                                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                                transition={{ duration: 0.15 }}
                                className="absolute left-0 top-full z-20 mt-2 w-auto overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-2)] p-1.5 shadow-2xl"
                              >
                                {statusOptions.map((option) => (
                                  <button
                                    key={option.key}
                                    onClet ick={() => handleSelect(option)}
                                    className="flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left transition hover:bg-[color:var(--panel)]"
                                  >
                                    <span className="flex w-4 shrink-0 justify-center">
                                      {option.key === status.key && <Check size={13} className="text-[color:var(--text)]" />}
                                    </span>
                                    <span className={'rounded-full px-2.5 py-1 text-[11px] font-semibold ' + option.badgeClass}>
                                      {option.label}
                                    </span>
                                    <span className="text-xs text-[color:var(--muted)]">{option.email}</span>
                                  </button>
                                ))}
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>
                      </div>

                      <button
                        onClick={pushLog}
                        className="inline-flex hover:shadows-none shrink-0 items-center gap-1.5 rounded-full bg-[color:var(--text)] px-3.5 py-1.5 text-xs font-semibold text-[color:var(---bg)] transition hover:opacity-90 active:scale-95"
                      >
                        <FlaskConical size={12} />
                        Send
                      </button>
                    </div>

                    <div
                      className="relative mt-7 flex-1 overflow-hidden"
                      style={{
                        maskImage: 'linear-gradient(180deg, black 72%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(180deg, black 72%, transparent 100%)',
                      }}
                    >
                      <div className="space-y-2 pl-1 font-mono text-[11px]">
                        <AnimatePresence initial={false}>
                          {logs.map((log) => (
                            <motion.div
                              key={log.key}
                              layout
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.4, ease: 'easeOut' }}
                              className="flex items-center gap-2 text-[color:var(--muted)]"
                            >
                              <span className="text-[color:var(--green)]">HTTP 200:</span>
                              <span>{'{ "id": "' + log.id + '" }'}</span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center gap-2 pt-6 text-[11px] text-[color:var(--muted)]">
                      <div>
                        <FlaskConical size={20} className="text-[color:var(--text)]" />
                        <h3 className="mt-4 text-base font-semibold text-[color:var(--text)]">Test mode</h3>
                        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[color:var(--muted)]">
                          Simulate delivery events and experiment with the API without the risk of ever sending a real email to a real person.
                        </p>
                        <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--text)] transition hover:text-[color:var(--green)]">
                          Learn more <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="relative flex h-[500px] flex-col overflow-hidden rounded-tr-3xl rounded-tl-3xl border-l border-r border-t border-[color:var(--line)]/60 p-8"
                    style={{ background: 'none' }}
                  >
                    <div
                      className="relative flex-1 overflow-hidden"
                      style={{
                        maskImage: 'linear-gradient(180deg, black 72%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(180deg, black 72%, transparent 100%)',
                      }}
                    >
                      <AnimatePresence initial={false}>
                        {feed.map((event, index) => {
                          const EventIcon = event.icon;
                          return (
                            <motion.div
                              key={event.key}
                              layout
                              initial={{ opacity: 0, y: -16 }}
                              animate={{ opacity: index === 0 ? 1 : 0.55 - index * 0.15, y: 0 }}
                              exit={{ opacity: 0, y: 16 }}
                              transition={{ duration: 0.5, ease: 'easeOut' }}
                              className="flex gap-3"
                            >
                              <div className="flex flex-col items-center">
                                <div className={'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-[color:var(--bg)]/60 ' + event.ringClass}>
                                  <EventIcon size={15} className={event.textClass} />
                                </div>
                                {index < feed.length - 1 && <span className="my-1 w-px flex-1 bg-[color:var(--line)]/60" />}
                              </div>

                              <div className="flex-1 pb-7">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className={'rounded-md px-2 py-0.5 text-[11px] font-semibold ' + event.badgeClass}>{event.type}</span>
                                  <span className="text-[11px] text-[color:var(--muted)]">{event.date}  {event.time}</span>
                                </div>
                                <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px] text-[color:var(--muted)]">
                                  {event.rows.map((row) => (
                                    <span key={row[0] + row[1]} className="flex items-center gap-1.5">
                                      <span>{row[0]}</span>
                                      <span className="rounded-md border border-[color:var(--line)]/70 px-2 py-0.5 font-medium text-[color:var(--text)]">{row[1]}</span>
                                    </span>
                                  ))}
                                </div>
                                {index === 0 && (
                                  <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px] text-[color:var(--muted)]">
                                    {event.meta.map((item) => (
                                      <span key={item.label} className="inline-flex items-center gap-1 rounded-md border border-[color:var(--line)]/70 px-2 py-0.5 font-medium text-[color:var(--text)]">
                                        <item.icon size={10} />
                                        {item.label}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>
                    <div className="mt-5">
                        <Webhook size={20} className="text-[color:var(--text)]" />
                        <h3 className="mt-4 text-base font-semibold text-[color:var(--text)]">Modular webhooks</h3>
                        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[color:var(--muted)]">
                          Get notified on your own server the instant an email is delivered, opened, bounced, or clicked.
                        </p>
                        <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--text)] transition hover:text-[color:var(--green)]">
                          Learn more <ArrowUpRight size={14} />
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }
        `,
    },
    {
        id: 'pricing',
        name: 'Pricing comparison',
        category: 'Pricing',
        tone: 'blue' as PreviewTone,
        icon: Zap,
        code: `const plans = [\n  { name: "Basic", price: "$19", features: ["3 projects", "Basic analytics", "Email support"] },\n  { name: "Pro", price: "$49", features: ["Unlimited projects", "Advanced analytics", "Priority support"] },\n  { name: "Enterprise", price: "$99", features: ["Unlimited everything", "Custom integrations", "Dedicated success"] },\n];\n\n<section className="grid gap-5 md:grid-cols-3">\n  {plans.map((plan) => (\n    <article className="rounded-2xl border bg-white p-7 shadow-sm">\n      <h3 className="text-lg font-semibold text-slate-950">{plan.name}</h3>\n      <p className="mt-5 text-4xl font-bold text-slate-950">{plan.price}<span className="text-sm font-normal text-slate-500">/mo</span></p>\n      <ul className="mt-7 space-y-3 text-sm text-slate-600">\n        {plan.features.map((feature) => <li><Check className="mr-2 inline text-emerald-600" />{feature}</li>)}\n      </ul>\n      <button className="mt-8 w-full rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-600">Choose {plan.name}</button>\n    </article>\n  ))}\n</section>`,
    },
    {
        id: 'stats',
        name: 'Metrics that matter',
        category: 'Stats',
        tone: 'amber' as PreviewTone,
        icon: Layers3,
        code: `<dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">\n  {metrics.map(({ label, value, change }) => (\n    <div>\n      <dt className="text-sm text-zinc-500">{label}</dt>\n      <dd className="mt-3 text-4xl font-semibold text-zinc-950">{value}</dd>\n      <span className="mt-2 inline-flex text-xs text-emerald-700">{change} this month</span>\n    </div>\n  ))}\n</dl>`,
    },
    {
        id: 'cta',
        name: 'Call to action',
        category: 'CTA',
        tone: 'mint' as PreviewTone,
        icon: ArrowUpRight,
        code: `<section className="rounded-3xl bg-emerald-300 px-8 py-16 text-center">\n  <p className="text-sm font-medium text-emerald-950">Ready when you are</p>\n  <h2 className="mx-auto mt-4 max-w-xl text-5xl font-semibold tracking-tight text-zinc-950">\n    Make something people remember.\n  </h2>\n  <a href="/signup" className="mt-8 inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm text-white">\n    Get started <ArrowUpRight className="ml-2" />\n  </a>\n</section>`,
    },
    {
        id: 'form',
        name: 'Waitlist form',
        category: 'Forms',
        tone: 'violet' as PreviewTone,
        icon: Terminal,
        code: `<form className="mx-auto flex max-w-lg gap-2 rounded-full bg-white p-2 shadow-xl">\n  <label className="sr-only" htmlFor="email">Email address</label>\n  <input id="email" type="email" placeholder="you@company.com"\n    className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none" />\n  <button className="rounded-full bg-zinc-950 px-5 py-3 text-sm text-white">\n    Join the waitlist\n  </button>\n</form>`,
    },
    // ---- Testimonials --------------------------------------------------------
    {
        id: 'testimonial-spotlight',
        name: 'Single quote spotlight',
        category: 'Testimonials',
        tone: 'violet' as PreviewTone,
        icon: Quote,
        code: `<section className="mx-auto max-w-3xl rounded-3xl bg-zinc-950 p-12 text-center text-white">
  <Quote className="mx-auto text-violet-300" size={28} />
  <p className="mt-6 text-2xl font-medium leading-snug">
    "Switching to this stack cut our shipping time in half. It's the calmest our workflow has ever felt."
  </p>
  <div className="mt-8 flex items-center justify-center gap-3">
    <img src="/avatar.jpg" className="h-11 w-11 rounded-full object-cover" alt="Camille Laurent" />
    <div className="text-left">
      <p className="text-sm font-semibold">Camille Laurent</p>
      <p className="text-xs text-zinc-400">Head of Product, Nova</p>
    </div>
  </div>
</section>`,
    },
    {
        id: 'testimonial-grid',
        name: 'Testimonial grid',
        category: 'Testimonials',
        tone: 'mint' as PreviewTone,
        icon: Quote,
        code: `const reviews = [
  { name: "Sofia Mendes", role: "Founder, Arlo", quote: "The best UI kit we've shipped with. Every block just works." },
  { name: "Théo Ricard", role: "Design Lead, Orbit", quote: "Consistent, accessible, and genuinely fast to customize." },
  { name: "Priya Nair", role: "CTO, Frame", quote: "Cut our design-to-dev handoff time down to almost nothing." },
];
 
<section className="grid gap-5 md:grid-cols-3">
  {reviews.map((review) => (
    <article className="rounded-2xl border border-zinc-200 bg-white p-7">
      <Quote className="text-emerald-500" size={20} />
      <p className="mt-4 text-sm text-zinc-700">{review.quote}</p>
      <p className="mt-6 text-sm font-semibold text-zinc-950">{review.name}</p>
      <p className="text-xs text-zinc-500">{review.role}</p>
    </article>
  ))}
</section>`,
    },

    // ---- Blog Sections --------------------------------------------------------
    {
        id: 'blog-grid',
        name: 'Blog grid',
        category: 'Blog',
        tone: 'blue' as PreviewTone,
        icon: Newspaper,
        code: `const posts = [
  { tag: "Engineering", title: "Rebuilding our design system from scratch", date: "Aug 12" },
  { tag: "Product", title: "How we think about onboarding friction", date: "Aug 5" },
  { tag: "Culture", title: "What remote-first actually looks like in 2026", date: "Jul 29" },
];
 
<section className="grid gap-6 md:grid-cols-3">
  {posts.map((post) => (
    <article className="group cursor-pointer">
      <div className="aspect-[4/3] rounded-2xl bg-blue-100" />
      <span className="mt-4 inline-block text-xs font-medium text-blue-600">{post.tag}</span>
      <h3 className="mt-2 text-lg font-semibold text-zinc-950 group-hover:underline">{post.title}</h3>
      <p className="mt-1 text-xs text-zinc-500">{post.date} · 6 min read</p>
    </article>
  ))}
</section>`,
    },
    {
        id: 'blog-featured',
        name: 'Featured article + list',
        category: 'Blog',
        tone: 'amber' as PreviewTone,
        icon: Newspaper,
        code: `<section className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
  <article className="rounded-3xl bg-zinc-950 p-8 text-white">
    <span className="text-xs font-medium text-amber-300">Featured</span>
    <h2 className="mt-3 text-3xl font-semibold leading-tight">
      Why most design systems fail after year one
    </h2>
    <p className="mt-3 text-sm text-zinc-400">A look at the patterns that actually survive contact with a growing team.</p>
  </article>
  <div className="space-y-5">
    {["The case for fewer components", "Shipping accessibility by default", "Naming things is still the hardest part"].map((title) => (
      <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
        <span className="text-sm font-medium text-zinc-800">{title}</span>
        <ArrowUpRight className="text-zinc-400" size={16} />
      </div>
    ))}
  </div>
</section>`,
    },

    // ---- Navbars --------------------------------------------------------------
    {
        id: 'navbar-simple',
        name: 'Simple nav with CTA',
        category: 'Navbars',
        tone: 'mint' as PreviewTone,
        icon: PanelTop,
        code: `<nav className="flex items-center justify-between rounded-full border border-zinc-200 bg-white px-6 py-3">
  <span className="text-lg font-semibold text-zinc-950">brand</span>
  <div className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
    <a href="#">Product</a>
    <a href="#">Pricing</a>
    <a href="#">Docs</a>
  </div>
  <button className="rounded-full bg-zinc-950 px-4 py-2 text-sm text-white">Sign in</button>
</nav>`,
    },
    {
        id: 'navbar-mega',
        name: 'Nav with dropdown menu',
        category: 'Navbars',
        tone: 'violet' as PreviewTone,
        icon: ChevronDown,
        code: `<nav className="flex items-center justify-between border-b border-zinc-200 bg-white px-8 py-4">
  <span className="text-lg font-semibold text-zinc-950">brand</span>
  <div className="hidden items-center gap-7 text-sm text-zinc-600 md:flex">
    <button className="flex items-center gap-1">Products <ChevronDown size={14} /></button>
    <a href="#">Solutions</a>
    <a href="#">Resources</a>
    <a href="#">Pricing</a>
  </div>
  <div className="flex items-center gap-3">
    <a href="#" className="text-sm text-zinc-600">Log in</a>
    <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white">Get started</button>
  </div>
</nav>`,
    },

    // ---- Sidebars ---------------------------------------------------------------
    {
        id: 'sidebar-icons',
        name: 'Icon + label sidebar',
        category: 'Sidebars',
        tone: 'blue' as PreviewTone,
        icon: PanelLeft,
        code: `const items = [
  { icon: Grid2X2, label: "Overview", active: true },
  { icon: Layers3, label: "Projects" },
  { icon: Table2, label: "Reports" },
];
 
<aside className="w-56 space-y-1 rounded-2xl border border-zinc-200 bg-white p-3">
  {items.map(({ icon: Icon, label, active }) => (
    <button className={\`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm \${active ? "bg-blue-50 text-blue-700" : "text-zinc-600 hover:bg-zinc-50"}\`}>
      <Icon size={16} />
      {label}
    </button>
  ))}
</aside>`,
    },
    {
        id: 'sidebar-dashboard',
        name: 'Dashboard sidebar with user card',
        category: 'Sidebars',
        tone: 'amber' as PreviewTone,
        icon: PanelLeft,
        code: `<aside className="flex h-full w-60 flex-col justify-between rounded-2xl bg-zinc-950 p-4 text-white">
  <div className="space-y-1">
    <span className="px-3 text-xs uppercase tracking-wide text-zinc-500">Workspace</span>
    {["Dashboard", "Analytics", "Team", "Settings"].map((label, i) => (
      <button className={\`w-full rounded-lg px-3 py-2.5 text-left text-sm \${i === 0 ? "bg-white/10" : "text-zinc-400 hover:bg-white/5"}\`}>
        {label}
      </button>
    ))}
  </div>
  <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
    <div className="h-9 w-9 rounded-full bg-amber-300" />
    <div>
      <p className="text-sm font-medium">Jonas Weber</p>
      <p className="text-xs text-zinc-400">Free plan</p>
    </div>
  </div>
</aside>`,
    },

    // ---- Command Palettes ---------------------------------------------------------
    {
        id: 'command-palette',
        name: 'Command palette (⌘K)',
        category: 'Command Palettes',
        tone: 'violet' as PreviewTone,
        icon: Command,
        code: `<div className="mx-auto max-w-lg rounded-2xl border border-zinc-200 bg-white shadow-2xl">
  <div className="flex items-center gap-2 border-b border-zinc-100 px-4 py-3">
    <Search size={16} className="text-zinc-400" />
    <input placeholder="Search commands..." className="flex-1 text-sm outline-none" />
    <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs text-zinc-500">esc</kbd>
  </div>
  <div className="p-2">
    <span className="px-2 text-xs font-medium text-zinc-400">Actions</span>
    {["Create new project", "Invite teammate", "Open settings"].map((label) => (
      <button className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-zinc-700 hover:bg-violet-50">
        <Command size={14} className="text-violet-500" />
        {label}
      </button>
    ))}
  </div>
</div>`,
    },
    {
        id: 'command-palette-recent',
        name: 'Command palette with recents',
        category: 'Command Palettes',
        tone: 'mint' as PreviewTone,
        icon: Command,
        code: `<div className="mx-auto max-w-lg rounded-2xl border border-zinc-200 bg-white shadow-2xl">
  <div className="flex items-center gap-2 border-b border-zinc-100 px-4 py-3">
    <Search size={16} className="text-zinc-400" />
    <input placeholder="Jump to a page or run a command..." className="flex-1 text-sm outline-none" />
  </div>
  <div className="p-2">
    <span className="px-2 text-xs font-medium text-zinc-400">Recent</span>
    {["Billing settings", "Q3 report.xlsx", "Team permissions"].map((label) => (
      <button className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm text-zinc-700 hover:bg-emerald-50">
        <span>{label}</span>
        <span className="text-xs text-zinc-400">Enter ↵</span>
      </button>
    ))}
  </div>
</div>`,
    },

    // ---- Tables --------------------------------------------------------------------
    {
        id: 'table-status',
        name: 'Data table with status badges',
        category: 'Tables',
        tone: 'blue' as PreviewTone,
        icon: Table2,
        code: `const rows = [
  { name: "Landing page redesign", owner: "Sofia M.", status: "In progress" },
  { name: "Q3 marketing site", owner: "Théo R.", status: "Done" },
  { name: "Onboarding revamp", owner: "Priya N.", status: "Blocked" },
];
 
<table className="w-full overflow-hidden rounded-xl border border-zinc-200 text-sm">
  <thead className="bg-zinc-50 text-left text-xs uppercase text-zinc-500">
    <tr><th className="px-4 py-3">Project</th><th className="px-4 py-3">Owner</th><th className="px-4 py-3">Status</th></tr>
  </thead>
  <tbody>
    {rows.map((row) => (
      <tr className="border-t border-zinc-100">
        <td className="px-4 py-3 font-medium text-zinc-900">{row.name}</td>
        <td className="px-4 py-3 text-zinc-600">{row.owner}</td>
        <td className="px-4 py-3">
          <span className={\`rounded-full px-2 py-1 text-xs \${row.status === "Done" ? "bg-emerald-100 text-emerald-700" : row.status === "Blocked" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}\`}>
            {row.status}
          </span>
        </td>
      </tr>
    ))}
  </tbody>
</table>`,
    },
    {
        id: 'table-actions',
        name: 'Table with row actions',
        category: 'Tables',
        tone: 'amber' as PreviewTone,
        icon: Table2,
        code: `<div className="overflow-hidden rounded-xl border border-zinc-200">
  <table className="w-full text-sm">
    <thead className="bg-zinc-50 text-left text-xs uppercase text-zinc-500">
      <tr><th className="px-4 py-3">Invoice</th><th className="px-4 py-3">Amount</th><th className="px-4 py-3"></th></tr>
    </thead>
    <tbody>
      {[["#INV-2041", "$1,240"], ["#INV-2040", "$890"], ["#INV-2039", "$2,150"]].map(([id, amount]) => (
        <tr className="border-t border-zinc-100">
          <td className="px-4 py-3 font-medium text-zinc-900">{id}</td>
          <td className="px-4 py-3 text-zinc-600">{amount}</td>
          <td className="px-4 py-3 text-right">
            <button className="rounded-lg px-3 py-1.5 text-xs font-medium text-amber-700 hover:bg-amber-50">View</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  <div className="flex items-center justify-between border-t border-zinc-100 px-4 py-3 text-xs text-zinc-500">
    <span>Showing 3 of 24</span>
    <div className="flex gap-1">
      <button className="rounded px-2 py-1 hover:bg-zinc-50">Prev</button>
      <button className="rounded px-2 py-1 hover:bg-zinc-50">Next</button>
    </div>
  </div>
</div>`,
    },

    // ---- Product Overviews ------------------------------------------------------------
    {
        id: 'product-gallery',
        name: 'Product gallery + details',
        category: 'Product Overviews',
        tone: 'mint' as PreviewTone,
        icon: Package,
        code: `<section className="grid gap-10 lg:grid-cols-2">
  <div className="grid grid-cols-4 gap-3">
    <div className="col-span-4 aspect-square rounded-2xl bg-emerald-100" />
    <div className="aspect-square rounded-xl bg-emerald-50" />
    <div className="aspect-square rounded-xl bg-emerald-50" />
    <div className="aspect-square rounded-xl bg-emerald-50" />
    <div className="aspect-square rounded-xl bg-emerald-50" />
  </div>
  <div>
    <span className="text-xs font-medium text-emerald-600">In stock</span>
    <h1 className="mt-2 text-3xl font-semibold text-zinc-950">Aria Desk Lamp</h1>
    <p className="mt-3 text-2xl font-semibold text-zinc-950">$89</p>
    <p className="mt-4 text-sm text-zinc-600">Warm, adjustable lighting with a solid oak base. Designed to last, built to fit any desk.</p>
    <button className="mt-6 w-full rounded-xl bg-zinc-950 py-3 text-sm font-semibold text-white">Add to cart</button>
  </div>
</section>`,
    },
    {
        id: 'product-tabs',
        name: 'Product overview with tabs',
        category: 'Product Overviews',
        tone: 'violet' as PreviewTone,
        icon: Package,
        code: `const [tab, setTab] = useState("description");
 
<section className="grid gap-10 lg:grid-cols-2">
  <div className="aspect-square rounded-2xl bg-violet-100" />
  <div>
    <h1 className="text-3xl font-semibold text-zinc-950">Orbit Chair</h1>
    <p className="mt-2 text-2xl font-semibold text-zinc-950">$249</p>
    <div className="mt-6 flex gap-6 border-b border-zinc-200 text-sm">
      {["description", "specs", "reviews"].map((t) => (
        <button onClick={() => setTab(t)} className={\`pb-3 capitalize \${tab === t ? "border-b-2 border-zinc-950 font-medium text-zinc-950" : "text-zinc-500"}\`}>
          {t}
        </button>
      ))}
    </div>
    <p className="mt-4 text-sm text-zinc-600">
      {tab === "description" && "An ergonomic chair built for long, focused work sessions."}
      {tab === "specs" && "Aluminum frame · Recycled mesh back · 5-year warranty."}
      {tab === "reviews" && "4.8 out of 5, based on 214 reviews."}
    </p>
  </div>
</section>`,
    },

    // ---- Product Lists -----------------------------------------------------------------
    {
        id: 'product-grid-list',
        name: 'Product grid',
        category: 'Product Lists',
        tone: 'blue' as PreviewTone,
        icon: ShoppingBag,
        code: `const products = [
  { name: "Aria Lamp", price: "$89" },
  { name: "Orbit Chair", price: "$249" },
  { name: "Nova Desk", price: "$399" },
  { name: "Frame Shelf", price: "$129" },
];
 
<div className="grid grid-cols-2 gap-5 md:grid-cols-4">
  {products.map((product) => (
    <div className="group cursor-pointer">
      <div className="aspect-square rounded-xl bg-blue-100" />
      <p className="mt-3 text-sm font-medium text-zinc-900">{product.name}</p>
      <p className="text-sm text-zinc-500">{product.price}</p>
    </div>
  ))}
</div>`,
    },
    {
        id: 'product-rows',
        name: 'Product list rows',
        category: 'Product Lists',
        tone: 'amber' as PreviewTone,
        icon: ShoppingBag,
        code: `const products = [
  { name: "Aria Lamp", desc: "Warm adjustable lighting", price: "$89" },
  { name: "Orbit Chair", desc: "Ergonomic, all-day comfort", price: "$249" },
];
 
<div className="divide-y divide-zinc-100 rounded-2xl border border-zinc-200">
  {products.map((product) => (
    <div className="flex items-center gap-4 p-4">
      <div className="h-16 w-16 rounded-lg bg-amber-100" />
      <div className="flex-1">
        <p className="text-sm font-medium text-zinc-900">{product.name}</p>
        <p className="text-xs text-zinc-500">{product.desc}</p>
      </div>
      <p className="text-sm font-semibold text-zinc-900">{product.price}</p>
      <button className="rounded-lg bg-zinc-950 px-3 py-2 text-xs font-medium text-white">Add</button>
    </div>
  ))}
</div>`,
    },

    // ---- Shopping Carts -----------------------------------------------------------------
    {
        id: 'cart-drawer',
        name: 'Cart summary drawer',
        category: 'Shopping Carts',
        tone: 'mint' as PreviewTone,
        icon: ShoppingCart,
        code: `const items = [
  { name: "Aria Lamp", qty: 1, price: "$89" },
  { name: "Frame Shelf", qty: 2, price: "$258" },
];
 
<aside className="w-80 rounded-2xl border border-zinc-200 bg-white p-5">
  <h3 className="text-lg font-semibold text-zinc-950">Your cart</h3>
  <div className="mt-4 space-y-3">
    {items.map((item) => (
      <div className="flex items-center justify-between text-sm">
        <span className="text-zinc-700">{item.name} × {item.qty}</span>
        <span className="font-medium text-zinc-900">{item.price}</span>
      </div>
    ))}
  </div>
  <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4 text-sm font-semibold text-zinc-950">
    <span>Subtotal</span>
    <span>$347</span>
  </div>
  <button className="mt-4 w-full rounded-xl bg-zinc-950 py-3 text-sm font-semibold text-white">Checkout</button>
</aside>`,
    },
    {
        id: 'cart-promo',
        name: 'Cart with promo code',
        category: 'Shopping Carts',
        tone: 'violet' as PreviewTone,
        icon: ShoppingCart,
        code: `<aside className="w-80 rounded-2xl border border-zinc-200 bg-white p-5">
  <h3 className="text-lg font-semibold text-zinc-950">Order summary</h3>
  <div className="mt-4 flex gap-2">
    <input placeholder="Promo code" className="flex-1 rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none" />
    <button className="rounded-lg bg-violet-100 px-3 py-2 text-sm font-medium text-violet-700">Apply</button>
  </div>
  <div className="mt-4 space-y-2 text-sm text-zinc-600">
    <div className="flex justify-between"><span>Subtotal</span><span>$347.00</span></div>
    <div className="flex justify-between"><span>Discount</span><span className="text-emerald-600">-$34.70</span></div>
    <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
  </div>
  <div className="mt-3 flex justify-between border-t border-zinc-100 pt-3 text-sm font-semibold text-zinc-950">
    <span>Total</span>
    <span>$312.30</span>
  </div>
</aside>`,
    },

    // ---- Checkout Forms ---------------------------------------------------------------------
    {
        id: 'checkout-shipping',
        name: 'Checkout — shipping & payment',
        category: 'Checkout Forms',
        tone: 'blue' as PreviewTone,
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
    },
    {
        id: 'checkout-review',
        name: 'Checkout — order review',
        category: 'Checkout Forms',
        tone: 'amber' as PreviewTone,
        icon: CreditCard,
        code: `<section className="mx-auto grid max-w-3xl gap-8 lg:grid-cols-[1.3fr_1fr]">
  <div className="space-y-4 rounded-2xl border border-zinc-200 p-6">
    <h3 className="text-lg font-semibold text-zinc-950">Review your order</h3>
    {[["Aria Lamp", "$89"], ["Frame Shelf × 2", "$258"]].map(([name, price]) => (
      <div className="flex justify-between text-sm text-zinc-700">
        <span>{name}</span>
        <span className="font-medium text-zinc-900">{price}</span>
      </div>
    ))}
  </div>
  <div className="rounded-2xl bg-zinc-950 p-6 text-white">
    <p className="text-sm text-zinc-400">Total due today</p>
    <p className="mt-1 text-3xl font-semibold">$312.30</p>
    <button className="mt-5 w-full rounded-xl bg-amber-300 py-3 text-sm font-semibold text-zinc-950">Confirm & pay</button>
  </div>
</section>`,
    },
    {
        id: 'form-login-minimal',
        name: 'Login — minimal',
        category: 'Forms',
        tone: 'mint' as PreviewTone,
        icon: Lock,
        code: `import { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/logo';
 
export default function LoginMinimal() {
  const [showPassword, setShowPassword] = useState(false);
 
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--bg)] px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8">
          <h1 className="text-xl font-semibold text-[color:var(--text)]">Welcome back</h1>
          <p className="mt-1 text-sm text-[color:var(--muted)]">Sign in to continue to your workspace.</p>
 
          <form className="mt-7 space-y-4">
            <div>
              <label htmlFor="email" className="text-xs font-medium text-[color:var(--muted)]">Email</label>
              <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--green)]">
                <Mail size={16} className="text-[color:var(--muted)]" />
                <input id="email" type="email" placeholder="you@company.com" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
              </div>
            </div>
 
            <div>
              <label htmlFor="password" className="text-xs font-medium text-[color:var(--muted)]">Password</label>
              <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--green)]">
                <Lock size={16} className="text-[color:var(--muted)]" />
                <input id="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-[color:var(--muted)]">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
 
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-[color:var(--muted)]">
                <input type="checkbox" className="h-3.5 w-3.5 rounded border-[color:var(--line)] bg-transparent accent-[#79f2b0]" />
                Remember me
              </label>
              <a href="#" className="font-medium text-[color:var(--green)] hover:underline">Forgot password?</a>
            </div>
 
            <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--green)] to-[color:var(--green-deep)] py-3 text-sm font-semibold text-[color:var(--bg)] transition hover:opacity-90">
              Sign in
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </button>
          </form>
 
          <p className="mt-6 text-center text-sm text-[color:var(--muted)]">
            Don't have an account? <a href="#" className="font-medium text-[color:var(--text)] hover:text-[color:var(--green)]">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}`,
    },

    // ---- 2. Login split-screen (fond sombre, moderne, dégradé violet/bleu) --
    {
        id: 'form-login-split',
        name: 'Login — split screen',
        category: 'Forms',
        tone: 'violet' as PreviewTone,
        icon: Fingerprint,
        code: `import { Lock, Mail, ArrowRight, Github, Chrome } from 'lucide-react';
import { Logo } from '@/components/logo';
 
export default function LoginSplit() {
  return (
    <div className="grid min-h-screen grid-cols-1 bg-[color:var(--bg)] lg:grid-cols-2">
      <div className="flex flex-col justify-between p-10">
        <Logo />
 
        <div className="mx-auto w-full max-w-sm">
          <h1 className="text-3xl font-semibold text-[color:var(--text)]">Sign in to PRISM</h1>
          <p className="mt-2 text-sm text-[color:var(--muted)]">Access your dashboard and pick up where you left off.</p>
 
          <div className="mt-8 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel)] py-2.5 text-sm text-[color:var(--text)] transition hover:border-[color:var(--green-deep)]/50">
              <Chrome size={16} /> Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel)] py-2.5 text-sm text-[color:var(--text)] transition hover:border-[color:var(--green-deep)]/50">
              <Github size={16} /> GitHub
            </button>
          </div>
 
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[color:var(--line)]" />
            <span className="text-xs text-[color:var(--muted)]">or continue with email</span>
            <div className="h-px flex-1 bg-[color:var(--line)]" />
          </div>
 
          <form className="space-y-4">
            <div className="flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--purple)]">
              <Mail size={16} className="text-[color:var(--muted)]" />
              <input type="email" placeholder="you@company.com" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--purple)]">
              <Lock size={16} className="text-[color:var(--muted)]" />
              <input type="password" placeholder="Password" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
            </div>
            <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--purple)] to-[color:var(--blue)] py-3 text-sm font-semibold text-[color:var(--bg)] transition hover:opacity-90">
              Continue <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
 
        <p className="text-xs text-[color:var(--muted)]">© 2026 PRISM. All rights reserved.</p>
      </div>
 
      <div className="relative hidden overflow-hidden bg-[color:var(--panel)] lg:block">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[color:var(--purple)] opacity-30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[color:var(--blue)] opacity-25 blur-3xl" />
        <div className="relative flex h-full flex-col items-center justify-center p-12 text-center">
          <blockquote className="max-w-md text-2xl font-medium leading-relaxed text-[color:var(--text)]">
            "PRISM cut our shipping time in half. It's the calmest infrastructure tool we've used."
          </blockquote>
          <p className="mt-6 text-sm text-[color:var(--muted)]">Elena Voss — CTO, Northwind</p>
        </div>
      </div>
    </div>
  );
}`,
    },

    // ---- 3. Login (fond blanc, simple) --------------------------------------
    {
        id: 'form-login-white',
        name: 'Login — light',
        category: 'Forms',
        tone: 'blue' as PreviewTone,
        icon: Lock,
        code: `import { Lock, Mail } from 'lucide-react';
 
export default function LoginWhite() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm rounded-2xl border border-zinc-200 p-8 shadow-sm">
        <h1 className="text-xl font-semibold text-zinc-950">Sign in</h1>
        <p className="mt-1 text-sm text-zinc-500">Welcome back, enter your details below.</p>
 
        <form className="mt-7 space-y-4">
          <div>
            <label htmlFor="email" className="text-xs font-medium text-zinc-600">Email</label>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-zinc-200 px-3.5 py-2.5 focus-within:border-zinc-900">
              <Mail size={16} className="text-zinc-400" />
              <input id="email" type="email" placeholder="you@company.com" className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400" />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="text-xs font-medium text-zinc-600">Password</label>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-zinc-200 px-3.5 py-2.5 focus-within:border-zinc-900">
              <Lock size={16} className="text-zinc-400" />
              <input id="password" type="password" placeholder="••••••••" className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400" />
            </div>
          </div>
          <button type="submit" className="w-full rounded-xl bg-zinc-950 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
            Sign in
          </button>
        </form>
 
        <p className="mt-6 text-center text-sm text-zinc-500">
          No account yet? <a href="#" className="font-medium text-zinc-900 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}`,
    },

    // ---- 4. Signup moderne (fond sombre, carte à bordure dégradée) ---------
    {
        id: 'form-signup-modern',
        name: 'Signup — gradient card',
        category: 'Forms',
        tone: 'amber' as PreviewTone,
        icon: UserPlus,
        code: `import { useState } from 'react';
import { User, Mail, Lock, Check } from 'lucide-react';
function Logo() {
    return <Link href="/" className="logo" data-testid="link-logo"><span
        className="logo-mark"><i/><i/><i/></span><span>PRISM</span></Link>;
}
 
export default function SignupModern() {
  const [agreed, setAgreed] = useState(false);
 
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--bg)] px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
 
        <div className="relative rounded-3xl bg-gradient-to-br from-[color:var(--orange)]/40 via-[color:var(--purple)]/30 to-transparent p-px">
          <div className="rounded-3xl bg-[color:var(--panel)] p-8">
            <h1 className="text-xl font-semibold text-[color:var(--text)]">Create your account</h1>
            <p className="mt-1 text-sm text-[color:var(--muted)]">Start your 14-day free trial, no card required.</p>
 
            <form className="mt-7 space-y-4">
              <div className="flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--orange)]">
                <User size={16} className="text-[color:var(--muted)]" />
                <input type="text" placeholder="Full name" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--orange)]">
                <Mail size={16} className="text-[color:var(--muted)]" />
                <input type="email" placeholder="you@company.com" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--orange)]">
                <Lock size={16} className="text-[color:var(--muted)]" />
                <input type="password" placeholder="Create a password" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
              </div>
 
              <button type="button" onClick={() => setAgreed(!agreed)} className="flex items-start gap-2.5 text-left">
                <span className={"mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border " + (agreed ? "border-[color:var(--orange)] bg-[color:var(--orange)]" : "border-[color:var(--line)]")}>
                  {agreed && <Check size={11} className="text-[color:var(--bg)]" />}
                </span>
                <span className="text-xs text-[color:var(--muted)]">I agree to the Terms of Service and Privacy Policy.</span>
              </button>
 
              <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-[color:var(--orange)] to-[color:var(--purple)] py-3 text-sm font-semibold text-[color:var(--bg)] transition hover:opacity-90">
                Create account
              </button>
            </form>
          </div>
        </div>
 
        <p className="mt-6 text-center text-sm text-[color:var(--muted)]">
          Already have an account? <a href="#" className="font-medium text-[color:var(--text)] hover:text-[color:var(--green)]">Sign in</a>
        </p>
      </div>
    </div>
  );
}`,
    },

    // ---- 5. Signup (fond blanc, simple) -------------------------------------
    {
        id: 'form-signup-white',
        name: 'Signup — light',
        category: 'Forms',
        tone: 'mint' as PreviewTone,
        icon: UserPlus,
        code: `import { User, Mail, Lock } from 'lucide-react';
 
export default function SignupWhite() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-xl font-semibold text-zinc-950">Get started</h1>
        <p className="mt-1 text-sm text-zinc-500">Create your account in under a minute.</p>
 
        <form className="mt-7 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input type="text" placeholder="First name" className="rounded-xl border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-900" />
            <input type="text" placeholder="Last name" className="rounded-xl border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-900" />
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-zinc-200 px-3.5 py-2.5 focus-within:border-zinc-900">
            <Mail size={16} className="text-zinc-400" />
            <input type="email" placeholder="you@company.com" className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400" />
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-zinc-200 px-3.5 py-2.5 focus-within:border-zinc-900">
            <Lock size={16} className="text-zinc-400" />
            <input type="password" placeholder="Password" className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400" />
          </div>
          <button type="submit" className="w-full rounded-xl bg-zinc-950 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
            Create account
          </button>
        </form>
 
        <p className="mt-6 text-center text-xs text-zinc-400">
          By signing up you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}`,
    },

    // ---- 6. Vérification OTP (fond sombre, dégradé mint) --------------------
    {
        id: 'form-otp-verification',
        name: 'OTP verification',
        category: 'Forms',
        tone: 'mint' as PreviewTone,
        icon: ShieldCheck,
        code: `
import { useRef, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function OtpVerification() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const next = [...code];
    next[index] = value;
    setCode(next);
    if (value && index < 5) inputs.current[index + 1]?.focus();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--bg)] px-4">
      <div className="w-full max-w-sm rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--green)] to-[color:var(--green-deep)]">
          <ShieldCheck size={22} className="text-[color:var(--bg)]" />
        </div>
        <h1 className="mt-5 text-xl font-semibold text-[color:var(--text)]">Verify your identity</h1>
        <p className="mt-1.5 text-sm text-[color:var(--muted)]">Enter the 6-digit code we sent to your email.</p>

        <div className="mt-7 flex justify-center gap-2.5">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              maxLength={1}
              className="h-12 w-11 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] text-center text-lg font-semibold text-[color:var(--text)] outline-none focus:border-[color:var(--green)]"
            />
          ))}
        </div>

        <button type="button" className="mt-8 w-full rounded-xl bg-gradient-to-r from-[color:var(--green)] to-[color:var(--green-deep)] py-3 text-sm font-semibold text-[color:var(--bg)] transition hover:opacity-90">
          Verify code
        </button>

        <p className="mt-5 text-sm text-[color:var(--muted)]">
          Didn't get a code? <button className="font-medium text-[color:var(--green)] hover:underline">Prism</button>
        </p>
      </div>
    </div>
  );
}`,
    },

    // ---- 7. Contact moderne (fond sombre, panneau infos + dégradé bleu) ----
    {
        id: 'form-contact-modern',
        name: 'Contact — with info panel',
        category: 'Forms',
        tone: 'blue' as PreviewTone,
        icon: Mail,
        code: `import { Mail, Phone, MapPin, Send } from 'lucide-react';
 
export default function ContactModern() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--bg)] px-6 py-20">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[color:var(--blue)] opacity-20 blur-3xl" />
 
      <div className="relative mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="text-sm font-semibold text-[color:var(--blue)]">Get in touch</p>
          <h2 className="mt-2 text-4xl font-semibold text-[color:var(--text)]">Let's talk about your project</h2>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
            Our team usually replies within one business day. For urgent matters, reach us directly below.
          </p>
 
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-sm text-[color:var(--text)]">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--line)] bg-[color:var(--panel)]">
                <Mail size={16} className="text-[color:var(--blue)]" />
              </span>
              hello@prism.app
            </div>
            <div className="flex items-center gap-3 text-sm text-[color:var(--text)]">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--line)] bg-[color:var(--panel)]">
                <Phone size={16} className="text-[color:var(--blue)]" />
              </span>
              +1 (415) 555-0134
            </div>
            <div className="flex items-center gap-3 text-sm text-[color:var(--text)]">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--line)] bg-[color:var(--panel)]">
                <MapPin size={16} className="text-[color:var(--blue)]" />
              </span>
              San Francisco, CA
            </div>
          </div>
        </div>
 
        <form className="space-y-4 rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)]/70 p-7 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-3">
            <input type="text" placeholder="Your name" className="rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)] focus:border-[color:var(--blue)]" />
            <input type="email" placeholder="Email address" className="rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)] focus:border-[color:var(--blue)]" />
          </div>
          <input type="text" placeholder="Subject" className="w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)] focus:border-[color:var(--blue)]" />
          <textarea rows={5} placeholder="Tell us about your project..." className="w-full resize-none rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-3 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)] focus:border-[color:var(--blue)]" />
          <button type="submit" className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--blue)] to-[color:var(--purple)] px-5 py-3 text-sm font-semibold text-[color:var(--bg)] transition hover:opacity-90">
            Send message <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}`,
    },

    // ---- 8. Contact (fond blanc, simple) ------------------------------------
    {
        id: 'form-contact-white',
        name: 'Contact — light',
        category: 'Forms',
        tone: 'blue' as PreviewTone,
        icon: Mail,
        code: `import { Send } from 'lucide-react';

export default function ContactWhite() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-lg rounded-2xl border border-zinc-200 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-zinc-950">Contact us</h2>
        <p className="mt-1.5 text-sm text-zinc-500">Fill out the form and we'll get back to you shortly.</p>

        <form className="mt-6 space-y-4">
          <input type="text" placeholder="Your name" className="w-full rounded-xl border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-900" />
          <input type="email" placeholder="Email address" className="w-full rounded-xl border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-900" />
          <textarea rows={4} placeholder="Your message" className="w-full resize-none rounded-xl border border-zinc-200 px-3.5 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-900" />
          <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
            Send message <Send size={16} />
          </button>
        </form>
      </section>
  );
}`,
    },

    // ---- 9. Newsletter (fond sombre, hero dégradé) --------------------------
    {
        id: 'form-newsletter-gradient',
        name: 'Newsletter — gradient hero',
        category: 'Newsletter',
        tone: 'mint' as PreviewTone,
        icon: Send,
        code: ` import { useState } from 'react';
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
                }`,
    },

    // ---- 10. Mot de passe oublié (fond sombre, dégradé orange/violet) ------
    {
        id: 'form-forgot-password',
        name: 'Forgot password',
        category: 'Forms',
        tone: 'amber' as PreviewTone,
        icon: KeyRound,
        code: `import { useState } from 'react';
import { KeyRound, Mail, ArrowLeft } from 'lucide-react';

function Logo() {
    return <Link href="/" className="logo" data-testid="link-logo"><span
        className="logo-mark"><i/><i/><i/></span><span>PRISM</span></Link>;
}
 
export default function ForgotPassword() {
  const [sent, setSent] = useState(false);
 
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--bg)] px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
 
        <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--orange)] to-[color:var(--purple)]">
            <KeyRound size={20} className="text-[color:var(--bg)]" />
          </div>
          <h1 className="mt-5 text-xl font-semibold text-[color:var(--text)]">Reset your password</h1>
          <p className="mt-1.5 text-sm text-[color:var(--muted)]">
            Enter the email tied to your account and we'll send a reset link.
          </p>
 
          <form className="mt-7 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className="flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 text-left focus-within:border-[color:var(--orange)]">
              <Mail size={16} className="text-[color:var(--muted)]" />
              <input type="email" placeholder="you@company.com" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
            </div>
            <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-[color:var(--orange)] to-[color:var(--purple)] py-3 text-sm font-semibold text-[color:var(--bg)] transition hover:opacity-90">
              {sent ? 'Check your inbox' : 'Send reset link'}
            </button>
          </form>
 
          <a href="#" className="mt-6 flex items-center justify-center gap-1.5 text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--text)]">
            <ArrowLeft size={14} /> Back to sign in
          </a>
        </div>
      </div>
    </div>
  );
}`,
    },

    // ---- 11. Paramètres de profil (fond sombre, avatar + anneau dégradé) ---
    {
        id: 'form-profile-settings',
        name: 'Profile settings',
        category: 'Forms',
        tone: 'mint' as PreviewTone,
        icon: Settings,
        code: `import { Camera, User, Mail } from 'lucide-react';
 
export default function ProfileSettings() {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8">
      <h2 className="text-lg font-semibold text-[color:var(--text)]">Profile settings</h2>
      <p className="mt-1 text-sm text-[color:var(--muted)]">Update your personal information and photo.</p>
 
      <div className="mt-7 flex items-center gap-5">
        <div className="relative">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[color:var(--green)] via-[color:var(--blue)] to-[color:var(--purple)] p-[3px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[color:var(--panel-2)] text-lg font-semibold text-[color:var(--text)]">
              JD
            </div>
          </div>
          <button className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] text-[color:var(--text)]">
            <Camera size={13} />
          </button>
        </div>
        <div>
          <p className="text-sm font-medium text-[color:var(--text)]">Profile photo</p>
          <p className="text-xs text-[color:var(--muted)]">PNG or JPG, up to 2MB.</p>
        </div>
      </div>
 
      <form className="mt-8 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-[color:var(--muted)]">First name</label>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--green)]">
              <User size={15} className="text-[color:var(--muted)]" />
              <input type="text" defaultValue="Jordan" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none" />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-[color:var(--muted)]">Last name</label>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--green)]">
              <User size={15} className="text-[color:var(--muted)]" />
              <input type="text" defaultValue="Dalvi" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none" />
            </div>
          </div>
        </div>
 
        <div>
          <label className="text-xs font-medium text-[color:var(--muted)]">Email</label>
          <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--green)]">
            <Mail size={15} className="text-[color:var(--muted)]" />
            <input type="email" defaultValue="jordan@prism.app" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none" />
          </div>
        </div>
 
        <div className="flex justify-end gap-3 pt-2">
          <button type="button" className="rounded-xl border border-[color:var(--line)] px-4 py-2.5 text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--text)]">
            Cancel
          </button>
          <button type="submit" className="rounded-xl bg-gradient-to-r from-[color:var(--green)] to-[color:var(--green-deep)] px-5 py-2.5 text-sm font-semibold text-[color:var(--bg)] hover:opacity-90">
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
}`,
    },

    // ---- 12. Paiement (fond sombre, aperçu carte + dégradé bleu/violet) ----
    {
        id: 'form-payment-card',
        name: 'Payment — card details',
        category: 'Forms',
        tone: 'violet' as PreviewTone,
        icon: CreditCard,
        code: `import { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';

export default function PaymentCard() {
  const [number, setNumber] = useState('');

  return (
    <div className="mx-auto grid max-w-3xl gap-8 rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 lg:grid-cols-2">
      <div>
        <div className="relative aspect-[1.6/1] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[color:var(--purple)] via-[color:var(--blue)] to-[color:var(--green)] p-6 text-[color:var(--bg)]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide">Prism Card</span>
            <CreditCard size={22} />
          </div>
          <p className="mt-8 text-lg font-mono tracking-widest">{number || '•••• •••• •••• ••••'}</p>
          <div className="mt-6 flex items-center justify-between text-xs">
            <span>JORDAN DALVI</span>
            <span>05 / 29</span>
          </div>
        </div>
        <p className="mt-4 flex items-center gap-1.5 text-xs text-[color:var(--muted)]">
          <Lock size={12} /> Payments are encrypted end-to-end.
        </p>
      </div>

      <form className="space-y-4">
        <div>
          <label className="text-xs font-medium text-[color:var(--muted)]">Card number</label>
          <input
            type="text"
            maxLength={19}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="4242 4242 4242 4242"
            className="mt-1.5 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)] focus:border-[color:var(--blue)]"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-medium text-[color:var(--muted)]">Expiry</label>
            <input type="text" placeholder="MM / YY" className="mt-1.5 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)] focus:border-[color:var(--blue)]" />
          </div>
          <div>
            <label className="text-xs font-medium text-[color:var(--muted)]">CVC</label>
            <input type="text" placeholder="123" className="mt-1.5 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)] focus:border-[color:var(--blue)]" />
          </div>
        </div>
        <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-[color:var(--purple)] to-[color:var(--blue)] py-3 text-sm font-semibold text-[color:var(--bg)] hover:opacity-90">
          Pay $49.00
        </button>
      </form>
    </div>
  );
}`,
    },
    {
        id: "hero-aurora-magnetic",
        name: "Hero — Aurora magnetic",
        category: "Hero",
        tone: "violet" as PreviewTone,
        icon: WandSparkles,
        code: `

            import { ArrowRight, Sparkles } from "lucide-react"
            
            export default function AuroraHero() {
              return (
                <section className="group relative isolate overflow-hidden rounded-[2rem] bg-[#0b0b12] px-6 py-24 text-white sm:px-12 lg:py-32">
                  <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600/30 blur-[100px] transition duration-1000 group-hover:scale-125" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.12),transparent_45%)]" />
                  <div className="relative mx-auto max-w-3xl text-center items-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-green-200 backdrop-blur"><Sparkles size={13} /> The new creative toolkit</span>
                    <h1 className="mt-7 text-balance text-5xl font-semibold tracking-[-.06em] sm:text-7xl">Ideas deserve a <span className="bg-gradient-to-r from-green-200 via-green-300 to-cyan-200 bg-clip-text text-transparent">beautiful start.</span></h1>
                    <p className="mt-12 pt-5 text-lg text-white/80">Prism is a modern design system for building beautiful, responsive websites and applications. With a focus on simplicity and flexibility, Prism makes it easy to create stunning user interfaces that look great on any device.</p>
                    <div className="mt-12 flex items-center justify-center gap-4">
                      <a href="#" className="group inline-flex items-center transition hover:gap-3 gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur hover:bg-white/10">
                        <span>Explore the collection</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </section>
              )
            }`,
    },
    {
        id: "hero-Amore-magnetic",
        name: "Hero — Amore magnetic",
        category: "Hero",
        tone: "violet" as PreviewTone,
        icon: WandSparkles,
        code: `

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
            }`
    },
    {
        id: "dashboard-live-command",
        name: "Dashboard — Live command center",
        category: "Bento",
        tone: "blue" as PreviewTone,
        icon: Gauge,
        code: `

import { useState } from "react"
import { Circle, Gauge, Globe2, Zap } from "lucide-react"

const regions = ["North America", "Europe", "Asia Pacific"]
const bars = [42, 68, 54, 82, 61, 92, 74, 86, 66, 97, 78, 88]

export default function LiveCommandCenter() {
  const [region, setRegion] = useState(regions[0])
  return (
    <section className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-950 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="flex items-center gap-2 text-sm font-semibold"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" /></span> Live command center</p><p className="mt-1 text-sm text-slate-500">Your infrastructure, in motion.</p></div><button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium">Last 24 hours</button></div>
      <div className="mt-7 grid gap-4 md:grid-cols-3"><div className="rounded-2xl bg-slate-950 p-5 text-white md:col-span-2"><div className="flex items-center justify-between"><span className="text-sm text-white/60">Requests per minute</span><Zap size={16} className="text-cyan-300" /></div><div className="mt-8 flex h-32 items-end gap-1.5">{bars.map((height, i) => <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan-500 to-violet-300 transition-all duration-700 hover:from-fuchsia-400" style={{ height: height + "%", animationDelay: i * 50 + "ms" }} />)}</div></div><div className="rounded-2xl border border-slate-200 bg-white p-5"><Globe2 size={18} className="text-violet-500" /><p className="mt-5 text-3xl font-semibold">99.98%</p><p className="mt-1 text-xs text-slate-500">Global uptime</p></div></div>
      <div className="mt-4 flex flex-wrap items-center gap-2">{regions.map((item) => <button key={item} onClick={() => setRegion(item)} className={region === item ? "rounded-full bg-slate-950 px-3 py-1.5 text-xs text-white" : "rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-500 transition hover:border-slate-400"}>{item}</button>)}<span className="ml-auto flex items-center gap-1.5 text-xs text-slate-500"><Circle size={8} fill="currentColor" className="text-emerald-500" /> {region} is healthy</span></div>
    </section>
  )
}`,
    },
    {
        id: "pricing-orbit-plans",
        name: "Pricing — Orbit plans",
        category: "Pricing",
        tone: "mint" as PreviewTone,
        icon: Crown,
        code: `
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
                    className={\`rounded-full px-4 py-2 transition-all \${
                      annual
                        ? "bg-[color:var(--green)] font-bold text-slate-950 shadow-sm"
                        : "text-slate-500 hover:text-slate-900"
                    }\`}
                  >
                    Annual · save 20%
                  </span>
                  <span
                    className={\`rounded-full px-4 py-2 transition-all \${
                      !annual
                        ? "bg-[color:var(--green)] font-bold text-slate-950 shadow-sm"
                        : "text-slate-500 hover:text-slate-900"
                    }\`}
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
                    className={\`relative flex flex-col justify-between rounded-3xl p-8 backdrop-blur-md transition-all duration-300 \${
                      i === 1
                        ? "border-2 border-[color:var(--green)] bg-white shadow-xl shadow-[color:var(--green)]/15 -translate-y-1"
                        : "border border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                    }\`}
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
                          \${annual ? Math.round(plan.monthly * 0.8) : plan.monthly}
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
                      className={\`mt-8 w-full rounded-xl text-center py-3 text-xs font-bold transition-all \${
                        i === 1
                          ? "bg-[color:var(--green)] text-slate-950 shadow-sm hover:opacity-90"
                          : "border border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100"
                      }\`}
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
    `,
    },
    {
        id: "testimonials-marquee-voices",
        name: "Testimonials — Marquee voices",
        category: "Testimonials",
        tone: "violet" as PreviewTone,
        icon: Quote,
        code: `const voices = [{ quote: "It made our launch feel inevitable.", name: "Maya Chen", role: "Design lead · Arc" }, { quote: "The rare library that gets out of the way.", name: "Jon Bell", role: "Founder · Northstar" }, { quote: "Our interface finally sounds like us.", name: "Inez Okafor", role: "Product · Looma" }]

export default function MarqueeVoices() {
  return <section className="overflow-hidden bg-[#11111a] py-20 text-white"><div className="mx-auto max-w-5xl px-6"><p className="text-center text-xs font-semibold uppercase tracking-[.25em] text-fuchsia-300">Loved by curious teams</p><h2 className="mx-auto mt-4 max-w-xl text-center text-4xl font-semibold tracking-tight">Good tools leave room for good ideas.</h2></div><div className="mt-12 flex w-max animate-[marquee_24s_linear_infinite] gap-4 hover:[animation-play-state:paused]">{[...voices, ...voices].map((voice, i) => <figure key={i} className="w-72 rounded-2xl border border-white/10 bg-white/[.06] p-6 backdrop-blur"><Quote size={18} className="text-fuchsia-300" /><blockquote className="mt-8 text-lg leading-7">{voice.quote}</blockquote><figcaption className="mt-8 text-xs text-white/45"><strong className="block text-white/80">{voice.name}</strong>{voice.role}</figcaption></figure>)}</div><style jsx>{\
"@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }"\
}</style></section>
}`,
    },
];

export type Block = (typeof blocks)[number];
export const categories = [
    'All blocks',
    'Hero',
    'Features',
    'Pricing',
    'Testimonials',
    'Forms',
    'Checkout Forms',
    'Stats',
    'CTA',
    'Blog',
    'Navbars',
    'Sidebars',
    'Command Palettes',
    'Tables',
    'Product Overviews',
    'Product Lists',
    'Shopping Carts',
];
export const templates = [
    {
        title: 'Arcadia',
        desc: 'A calm space for complex products.',
        tag: 'SaaS / Marketing',
        price: '$79',
        image: previewOne,
    },
    {
        title: 'Lumen',
        desc: 'Make your launch impossible to miss.',
        tag: 'Startup / Launch',
        price: '$99',
        image: previewTwo,
    },
    {
        title: 'Frame',
        desc: 'A sharper point of view for studios.',
        tag: 'Agency / Portfolio',
        price: '$129',
        image: previewThree,
    },
];
export const kits = [
    {
        name: 'The Launch Kit',
        sub: 'Everything for a remarkable first impression.',
        count: '48 blocks',
        tone: 'green',
        items: ['Hero systems', 'Social proof', 'Pricing flows'],
    },
    {
        name: 'Orbit Dashboard',
        sub: 'The operating system for your next product.',
        count: '72 blocks',
        tone: 'purple',
        items: ['Data visualizations', 'Command bars', 'Team spaces'],
    },
];