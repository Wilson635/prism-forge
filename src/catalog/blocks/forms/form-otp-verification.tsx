import { useRef, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function OtpVerification() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const next = [...code];
    next[index] = value;
    setCode(next);
    if (value && index < 5) inputs.current[index + 1]?.focus();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--bg)] px-4">
      <div className="w-full max-w-sm rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--green)] to-[color:var(--green-deep)]">
          <ShieldCheck size={22} className="text-[color:var(--bg)]" />
        </div>
        <h1 className="mt-5 text-xl font-semibold text-[color:var(--text)]">Verify your identity</h1>
        <p className="mt-1.5 text-sm text-[color:var(--muted)]">Enter the 6-digit code we sent to your email.</p>

        <div className="mt-7 flex justify-center gap-2.5">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              maxLength={1}
              className="h-12 w-11 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] text-center text-lg font-semibold text-[color:var(--text)] outline-none focus:border-[color:var(--green)]"
            />
          ))}
        </div>

        <button type="button" className="mt-8 w-full rounded-xl bg-gradient-to-r from-[color:var(--green)] to-[color:var(--green-deep)] py-3 text-sm font-semibold text-[color:var(--bg)] transition hover:opacity-90">
          Verify code
        </button>

        <p className="mt-5 text-sm text-[color:var(--muted)]">
          Didn't get a code? <button className="font-medium text-[color:var(--green)] hover:underline">Prism</button>
        </p>
      </div>
    </div>
  );
}
