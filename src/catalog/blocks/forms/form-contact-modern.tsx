import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
}
