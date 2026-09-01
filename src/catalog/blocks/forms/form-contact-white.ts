import { Mail } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "form-contact-white",
  name: "Contact — light",
  category: "Forms",
  tone: "blue",
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
} satisfies Block
