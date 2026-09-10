import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Mark = {
  name: string
  href: string
  mark: ReactNode
}

const logos: Mark[] = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    mark: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
  },
  {
    name: 'Linear',
    href: 'https://linear.app',
    mark: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z" />
      </svg>
    ),
  },
  {
    name: 'Figma',
    href: 'https://figma.com',
    mark: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
        <path fill="#F24E1E" d="M8.5 2h3.5v6.5H8.5A3.25 3.25 0 0 1 8.5 2Z" />
        <path fill="#FF7262" d="M12 2h3.5a3.25 3.25 0 0 1 0 6.5H12V2Z" />
        <path fill="#A259FF" d="M8.5 8.5H12V15H8.5a3.25 3.25 0 0 1 0-6.5Z" />
        <path fill="#1ABCFE" d="M12 8.5h3.5a3.25 3.25 0 1 1-3.25 3.25V8.5H12Z" />
        <path fill="#0ACF83" d="M8.5 15H12v3.25A3.25 3.25 0 1 1 8.5 15Z" />
      </svg>
    ),
  },
  {
    name: 'Vercel',
    href: 'https://vercel.com',
    mark: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M12 3.2 22 20.8H2L12 3.2Z" />
      </svg>
    ),
  },
  {
    name: 'Stripe',
    href: 'https://stripe.com',
    mark: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305z" />
      </svg>
    ),
  },
  {
    name: 'Resend',
    href: 'https://resend.com',
    mark: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M2.023 0v24h5.553v-8.434h2.998L15.326 24h6.65l-5.372-9.258a7.652 7.652 0 0 0 3.316-3.016c.709-1.21 1.062-2.57 1.062-4.08 0-1.462-.353-2.767-1.062-3.91-.709-1.165-1.692-2.079-2.95-2.742C15.737.331 14.355 0 12.823 0Zm5.553 4.87h4.219c.731 0 1.349.125 1.851.376.526.252.925.618 1.2 1.098.274.457.412.994.412 1.611S15.132 9.12 14.88 9.6c-.229.48-.572.856-1.03 1.13-.434.252-.948.38-1.542.38H7.576Z" />
      </svg>
    ),
  },
  {
    name: 'Sentry',
    href: 'https://sentry.io',
    mark: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
        <path d="M13.91 2.505c-.873-1.448-2.972-1.448-3.844 0L6.904 7.92a15.478 15.478 0 0 1 8.53 12.811h-2.221A13.301 13.301 0 0 0 5.784 9.814l-2.926 5.06a7.65 7.65 0 0 1 4.435 5.848H2.194a.365.365 0 0 1-.298-.534l1.413-2.402a5.16 5.16 0 0 0-1.614-.913L.296 19.275a2.182 2.182 0 0 0 .812 2.999 2.24 2.24 0 0 0 1.086.288h6.983a9.322 9.322 0 0 0-3.845-8.318l1.11-1.922a11.47 11.47 0 0 1 4.95 10.24h5.915a17.242 17.242 0 0 0-7.885-15.28l2.244-3.845a.37.37 0 0 1 .504-.13c.255.14 9.75 16.708 9.928 16.9a.365.365 0 0 1-.327.543h-2.287c.029.612.029 1.223 0 1.831h2.297a2.206 2.206 0 0 0 1.922-3.31z" />
      </svg>
    ),
  },
  {
    name: 'Notion',
    href: 'https://notion.so',
    mark: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
      </svg>
    ),
  },
]

function LogoCell({ item, featured }: { item: Mark; featured?: boolean }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className={`group flex items-center justify-center gap-3 rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] text-[color:var(--muted)] transition duration-300 hover:border-[color:var(--green)]/35 hover:bg-[color:var(--panel-2)] hover:text-[color:var(--text)] ${
        featured ? 'h-[104px] px-6' : 'h-16 min-w-[168px] px-5'
      }`}
    >
      <span className="flex items-center justify-center opacity-80 transition group-hover:opacity-100">{item.mark}</span>
      <span className="font-['DM_Mono',monospace] text-[11px] tracking-[0.14em] uppercase">{item.name}</span>
    </a>
  )
}

export default function FeaturesLogoCloud() {
  const loop = [...logos, ...logos]

  return (
    <section className="overflow-hidden bg-[color:var(--bg)] py-20 font-['Manrope',sans-serif] lg:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.18em] text-[color:var(--green)] uppercase">
              Integrations
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
              Plays with the stack you already pay for.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[color:var(--muted)] lg:justify-self-end lg:text-right">
            No new religion. The marks below are the tools on the invoice — wired, not wallpapered.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {logos.map((item) => (
            <LogoCell key={item.name} item={item} featured />
          ))}
        </div>
      </div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[color:var(--bg)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[color:var(--bg)] to-transparent" />
        <motion.div
          className="flex w-max gap-3"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
        >
          {loop.map((item, i) => (
            <LogoCell key={`${item.name}-${i}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
