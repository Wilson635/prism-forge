export default function Bento() {
  return (
    <section className="grid grid-cols-3 gap-4">
      <div className="col-span-2 rounded-2xl bg-zinc-950 p-8 text-white">
        <p className="text-sm text-emerald-300">Everything in focus</p>
        <h2 className="mt-4 text-4xl font-semibold">Build without limits.</h2>
      </div>
      <div className="rounded-2xl bg-emerald-300 p-8 text-zinc-950">
        <span className="text-5xl font-bold">48</span>
        <p className="mt-2">ready-to-use blocks</p>
      </div>
    </section>
  )
}
