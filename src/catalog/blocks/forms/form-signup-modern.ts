import { UserPlus } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "form-signup-modern",
  name: "Signup — gradient card",
  category: "Forms",
  tone: "amber",
  icon: UserPlus,
  code: `import { useState } from 'react';
import { User, Mail, Lock, Check } from 'lucide-react';
function Logo() {
    return <Link href="/" className="logo" data-testid="link-logo"><span
        className="logo-mark"><i/><i/><i/></span><span>PRISM</span></Link>;
}
 
export default function SignupModern() {
  const [agreed, setAgreed] = useState(false);
 
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--bg)] px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
 
        <div className="relative rounded-3xl bg-gradient-to-br from-[color:var(--orange)]/40 via-[color:var(--purple)]/30 to-transparent p-px">
          <div className="rounded-3xl bg-[color:var(--panel)] p-8">
            <h1 className="text-xl font-semibold text-[color:var(--text)]">Create your account</h1>
            <p className="mt-1 text-sm text-[color:var(--muted)]">Start your 14-day free trial, no card required.</p>
 
            <form className="mt-7 space-y-4">
              <div className="flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--orange)]">
                <User size={16} className="text-[color:var(--muted)]" />
                <input type="text" placeholder="Full name" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--orange)]">
                <Mail size={16} className="text-[color:var(--muted)]" />
                <input type="email" placeholder="you@company.com" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--orange)]">
                <Lock size={16} className="text-[color:var(--muted)]" />
                <input type="password" placeholder="Create a password" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
              </div>
 
              <button type="button" onClick={() => setAgreed(!agreed)} className="flex items-start gap-2.5 text-left">
                <span className={"mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border " + (agreed ? "border-[color:var(--orange)] bg-[color:var(--orange)]" : "border-[color:var(--line)]")}>
                  {agreed && <Check size={11} className="text-[color:var(--bg)]" />}
                </span>
                <span className="text-xs text-[color:var(--muted)]">I agree to the Terms of Service and Privacy Policy.</span>
              </button>
 
              <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-[color:var(--orange)] to-[color:var(--purple)] py-3 text-sm font-semibold text-[color:var(--bg)] transition hover:opacity-90">
                Create account
              </button>
            </form>
          </div>
        </div>
 
        <p className="mt-6 text-center text-sm text-[color:var(--muted)]">
          Already have an account? <a href="#" className="font-medium text-[color:var(--text)] hover:text-[color:var(--green)]">Sign in</a>
        </p>
      </div>
    </div>
  );
}`,
} satisfies Block
