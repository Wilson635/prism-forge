export default function BlogGrid() {
  const posts = [
    { tag: "Engineering", title: "Rebuilding our design system from scratch", date: "Aug 12" },
    { tag: "Product", title: "How we think about onboarding friction", date: "Aug 5" },
    { tag: "Culture", title: "What remote-first actually looks like in 2026", date: "Jul 29" },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-3">
      {posts.map((post) => (
        <article className="group cursor-pointer">
          <div className="aspect-[4/3] rounded-2xl bg-blue-100" />
          <span className="mt-4 inline-block text-xs font-medium text-blue-600">{post.tag}</span>
          <h3 className="mt-2 text-lg font-semibold text-zinc-950 group-hover:underline">{post.title}</h3>
          <p className="mt-1 text-xs text-zinc-500">{post.date} · 6 min read</p>
        </article>
      ))}
    </section>
  )
}
