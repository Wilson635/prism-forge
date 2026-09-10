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
