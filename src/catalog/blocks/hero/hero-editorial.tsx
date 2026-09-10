export default function HeroEditorial() {
  return (
    <section className="bg-[#f6f1e8] text-[#1a1814]">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-end px-8 py-16 sm:px-12 lg:py-24">
          <p className="font-serif text-sm italic text-[#8a7f6a]">Vol. 04 — The making of tools</p>
          <h1 className="mt-6 max-w-md font-serif text-5xl leading-[1.1] tracking-tight sm:text-6xl">
            Design is a slow craft. Your system shouldn’t be.
          </h1>
          <p className="mt-6 max-w-sm text-sm leading-7 text-[#5c564c]">
            An editorial starter for studios who still believe in typesetting, paper grain and generous margins.
          </p>
          <a href="#" className="mt-8 inline-flex w-fit border-b border-[#1a1814] pb-1 text-sm font-medium">
            Read the essay
          </a>
        </div>
        <div className="min-h-[340px] bg-[url('https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1200&auto=format&fit=crop&q=70')] bg-cover bg-center lg:min-h-[560px]" />
      </div>
    </section>
  )
}
