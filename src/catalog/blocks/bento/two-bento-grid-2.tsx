import { motion } from 'framer-motion'
import { Activity, Cpu, Globe, Search, ShieldCheck } from 'lucide-react'

export default function TwoByThreeOriginal() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-16 font-['Manrope',sans-serif] text-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 max-w-2xl"
      >
        <span className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">Deploy faster</span>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Everything you need to deploy your app
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50 p-8 transition-all hover:border-slate-300 hover:shadow-xl lg:col-span-2"
        >
          <div className="relative mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4 text-xs font-medium text-slate-400">
              <Search size={14} />
              <span>Search something...</span>
            </div>
            <div className="flex gap-6 border-b border-slate-100 py-3 text-xs font-semibold">
              <span className="border-b-2 border-indigo-600 pb-3 -mb-3 text-indigo-600">Overview</span>
              <span className="cursor-pointer text-slate-400 transition hover:text-slate-600">Activity</span>
              <span className="cursor-pointer text-slate-400 transition hover:text-slate-600">Settings</span>
              <span className="cursor-pointer text-slate-400 transition hover:text-slate-600">Collaborators</span>
            </div>
            <div className="py-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Planetary <span className="font-normal text-slate-300">/</span> mobile-api
              </div>
              <p className="mt-0.5 text-xs text-slate-400">Deploys from GitHub via main branch</p>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
              <div>
                <span className="text-xs font-medium text-slate-400">Number of deploys</span>
                <p className="mt-1 text-3xl font-extrabold text-slate-900">405</p>
              </div>
              <div>
                <span className="text-xs font-medium text-slate-400">Avg deploy time</span>
                <p className="mt-1 text-3xl font-extrabold text-slate-900">
                  3.65 <span className="text-sm font-medium text-slate-400">mins</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-indigo-600">Performance</span>
            <h3 className="mt-1 text-xl font-bold text-slate-900 transition group-hover:text-indigo-600">
              Lightning-fast builds
            </h3>
            <p className="mt-2 max-w-xl text-sm text-slate-500">
              Automate your deployment pipeline with optimized build caching and zero-downtime releases worldwide.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50 p-8 transition-all hover:border-slate-300 hover:shadow-xl"
        >
          <div className="mb-8 space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <Activity size={14} className="text-indigo-600" /> Activity feed
              </span>
              <span className="cursor-pointer text-xs font-semibold text-indigo-600 hover:underline">View all</span>
            </div>
            <div className="divide-y divide-slate-100 text-xs">
              <div className="flex items-start gap-3 py-2.5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Cosetta"
                  className="h-8 w-8 rounded-full border border-slate-200 object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-800">Cosetta Dusett</span>
                    <span className="text-[10px] text-slate-400">30s</span>
                  </div>
                  <p className="mt-0.5 text-slate-500">
                    Pushed to{' '}
                    <span className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs text-indigo-600">ios-app</span>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 py-2.5">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Pammi"
                  className="h-8 w-8 rounded-full border border-slate-200 object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-800">Pammi Kakani</span>
                    <span className="text-[10px] text-slate-400">3m</span>
                  </div>
                  <p className="mt-0.5 text-slate-500">
                    Pushed to{' '}
                    <span className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs text-indigo-600">mobile-api</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-indigo-600">Releases</span>
            <h3 className="mt-1 text-xl font-bold text-slate-900 transition group-hover:text-indigo-600">Push to deploy</h3>
            <p className="mt-2 text-sm text-slate-500">Instant previews for every pull request with team notifications.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -4 }}
          className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-slate-50 p-8 transition-all hover:border-slate-300 hover:shadow-xl"
        >
          <div className="relative mb-6 h-44 overflow-hidden rounded-2xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80"
              alt="Security"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/60 to-transparent p-4">
              <ShieldCheck className="text-emerald-400" size={24} />
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-indigo-600">Security</span>
            <h3 className="mt-1 text-lg font-bold text-slate-900 transition group-hover:text-indigo-600">
              Advanced permissions
            </h3>
            <p className="mt-2 text-sm text-slate-500">Manage RBAC access rights seamlessly across your organization.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -4 }}
          className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-slate-50 p-8 transition-all hover:border-slate-300 hover:shadow-xl"
        >
          <div className="relative mb-6 h-44 overflow-hidden rounded-2xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80"
              alt="Integrations"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/60 to-transparent p-4">
              <Cpu className="text-indigo-400" size={24} />
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-indigo-600">Integrations</span>
            <h3 className="mt-1 text-lg font-bold text-slate-900 transition group-hover:text-indigo-600">
              Connect your stack
            </h3>
            <p className="mt-2 text-sm text-slate-500">Plug into your favorite developer tools with zero extra setup.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ y: -4 }}
          className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-slate-50 p-8 transition-all hover:border-slate-300 hover:shadow-xl"
        >
          <div className="relative mb-6 h-44 overflow-hidden rounded-2xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80"
              alt="Edge Network"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/60 to-transparent p-4">
              <Globe className="text-cyan-400" size={24} />
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-indigo-600">Global Scale</span>
            <h3 className="mt-1 text-lg font-bold text-slate-900 transition group-hover:text-indigo-600">
              Global edge network
            </h3>
            <p className="mt-2 text-sm text-slate-500">Deploy your web applications with ultra-low latency worldwide.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
