import { Fingerprint } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "form-login-split",
  name: "Login — split screen",
  category: "Forms",
  tone: "violet",
  icon: Fingerprint,
  code: `import { Lock, Mail, ArrowRight, Github, Chrome } from 'lucide-react';
import { Logo } from '@/components/logo';
 
export default function LoginSplit() {
  return (
    <div className="grid min-h-screen grid-cols-1 bg-[color:var(--bg)] lg:grid-cols-2">
      <div className="flex flex-col justify-between p-10">
        <Logo />
 
        <div className="mx-auto w-full max-w-sm">
          <h1 className="text-3xl font-semibold text-[color:var(--text)]">Sign in to PRISM</h1>
          <p className="mt-2 text-sm text-[color:var(--muted)]">Access your dashboard and pick up where you left off.</p>
 
          <div className="mt-8 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel)] py-2.5 text-sm text-[color:var(--text)] transition hover:border-[color:var(--green-deep)]/50">
              <Chrome size={16} /> Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel)] py-2.5 text-sm text-[color:var(--text)] transition hover:border-[color:var(--green-deep)]/50">
              <Github size={16} /> GitHub
            </button>
          </div>
 
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[color:var(--line)]" />
            <span className="text-xs text-[color:var(--muted)]">or continue with email</span>
            <div className="h-px flex-1 bg-[color:var(--line)]" />
          </div>
 
          <form className="space-y-4">
            <div className="flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--purple)]">
              <Mail size={16} className="text-[color:var(--muted)]" />
              <input type="email" placeholder="you@company.com" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--purple)]">
              <Lock size={16} className="text-[color:var(--muted)]" />
              <input type="password" placeholder="Password" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
            </div>
            <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--purple)] to-[color:var(--blue)] py-3 text-sm font-semibold text-[color:var(--bg)] transition hover:opacity-90">
              Continue <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
 
        <p className="text-xs text-[color:var(--muted)]">© 2026 PRISM. All rights reserved.</p>
      </div>
 
      <div className="relative hidden overflow-hidden bg-[color:var(--panel)] lg:block">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[color:var(--purple)] opacity-30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[color:var(--blue)] opacity-25 blur-3xl" />
        <div className="relative flex h-full flex-col items-center justify-center p-12 text-center">
          <blockquote className="max-w-md text-2xl font-medium leading-relaxed text-[color:var(--text)]">
            "PRISM cut our shipping time in half. It's the calmest infrastructure tool we've used."
          </blockquote>
          <p className="mt-6 text-sm text-[color:var(--muted)]">Elena Voss — CTO, Northwind</p>
        </div>
      </div>
    </div>
  );
}`,
} satisfies Block
