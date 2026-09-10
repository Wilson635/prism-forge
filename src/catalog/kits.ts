import type { Kit } from './types'

export const kits = [
  {
    name: 'The Launch Kit',
    sub: 'Everything for a remarkable first impression.',
    count: '48 blocks',
    tone: 'green',
    items: ['Hero systems', 'Social proof', 'Pricing flows'],
  },
  {
    name: 'Orbit Dashboard',
    sub: 'The operating system for your next product.',
    count: '72 blocks',
    tone: 'purple',
    items: ['Data visualizations', 'Command bars', 'Team spaces'],
  },
] satisfies Kit[]
