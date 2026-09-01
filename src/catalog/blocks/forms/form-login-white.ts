import { Lock } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "form-login-white",
  name: "Login — light",
  category: "Forms",
  tone: "blue",
  icon: Lock,
  code: `import { Lock, Mail } from 'lucide-react';
 
export default function LoginWhite() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm rounded-2xl border border-zinc-200 p-8 shadow-sm">
        <h1 className="text-xl font-semibold text-zinc-950">Sign in</h1>
        <p className="mt-1 text-sm text-zinc-500">Welcome back, enter your details below.</p>
 
        <form className="mt-7 space-y-4">
          <div>
            <label htmlFor="email" className="text-xs font-medium text-zinc-600">Email</label>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-zinc-200 px-3.5 py-2.5 focus-within:border-zinc-900">
              <Mail size={16} className="text-zinc-400" />
              <input id="email" type="email" placeholder="you@company.com" className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400" />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="text-xs font-medium text-zinc-600">Password</label>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-zinc-200 px-3.5 py-2.5 focus-within:border-zinc-900">
              <Lock size={16} className="text-zinc-400" />
              <input id="password" type="password" placeholder="••••••••" className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400" />
            </div>
          </div>
          <button type="submit" className="w-full rounded-xl bg-zinc-950 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
            Sign in
          </button>
        </form>
 
        <p className="mt-6 text-center text-sm text-zinc-500">
          No account yet? <a href="#" className="font-medium text-zinc-900 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}`,
} satisfies Block
