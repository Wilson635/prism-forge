import { Package } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "product-tabs",
  name: "Product overview with tabs",
  category: "Product Overviews",
  tone: "violet",
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
} satisfies Block
