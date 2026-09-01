import { Send } from 'lucide-react'
import type { Block } from '../../types'

export const block = {
  id: "feature-email-api",
  name: "Product Features / Live email API",
  category: "Features",
  tone: "mint",
  icon: Send,
  code: `
        import { useEffect, useRef, useState } from 'react';
        import { AnimatePresence, motion } from 'framer-motion';

        const statusOptions = [
          {
            key: 'delivered',
            label: 'Delivered',
            email: 'delivered@prism.dev',
            badgeClass: 'bg-[color:var(--green)]/20 text-[color:var(--green)]',
          },
          {
            key: 'bounced',
            label: 'Bounced',
            email: 'bounced@prism.dev',
            badgeClass: 'bg-[color:var(--orange)]/20 text-[color:var(--orange)]',
          },
          {
            key: 'complained',
            label: 'Complained',
            email: 'complained@prism.dev',
            badgeClass: 'border border-[color:var(--orange)]/60 text-[color:var(--orange)]',
          },
        ];

        const feedTemplates = [
          {
            type: 'Bounced',
            icon: AlertTriangle,
            textClass: 'text-[color:var(--orange)]',
            badgeClass: 'bg-[color:var(--orange)]/15 text-[color:var(--orange)]',
            ringClass: 'border-[color:var(--orange)]/50',
            rows: [
              ['to', 'jackson@company.com'],
              ['with type', 'Spam'],
            ],
            meta: [
              { icon: Mail, label: 'Gmail' },
              { icon: Monitor, label: 'macOS' },
            ],
          },
          {
            type: 'Clicked',
            icon: MousePointer2,
            textClass: 'text-[color:var(--purple)]',
            badgeClass: 'bg-[color:var(--purple)]/15 text-[color:var(--purple)]',
            ringClass: 'border-[color:var(--purple)]/50',
            rows: [
              ['from', 'emma@company.com'],
              ['on', 'Magic Link'],
            ],
            meta: [
              { icon: Mail, label: 'Outlook' },
              { icon: Monitor, label: 'Windows' },
            ],
          },
          {
            type: 'Delivered',
            icon: CheckCircle2,
            textClass: 'text-[color:var(--green)]',
            badgeClass: 'bg-[color:var(--green)]/15 text-[color:var(--green)]',
            ringClass: 'border-[color:var(--green)]/50',
            rows: [
              ['to', 'noah@company.com'],
              ['with subject', 'Hello world'],
            ],
            meta: [
              { icon: Mail, label: 'Gmail' },
              { icon: Monitor, label: 'macOS' },
            ],
          },
          {
            type: 'Opened',
            icon: Eye,
            textClass: 'text-[color:var(--blue)]',
            badgeClass: 'bg-[color:var(--blue)]/15 text-[color:var(--blue)]',
            ringClass: 'border-[color:var(--blue)]/50',
            rows: [
              ['from', 'lea@company.com'],
              ['with subject', 'Invoice'],
            ],
            meta: [
              { icon: Mail, label: 'Apple Mail' },
              { icon: Monitor, label: 'iOS' },
            ],
          },
          {
            type: 'Complained',
            icon: Frown,
            textClass: 'text-[color:var(--orange)]',
            badgeClass: 'bg-[color:var(--orange)]/15 text-[color:var(--orange)]',
            ringClass: 'border-[color:var(--orange)]/50',
            rows: [
              ['to', 'isabella@company.com'],
              ['with feedback', 'Spam'],
            ],
            meta: [
              { icon: Mail, label: 'Thunderbird' },
              { icon: Monitor, label: 'Windows' },
            ],
          },
        ];

        let feedCounter = 0;
        let logCounter = 0;

        function randomId() {
          const chunk = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          return chunk() + chunk() + '-' + chunk() + '-' + chunk() + '-' + chunk() + '-' + chunk() + chunk() + chunk();
        }

        function timeNow() {
          const d = new Date();
          const pad = (n) => String(n).padStart(2, '0');
          return pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
        }

        function dateNow() {
          return new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }

        export default function EmailApiHero() {
          const [status, setStatus] = useState(statusOptions[1]);
          const [menuOpen, setMenuOpen] = useState(false);
          const [logs, setLogs] = useState(() => [{ id: randomId(), key: 'log-seed' }]);
          const [feed, setFeed] = useState(() => [
            { ...feedTemplates[2], key: 'seed', time: timeNow(), date: dateNow() },
          ]);
          const templateIndex = useRef(0);

          function pushLog() {
            logCounter += 1;
            setLogs((current) => [{ id: randomId(), key: 'log-' + logCounter }, ...current].slice(0, 6));
          }

          function handleSelect(option) {
            setStatus(option);
            setMenuOpen(false);
            pushLog();
          }

          useEffect(() => {
            const logTimer = setInterval(() => {
              pushLog();
            }, 1500);
            return () => clearInterval(logTimer);
          }, []);

          useEffect(() => {
            const feedTimer = setInterval(() => {
              templateIndex.current = (templateIndex.current + 1) % feedTemplates.length;
              feedCounter += 1;
              const next = {
                ...feedTemplates[templateIndex.current],
                key: 'feed-' + feedCounter,
                time: timeNow(),
                date: dateNow(),
              };
              setFeed((current) => [next, ...current].slice(0, 3));
            }, 2600);
            return () => clearInterval(feedTimer);
          }, []);

          return (
            <section className="relative overflow-hidden bg-[color:var(--bg)] px-6 py-20 sm:px-10">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
                style={{ background: 'radial-gradient(60% 100% at 50% 0%, rgba(121,242,176,0.08), transparent 70%)' }}
              />

              <div className="relative mx-auto max-w-6xl">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[color:var(--green)]">
                    First-class email
                  </span>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
                    Email infrastructure,
                    <br />
                    built for <span className="italic text-[color:var(--muted)]">developers.</span>
                  </h1>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-[color:var(--muted)]">
                    A small team of engineers who love building tools for other engineers. Our goal is an email platform that just works.
                  </p>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-2">
                  <div
                    className="relative flex h-[500px] flex-col overflow-hidden rounded-tr-3xl rounded-tl-3xl border-l border-r border-t border-[color:var(--line)]/60 p-5"
                    style={{ background: 'radial-gradient(70% 30% at 50% 0%, rgba(121,242,176,0.08), transparent 70%)' }}
                  >
                    <div className="mt-20 flex flex-wrap items-center justify-center gap-2 sm:justify-between rounded-full border border-[color:var(--line)] bg-[color:var(--bg)] py-2 pl-1.5 pr-3.5 transition hover:border-[color:var(--line)]">
                      <div className="relative">
                        <div
                          onClick={() => setMenuOpen((open) => !open)}
                          className="flex items-center gap-2.5 py-2 pl-1.5 pr-3.5  hover:shadow-none"
                        >
                          <span className={'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ' + status.badgeClass}>
                            {status.key === 'delivered' && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--green)]" />}
                            {status.label}
                          </span>
                          <span className="text-sm text-[color:var(--muted)]">{status.email}</span>
                          <ChevronDown
                            size={13}
                            className={'text-[color:var(--muted)] transition-transform duration-200 ' + (menuOpen ? 'rotate-180' : '')}
                          />
                        </div>

                        <AnimatePresence>
                          {menuOpen && (
                            <>
                              <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                              <motion.div
                                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                                transition={{ duration: 0.15 }}
                                className="absolute left-0 top-full z-20 mt-2 w-auto overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-2)] p-1.5 shadow-2xl"
                              >
                                {statusOptions.map((option) => (
                                  <button
                                    key={option.key}
                                    onClet ick={() => handleSelect(option)}
                                    className="flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left transition hover:bg-[color:var(--panel)]"
                                  >
                                    <span className="flex w-4 shrink-0 justify-center">
                                      {option.key === status.key && <Check size={13} className="text-[color:var(--text)]" />}
                                    </span>
                                    <span className={'rounded-full px-2.5 py-1 text-[11px] font-semibold ' + option.badgeClass}>
                                      {option.label}
                                    </span>
                                    <span className="text-xs text-[color:var(--muted)]">{option.email}</span>
                                  </button>
                                ))}
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>
                      </div>

                      <button
                        onClick={pushLog}
                        className="inline-flex hover:shadows-none shrink-0 items-center gap-1.5 rounded-full bg-[color:var(--text)] px-3.5 py-1.5 text-xs font-semibold text-[color:var(---bg)] transition hover:opacity-90 active:scale-95"
                      >
                        <FlaskConical size={12} />
                        Send
                      </button>
                    </div>

                    <div
                      className="relative mt-7 flex-1 overflow-hidden"
                      style={{
                        maskImage: 'linear-gradient(180deg, black 72%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(180deg, black 72%, transparent 100%)',
                      }}
                    >
                      <div className="space-y-2 pl-1 font-mono text-[11px]">
                        <AnimatePresence initial={false}>
                          {logs.map((log) => (
                            <motion.div
                              key={log.key}
                              layout
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.4, ease: 'easeOut' }}
                              className="flex items-center gap-2 text-[color:var(--muted)]"
                            >
                              <span className="text-[color:var(--green)]">HTTP 200:</span>
                              <span>{'{ "id": "' + log.id + '" }'}</span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center gap-2 pt-6 text-[11px] text-[color:var(--muted)]">
                      <div>
                        <FlaskConical size={20} className="text-[color:var(--text)]" />
                        <h3 className="mt-4 text-base font-semibold text-[color:var(--text)]">Test mode</h3>
                        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[color:var(--muted)]">
                          Simulate delivery events and experiment with the API without the risk of ever sending a real email to a real person.
                        </p>
                        <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--text)] transition hover:text-[color:var(--green)]">
                          Learn more <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="relative flex h-[500px] flex-col overflow-hidden rounded-tr-3xl rounded-tl-3xl border-l border-r border-t border-[color:var(--line)]/60 p-8"
                    style={{ background: 'none' }}
                  >
                    <div
                      className="relative flex-1 overflow-hidden"
                      style={{
                        maskImage: 'linear-gradient(180deg, black 72%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(180deg, black 72%, transparent 100%)',
                      }}
                    >
                      <AnimatePresence initial={false}>
                        {feed.map((event, index) => {
                          const EventIcon = event.icon;
                          return (
                            <motion.div
                              key={event.key}
                              layout
                              initial={{ opacity: 0, y: -16 }}
                              animate={{ opacity: index === 0 ? 1 : 0.55 - index * 0.15, y: 0 }}
                              exit={{ opacity: 0, y: 16 }}
                              transition={{ duration: 0.5, ease: 'easeOut' }}
                              className="flex gap-3"
                            >
                              <div className="flex flex-col items-center">
                                <div className={'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-[color:var(--bg)]/60 ' + event.ringClass}>
                                  <EventIcon size={15} className={event.textClass} />
                                </div>
                                {index < feed.length - 1 && <span className="my-1 w-px flex-1 bg-[color:var(--line)]/60" />}
                              </div>

                              <div className="flex-1 pb-7">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className={'rounded-md px-2 py-0.5 text-[11px] font-semibold ' + event.badgeClass}>{event.type}</span>
                                  <span className="text-[11px] text-[color:var(--muted)]">{event.date}  {event.time}</span>
                                </div>
                                <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px] text-[color:var(--muted)]">
                                  {event.rows.map((row) => (
                                    <span key={row[0] + row[1]} className="flex items-center gap-1.5">
                                      <span>{row[0]}</span>
                                      <span className="rounded-md border border-[color:var(--line)]/70 px-2 py-0.5 font-medium text-[color:var(--text)]">{row[1]}</span>
                                    </span>
                                  ))}
                                </div>
                                {index === 0 && (
                                  <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px] text-[color:var(--muted)]">
                                    {event.meta.map((item) => (
                                      <span key={item.label} className="inline-flex items-center gap-1 rounded-md border border-[color:var(--line)]/70 px-2 py-0.5 font-medium text-[color:var(--text)]">
                                        <item.icon size={10} />
                                        {item.label}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>
                    <div className="mt-5">
                        <Webhook size={20} className="text-[color:var(--text)]" />
                        <h3 className="mt-4 text-base font-semibold text-[color:var(--text)]">Modular webhooks</h3>
                        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[color:var(--muted)]">
                          Get notified on your own server the instant an email is delivered, opened, bounced, or clicked.
                        </p>
                        <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--text)] transition hover:text-[color:var(--green)]">
                          Learn more <ArrowUpRight size={14} />
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }
        `,
} satisfies Block
