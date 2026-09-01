import { Bell, Calendar, Cloud, Database, Mail, MessageCircle, ShieldCheck } from 'lucide-react'

const deploys = [
  { name: 'marketing-site', branch: 'main', time: '2m ago', status: 'Live', tone: 'live' },
  { name: 'docs-portal', branch: 'release/2.4', time: '18m ago', status: 'Preview', tone: 'preview' },
  { name: 'api-gateway', branch: 'main', time: '1h ago', status: 'Live', tone: 'live' },
]

const integrations = [
  { name: 'Mail', icon: Mail },
  { name: 'Calendar', icon: Calendar },
  { name: 'Messages', icon: MessageCircle },
  { name: 'Storage', icon: Cloud },
  { name: 'Database', icon: Database },
  { name: 'Alerts', icon: Bell },
]

const stats = [
  { label: 'Deploys', value: '482' },
  { label: 'Avg build', value: '3.4s' },
  { label: 'Uptime', value: '99.98%' },
]

export default function BentoDeployDashboard() {
  return (
    <section className="bg-[color:var(--bg)] px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-[color:var(--green)]">Deploy faster</span>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
            Everything you need to ship
          </h2>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-7 lg:row-span-2">
            <p className="text-sm font-semibold text-[color:var(--text)]">Push to deploy</p>
            <p className="mt-1.5 text-sm text-[color:var(--muted)]">
              Every merge to main ships automatically, with instant rollbacks if something looks off.
            </p>
            <div className="mt-6 space-y-2.5">
              {deploys.map((deploy) => (
                <div
                  key={deploy.name}
                  className="flex items-center justify-between rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] px-4 py-3"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={
                        deploy.tone === 'live'
                          ? 'h-2 w-2 rounded-full bg-[color:var(--green)]'
                          : 'h-2 w-2 rounded-full bg-[color:var(--blue)]'
                      }
                    />
                    <div>
                      <p className="text-xs font-medium text-[color:var(--text)]">{deploy.name}</p>
                      <p className="text-[11px] text-[color:var(--muted)]">
                        {deploy.branch} · {deploy.time}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-[color:var(--line)] px-2.5 py-1 text-[10px] font-medium text-[color:var(--muted)]">
                    {deploy.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-7 lg:col-span-2">
            <p className="text-sm font-semibold text-[color:var(--text)]">Connect your favorite tools</p>
            <p className="mt-1.5 max-w-md text-sm text-[color:var(--muted)]">
              Wire up the services your team already relies on in a couple of clicks.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {integrations.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--panel-2)] px-3.5 py-2"
                >
                  <tool.icon size={14} className="text-[color:var(--green)]" />
                  <span className="text-xs font-medium text-[color:var(--text)]">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--purple)] to-[color:var(--blue)]">
              <ShieldCheck size={18} className="text-[color:var(--bg)]" />
            </div>
            <p className="mt-4 text-sm font-semibold text-[color:var(--text)]">Advanced access control</p>
            <p className="mt-1.5 text-sm text-[color:var(--muted)]">
              Role-based permissions and audit logs, down to every environment.
            </p>
          </div>

          <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-7">
            <p className="text-sm font-semibold text-[color:var(--text)]">Lightning-fast builds</p>
            <div className="mt-5 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-lg font-semibold text-[color:var(--text)]">{stat.value}</p>
                  <p className="mt-0.5 text-[11px] text-[color:var(--muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
