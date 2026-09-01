import { Lock } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "form-login-minimal",
  name: "Login — minimal",
  category: "Forms",
  tone: "mint",
  icon: Lock,
  code: `import { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/logo';
 
export default function LoginMinimal() {
  const [showPassword, setShowPassword] = useState(false);
 
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--bg)] px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8">
          <h1 className="text-xl font-semibold text-[color:var(--text)]">Welcome back</h1>
          <p className="mt-1 text-sm text-[color:var(--muted)]">Sign in to continue to your workspace.</p>
 
          <form className="mt-7 space-y-4">
            <div>
              <label htmlFor="email" className="text-xs font-medium text-[color:var(--muted)]">Email</label>
              <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--green)]">
                <Mail size={16} className="text-[color:var(--muted)]" />
                <input id="email" type="email" placeholder="you@company.com" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
              </div>
            </div>
 
            <div>
              <label htmlFor="password" className="text-xs font-medium text-[color:var(--muted)]">Password</label>
              <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--green)]">
                <Lock size={16} className="text-[color:var(--muted)]" />
                <input id="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-[color:var(--muted)]">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
 
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-[color:var(--muted)]">
                <input type="checkbox" className="h-3.5 w-3.5 rounded border-[color:var(--line)] bg-transparent accent-[#79f2b0]" />
                Remember me
              </label>
              <a href="#" className="font-medium text-[color:var(--green)] hover:underline">Forgot password?</a>
            </div>
 
            <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--green)] to-[color:var(--green-deep)] py-3 text-sm font-semibold text-[color:var(--bg)] transition hover:opacity-90">
              Sign in
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </button>
          </form>
 
          <p className="mt-6 text-center text-sm text-[color:var(--muted)]">
            Don't have an account? <a href="#" className="font-medium text-[color:var(--text)] hover:text-[color:var(--green)]">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}`,
} satisfies Block
