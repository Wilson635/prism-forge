import { useState } from 'react';
import { KeyRound, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

function Logo() {
    return <Link href="/" className="logo" data-testid="link-logo"><span
        className="logo-mark"><i/><i/><i/></span><span>PRISM</span></Link>;
}
 
export default function ForgotPassword() {
  const [sent, setSent] = useState(false);
 
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--bg)] px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
 
        <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--orange)] to-[color:var(--purple)]">
            <KeyRound size={20} className="text-[color:var(--bg)]" />
          </div>
          <h1 className="mt-5 text-xl font-semibold text-[color:var(--text)]">Reset your password</h1>
          <p className="mt-1.5 text-sm text-[color:var(--muted)]">
            Enter the email tied to your account and we'll send a reset link.
          </p>
 
          <form className="mt-7 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className="flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 text-left focus-within:border-[color:var(--orange)]">
              <Mail size={16} className="text-[color:var(--muted)]" />
              <input type="email" placeholder="you@company.com" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
            </div>
            <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-[color:var(--orange)] to-[color:var(--purple)] py-3 text-sm font-semibold text-[color:var(--bg)] transition hover:opacity-90">
              {sent ? 'Check your inbox' : 'Send reset link'}
            </button>
          </form>
 
          <a href="#" className="mt-6 flex items-center justify-center gap-1.5 text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--text)]">
            <ArrowLeft size={14} /> Back to sign in
          </a>
        </div>
      </div>
    </div>
  );
}
