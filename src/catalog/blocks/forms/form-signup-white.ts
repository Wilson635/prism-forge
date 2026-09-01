import { UserPlus } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "form-signup-white",
  name: "Signup — light",
  category: "Forms",
  tone: "mint",
  icon: UserPlus,
  code: `import { User, Mail, Lock } from 'lucide-react';
 
export default function SignupWhite() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-xl font-semibold text-zinc-950">Get started</h1>
        <p className="mt-1 text-sm text-zinc-500">Create your account in under a minute.</p>
 
        <form className="mt-7 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input type="text" placeholder="First name" className="rounded-xl border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-900" />
            <input type="text" placeholder="Last name" className="rounded-xl border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-900" />
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-zinc-200 px-3.5 py-2.5 focus-within:border-zinc-900">
            <Mail size={16} className="text-zinc-400" />
            <input type="email" placeholder="you@company.com" className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400" />
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-zinc-200 px-3.5 py-2.5 focus-within:border-zinc-900">
            <Lock size={16} className="text-zinc-400" />
            <input type="password" placeholder="Password" className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400" />
          </div>
          <button type="submit" className="w-full rounded-xl bg-zinc-950 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
            Create account
          </button>
        </form>
 
        <p className="mt-6 text-center text-xs text-zinc-400">
          By signing up you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}`,
} satisfies Block
