import { Camera, User, Mail } from 'lucide-react';

export default function ProfileSettings() {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8">
      <h2 className="text-lg font-semibold text-[color:var(--text)]">Profile settings</h2>
      <p className="mt-1 text-sm text-[color:var(--muted)]">Update your personal information and photo.</p>
 
      <div className="mt-7 flex items-center gap-5">
        <div className="relative">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[color:var(--green)] via-[color:var(--blue)] to-[color:var(--purple)] p-[3px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[color:var(--panel-2)] text-lg font-semibold text-[color:var(--text)]">
              JD
            </div>
          </div>
          <button className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] text-[color:var(--text)]">
            <Camera size={13} />
          </button>
        </div>
        <div>
          <p className="text-sm font-medium text-[color:var(--text)]">Profile photo</p>
          <p className="text-xs text-[color:var(--muted)]">PNG or JPG, up to 2MB.</p>
        </div>
      </div>
 
      <form className="mt-8 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-[color:var(--muted)]">First name</label>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--green)]">
              <User size={15} className="text-[color:var(--muted)]" />
              <input type="text" defaultValue="Jordan" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none" />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-[color:var(--muted)]">Last name</label>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--green)]">
              <User size={15} className="text-[color:var(--muted)]" />
              <input type="text" defaultValue="Dalvi" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none" />
            </div>
          </div>
        </div>
 
        <div>
          <label className="text-xs font-medium text-[color:var(--muted)]">Email</label>
          <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2.5 focus-within:border-[color:var(--green)]">
            <Mail size={15} className="text-[color:var(--muted)]" />
            <input type="email" defaultValue="jordan@prism.app" className="w-full bg-transparent text-sm text-[color:var(--text)] outline-none" />
          </div>
        </div>
 
        <div className="flex justify-end gap-3 pt-2">
          <button type="button" className="rounded-xl border border-[color:var(--line)] px-4 py-2.5 text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--text)]">
            Cancel
          </button>
          <button type="submit" className="rounded-xl bg-gradient-to-r from-[color:var(--green)] to-[color:var(--green-deep)] px-5 py-2.5 text-sm font-semibold text-[color:var(--bg)] hover:opacity-90">
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
}
