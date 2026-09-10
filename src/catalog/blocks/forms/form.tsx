export default function Form() {
  return (
    <form className="mx-auto flex max-w-lg gap-2 rounded-full bg-white p-2 shadow-xl">
      <label className="sr-only" htmlFor="email">Email address</label>
      <input id="email" type="email" placeholder="you@company.com"
        className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none" />
      <button className="rounded-full bg-zinc-950 px-5 py-3 text-sm text-white">
        Join the waitlist
      </button>
    </form>
  )
}
