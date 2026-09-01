import { Gauge } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "dashboard-live-command",
  name: "Dashboard — Live command center",
  category: "Bento",
  tone: "blue",
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
} satisfies Block
