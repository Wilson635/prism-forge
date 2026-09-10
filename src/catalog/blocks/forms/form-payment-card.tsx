import { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';

export default function PaymentCard() {
  const [number, setNumber] = useState('');

  return (
    <div className="mx-auto grid max-w-3xl gap-8 rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 lg:grid-cols-2">
      <div>
        <div className="relative aspect-[1.6/1] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[color:var(--purple)] via-[color:var(--blue)] to-[color:var(--green)] p-6 text-[color:var(--bg)]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide">Prism Card</span>
            <CreditCard size={22} />
          </div>
          <p className="mt-8 text-lg font-mono tracking-widest">{number || '•••• •••• •••• ••••'}</p>
          <div className="mt-6 flex items-center justify-between text-xs">
            <span>JORDAN DALVI</span>
            <span>05 / 29</span>
          </div>
        </div>
        <p className="mt-4 flex items-center gap-1.5 text-xs text-[color:var(--muted)]">
          <Lock size={12} /> Payments are encrypted end-to-end.
        </p>
      </div>

      <form className="space-y-4">
        <div>
          <label className="text-xs font-medium text-[color:var(--muted)]">Card number</label>
          <input
            type="text"
            maxLength={19}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="4242 4242 4242 4242"
            className="mt-1.5 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)] focus:border-[color:var(--blue)]"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-medium text-[color:var(--muted)]">Expiry</label>
            <input type="text" placeholder="MM / YY" className="mt-1.5 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)] focus:border-[color:var(--blue)]" />
          </div>
          <div>
            <label className="text-xs font-medium text-[color:var(--muted)]">CVC</label>
            <input type="text" placeholder="123" className="mt-1.5 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)] focus:border-[color:var(--blue)]" />
          </div>
        </div>
        <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-[color:var(--purple)] to-[color:var(--blue)] py-3 text-sm font-semibold text-[color:var(--bg)] hover:opacity-90">
          Pay $49.00
        </button>
      </form>
    </div>
  );
}
